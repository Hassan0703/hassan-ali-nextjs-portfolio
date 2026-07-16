"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/loading-screen";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [heroRevealed, setHeroRevealed] = useState(false);

  const handleComplete = useCallback(() => {
    setHeroRevealed(true);
    setLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleComplete} />}
      </AnimatePresence>

      <motion.main
        id="main-content"
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: heroRevealed ? 1 : 0 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
          <Navigation />
          <HeroSection />

          {/* Brand Statement */}
          <section className="relative section-padding overflow-hidden">
            <div className="absolute inset-0 bg-[#0A0806]" />
            <div className="absolute inset-0 bg-section-alt" />
            <div className="absolute inset-0 bg-noise" />

            <div className="section-container relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
                className="max-w-4xl mx-auto text-center space-y-6"
              >
                <span className="inline-flex items-center gap-2 px-3.5 h-6 rounded-full border border-[rgba(232,199,126,0.12)] bg-gold/[0.03] text-[9px] font-mono tracking-[3px] text-gold/60">
                  PHILOSOPHY
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-[-0.02em] text-[#F5F2EA] leading-[1.1]">
                  I don&apos;t write code for the sake of writing code.
                </h2>
                <p className="text-base sm:text-lg text-[#8A8272] max-w-2xl mx-auto leading-relaxed">
                  Every DocType, every server script, every automation rule exists because it solves
                  a real operational problem — fewer manual errors, faster decisions, less friction.
                  That&apos;s the only metric that matters.
                </p>
                <div className="h-[2px] w-[60px] gold-gradient rounded-full mx-auto" />
                <p className="text-sm text-[#A09888] max-w-xl mx-auto leading-relaxed">
                  From Lahore, building enterprise systems that power businesses across logistics,
                  real estate, ecommerce, fintech, and commodity trading.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Enterprise Expertise Preview */}
          <section className="relative section-padding overflow-hidden">
            <div className="absolute inset-0 bg-[#0A0B10]" />
            <div className="absolute inset-0 bg-section-dark" />
            <div className="absolute inset-0 bg-noise" />
            <div className="absolute inset-0 bg-dots" />

            <div className="section-container relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <span className="inline-flex items-center gap-2 px-3.5 h-6 rounded-full border border-[rgba(232,199,126,0.12)] bg-gold/[0.03] text-[9px] font-mono tracking-[3px] text-gold/60 mb-4">
                  EXPERTISE
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-[-0.02em] text-[#F5F2EA] mb-3">
                  ENTERPRISE <span className="gold-gradient-text">CAPABILITIES</span>
                </h2>
                <div className="h-[3px] w-[80px] gold-gradient rounded-full mx-auto mb-4" />
                <p className="text-sm text-[#8A8272] max-w-xl mx-auto">
                  Full-stack ERP engineering from schema design to deployment.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {[
                  {
                    title: "ERPNext Development",
                    desc: "Custom modules, implementations, migrations, and integrations built on the ERPNext framework.",
                    href: "/services",
                  },
                  {
                    title: "Frappe Applications",
                    desc: "Custom DocTypes, workflow automation, server scripts, and REST APIs on the Frappe framework.",
                    href: "/services",
                  },
                  {
                    title: "Business Automation",
                    desc: "Workflow automation, notification systems, background jobs, and reporting that eliminates manual work.",
                    href: "/services",
                  },
                ].map((item, i) => (
                  <Link key={item.title} href={item.href}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      whileHover={{ y: -4 }}
                      className="rounded-xl p-6 border border-[rgba(232,199,126,0.1)] bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300 h-full"
                    >
                      <h3 className="font-bold text-base text-[#EDE7D8] mb-2 group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#8A8272] leading-relaxed">{item.desc}</p>
                      <div className="mt-4 text-xs text-gold/60 flex items-center gap-1">
                        Learn more
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <ProjectsSection />
          <ContactSection />
          <Footer />
        </motion.main>
    </>
  );
}
