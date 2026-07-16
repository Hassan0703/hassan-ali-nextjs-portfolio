"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <main id="main-content" className="relative min-h-screen flex flex-col">
      <Navigation />

      <section className="flex-1 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0806]" />
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-[120px] sm:text-[180px] md:text-[220px] font-black leading-none gold-gradient-text inline-block">
              404
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-[#EDE7D8]">
              Page Not Found
            </h1>
            <p className="text-sm text-[#8A8272] max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
              Let&apos;s get you back on track.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 h-12 rounded-full gold-gradient text-[#1a1a1a] font-bold text-sm tracking-wide"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Go Home
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 h-12 rounded-full border border-[rgba(232,199,126,0.3)] text-[#EDE7D8] hover:bg-gold/5 hover:border-gold/50 transition-all duration-300 text-sm font-medium"
              >
                Contact Me
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <svg width="80" height="80" viewBox="0 0 36 36" fill="none">
                <rect x="2" y="2" width="32" height="32" rx="8" fill="url(#n404)" />
                <g stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 12h4v12h-4z" fill="#1A1A1A" opacity="0.3" />
                  <path d="M16 10h4v16h-4z" fill="#1A1A1A" opacity="0.5" />
                  <path d="M22 8h4v20h-4z" fill="#1A1A1A" opacity="0.7" />
                </g>
                <defs>
                  <linearGradient id="n404" x1="0" y1="0" x2="36" y2="36">
                    <stop offset="0%" stopColor="#E8C77E" />
                    <stop offset="50%" stopColor="#C9A44C" />
                    <stop offset="100%" stopColor="#9C7A2E" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
