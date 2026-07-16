"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

export const CASE_STUDIES: Record<string, {
  title: string;
  subtitle: string;
  year: string;
  role: string;
  duration: string;
  tech: string[];
  overview: string;
  problem: string;
  approach: string;
  features: { title: string; desc: string }[];
  lessons: string[];
  color: string;
  image?: string | null;
}> = {
  "tradeflow": {
    title: "TradeFlow ERP Platform",
    subtitle: "Rice Import/Export Commodity ERP",
    year: "2025",
    role: "Lead Architect & Developer",
    duration: "In Development",
    tech: ["Python", "Frappe", "ERPNext", "MariaDB", "Redis", "Docker"],
    color: "#FFB74D",
    overview:
      "TradeFlow is a comprehensive ERP platform designed for the international rice trade industry. It handles the entire lifecycle from procurement and logistics to inventory management and financial reconciliation.",
    problem:
      "The rice import/export industry relies on fragmented tools — spreadsheets for tracking, separate accounting software, manual communication channels, and paper-based documentation. This leads to delayed shipments, inventory discrepancies, costly errors, and hours of manual data entry. The client needed a unified system that could handle the complexity of international commodity trading while remaining easy to use.",
    approach:
      "I designed TradeFlow as a modular ERP system on the Frappe framework, extending ERPNext with custom modules specific to commodity trading. The architecture follows a domain-driven design pattern with clear separation between procurement, logistics, inventory, and finance domains. Real-time data synchronization ensures all stakeholders work with the same information.",
    features: [
      { title: "Procurement Management", desc: "End-to-end procurement workflow from supplier onboarding to purchase order generation, quality checks, and payment scheduling." },
      { title: "Logistics & Shipping", desc: "Real-time shipment tracking, container management, freight optimization, and customs documentation automation." },
      { title: "Inventory Control", desc: "Multi-warehouse inventory with batch tracking, expiry management, and automated reorder points." },
      { title: "Financial Reconciliation", desc: "Automated invoice matching, multi-currency support, payment tracking, and financial reporting." },
      { title: "Commodity Pricing", desc: "Real-time market price integration, price trend analysis, and automated pricing adjustments." },
      { title: "Analytics Dashboard", desc: "Comprehensive dashboards for business intelligence, KPI tracking, and decision support." },
    ],
    lessons: [
      "Deep domain knowledge is essential — understanding the rice trade industry's nuances shaped every architectural decision.",
      "Modular design allows incremental deployment; not every module needs to go live at once.",
      "Real-time data synchronization across distributed teams requires careful cache invalidation and event-driven architecture.",
      "Internationalization and multi-currency support must be designed from day one, not added as an afterthought.",
    ],
    image: "/Project Images/trade_flow.png",
  },
  "property-management": {
    title: "Property Management System",
    subtitle: "Real Estate ERP Solution",
    year: "2024",
    role: "Full-Stack Developer",
    duration: "6 Months",
    tech: ["Python", "Frappe", "ERPNext", "JavaScript", "MariaDB"],
    color: "#42A5F5",
    overview:
      "A comprehensive property management ERP system that streamlines real estate operations including tenant management, lease tracking, maintenance workflows, rent collection, and financial reporting.",
    problem:
      "Property management firms typically juggle multiple platforms — one for accounting, another for tenant communication, spreadsheets for lease tracking, and paper forms for maintenance requests. This fragmentation leads to missed rent payments, delayed maintenance, tenant dissatisfaction, and significant revenue leakage.",
    approach:
      "Built as a unified ERP solution on Frappe/ERPNext, I created custom DocTypes for properties, units, tenants, and leases with interconnected workflows. The system uses Frappe's event-driven architecture to trigger automated notifications, payment reminders, and maintenance escalation procedures.",
    features: [
      { title: "Tenant Management", desc: "Complete tenant lifecycle from application and screening to move-in, communication, and move-out." },
      { title: "Lease Tracking", desc: "Automated lease creation, renewal reminders, rent escalation schedules, and document management." },
      { title: "Maintenance Workflow", desc: "Tenant-facing maintenance request portal with automated assignment, status tracking, and vendor management." },
      { title: "Rent Collection", desc: "Automated invoicing, online payment integration, late fee calculation, and delinquency tracking." },
      { title: "Financial Reporting", desc: "Owner statements, P&L by property, expense tracking, and tax preparation reports." },
      { title: "Owner Portal", desc: "Real-time portal for property owners to view performance, financials, and occupancy metrics." },
    ],
    lessons: [
      "User adoption depends on the tenant experience — a good tenant portal reduces support calls by 40%.",
      "Automating rent collection and late fee calculation eliminated manual errors and improved cash flow.",
      "Maintenance workflow automation reduced average resolution time from 5 days to under 24 hours.",
      "Building for the property manager's workflow, not against it, was key to successful deployment.",
    ],
    image: "/Project Images/property-rms.jpeg",
  },
  "gifoy-shop": {
    title: "Gifoy Shop",
    subtitle: "Ecommerce x Frappe Integration",
    year: "2024",
    role: "Full-Stack Developer",
    duration: "4 Months",
    tech: ["Python", "Frappe", "ERPNext", "JavaScript"],
    color: "#4CAF50",
    overview:
      "Full-featured ecommerce platform integrated with Frappe ERPNext for inventory, orders, and payment management.",
    problem:
      "The client needed a complete ecommerce solution that could sync seamlessly with their existing ERPNext system for real-time inventory management, order processing, and automated accounting.",
    approach:
      "Built a custom Frappe app that extends ERPNext with ecommerce-specific DocTypes and workflows. The frontend uses server-rendered templates with Alpine.js for interactivity. Webhooks and scheduled jobs keep inventory, orders, and payments synchronized in real-time.",
    features: [
      { title: "Product Catalog", desc: "Multi-variant product management with categories, attributes, and inventory sync." },
      { title: "Shopping Cart", desc: "Persistent cart with guest checkout, coupon codes, and tax calculation." },
      { title: "Order Management", desc: "Automated order creation in ERPNext, status tracking, and fulfillment workflow." },
      { title: "Payment Integration", desc: "Stripe and local payment gateway support with webhook handling." },
      { title: "Inventory Sync", desc: "Real-time stock updates from ERPNext, preventing overselling." },
      { title: "Customer Portal", desc: "Order history, reordering, address management, and wishlist." },
    ],
    lessons: [
      "ERPNext's stock ledger is powerful but requires careful handling for ecommerce velocity.",
      "Webhook reliability is critical — implement idempotency and retry logic from day one.",
      "Server-side rendering with Frappe templates simplifies SEO and initial load performance.",
      "Separate pricing rules from the product catalog for flexible promotions.",
    ],
    image: "/Project Images/gfoy_shop.jpeg",
  },
  "nx-car-rental": {
    title: "NxT Car Rental",
    subtitle: "Car Rental Management Software",
    year: "2024",
    role: "Full-Stack Developer",
    duration: "5 Months",
    tech: ["Python", "Frappe", "ERPNext", "JavaScript"],
    color: "#AB47BC",
    overview:
      "Complete car rental management system with booking, fleet tracking, billing, and customer management modules.",
    problem:
      "Car rental businesses struggle with fragmented systems — separate tools for fleet management, booking, billing, and customer communication. This leads to double-bookings, billing errors, and poor fleet utilization.",
    approach:
      "Built as a comprehensive Frappe/ERPNext app with custom DocTypes for vehicles, bookings, contracts, and maintenance. The system uses Frappe's permission system for role-based access (admin, counter staff, customer portal) and background jobs for automated billing and reminders.",
    features: [
      { title: "Fleet Management", desc: "Vehicle registry with availability calendar, maintenance scheduling, and document tracking." },
      { title: "Booking Engine", desc: "Real-time availability, flexible pricing rules, insurance options, and add-ons." },
      { title: "Contract & Billing", desc: "Automated contract generation, invoicing, damage charges, and deposit handling." },
      { title: "Customer Portal", desc: "Self-service booking, history, digital contracts, and loyalty points." },
      { title: "Maintenance Tracker", desc: "Scheduled services, repair logging, vendor management, and cost tracking." },
      { title: "Analytics Dashboard", desc: "Utilization rates, revenue per vehicle, booking trends, and maintenance costs." },
    ],
    lessons: [
      "Complex pricing rules (seasonal, duration-based, loyalty) need a dedicated pricing engine.",
      "Offline-first counter interface is essential for locations with unreliable connectivity.",
      "Damage documentation workflows must be bulletproof for insurance claims.",
      "Fleet utilization reports drive purchasing decisions — make them accessible.",
    ],
    image: "/Project Images/nxt_car_rental.png",
  },
  "nexilo-loan": {
    title: "Nexilo Loan App",
    subtitle: "ERPNext x Frappe Integration",
    year: "2024",
    role: "Lead Developer",
    duration: "4 Months",
    tech: ["Python", "Frappe", "ERPNext", "MariaDB"],
    color: "#EC407A",
    overview:
      "Loan management application integrated with ERPNext for processing, tracking, and managing loan portfolios.",
    problem:
      "Microfinance institutions and lending companies using ERPNext lacked a dedicated loan management module. They resorted to spreadsheets for amortization schedules, manual interest calculations, and disjointed collection tracking.",
    approach:
      "Developed a comprehensive Frappe app with custom DocTypes for loan applications, disbursements, repayment schedules, and collections. Integrated with ERPNext's accounting module for automatic GL entries. Used Frappe's scheduler for daily interest accrual and overdue notifications.",
    features: [
      { title: "Loan Origination", desc: "Multi-step application with KYC, credit scoring integration, and approval workflow." },
      { title: "Amortization Engine", desc: "Flexible schedules — fixed, reducing balance, balloon payments, and grace periods." },
      { title: "Disbursement & Collection", desc: "Bank integration for disbursement, automated repayment reminders, and collection tracking." },
      { title: "Collateral Management", desc: "Asset registry, valuation tracking, and lien documentation." },
      { title: "Provisioning & Reporting", desc: "IFRS 9 compliant provisioning, portfolio quality reports, and regulatory returns." },
      { title: "Branch & Agent Portal", desc: "Role-based access for field officers with offline-capable mobile forms." },
    ],
    lessons: [
      "Regulatory compliance (IFRS 9, local central bank rules) must be baked into the data model.",
      "Idempotent payment processing prevents duplicate entries during network failures.",
      "Amortization recalculation on early repayment requires careful rounding strategy.",
      "Agent productivity metrics drive portfolio quality — build dashboards for them.",
    ],
    image: "/Project Images/Nexilio.png",
  },
  "everest-invoicing": {
    title: "Everest Invoicing",
    subtitle: "SQL-Lite x Flask x HTML-CSS",
    year: "2023",
    role: "Full-Stack Developer",
    duration: "2 Months",
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS"],
    color: "#26A69A",
    overview:
      "Lightweight invoicing application built with Flask and SQLite for small business invoice generation and management.",
    problem:
      "Small businesses and freelancers need simple invoicing without the complexity and cost of full accounting software. Existing solutions were either too expensive, too complex, or required internet connectivity.",
    approach:
      "Built a desktop-first invoicing app using Flask as a local server with SQLite for zero-configuration data storage. The UI is pure HTML/CSS with minimal JavaScript for interactivity. Packaged as a standalone executable using PyInstaller for easy distribution.",
    features: [
      { title: "Invoice Builder", desc: "Drag-and-drop line items, tax calculation, discounts, and custom branding." },
      { title: "Client Management", desc: "Contact database with billing/shipping addresses and payment terms." },
      { title: "PDF Generation", desc: "Professional PDF invoices with company logo, terms, and QR codes for payment." },
      { title: "Payment Tracking", desc: "Record partial payments, overdue tracking, and automated reminders." },
      { title: "Reports", desc: "Sales summary, aging report, tax summary, and export to CSV/Excel." },
      { title: "Offline-First", desc: "Runs entirely locally — no internet required for core functionality." },
    ],
    lessons: [
      "SQLite + Flask is perfect for local-first desktop apps — zero config, portable, reliable.",
      "PDF generation with WeasyPrint/ReportLab needs careful CSS handling for print layouts.",
      "Packaging Python apps for non-technical users is harder than building the app.",
      "Keyboard-first data entry workflows dramatically improve invoice creation speed.",
    ],
    image: "/Project Images/Everest_invoicing.png",
  },
  "erpnova-ui": {
    title: "ERPNova UI",
    subtitle: "Vue 3 Frappe UI Kit",
    year: "2024",
    role: "Open Source Maintainer",
    duration: "Ongoing",
    tech: ["Vue 3", "TypeScript", "Frappe", "Tailwind CSS"],
    color: "#66BB6A",
    overview:
      "Vue 3 component library for building Frappe/ERPNext interfaces with modern reactive UI patterns.",
    problem:
      "Building custom UIs on Frappe/ERPNext typically requires working with server-rendered templates and jQuery. Developers wanting modern reactive patterns had no component library to start from.",
    approach:
      "Created a Vue 3 component library with Frappe-specific components (DataTable, FormBuilder, DocTypeGrid, etc.) that communicate with Frappe's REST API. Built with TypeScript for type safety and Tailwind CSS for styling. Published as an NPM package.",
    features: [
      { title: "DataTable", desc: "Sortable, filterable, paginated tables with server-side processing support." },
      { title: "FormBuilder", desc: "Dynamic form generation from Frappe DocType meta with validation." },
      { title: "DocTypeGrid", desc: "Kanban/List/Grid views for any DocType with real-time updates." },
      { title: "Desk Integration", desc: "Seamless embedding in Frappe Desk via custom pages and workspace shortcuts." },
      { title: "TypeScript Types", desc: "Auto-generated types from Frappe DocType definitions for end-to-end type safety." },
      { title: "Theming", desc: "Tailwind-based theming with ERPNext color palette presets." },
    ],
    lessons: [
      "Frappe's meta API is powerful but requires careful caching for performance.",
      "Server-side rendering with Nuxt 3 improves initial load for public-facing pages.",
      "Community adoption depends on documentation quality — invest in examples early.",
      "Version alignment with Frappe/ERPNext releases is an ongoing maintenance burden.",
    ],
    image: null,
  },
  "frapxel": {
    title: "FrapXel",
    subtitle: "HTML x CSS - Complete Website",
    year: "2023",
    role: "Frontend Developer",
    duration: "3 Weeks",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "#FFA726",
    overview:
      "Complete responsive website built with pure HTML and CSS, showcasing modern web design principles.",
    problem:
      "A client needed a fast, lightweight, and maintainable website without the overhead of a CMS or framework. The design needed to be modern, accessible, and performant.",
    approach:
      "Built a complete multi-page website using semantic HTML5, modern CSS (Grid, Flexbox, Custom Properties), and minimal vanilla JavaScript for interactions. Optimized for Core Web Vitals with critical CSS inlining, image optimization, and no render-blocking resources.",
    features: [
      { title: "Semantic HTML5", desc: "Proper document structure with landmarks, headings, and ARIA labels." },
      { title: "Modern CSS Layout", desc: "CSS Grid and Flexbox for responsive layouts without frameworks." },
      { title: "Design System", desc: "Custom properties for colors, spacing, typography — easy to maintain." },
      { title: "Performance Optimized", desc: "Inlined critical CSS, preloaded fonts, optimized images, no JS frameworks." },
      { title: "Accessibility First", desc: "WCAG 2.1 AA compliant — contrast, focus states, skip links, landmarks." },
      { title: "Progressive Enhancement", desc: "Core content works without JS; interactions enhance the experience." },
    ],
    lessons: [
      "You don't need a framework for most marketing sites — vanilla HTML/CSS/JS is often faster to build and maintain.",
      "CSS Custom Properties are a game-changer for theming and maintenance.",
      "Performance budgets (LCP < 2.5s, CLS < 0.1) should be set before writing code.",
      "Accessibility isn't a checklist — it's a design constraint that improves UX for everyone.",
    ],
    image: "/Project Images/frapxel.png",
  },
};

