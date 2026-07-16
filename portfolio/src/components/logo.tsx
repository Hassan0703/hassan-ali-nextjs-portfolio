"use client";

import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
  animated?: boolean;
  showText?: boolean;
}

export function Logo({ size = 36, animated = false, showText = true }: LogoProps) {
  const logo = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="32" height="32" rx="8" fill="url(#logoGrad)" />
      <g stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 12h4v12h-4z" fill="#1A1A1A" opacity="0.3" />
        <path d="M16 10h4v16h-4z" fill="#1A1A1A" opacity="0.5" />
        <path d="M22 8h4v20h-4z" fill="#1A1A1A" opacity="0.7" />
        <circle cx="12" cy="18" r="1.5" fill="#1A1A1A" />
        <circle cx="18" cy="18" r="1.5" fill="#1A1A1A" />
        <circle cx="24" cy="18" r="1.5" fill="#1A1A1A" />
      </g>
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36">
          <stop offset="0%" stopColor="#E8C77E" />
          <stop offset="50%" stopColor="#C9A44C" />
          <stop offset="100%" stopColor="#9C7A2E" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (!animated) {
    return (
      <div className="flex items-center gap-2.5">
        {logo}
        {showText && (
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-black tracking-[2px] text-[#F5F2EA]">
              HASSAN
            </span>
            <span className="text-[10px] font-mono tracking-[3px] gold-gradient-text">
              ARCHITECT
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <motion.div
      className="flex items-center gap-2.5"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {logo}
      </motion.div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <motion.span
            className="text-sm font-black tracking-[2px] text-[#F5F2EA]"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            HASSAN
          </motion.span>
          <motion.span
            className="text-[10px] font-mono tracking-[3px] gold-gradient-text"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            ARCHITECT
          </motion.span>
        </div>
      )}
    </motion.div>
  );
}
