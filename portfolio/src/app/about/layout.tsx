import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Hassan Ali — a Frappe/ERPNext Architect based in Lahore, Pakistan with 5+ years of experience building enterprise-grade ERP systems for logistics, real estate, ecommerce, fintech, and commodity trading.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}