export function ProjectClientPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = CASE_STUDIES[slug];

  if (!project) {
    notFound();
  }

  return (
    <main id="main-content" className="relative">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0806]" />
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <PageTransition>
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-sm text-[#8A8272] hover:text-gold transition-colors mb-6"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  Back to Projects
                </Link>
              </motion.div>

<motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold mb-4"
                  style={{
                    backgroundColor: `${project.color}15`,
                    color: project.color,
                    border: `1px solid ${project.color}30`,
                  }}
                >
                  {project.duration}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[2px] mb-3">
                  {project.title}
                </h1>
                <p className="text-lg gold-gradient-text font-semibold mb-4">{project.subtitle}</p>
                <div className="flex flex-wrap gap-4 text-sm text-[#8A8272]">
                  <span>{project.role}</span>
                  <span className="text-gold/30">|</span>
                  <span>{project.year}</span>
                </div>
              </motion.div>

              {project.image && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mb-10 rounded-xl overflow-hidden border border-[rgba(232,199,126,0.12)]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              )}

              <div className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-xl font-bold text-[#EDE7D8] mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Overview
                  </h2>
                  <p className="text-base text-[#D9D3C4] leading-relaxed">{project.overview}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <h2 className="text-xl font-bold text-[#EDE7D8] mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    The Problem
                  </h2>
                  <div className="rounded-xl p-6 border border-[rgba(232,199,126,0.12)] bg-white/[0.02]">
                    <p className="text-base text-[#D9D3C4] leading-relaxed">{project.problem}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-xl font-bold text-[#EDE7D8] mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Architecture & Approach
                  </h2>
                  <div className="rounded-xl p-6 border border-[rgba(232,199,126,0.12)] bg-white/[0.02]">
                    <p className="text-base text-[#D9D3C4] leading-relaxed">{project.approach}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <h2 className="text-xl font-bold text-[#EDE7D8] mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Technology Stack
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-4 py-2 rounded-full text-xs font-medium text-[#EDE7D8] border border-gold/30 bg-gold/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-xl font-bold text-[#EDE7D8] mb-6 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((f, i) => (
                      <motion.div
                        key={f.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 + i * 0.05, duration: 0.4 }}
                        whileHover={{ y: -2 }}
                        className="rounded-xl p-5 border border-[rgba(232,199,126,0.12)] bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300"
                      >
                        <h3 className="font-bold text-sm text-[#EDE7D8] mb-2">{f.title}</h3>
                        <p className="text-xs text-[#8A8272] leading-relaxed">{f.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-xl font-bold text-[#EDE7D8] mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Lessons Learned
                  </h2>
                  <div className="space-y-3">
                    {project.lessons.map((lesson, i) => (
                      <div
                        key={i}
                        className="flex gap-3 items-start rounded-xl p-4 border border-[rgba(232,199,126,0.08)]"
                      >
                        <span className="text-gold text-sm mt-0.5 flex-shrink-0">✦</span>
                        <p className="text-sm text-[#D9D3C4] leading-relaxed">{lesson}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 pt-8 border-t border-[rgba(232,199,126,0.1)] flex justify-between"
              >
                <Link href="/projects">
                  <motion.div
                    whileHover={{ x: -3 }}
                    className="flex items-center gap-2 text-sm text-[#8A8272] hover:text-gold transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    All Projects
                  </motion.div>
                </Link>
                <Link href="/contact">
                  <motion.div
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2 text-sm text-[#8A8272] hover:text-gold transition-colors"
                  >
                    Discuss a Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </PageTransition>
      </section>

      <Footer />
    </main>
  );
}
