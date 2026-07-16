"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

const PROJECTS = [
  {
    slug: "tradeflow",
    title: "TradeFlow ERP Platform",
    subtitle: "Rice Import/Export Commodity ERP",
    category: "ERP System",
    description:
      "Comprehensive ERP platform for international rice trade, covering procurement, logistics, inventory, financial management, and real-time commodity tracking.",
    tags: ["Python", "Frappe", "ERPNext", "MariaDB"],
    color: "#FFB74D",
    status: "In Development",
    year: "2025",
    image: "/Project Images/trade_flow.png",
  },
  {
    slug: "property-management",
    title: "Property Management System",
    subtitle: "Real Estate ERP Solution",
    category: "ERP System",
    description:
      "End-to-end property management ERP with tenant management, lease tracking, maintenance workflows, rent collection, and financial reporting.",
    tags: ["Python", "Frappe", "ERPNext", "JavaScript"],
    color: "#42A5F5",
    status: "Production",
    year: "2024",
    image: "/Project Images/property-rms.jpeg",
  },
  {
    slug: "gifoy-shop",
    title: "Gifoy Shop",
    subtitle: "Ecommerce x Frappe Integration",
    category: "Ecommerce",
    description:
      "Full-featured ecommerce platform integrated with Frappe ERPNext for inventory, orders, and payment management.",
    tags: ["Python", "Frappe", "ERPNext"],
    color: "#4CAF50",
    status: "Production",
    year: "2024",
    image: "/Project Images/gfoy_shop.jpeg",
  },
  {
    slug: "nx-car-rental",
    title: "NxT Car Rental",
    subtitle: "Car Rental Management Software",
    category: "Management",
    description:
      "Complete car rental management system with booking, fleet tracking, billing, and customer management modules.",
    tags: ["Python", "Frappe", "ERPNext"],
    color: "#AB47BC",
    status: "Production",
    year: "2024",
    image: "/Project Images/nxt_car_rental.png",
  },
  {
    slug: "nexilo-loan",
    title: "Nexilo Loan App",
    subtitle: "ERPNext x Frappe Integration",
    category: "Fintech",
    description:
      "Loan management application integrated with ERPNext for processing, tracking, and managing loan portfolios.",
    tags: ["Python", "Frappe", "ERPNext"],
    color: "#EC407A",
    status: "Production",
    year: "2024",
    image: "/Project Images/Nexilio.png",
  },
  {
    slug: "everest-invoicing",
    title: "Everest Invoicing",
    subtitle: "SQL-Lite x Flask x HTML-CSS",
    category: "Tool",
    description:
      "Lightweight invoicing application built with Flask and SQLite for small business invoice generation and management.",
    tags: ["Python", "Flask", "SQLite"],
    color: "#26A69A",
    status: "Open Source",
    year: "2023",
    image: "/Project Images/Everest_invoicing.png",
  },
  {
    slug: "erpnova-ui",
    title: "ERPNova UI",
    subtitle: "Vue 3 Frappe UI Kit",
    category: "Library",
    description:
      "Vue 3 component library for building Frappe/ERPNext interfaces with modern reactive UI patterns.",
    tags: ["Vue 3", "Frappe", "TypeScript"],
    color: "#66BB6A",
    status: "Open Source",
    year: "2024",
    image: null,
  },
  {
    slug: "frapxel",
    title: "FrapXel",
    subtitle: "HTML x CSS - Complete Website",
    category: "Website",
    description:
      "Complete responsive website built with pure HTML and CSS, showcasing modern web design principles.",
    tags: ["HTML", "CSS"],
    color: "#FFA726",
    status: "Live",
    year: "2023",
    image: "/Project Images/frapxel.png",
  },
];

const CATEGORIES = ["All", "ERP System", "Ecommerce", "Management", "Fintech", "Tool", "Library", "Website"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <main id="main-content" className="relative">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[#0A0806]" />
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <PageTransition>
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 h-7 rounded-full border border-[rgba(232,199,126,0.2)] bg-gold/5 text-[10px] font-mono tracking-[3px] text-gold/80 mb-6">
                PORTFOLIO
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-[-0.02em] mb-4">
                FEATURED <span className="gold-gradient-text">PROJECTS</span>
              </h1>
              <div className="h-[3px] w-[80px] gold-gradient rounded-full mx-auto mb-4" />
              <p className="text-sm text-[#8A8272] max-w-xl mx-auto">
                Enterprise applications, automation systems, and open source tools built with Frappe, ERPNext, and modern web technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    filter === cat
                      ? "bg-gold/10 text-gold border border-gold/30"
                      : "text-[#8A8272] border border-transparent hover:text-[#EDE7D8] hover:border-gold/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={filter}
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <motion.div
                    key={project.slug}
                    variants={cardVariants}
                    exit="exit"
                    layout
                  >
                    <Link href={`/project/${project.slug}`}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="group rounded-xl border border-[rgba(232,199,126,0.12)] bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300 overflow-hidden h-full"
                      >
                        <div className="h-40 bg-gradient-to-br from-[#1a140c] to-[#0A0B10] flex items-center justify-center relative overflow-hidden">
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                            />
                          ) : (
                            <>
                              <div className="absolute inset-0 opacity-10">
                                <div
                                  className="w-full h-full"
                                  style={{
                                    background: `radial-gradient(ellipse at center, ${project.color}33 0%, transparent 70%)`,
                                  }}
                                />
                              </div>
                              <div className="relative z-10 text-center">
                                <div
                                  className="w-14 h-14 mx-auto rounded-full border-2 flex items-center justify-center mb-2"
                                  style={{ borderColor: `${project.color}60` }}
                                >
                                  <span className="text-xl font-black" style={{ color: project.color }}>
                                    {project.title.charAt(0)}
                                  </span>
                                </div>
                                <span
                                  className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[10px] font-bold"
                                  style={{
                                    backgroundColor: `${project.color}15`,
                                    color: project.color,
                                    border: `1px solid ${project.color}30`,
                                  }}
                                >
                                  {project.status}
                                </span>
                              </div>
                            </>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                        </div>
                        <div className="p-5 space-y-3">
                          <div>
                            <h3 className="font-bold text-base text-[#EDE7D8] group-hover:text-gold transition-colors duration-200">
                              {project.title}
                            </h3>
                            <p className="text-xs gold-gradient-text font-semibold mt-0.5">
                              {project.subtitle}
                            </p>
                          </div>
                          <p className="text-sm text-[#8A8272] leading-relaxed line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded-full text-[10px] font-medium text-[#A09888] border border-[rgba(232,199,126,0.12)] bg-white/[0.02]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-[#6A6358] font-mono text-sm mt-12"
              >
                No projects in this category yet.
              </motion.p>
            )}
          </div>
        </PageTransition>
      </section>

      <Footer />
    </main>
  );
}
