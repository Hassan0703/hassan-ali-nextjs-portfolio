"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import { useMousePosition } from "@/hooks/use-mouse-position";

const NODES = [
  { cx: 120, cy: 130, r: 6, label: "ERP", connections: [1, 2, 3, 6] },
  { cx: 260, cy: 80, r: 5, label: "CRM", connections: [0, 3, 4] },
  { cx: 80, cy: 260, r: 5, label: "Inventory", connections: [0, 4, 5] },
  { cx: 200, cy: 180, r: 8, label: "Frappe", connections: [0, 1, 4, 5, 6] },
  { cx: 340, cy: 200, r: 5, label: "Finance", connections: [1, 2, 3, 5] },
  { cx: 160, cy: 330, r: 5, label: "HR", connections: [2, 3, 4] },
  { cx: 380, cy: 320, r: 4.5, label: "Analytics", connections: [0, 3] },
];

const NODE_COORDS = NODES.map((n) => ({ cx: n.cx, cy: n.cy }));

function NetworkSVG() {
  const cx = useMemo(() => NODES.reduce((s, n) => s + n.cx, 0) / NODES.length, []);
  const cy = useMemo(() => NODES.reduce((s, n) => s + n.cy, 0) / NODES.length, []);

  return (
    <svg viewBox="0 0 440 400" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="nodeGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8C77E" />
          <stop offset="100%" stopColor="#9C7A2E" />
        </linearGradient>
      </defs>

      {NODES.map((node, i) =>
        node.connections.map((j) => {
          if (j <= i) return null;
          return (
            <g key={`conn-${i}-${j}`}>
              <line
                x1={node.cx} y1={node.cy}
                x2={NODE_COORDS[j].cx} y2={NODE_COORDS[j].cy}
                stroke="url(#nodeGlow)" strokeWidth="0.4" strokeOpacity="0.15"
              />
              <motion.circle
                r="2" fill="#E8C77E" fillOpacity="0.5"
                animate={{ offsetDistance: ["0%", "100%"] }}
                transition={{ duration: 3 + (i + j) * 0.5, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                style={{ offsetPath: `path(M${node.cx},${node.cy} L${NODE_COORDS[j].cx},${NODE_COORDS[j].cy})`, offsetRotate: "0deg" }}
              />
            </g>
          );
        })
      )}

      <g stroke="#C9A44C" strokeWidth="0.15" strokeOpacity="0.04">
        {Array.from({ length: 18 }).map((_, i) => (<line key={`v${i}`} x1={i * 25} y1="0" x2={i * 25} y2="400" />))}
        {Array.from({ length: 16 }).map((_, i) => (<line key={`h${i}`} x1="0" y1={i * 25} x2="440" y2={i * 25} />))}
      </g>

      {NODES.map((node, i) => (
        <g key={`node-${i}`}>
          <motion.circle
            cx={node.cx} cy={node.cy} r={node.r}
            fill="rgba(201,164,76,0.08)" stroke="url(#nodeGlow)" strokeWidth="0.5" strokeOpacity="0.3"
            animate={{ r: [node.r - 0.3, node.r + 0.3, node.r - 0.3] }}
            transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
          />
          <text x={node.cx} y={node.cy + node.r + 12} textAnchor="middle" fill="#8A8272" fontSize="7" fontFamily="monospace" letterSpacing="1">{node.label}</text>
        </g>
      ))}

      <motion.circle
        cx={cx} cy={cy} r="60" fill="rgba(201,164,76,0.03)"
        animate={{ r: [55, 65, 55], opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { springX, springY, handleMouseMove } = useMousePosition(80, 12);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const onMouseMove = (e: React.MouseEvent) => {
    handleMouseMove(e);
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={onMouseMove}
      style={{ perspective: "1200px" }}
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0A0806]" />
        <div className="absolute inset-0 bg-aurora animate-aurora" />
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute inset-0 bg-mesh" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,164,76,0.05) 0%, transparent 70%)",
          x: springX, y: springY,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,164,76,0.03) 0%, transparent 70%)",
          x: useTransform(springX, (v) => -v * 0.3),
          y: useTransform(springY, (v) => -v * 0.3),
        }}
      />

      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="section-container relative z-10 w-full"
      >
        <motion.div
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 py-16 lg:py-24 items-center min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
        >
          {/* Left: Personal Branding */}
          <div className="flex-1 space-y-8 text-center lg:text-left z-20">
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
              className="flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 px-3.5 h-6 rounded-full border border-[rgba(232,199,126,0.15)] bg-gold/[0.03] text-[9px] font-mono tracking-[3px] text-gold/60">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                AVAILABLE FOR PROJECTS
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0, 1] }}
              className="space-y-2"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-extrabold tracking-[-0.04em] leading-[0.85]">
                <span className="text-[#F5F2EA] block">HASSAN</span>
                <span className="gold-gradient-text block">ALI</span>
              </h1>
              <div className="h-[2px] w-[80px] gold-gradient rounded-full mx-auto lg:mx-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
              className="space-y-2"
            >
              <p className="text-base sm:text-lg md:text-xl text-[#E7E2D6] font-light tracking-wide">
                Frappe / ERPNext Developer &amp; Enterprise Solutions Engineer
              </p>
              <p className="text-sm sm:text-base text-[#8A8272] max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Building enterprise-grade ERP systems that eliminate manual work,
                automate complex workflows, and scale with your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.25, 0.1, 0, 1] }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start pt-1"
            >
              <Link href="/projects">
                <motion.div
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="group relative inline-flex items-center gap-2.5 px-7 h-11 rounded-full gold-gradient text-[#1a1a1a] font-bold text-sm tracking-wide overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10">View My Work</span>
                  <svg className="relative z-10" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2.5 px-7 h-11 rounded-full border border-[rgba(232,199,126,0.2)] text-[#D9D3C4] hover:bg-gold/[0.04] hover:border-gold/40 hover:text-[#EDE7D8] transition-all duration-300 text-sm font-medium cursor-pointer"
                >
                  Let&apos;s Talk
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.1, 0, 1] }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {["Frappe", "ERPNext", "Python", "Automation"].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.06, duration: 0.4 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="px-3.5 py-1.5 rounded-full text-[11px] font-medium text-[#A09888] border border-[rgba(232,199,126,0.08)] bg-white/[0.015] hover:border-gold/25 hover:text-gold/80 transition-all duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right: Enterprise Intelligence Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
            className="flex-shrink-0 relative w-full max-w-[520px] mx-auto lg:mx-0 aspect-square"
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              style={{
                x: useTransform(springX, (v) => v * 0.2),
                y: useTransform(springY, (v) => v * 0.2),
              }}
            >
              {/* Layer 1: Background enterprise mesh */}
              <div className="absolute inset-0 scale-[1.35] opacity-60">
                <NetworkSVG />
              </div>

              {/* Layer 2: Ambient cursor-controlled glow */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at ${50 + (springX.get?.() || 0) * 0.05}% ${50 + (springY.get?.() || 0) * 0.05}%, rgba(232,199,126,0.04) 0%, transparent 60%)`,
                  x: useTransform(springX, (v) => v * 0.3),
                  y: useTransform(springY, (v) => v * 0.3),
                }}
              />

              {/* Layer 3: Enterprise workflow ring */}
              <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" aria-hidden="true">
                <defs>
                  <linearGradient id="coreRing" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E8C77E" />
                    <stop offset="50%" stopColor="#C9A44C" />
                    <stop offset="100%" stopColor="#9C7A2E" />
                  </linearGradient>
                  <filter id="ringBlur"><feGaussianBlur stdDeviation="0.5" /></filter>
                </defs>

                <motion.circle cx="200" cy="200" r="195" fill="none" stroke="url(#coreRing)" strokeWidth="0.3" strokeOpacity="0.06"
                  animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "center" }}
                />
                <circle cx="200" cy="200" r="180" fill="none" stroke="url(#coreRing)" strokeWidth="0.3" strokeOpacity="0.05" />

                <motion.g style={{ transformOrigin: "200px 200px" }}
                  animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                >
                  <circle cx="200" cy="12" r="2" fill="url(#coreRing)" fillOpacity="0.2" />
                  <circle cx="200" cy="12" r="5" fill="url(#coreRing)" fillOpacity="0.06" />
                  <circle cx="200" cy="388" r="1.5" fill="url(#coreRing)" fillOpacity="0.15" />
                </motion.g>

                <motion.g style={{ transformOrigin: "200px 200px" }}
                  animate={{ rotate: -360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                >
                  <circle cx="200" cy="25" r="1.5" fill="url(#coreRing)" fillOpacity="0.15" />
                </motion.g>

                <motion.circle cx="200" cy="200" r="165"
                  fill="none" stroke="url(#coreRing)" strokeWidth="0.5" strokeOpacity="0.12"
                  animate={{ strokeOpacity: [0.12, 0.25, 0.12] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle cx="200" cy="200" r="155"
                  fill="none" stroke="url(#coreRing)" strokeWidth="0.8" strokeOpacity="0.08"
                  animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "center" }}
                />
                <circle cx="200" cy="200" r="148" fill="none" stroke="url(#coreRing)" strokeWidth="0.4" strokeOpacity="0.35" />
                <circle cx="200" cy="200" r="146" fill="rgba(201,164,76,0.015)" />

                {/* Gear-tooth ring */}
                <motion.circle cx="200" cy="200" r="142" fill="none" stroke="url(#coreRing)" strokeWidth="1.2" strokeOpacity="0.15"
                  strokeDasharray="3 6"
                  animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "center" }}
                />
                <motion.circle cx="200" cy="200" r="134" fill="none" stroke="url(#coreRing)" strokeWidth="0.6" strokeOpacity="0.08"
                  strokeDasharray="2 5"
                  animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "center" }}
                />
              </svg>

              {/* Layer 4: Technology orbit chips with icons */}
              {[
                { label: "Frappe", icon: "F", angle: 0, dist: 175, speed: 5 },
                { label: "ERPNext", icon: "E", angle: 45, dist: 168, speed: 4.5 },
                { label: "Python", icon: "Py", angle: 90, dist: 172, speed: 5.5 },
                { label: "Docker", icon: "D", angle: 135, dist: 165, speed: 4 },
                { label: "MariaDB", icon: "M", angle: 180, dist: 170, speed: 5.2 },
                { label: "Redis", icon: "R", angle: 225, dist: 166, speed: 4.8 },
                { label: "Linux", icon: "L", angle: 270, dist: 173, speed: 5.3 },
                { label: "Next.js", icon: "N", angle: 315, dist: 169, speed: 4.3 },
              ].map((chip, i) => {
                const rad = (chip.angle * Math.PI) / 180;
                const bx = Math.cos(rad) * chip.dist;
                const by = Math.sin(rad) * chip.dist;
                return (
                  <motion.div
                    key={chip.label}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      x: useTransform(springX, (v) => bx + v * 0.12),
                      y: useTransform(springY, (v) => by + v * 0.12),
                    }}
                    animate={{
                      x: [bx, bx + Math.sin(i * 1.7) * 2, bx],
                      y: [by, by + Math.cos(i * 1.7) * 2, by],
                    }}
                    transition={{
                      duration: chip.speed,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gold/12 bg-[#0A0806]/80 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                      <span className="text-[8px] font-bold text-gold/60 w-3.5 h-3.5 flex items-center justify-center rounded bg-gold/[0.06] flex-shrink-0">
                        {chip.icon}
                      </span>
                      <span className="text-[9px] font-mono tracking-[1px] font-medium text-[#A09888]">
                        {chip.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Layer 5: Animated network nodes (inner ring) */}
              <motion.div className="absolute inset-0 pointer-events-none"
                style={{ x: useTransform(springX, (v) => v * 0.1), y: useTransform(springY, (v) => v * 0.1) }}>
                <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
                  {[
                    { x: 100, y: 100 }, { x: 300, y: 80 }, { x: 320, y: 280 },
                    { x: 90, y: 300 }, { x: 200, y: 50 }, { x: 200, y: 350 },
                  ].map((n, i) => (
                    <g key={i}>
                      <motion.circle cx={n.x} cy={n.y} r="1.5" fill="#E8C77E" fillOpacity="0.3"
                        animate={{ r: [1.5, 2.5, 1.5], fillOpacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <circle cx={n.x} cy={n.y} r="4" fill="none" stroke="#C9A44C" strokeWidth="0.3" strokeOpacity="0.1" />
                    </g>
                  ))}
                  <motion.line x1="100" y1="100" x2="200" y2="50" stroke="#C9A44C" strokeWidth="0.3" strokeOpacity="0.08" />
                  <motion.line x1="200" y1="50" x2="300" y2="80" stroke="#C9A44C" strokeWidth="0.3" strokeOpacity="0.08" />
                  <motion.line x1="300" y1="80" x2="320" y2="280" stroke="#C9A44C" strokeWidth="0.3" strokeOpacity="0.06" />
                  <motion.line x1="320" y1="280" x2="200" y2="350" stroke="#C9A44C" strokeWidth="0.3" strokeOpacity="0.06" />
                  <motion.line x1="200" y1="350" x2="90" y2="300" stroke="#C9A44C" strokeWidth="0.3" strokeOpacity="0.06" />
                  <motion.line x1="90" y1="300" x2="100" y2="100" stroke="#C9A44C" strokeWidth="0.3" strokeOpacity="0.06" />
                </svg>
              </motion.div>

              {/* Layer 6: Premium glass frame + portrait with custom octagonal mask */}
              <motion.div
                className="absolute flex items-center justify-center"
                style={{
                  x: springX,
                  y: springY,
                }}
              >
                {/* Outer glow */}
                <div className="absolute w-[290px] h-[290px] rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(232,199,126,0.06) 0%, transparent 70%)",
                  }}
                />

                {/* Rim light */}
                <div className="absolute w-[282px] h-[282px] rounded-full pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, rgba(232,199,126,0.08) 0%, transparent 50%)`,
                    mixBlendMode: "screen",
                  }}
                />

                {/* Glass frame */}
                <div className="w-[280px] h-[280px] rounded-full overflow-hidden relative"
                  style={{
                    border: "1px solid rgba(232,199,126,0.12)",
                    boxShadow: "0 0 40px rgba(201,164,76,0.06), inset 0 0 40px rgba(232,199,126,0.02)",
                    background: "rgba(10,8,6,0.3)",
                    backdropFilter: "blur(2px)",
                    WebkitBackdropFilter: "blur(2px)",
                  }}
                >
                  {/* Portrait with octagonal clip */}
                  <div className="w-full h-full"
                    style={{
                      clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  >
                    <div className="w-full h-full bg-[#2a2218]">
                      <img
                        src="/Profile-pic.png"
                        alt="Hassan Ali — Frappe / ERPNext Architect"
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>
                  </div>

                  {/* Glass reflection overlay */}
                  <div className="absolute inset-0 pointer-events-none z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(232,199,126,0.04) 0%, transparent 40%, transparent 60%, rgba(232,199,126,0.02) 100%)",
                    }}
                  />

                  {/* Octagonal frame border */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 280 280" aria-hidden="true">
                    <polygon points="84,0 196,0 280,84 280,196 196,280 84,280 0,196 0,84"
                      fill="none" stroke="url(#coreRing)" strokeWidth="0.8" strokeOpacity="0.25"
                    />
                    <polygon points="90,5 190,5 275,90 275,190 190,275 90,275 5,190 5,90"
                      fill="none" stroke="url(#coreRing)" strokeWidth="0.3" strokeOpacity="0.1"
                    />
                    {[84, 196, 280, 280, 196, 84, 0, 0].map((x, i) => {
                      const pts = [
                        [84, 0], [196, 0], [280, 84], [280, 196],
                        [196, 280], [84, 280], [0, 196], [0, 84],
                      ];
                      return (
                        <motion.circle key={i} cx={pts[i][0]} cy={pts[i][1]} r="2" fill="#C9A44C" fillOpacity="0.2"
                          animate={{ r: [2, 3.5, 2], fillOpacity: [0.2, 0.4, 0.2] }}
                          transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                        />
                      );
                    })}
                  </svg>
                </div>
              </motion.div>

              {/* Layer 7: Enterprise status indicators */}
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { label: "ERP ACTIVE", x: "15%", y: "18%", pulse: false },
                  { label: "API CONNECTED", x: "78%", y: "12%", pulse: false },
                  { label: "AUTOMATION", x: "82%", y: "50%", pulse: true },
                  { label: "WORKFLOWS", x: "10%", y: "55%", pulse: false },
                  { label: "DATA SYNC", x: "75%", y: "82%", pulse: true },
                  { label: "JOBS", x: "18%", y: "80%", pulse: false },
                ].map((s) => (
                  <motion.div
                    key={s.label}
                    className="absolute flex items-center gap-1.5"
                    style={{ left: s.x, top: s.y }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <span className={`w-1 h-1 rounded-full ${s.pulse ? 'bg-gold' : 'bg-gold/50'}`}
                      style={s.pulse ? { boxShadow: "0 0 4px rgba(232,199,126,0.4)" } : {}}
                    />
                    {s.pulse && (
                      <span className="absolute w-1 h-1 rounded-full bg-gold/30 animate-ping" style={{ animationDuration: "2s" }} />
                    )}
                    <span className="text-[7px] font-mono tracking-[2px] text-gold/40">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-14 pt-6 border-t border-[rgba(232,199,126,0.04)] mt-6 pb-8"
        >
          {[
            { value: "5+", label: "Years Building" },
            { value: "50+", label: "Projects Shipped" },
            { value: "30+", label: "Clients Served" },
            { value: "100%", label: "Commitment" },
          ].map((stat) => (
            <motion.div key={stat.label} whileHover={{ y: -2, scale: 1.02 }} className="text-center cursor-default">
              <p className="text-xl sm:text-2xl font-display font-extrabold gold-gradient-text">{stat.value}</p>
              <p className="text-[10px] font-mono tracking-[2px] text-[#5C5548] mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
