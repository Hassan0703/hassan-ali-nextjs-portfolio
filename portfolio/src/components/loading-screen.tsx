"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MAX_SAFETY_MS = 12000;
const SUBTITLES = ["FRAPPE", "ERPNEXT", "AUTOMATION", "ENTERPRISE SOLUTIONS"];

function useStable(fn: () => void) {
  const ref = useRef(fn);
  ref.current = fn;
  return useCallback(() => ref.current?.(), []);
}

function LogoBuild({ onDone }: { onDone: () => void }) {
  const [barsVisible, setBarsVisible] = useState(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  const handleRectDone = useCallback(() => {
    setTimeout(() => setBarsVisible(true), 50);
  }, []);

  useEffect(() => {
    if (!barsVisible) return;
    const t = setTimeout(() => onDoneRef.current?.(), 250);
    return () => clearTimeout(t);
  }, [barsVisible]);

  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="absolute w-20 h-20 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,199,126,0.06) 0%, transparent 70%)",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <svg width="56" height="56" viewBox="0 0 36 36" fill="none" className="relative">
        <defs>
          <linearGradient id="logoBuildGrad" x1="0" y1="0" x2="36" y2="36">
            <stop offset="0%" stopColor="#E8C77E" />
            <stop offset="100%" stopColor="#C9A44C" />
          </linearGradient>
          <filter id="logoBuildGlow">
            <feGaussianBlur stdDeviation="1" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <motion.rect
          x="2" y="2" width="32" height="32" rx="6"
          fill="none"
          stroke="url(#logoBuildGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          filter="url(#logoBuildGlow)"
          initial={{ strokeDasharray: 120, strokeDashoffset: 120 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
          onAnimationComplete={handleRectDone}
        />

        <motion.g
          stroke="#1A1816" strokeWidth="1.6" strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: barsVisible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.rect x="9.5" y="12" width="4" height="12" rx="1" fill="#E8C77E" opacity="0.3"
            initial={{ scaleY: 0 }} animate={barsVisible ? { scaleY: 1 } : {}}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0, 1] }}
            style={{ transformOrigin: "11.5px 24px" }}
          />
          <motion.rect x="16" y="10" width="4" height="16" rx="1" fill="#C9A44C" opacity="0.5"
            initial={{ scaleY: 0 }} animate={barsVisible ? { scaleY: 1 } : {}}
            transition={{ duration: 0.25, delay: 0.05, ease: [0.25, 0.1, 0, 1] }}
            style={{ transformOrigin: "18px 26px" }}
          />
          <motion.rect x="22.5" y="8" width="4" height="20" rx="1" fill="#E8C77E" opacity="0.7"
            initial={{ scaleY: 0 }} animate={barsVisible ? { scaleY: 1 } : {}}
            transition={{ duration: 0.25, delay: 0.1, ease: [0.25, 0.1, 0, 1] }}
            style={{ transformOrigin: "24.5px 28px" }}
          />
        </motion.g>
      </svg>
    </div>
  );
}

function LightSweep({ onDone }: { onDone: () => void }) {
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    const t = setTimeout(() => onDoneRef.current?.(), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(232,199,126,0.07) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["200% 0%", "-200% 0%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

function TitleReveal({ onDone }: { onDone: () => void }) {
  const [maskPos, setMaskPos] = useState(100);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    if (maskPos <= 0) {
      const t = setTimeout(() => onDoneRef.current?.(), 600);
      return () => clearTimeout(t);
    }
  }, [maskPos]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center"
    >
      <h1
        className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.06em] leading-none text-center select-none"
        style={{
          fontFamily: "var(--font-sora)",
          fontWeight: 600,
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 48%, #000 52%, transparent 100%)",
          WebkitMaskSize: "200% 100%",
          WebkitMaskPosition: `${maskPos}% 0%`,
          maskImage: "linear-gradient(90deg, transparent 0%, #000 48%, #000 52%, transparent 100%)",
          maskSize: "200% 100%",
          maskPosition: `${maskPos}% 0%`,
          transition: "mask-position 0.7s cubic-bezier(0.25, 0.1, 0, 1), -webkit-mask-position 0.7s cubic-bezier(0.25, 0.1, 0, 1)",
        }}
        ref={(el) => {
          if (el) requestAnimationFrame(() => setMaskPos(0));
        }}
      >
        <span
          className="gold-gradient-text"
          style={{ textShadow: "0 0 40px rgba(232,199,126,0.08), 0 0 80px rgba(232,199,126,0.04)" }}
        >
          HASSAN ALI
        </span>
      </h1>
      <motion.div
        className="h-[1.5px] bg-gold/30 mt-5 rounded-full"
        initial={{ width: "0px", opacity: 0 }}
        animate={{ width: "80px", opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0, 1] }}
      />
    </motion.div>
  );
}

