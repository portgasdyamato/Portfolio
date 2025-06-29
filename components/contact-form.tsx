"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from 'lucide-react'

export default function ContactForm() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="container mx-auto px-4 max-w-md">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-8"
        >
          Get In Touch
        </motion.h2>
        
        <motion.form
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <Input
              placeholder="Your Name"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Your Email"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Your Message"
              className="w-full min-h-[150px]"
            />
          </div>
          <Button className="w-full group">
            Send Message
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Send className="w-4 h-4" />
            </motion.span>
          </Button>
        </motion.form>
      </div>
    </motion.section>
  )
}
