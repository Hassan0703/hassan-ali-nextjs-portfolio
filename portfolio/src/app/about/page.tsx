"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

const MILESTONES = [
  { year: "2020", title: "Started with Frappe", desc: "Began my journey building custom applications on the Frappe framework." },
  { year: "2021", title: "First ERP Implementation", desc: "Led end-to-end ERPNext deployment for a mid-size enterprise." },
  { year: "2022", title: "Enterprise Automation", desc: "Designed automated workflow systems reducing manual processing by 60%." },
  { year: "2023", title: "Architecture Lead", desc: "Architected multi-tenant ERP systems serving 1000+ concurrent users." },
  { year: "2024", title: "Open Source Contributions", desc: "Published reusable Frappe components and automation tools." },
  { year: "2025", title: "Full-Stack Expertise", desc: "Expanded into modern frontend with Next.js, TypeScript, and cloud-native deployments." },
];

const VALUE_ICONS: Record<string, React.ReactNode> = {
  "Business First": <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  "Clean Architecture": <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
  "Performance Driven": <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  "Automation Mindset": <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  "Scalable Design": <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v4M12 22v-4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M22 12h-4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>,
  "Continuous Learning": <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
};

const VALUES = [
  { title: "Business First", desc: "Technology serves business goals, not the other way around." },
  { title: "Clean Architecture", desc: "Code should be maintainable, scalable, and well-structured." },
  { title: "Performance Driven", desc: "Optimize everything. Latency matters. User experience is king." },
  { title: "Automation Mindset", desc: "If it&apos;s repetitive, automate it. If it&apos;s manual, script it." },
  { title: "Scalable Design", desc: "Build systems that grow with business needs, not against them." },
  { title: "Continuous Learning", desc: "Technology evolves. Staying curious is non-negotiable." },
];

const TIMELINE_ITEMS = [
  {
    title: "TradeFlow ERP Platform",
    subtitle: "Rice import/export commodity ERP system",
    status: "BUILDING",
    statusColor: "#FFB74D",
    progress: 60,
    desc: "Comprehensive ERP platform for international rice trade, covering procurement, logistics, inventory, and financial management.",
  },
  {
    title: "Enterprise ERP Apps",
    subtitle: "Custom business solutions for clients",
    status: "ACTIVE",
    statusColor: "#42A5F5",
    progress: 80,
    desc: "Tailored enterprise applications built on Frappe/ERPNext for diverse business needs across multiple industries.",
  },
  {
    title: "AI Desktop Companion",
    subtitle: "Intelligent desktop assistant",
    status: "EXPLORING",
    statusColor: "#C9A44C",
    progress: 30,
    desc: "Desktop AI assistant for developers, integrating LLMs for code generation, task automation, and workflow enhancement.",
  },
  {
    title: "Open Source Components",
    subtitle: "Vue 3 & Frappe UI components",
    status: "SHARING",
    statusColor: "#4CAF50",
    progress: 70,
    desc: "Reusable UI component library for the Frappe ecosystem, built with Vue 3 and modern frontend tooling.",
  },
];

