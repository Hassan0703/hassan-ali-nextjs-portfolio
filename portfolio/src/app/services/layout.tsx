import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional Frappe/ERPNext development, custom application development, business automation, and technical consulting services. End-to-end ERP implementation, migration, integration, and ongoing support.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}