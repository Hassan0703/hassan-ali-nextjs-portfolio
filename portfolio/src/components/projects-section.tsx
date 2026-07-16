"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const SLUG_MAP: Record<string, string> = {
  "Gifoy Shop": "gifoy-shop",
  "NxT Car Rental": "nx-car-rental",
  "Everest Invoicing": "everest-invoicing",
  "FrapXel": "frapxel",
  "ERPNova UI": "erpnova-ui",
  "Nexilo Loan App": "nexilo-loan",
};

const PROJECTS = [
  {
    title: "Gifoy Shop",
    subtitle: "Ecommerce x Frappe Integration",
    description:
      "Full-featured ecommerce platform integrated with Frappe ERPNext for inventory, orders, and payment management.",
    tags: ["Python", "Frappe", "ERPNext"],
    tagColors: { Python: "#3572A5", Frappe: "#0088CC", ERPNext: "#23B852" },
    githubUrl: "https://github.com/Hassan0703/gifoy-shop",
    demoUrl: null,
    live: false,
    image: "/Project Images/gfoy_shop.jpeg",
  },
  {
    title: "NxT Car Rental",
    subtitle: "Car Rental Management Software",
    description:
      "Complete car rental management system with booking, fleet tracking, billing, and customer management modules.",
    tags: ["Python", "Frappe", "ERPNext"],
    tagColors: { Python: "#3572A5", Frappe: "#0088CC", ERPNext: "#23B852" },
    githubUrl: "https://github.com/Hassan0703/nxt-car-rental",
    demoUrl: null,
    live: false,
    image: "/Project Images/nxt_car_rental.png",
  },
  {
    title: "Everest Invoicing",
    subtitle: "SQL-Lite x Flask x HTML-CSS",
    description:
      "Lightweight invoicing application built with Flask and SQLite for small business invoice generation and management.",
    tags: ["Python", "Flask", "SQLite"],
    tagColors: { Python: "#3572A5", Flask: "#000000", SQLite: "#003B57" },
    githubUrl: "https://github.com/Hassan0703/everest-invoicing",
    demoUrl: null,
    live: false,
    image: "/Project Images/Everest_invoicing.png",
  },
  {
    title: "FrapXel",
    subtitle: "HTML x CSS - Complete Website",
    description:
      "Complete responsive website built with pure HTML and CSS, showcasing modern web design principles.",
    tags: ["HTML", "CSS"],
    tagColors: { HTML: "#E34F26", CSS: "#563D7C" },
    githubUrl: "https://github.com/Hassan0703/frapxel",
    demoUrl: "https://hassan0703.github.io/frapxel",
    live: true,
    image: "/Project Images/frapxel.png",
  },
  {
    title: "ERPNova UI",
    subtitle: "Vue 3 Frappe UI Kit",
    description:
      "Vue 3 component library for building Frappe/ERPNext interfaces with modern reactive UI patterns.",
    tags: ["Vue 3", "Frappe"],
    tagColors: { "Vue 3": "#4FC08D", Frappe: "#0088CC" },
    githubUrl: "https://github.com/Hassan0703/erpnova-ui",
    demoUrl: null,
    live: true,
    image: null,
  },
  {
    title: "Nexilo Loan App",
    subtitle: "ERPNext x Frappe Integration",
    description:
      "Loan management application integrated with ERPNext for processing, tracking, and managing loan portfolios.",
    tags: ["Python", "Frappe", "ERPNext"],
    tagColors: { Python: "#3572A5", Frappe: "#0088CC", ERPNext: "#23B852" },
    githubUrl: "https://github.com/Hassan0703/nexilo-loan-app",
    demoUrl: null,
    live: false,
    image: "/Project Images/Nexilio.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

function Thumbnail({ project }: { project: typeof PROJECTS[0] }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
      />
    );
  }

  return (
    <>
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(201,164,76,0.15)_0%,transparent_70%)]" />
      </div>
      <div className="relative z-10 text-center">
        <div className="w-16 h-16 mx-auto rounded-full border-2 border-gold/30 flex items-center justify-center mb-2">
          <span className="text-2xl font-black gold-gradient-text">
            {project.title.charAt(0)}
          </span>
        </div>
        {project.live && (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold text-white bg-[#4CAF50]">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            LIVE
          </span>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
    </>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative min-h-screen section-padding overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0A0B10]" />
      <div className="absolute inset-0 bg-section-alt" />
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 bg-dots" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-[-0.02em] text-[#F5F2EA] mb-3">
            FEATURED <span className="gold-gradient-text">PROJECTS</span>
          </h2>
          <div className="h-[3px] w-[120px] gold-gradient rounded-full mx-auto mb-3" />
          <p className="font-mono text-xs text-[#8A8272] tracking-[3px]">
            SELECTED WORK
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PROJECTS.map((project) => {
            const slug = SLUG_MAP[project.title];
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative rounded-[16px] overflow-hidden border border-gold/20 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/40 transition-all duration-500"
              >
                <Link href={slug ? `/project/${slug}` : "#"} className="block">
                  <div className="relative h-48 sm:h-56 bg-gradient-to-br from-[#1a140c] to-[#0A0B10] flex items-center justify-center overflow-hidden">
                    <Thumbnail project={project} />
                  </div>

                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#EDE7D8] group-hover:text-gold transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm gold-gradient-text font-semibold">
                        {project.subtitle}
                      </p>
                    </div>
                    <p className="text-sm text-[#D9D3C4] leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium text-[#EDE7D8] border"
                          style={{
                            borderColor: `${project.tagColors[tag as keyof typeof project.tagColors]}40`,
                            backgroundColor: `${project.tagColors[tag as keyof typeof project.tagColors]}15`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2">
                      {project.githubUrl && (
                        <span
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.githubUrl!, "_blank", "noopener,noreferrer");
                          }}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-[#EDE7D8] border border-gold/30 hover:bg-gold/10 hover:text-gold transition-all duration-300 cursor-pointer"
                        >
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                          </svg>
                          GitHub
                        </span>
                      )}
                      {project.demoUrl && (
                        <span
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.demoUrl!, "_blank", "noopener,noreferrer");
                          }}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-[#EDE7D8] bg-gold/10 border border-gold/40 hover:bg-gold/20 hover:text-gold transition-all duration-300 cursor-pointer"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          Live Demo
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 font-mono text-sm text-[#5C5548]"
        >
          <span className="text-gold/40">{`\u003C/`}</span>projects<span className="text-gold/40">\u003E</span>
        </motion.div>
      </div>
    </section>
  );
}