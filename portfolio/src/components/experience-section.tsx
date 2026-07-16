"use client";

import { motion } from "framer-motion";

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
  {
    title: "Modern Portfolio",
    subtitle: "This developer portfolio & profile",
    status: "LIVE",
    statusColor: "#4CAF50",
    progress: 100,
    desc: "Interactive single-page portfolio showcasing projects, skills, and engineering philosophy — built with Next.js.",
  },
];

const ARCH_LAYERS = [
  {
    layer: "Frontend",
    tech: "Vue 3 / JS",
    side: "app",
    items: [
      { label: "Users", tech: "Desktop / Mobile", type: "end" },
    ],
  },
  {
    layer: "API Layer",
    tech: "REST / GraphQL",
    side: "app",
  },
  {
    layer: "Frappe Framework",
    tech: "Python / Jinja2",
    side: "app",
  },
  {
    layer: "ERPNext",
    tech: "ERP Modules",
    side: "app",
  },
  {
    layer: "Business Logic",
    tech: "Python / Hooks",
    side: "app",
  },
  {
    layer: "MariaDB",
    tech: "Primary Database",
    side: "data",
  },
  {
    layer: "Redis",
    tech: "Cache / Queue",
    side: "data",
  },
  {
    layer: "Scheduler",
    tech: "Cron / Background",
    side: "data",
  },
  {
    layer: "Background Jobs",
    tech: "Async Workers",
    side: "data",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative section-padding overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0A0806]" />
      <div className="absolute inset-0 bg-section-dark" />
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 bg-grid" />

      <div className="section-container relative z-10 space-y-16">
        {/* Current Focus / Timeline */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-[-0.02em] text-[#F5F2EA] mb-3">
              CURRENT <span className="gold-gradient-text">FOCUS</span>
            </h2>
            <div className="h-[3px] w-[120px] gold-gradient rounded-full mx-auto mb-3" />
            <p className="font-mono text-xs text-[#8A8272] tracking-[3px]">
              WHAT I'M BUILDING NOW
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline rail */}
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
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[10px] top-[6px] w-[18px] h-[18px] rounded-full border-2 z-10 flex items-center justify-center"
                    style={{
                      borderColor: item.statusColor,
                      backgroundColor: `${item.statusColor}20`,
                    }}
                  >
                    <div
                      className="w-[6px] h-[6px] rounded-full"
                      style={{ backgroundColor: item.statusColor }}
                    />
                  </div>

                  <motion.div
                    whileHover={{ x: 2 }}
                    className="rounded-[14px] p-5 border border-gold/15 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <h3 className="font-bold text-base text-[#EDE7D8]">
                        {item.title}
                      </h3>
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
                    <p className="text-sm gold-gradient-text font-semibold mb-2">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-[#D9D3C4] mb-3 leading-relaxed">
                      {item.desc}
                    </p>
                    {/* Progress bar */}
                    <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${item.statusColor}, ${item.statusColor}88)`,
                          width: `${item.progress}%`,
                        }}
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-[-0.02em] text-[#F5F2EA] mb-3">
              <span className="gold-gradient-text">ARCHITECTURE</span>
            </h2>
            <div className="h-[3px] w-[120px] gold-gradient rounded-full mx-auto mb-3" />
            <p className="font-mono text-xs text-[#8A8272] tracking-[3px]">
              HOW I BUILD SYSTEMS
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* App Layer */}
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
                    <span className="font-bold text-sm text-[#EDE7D8]">
                      {layer.layer}
                    </span>
                    <span className="text-xs font-mono text-[#8A8272]">
                      {layer.tech}
                    </span>
                  </div>
                  {layer.items?.map((item) => (
                    <div
                      key={item.label}
                      className="mt-3 pt-3 border-t border-gold/10 text-xs text-[#6A6358] flex justify-between"
                    >
                      <span>{item.label}</span>
                      <span className="text-gold/60">{item.tech}</span>
                    </div>
                  ))}
                </motion.div>
              ))}
            </motion.div>

            {/* Data Layer */}
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
                    <span className="font-bold text-sm text-[#EDE7D8]">
                      {layer.layer}
                    </span>
                    <span className="text-xs font-mono text-[#8A8272]">
                      {layer.tech}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Central label */}
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
      </div>
    </section>
  );
}
