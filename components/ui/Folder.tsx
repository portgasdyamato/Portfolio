"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Folder.css';

const darkenColor = (hex: string, percent: number) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

interface FolderProps {
  color?: string;
  size?: number;
  items?: React.ReactNode[];
  className?: string;
  label?: string;
  onClick?: () => void;
  active?: boolean;
}

const Folder: React.FC<FolderProps> = ({ 
  color = '#5227FF', 
  size = 1, 
  items = [], 
  className = '', 
  label,
  onClick,
  active
}) => {
  const [hovered, setHovered] = useState(false);
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor('#ffffff', 0.1);
  const paper2 = darkenColor('#ffffff', 0.05);
  const paper3 = '#ffffff';

  const folderStyle = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  } as React.CSSProperties;

  return (
    <div 
      className={`flex flex-col items-center justify-center group cursor-pointer relative ${className}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ minWidth: 65, height: 60 }}
    >
      <div style={{ transform: `scale(${size})`, transformOrigin: 'center' }}>
        <div className={`folder ${active ? 'open' : ''}`} style={folderStyle}>
          <div className="folder__back">
            {papers.map((item, i) => (
              <div
                key={i}
                className={`paper paper-${i + 1} flex items-center justify-center pointer-events-none`}
              >
                {item}
              </div>
            ))}
            <div className="folder__front"></div>
            <div className="folder__front right"></div>
          </div>
        </div>
      </div>

      {/* ── Floating Label BELOW the container ── */}
      <AnimatePresence>
        {hovered && label && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 25 }} // Push it outside the main bar
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 -translate-x-1/2 z-[110] px-3 py-1 bg-white/60 backdrop-blur-md rounded-full border border-black/5 shadow-sm whitespace-nowrap"
          >
            <span className={`text-[9px] font-black uppercase tracking-[0.25em] ${active ? 'text-[#F59E9E]' : 'text-black/40'}`}>
              {label}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {active && (
        <motion.div 
          layoutId="nav-glow"
          className="absolute bottom-0 w-1 h-1 rounded-full bg-[#F59E9E] shadow-[0_0_8px_#F59E9E]"
        />
      )}
    </div>
  );
};

export default Folder;
