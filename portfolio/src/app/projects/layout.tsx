import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Featured projects and case studies — enterprise ERP systems, ecommerce platforms, automation tools, and open-source libraries built with Frappe, ERPNext, Python, and modern web technologies.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}