function SubtitleStage({ onDone }: { onDone: () => void }) {
  const [index, setIndex] = useState(0);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    if (index < SUBTITLES.length - 1) {
      const t = setTimeout(() => setIndex((i) => i + 1), 650);
      return () => clearTimeout(t);
    }
    if (index === SUBTITLES.length - 1) {
      const t = setTimeout(() => setIndex((i) => i + 1), 800);
      return () => clearTimeout(t);
    }
    if (index >= SUBTITLES.length) {
      const t = setTimeout(() => onDoneRef.current?.(), 150);
      return () => clearTimeout(t);
    }
  }, [index]);

  const skip = index >= SUBTITLES.length;

  return (
    <div className="flex flex-col items-center min-h-[56px] justify-center">
      <AnimatePresence mode="wait">
        {!skip && (
          <motion.p
            key={index}
            className="text-base sm:text-lg tracking-[0.35em] text-[#C4BEAE] text-center select-none"
            style={{ fontFamily: "var(--font-sora)", fontWeight: 500 }}
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0, 1] }}
          >
            {SUBTITLES[index]}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function EnterpriseNetwork() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <linearGradient id="netGrad" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#E8C77E" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#C9A44C" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {[
          { x1: 20, y1: 30, x2: 50, y2: 15 },
          { x1: 50, y1: 15, x2: 80, y2: 30 },
          { x1: 20, y1: 30, x2: 20, y2: 65 },
          { x1: 80, y1: 30, x2: 80, y2: 65 },
          { x1: 20, y1: 65, x2: 50, y2: 80 },
          { x1: 50, y1: 80, x2: 80, y2: 65 },
          { x1: 50, y1: 15, x2: 50, y2: 80 },
          { x1: 20, y1: 65, x2: 80, y2: 65 },
          { x1: 20, y1: 30, x2: 80, y2: 30 },
        ].map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
            stroke="url(#netGrad)"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
          />
        ))}

        {[
          { cx: 20, cy: 30 }, { cx: 50, cy: 15 },
          { cx: 80, cy: 30 }, { cx: 20, cy: 65 },
          { cx: 50, cy: 80 }, { cx: 80, cy: 65 },
          { cx: 50, cy: 50 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx} cy={node.cy} r="0.8"
            fill="#E8C77E"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0.2, 0.5] }}
            transition={{ duration: 3, delay: 1 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

function TransitionStage({ onDone }: { onDone: () => void }) {
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    const t = setTimeout(() => onDoneRef.current?.(), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-32 h-[1.5px] rounded-full bg-white/[0.04] overflow-hidden">
        <motion.div
          className="h-full gold-gradient rounded-full"
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
        />
      </div>
    </motion.div>
  );
}

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const [stage, setStage] = useState(0);
  const [skipVisible, setSkipVisible] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => { mountedRef.current = true; return () => { mountedRef.current = false; }; }, []);

  const advance = useCallback(() => setStage((s) => Math.min(s + 1, 6)), []);

  const skip = useCallback(() => {
    if (!mountedRef.current) return;
    onCompleteRef.current?.();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => { if (mountedRef.current) onCompleteRef.current?.(); }, MAX_SAFETY_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setSkipVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (stage === 0) { const t = setTimeout(advance, 350); return () => clearTimeout(t); }
    if (stage === 6) { onCompleteRef.current?.(); }
  }, [stage, advance]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0806] overflow-hidden select-none"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      {/* Background layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.4]" />
      <div className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A44C' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(232,199,126,0.04) 0%, transparent 70%)",
        }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Enterprise network visible from stage 5 for seamless transition */}
      {stage >= 5 && <EnterpriseNetwork />}

      {/* Stage 0 — pure atmosphere */}
      {stage === 0 && (
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      )}

      {/* Stage 1 — logo builds */}
      {stage === 1 && (
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <LogoBuild onDone={advance} />
        </motion.div>
      )}

      {/* Stage 2 — light sweep */}
      {stage === 2 && (
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <LightSweep onDone={advance} />
        </motion.div>
      )}

      {/* Stage 3 — title */}
      {stage === 3 && (
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <TitleReveal onDone={advance} />
        </motion.div>
      )}

      {/* Stage 4 — subtitles */}
      {stage === 4 && (
        <motion.div
          className="relative z-10 flex flex-col items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <SubtitleStage onDone={advance} />
        </motion.div>
      )}

      {/* Stage 5 — foreground fades out, enterprise network stays */}
      {stage === 5 && <TransitionStage onDone={advance} />}

      {/* Stage 6 — nothing new, just background + network while exit animation plays */}

      {/* Skip button */}
      <AnimatePresence>
        {skipVisible && stage < 6 && (
          <motion.button
            onClick={skip}
            className="fixed bottom-8 right-8 z-50 text-[9px] font-mono tracking-[3px] text-[#4A453C] hover:text-gold/40 transition-colors focus:outline-none"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            SKIP
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
