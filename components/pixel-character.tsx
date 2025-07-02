"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { MessageCircle, Heart, Star, Sparkles } from "lucide-react"
import Image from "next/image"

const PixelCharacter = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [showMessage, setShowMessage] = useState(false)
  const [expression, setExpression] = useState("normal") // normal, happy, excited, winking
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [characterPosition, setCharacterPosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const [isFollowing, setIsFollowing] = useState(true) // Controls whether character follows mouse

  const messages = [
    "Hey there! 🍰 I'm Cinnamon, your sweet guide!",
    "🎨 Let's explore these amazing projects together!",
    "💼 Check out those sweet certificates!",
    "📧 Don't be shy, send a message!",
    "⭐ You're as sweet as sugar! Thanks for visiting!",
    "🚀 Ready to bake up something awesome together?",
  ]

  // Track mouse position with proper throttling - only when following
  useEffect(() => {
    if (!isFollowing) return // Don't track mouse if not following
    
    let throttleTimer: NodeJS.Timeout | null = null
    let idleTimer: NodeJS.Timeout | null = null
    
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse position updates to ~30fps for better performance
      if (throttleTimer) return
      
      throttleTimer = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
        setIsMoving(true)
        
        // Clear previous idle timer
        if (idleTimer) clearTimeout(idleTimer)
        
        // Set idle state after 300ms of no movement
        idleTimer = setTimeout(() => {
          setIsMoving(false)
        }, 300)
        
        throttleTimer = null
      }, 33) // 30fps
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (throttleTimer) clearTimeout(throttleTimer)
      if (idleTimer) clearTimeout(idleTimer)
    }
  }, [isFollowing])

  // Update character position with optimized animation using requestAnimationFrame - only when following
  useEffect(() => {
    if (!isFollowing) return // Don't update position if not following
    
    let animationFrame: number
    let lastTime = 0
    
    const updateCharacterPosition = (currentTime: number) => {
      // Limit updates to 60fps max
      if (currentTime - lastTime >= 16) {
        const offset = 80
        const targetX = mousePosition.x + offset
        const targetY = mousePosition.y + offset
        
        // Faster interpolation for smoother following
        setCharacterPosition(prev => {
          const newX = prev.x + (targetX - prev.x) * 0.2 // Increased for faster response
          const newY = prev.y + (targetY - prev.y) * 0.2
          
          return { x: newX, y: newY }
        })
        
        lastTime = currentTime
      }
      
      animationFrame = requestAnimationFrame(updateCharacterPosition)
    }

    animationFrame = requestAnimationFrame(updateCharacterPosition)
    return () => cancelAnimationFrame(animationFrame)
  }, [mousePosition, isFollowing])

  // Initialize character position
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCharacterPosition({ x: window.innerWidth - 100, y: window.innerHeight - 100 })
    }
  }, [])

  // Get the appropriate GIF based on expression and movement
  const getCharacterImage = () => {
    // If user is moving (and following), use hah.gif
    if (isMoving && isFollowing) {
      return "/hah.gif"
    }
    
    // If user is interacting or showing message, use heh.gif
    if (isInteracting || showMessage) {
      return "/heh.gif"
    }
    
    // If idle/not moving, use hehe.gif
    return "/hehe.gif"
  }

  // Show messages periodically - DISABLED
  // useEffect(() => {
  //   const messageInterval = setInterval(() => {
  //     setExpression("excited") // Get excited when showing message
  //     setShowMessage(true)
  //     setTimeout(() => {
  //       setShowMessage(false)
  //       setExpression("normal") // Back to normal
  //       setCurrentMessage((prev) => (prev + 1) % messages.length)
  //     }, 3000)
  //   }, 8000)

  //   return () => clearInterval(messageInterval)
  // }, [messages.length])

  // Handle double-click detection on the entire screen
  useEffect(() => {
    let clickTimer: NodeJS.Timeout | null = null
    let clickCount = 0
    
    const handleDoubleClick = (e: MouseEvent) => {
      clickCount++
      
      if (clickCount === 1) {
        clickTimer = setTimeout(() => {
          clickCount = 0 // Reset if no second click within 300ms
        }, 300)
      } else if (clickCount === 2) {
        // Double click detected - toggle following mode
        if (clickTimer) clearTimeout(clickTimer)
        clickCount = 0
        
        setIsFollowing(prev => !prev)
        setIsMoving(false) // Reset moving state when toggling
        setExpression("winking") // Show winking expression when toggled
        
        setTimeout(() => {
          setExpression("normal")
        }, 1500)
      }
    }

    document.addEventListener('click', handleDoubleClick)
    return () => {
      document.removeEventListener('click', handleDoubleClick)
      if (clickTimer) clearTimeout(clickTimer)
    }
  }, [])
  // Optimized random expression changes - less frequent for better performance
  useEffect(() => {
    const expressionInterval = setInterval(() => {
      // Only change expressions when truly idle (not moving, not interacting, not showing message)
      if (!showMessage && !isMoving && !isInteracting) {
        const expressions = ["normal", "happy", "winking"]
        const randomExpression = expressions[Math.floor(Math.random() * expressions.length)]
        setExpression(randomExpression)
        
        // Return to normal after a short time
        setTimeout(() => {
          if (!showMessage && !isMoving && !isInteracting) {
            setExpression("normal")
          }
        }, 2500)
      }
    }, 30000) // Increased to 30 seconds for much better performance

    return () => clearInterval(expressionInterval)
  }, [showMessage, isMoving, isInteracting])

  // Character animations
  const characterVariants = {
    idle: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    },
    bounce: {
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <div 
      className="fixed z-50 pointer-events-none will-change-transform"
      style={{
        left: `${Math.round(characterPosition.x - 32)}px`,
        top: `${Math.round(characterPosition.y - 32)}px`,
        transform: 'translate3d(0, 0, 0)', // Force hardware acceleration
        backfaceVisibility: 'hidden', // Performance optimization
      }}
    >
      <div className="pointer-events-auto">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="relative"
            >
            {/* Message Bubble */}
            <AnimatePresence>
              {showMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  className="absolute bottom-full right-0 mb-4 max-w-xs"
                >
                  <div className="bg-white px-4 py-3 rounded-2xl shadow-lg border-2 border-pink-200 relative">
                    <p className="text-sm text-gray-800 font-medium">
                      {messages[currentMessage]}
                    </p>
                    {/* Speech bubble tail */}
                    <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-pink-200"></div>
                    <div className="absolute top-full right-6 w-0 h-0 border-l-7 border-r-7 border-t-7 border-l-transparent border-r-transparent border-t-white transform translate-y-[-2px]"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Character Container */}
            <motion.div
              variants={characterVariants}
              animate="idle"
              whileHover="bounce"
              className="relative cursor-pointer"
              onClick={(e) => {
                e.stopPropagation() // Prevent triggering the document click handler
                
                // Single click - show message (original behavior)
                setIsInteracting(true)
                setExpression("happy")
                setShowMessage(!showMessage)
                
                if (!showMessage) {
                  setTimeout(() => {
                    setShowMessage(false)
                    setExpression("normal")
                    setIsInteracting(false)
                    setCurrentMessage((prev) => (prev + 1) % messages.length)
                  }, 3000)
                } else {
                  setTimeout(() => {
                    setExpression("normal")
                    setIsInteracting(false)
                  }, 500)
                }
              }}
              onMouseEnter={() => {
                setIsInteracting(true)
                if (!showMessage) setExpression("excited")
              }}
              onMouseLeave={() => {
                setIsInteracting(false)
                if (!showMessage) setExpression("normal")
              }}
            >
              {/* Cinnamon Roll Character from GIF */}
              <div className="w-16 h-16 relative">
                <motion.div
                  key={expression} // This will trigger re-render when expression changes
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={getCharacterImage()}
                    alt="Cinnamon Roll Character"
                    width={64}
                    height={64}
                    className="w-full h-auto object-contain rounded-2xl"
                    unoptimized={true} // Important for GIFs to maintain animation
                    style={{ width: "auto", height: "auto" }}
                  />
                </motion.div>
                
                {/* Expression overlay effects */}
                {expression === "happy" && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute -top-2 -right-2 text-yellow-400"
                  >
                    <div className="text-lg"></div>
                  </motion.div>
                )}
                
                {expression === "excited" && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.2, 1], opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.6, repeat: 2 }}
                    className="absolute -top-3 -right-3 text-orange-400"
                  >
                    <div className="text-lg">✨</div>
                  </motion.div>
                )}
                
                {expression === "winking" && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute -top-2 -left-2 text-pink-400"
                  >
                    <div className="text-lg"></div>
                  </motion.div>
                )}
                
                {/* Optional shadow/glow effect with expression-based color */}
                <div 
                  className={`absolute inset-0 rounded-2xl -z-10 blur-sm transition-colors duration-300 ${
                    expression === "happy" ? "bg-gradient-to-br from-yellow-200/30 to-orange-200/30" :
                    expression === "excited" ? "bg-gradient-to-br from-orange-200/40 to-red-200/40" :
                    expression === "winking" ? "bg-gradient-to-br from-pink-200/30 to-purple-200/30" :
                    !isFollowing ? "bg-gradient-to-br from-blue-200/40 to-purple-200/40" : // Blue glow when stationary
                    "bg-gradient-to-br from-orange-200/20 to-amber-200/20"
                  }`}
                ></div>
                
                {/* Following mode indicator */}
                {!isFollowing && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border border-white"
                    title="Stationary mode - Double click to follow again"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-full h-full bg-blue-400 rounded-full"
                    />
                  </motion.div>
                )}
              </div>

              {/* Floating particles - react to expression */}
              <motion.div
                animate={{
                  y: [-5, -15, -5],
                  x: [-2, 2, -2],
                  opacity: [0.7, 1, 0.7],
                  scale: expression === "excited" ? [1, 1.3, 1] : [1, 1, 1]
                }}
                transition={{
                  duration: expression === "excited" ? 1.5 : 3,
                  repeat: Infinity,
                  ease: "easeInOut" as const
                }}
                className={`absolute -top-2 -right-2 ${
                  expression === "excited" ? "text-yellow-400" : "text-orange-400"
                }`}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>

              <motion.div
                animate={{
                  y: [-3, -8, -3],
                  x: [2, -2, 2],
                  opacity: [0.5, 1, 0.5],
                  scale: expression === "happy" ? [1, 1.2, 1] : [1, 1, 1]
                }}
                transition={{
                  duration: expression === "happy" ? 2 : 2.5,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                  delay: 1
                }}
                className={`absolute -top-1 -left-2 ${
                  expression === "happy" ? "text-pink-400" : "text-amber-400"
                }`}
              >
                <Heart className="w-3 h-3" />
              </motion.div>

              {/* Enhanced particles for excited state */}
              {expression === "excited" && (
                <>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      y: [-5, -20, -35],
                      x: [0, 5, 10]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut" as const,
                      repeatDelay: 0.5
                    }}
                    className="absolute -top-1 left-1 text-yellow-300"
                  >
                    <Star className="w-3 h-3" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      y: [-3, -15, -25],
                      x: [0, -3, -8]
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeOut" as const,
                      repeatDelay: 0.8,
                      delay: 0.3
                    }}
                    className="absolute -top-2 right-1 text-orange-300"
                  >
                    <Sparkles className="w-2 h-2" />
                  </motion.div>
                </>
              )}

              {/* Cinnamon scent particles */}
              <motion.div
                animate={{
                  y: [-8, -18, -8],
                  x: [0, 3, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                  delay: 0.5
                }}
                className="absolute -top-3 left-1/2 transform -translate-x-1/2"
              >
                <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
              </motion.div>

              <motion.div
                animate={{
                  y: [-6, -14, -6],
                  x: [-1, 2, -1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                  delay: 2
                }}
                className="absolute -top-2 left-2"
              >
                <div className="w-0.5 h-0.5 bg-orange-400 rounded-full"></div>
              </motion.div>
            </motion.div>

            {/* Toggle visibility button */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation()
                setIsVisible(false)
              }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-400 rounded-full text-white text-xs flex items-center justify-center hover:bg-red-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>            </motion.div>
          )}
        </AnimatePresence>

        {/* Restore button when hidden */}
        <AnimatePresence>
          {!isVisible && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => setIsVisible(true)}
              className="w-12 h-12 bg-amber-400 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-amber-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default PixelCharacter