const ARCH_LAYERS = [
  { layer: "Frontend", tech: "Vue 3 / JS", side: "app", items: [{ label: "Users", tech: "Desktop / Mobile", type: "end" }] },
  { layer: "API Layer", tech: "REST / GraphQL", side: "app" },
  { layer: "Frappe Framework", tech: "Python / Jinja2", side: "app" },
  { layer: "ERPNext", tech: "ERP Modules", side: "app" },
  { layer: "Business Logic", tech: "Python / Hooks", side: "app" },
  { layer: "MariaDB", tech: "Primary Database", side: "data" },
  { layer: "Redis", tech: "Cache / Queue", side: "data" },
  { layer: "Scheduler", tech: "Cron / Background", side: "data" },
  { layer: "Background Jobs", tech: "Async Workers", side: "data" },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="relative">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0806]" />
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <PageTransition>
          <div className="section-container relative z-10 space-y-20">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 h-7 rounded-full border border-[rgba(232,199,126,0.2)] bg-gold/5 text-[10px] font-mono tracking-[3px] text-gold/80 mb-6">
                ABOUT ME
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-[-0.02em] mb-4">
                MY <span className="gold-gradient-text">STORY</span>
              </h1>
              <div className="h-[3px] w-[80px] gold-gradient rounded-full mx-auto mb-6" />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-8 md:p-10 max-w-4xl mx-auto"
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-[#D9D3C4] leading-relaxed mb-4">
                  I&apos;m Hassan Ali — a Frappe / ERPNext Architect based in Lahore, Pakistan.
                  For the past 5+ years, I&apos;ve been building enterprise-grade ERP systems
                  for businesses that have outgrown spreadsheets and off-the-shelf software.
                </p>
                <p className="text-lg text-[#D9D3C4] leading-relaxed mb-4">
                  My work is full-stack and deeply technical: schema design in MariaDB, business
                  logic in Python/Frappe, automation workflows that eliminate manual data entry,
                  and interfaces built with modern JavaScript. I&apos;ve shipped systems for
                  logistics, real estate, ecommerce, fintech, and commodity trading — each one
                  replacing a tangle of disconnected tools with a single, unified platform.
                </p>
                <p className="text-lg text-[#D9D3C4] leading-relaxed">
                  I don&apos;t write code for the sake of writing code. Every DocType, every
                  server script, every automation rule exists because it solves a real operational
                  problem — fewer manual errors, faster decisions, less friction. That&apos;s the
                  only metric that matters.
                </p>
              </div>
            </motion.div>

            {/* Journey Milestones */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-10"
              >
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-[-0.02em] mb-3">
                  JOURNEY <span className="gold-gradient-text">MILESTONES</span>
                </h2>
                <div className="h-[3px] w-[80px] gold-gradient rounded-full mx-auto" />
              </motion.div>
              <div className="max-w-3xl mx-auto relative">
                <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold/30 via-gold/20 to-gold/10" />
                <div className="space-y-6">
                  {MILESTONES.map((m, i) => (
                    <motion.div
                      key={m.year}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                      className="relative pl-14"
                    >
                      <div className="absolute left-[11px] top-[6px] w-[18px] h-[18px] rounded-full border-2 border-gold/40 bg-gold/10 z-10 flex items-center justify-center">
                        <div className="w-[6px] h-[6px] rounded-full bg-gold" />
                      </div>
                      <div className="rounded-xl p-5 border border-[rgba(232,199,126,0.12)] bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300">
                        <span className="text-xs font-mono tracking-[2px] text-gold/70 mb-1 block">
                          {m.year}
                        </span>
                        <h3 className="font-bold text-base text-[#EDE7D8] mb-1">{m.title}</h3>
                        <p className="text-sm text-[#8A8272]">{m.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Current Focus Timeline */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-10"
              >
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-[-0.02em] mb-3">
                  CURRENT <span className="gold-gradient-text">FOCUS</span>
                </h2>
                <div className="h-[3px] w-[80px] gold-gradient rounded-full mx-auto mb-2" />
                <p className="font-mono text-xs text-[#8A8272] tracking-[3px]">
                  WHAT I&apos;M BUILDING NOW
                </p>
              </motion.div>

              <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold/30 via-gold/20 to-gold/10" />
                <div className="space-y-6">
                  {TIMELINE_ITEMS.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="relative pl-14"
                    >
                      <div
                        className="absolute left-[10px] top-[6px] w-[18px] h-[18px] rounded-full border-2 z-10 flex items-center justify-center"
                        style={{
                          borderColor: item.statusColor,
                          backgroundColor: `${item.statusColor}20`,
                        }}
                      >
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: item.statusColor }} />
                      </div>
                      <motion.div
                        whileHover={{ x: 2 }}
                        className="rounded-[14px] p-5 border border-gold/15 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                          <h3 className="font-bold text-base text-[#EDE7D8]">{item.title}</h3>
                          <span
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider"
                            style={{
                              backgroundColor: `${item.statusColor}20`,
                              color: item.statusColor,
                              border: `1px solid ${item.statusColor}40`,
                            }}
                          >
                            {item.status}
                          </span>
                        </div>
                        <p className="text-sm gold-gradient-text font-semibold mb-2">{item.subtitle}</p>
                        <p className="text-sm text-[#D9D3C4] mb-3 leading-relaxed">{item.desc}</p>
                        <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: `linear-gradient(90deg, ${item.statusColor}, ${item.statusColor}88)`, width: `${item.progress}%` }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" as const }}
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center mb-10"
              >
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-[-0.02em] mb-3">
                  <span className="gold-gradient-text">ARCHITECTURE</span>
                </h2>
                <div className="h-[3px] w-[80px] gold-gradient rounded-full mx-auto mb-2" />
                <p className="font-mono text-xs text-[#8A8272] tracking-[3px]">
                  HOW I BUILD SYSTEMS
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-3"
                >
                  <h3 className="text-center text-sm font-mono tracking-[2px] text-[#6A6358] mb-4">
                    APP LAYER
                  </h3>
                  {ARCH_LAYERS.filter((l) => l.side === "app").map((layer, i) => (
                    <motion.div
                      key={layer.layer}
                      whileHover={{ x: 4 }}
                      className="rounded-[12px] p-4 border border-gold/15 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300 cursor-default"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-[#EDE7D8]">{layer.layer}</span>
                        <span className="text-xs font-mono text-[#8A8272]">{layer.tech}</span>
                      </div>
                      {layer.items?.map((item) => (
                        <div key={item.label} className="mt-3 pt-3 border-t border-gold/10 text-xs text-[#6A6358] flex justify-between">
                          <span>{item.label}</span>
                          <span className="text-gold/60">{item.tech}</span>
                        </div>
                      ))}
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-3"
                >
                  <h3 className="text-center text-sm font-mono tracking-[2px] text-[#6A6358] mb-4">
                    DATA LAYER
                  </h3>
                  {ARCH_LAYERS.filter((l) => l.side === "data").map((layer) => (
                    <motion.div
                      key={layer.layer}
                      whileHover={{ x: 4 }}
                      className="rounded-[12px] p-4 border border-gold/15 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300 cursor-default"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-[#EDE7D8]">{layer.layer}</span>
                        <span className="text-xs font-mono text-[#8A8272]">{layer.tech}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-8"
              >
                <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gold/20 text-xs font-mono tracking-[3px] text-[#6A6358]">
                  <span className="w-2 h-2 rounded-full bg-gold/40" />
                  SYSTEM ARCHITECTURE
                  <span className="w-2 h-2 rounded-full bg-gold/40" />
                </span>
              </motion.div>
            </div>

            {/* Values */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center mb-10"
              >
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-[-0.02em] mb-3">
                  WHAT I <span className="gold-gradient-text">STAND FOR</span>
                </h2>
                <div className="h-[3px] w-[80px] gold-gradient rounded-full mx-auto" />
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {VALUES.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.06, duration: 0.4 }}
                    whileHover={{ y: -2 }}
                    className="rounded-xl p-5 border border-[rgba(232,199,126,0.12)] bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300"
                  >
                    <span className="block mb-2 gold-gradient-text">{VALUE_ICONS[v.title]}</span>
                    <h3 className="font-bold text-sm text-[#EDE7D8] mb-1">{v.title}</h3>
                    <p className="text-xs text-[#8A8272] leading-relaxed">{v.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-center"
            >
              <div className="glass-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-[-0.02em] mb-4">
                  Let&apos;s Build <span className="gold-gradient-text">Something</span>
                </h2>
                <p className="text-sm text-[#8A8272] mb-6 max-w-md mx-auto">
                  Every project starts with a conversation. Tell me about the system you need.
                </p>
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2.5 px-8 h-12 rounded-full gold-gradient text-[#1a1a1a] font-bold text-sm tracking-wide"
                  >
                    Start a Conversation
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </PageTransition>
      </section>

      <Footer />
    </main>
  );
}
