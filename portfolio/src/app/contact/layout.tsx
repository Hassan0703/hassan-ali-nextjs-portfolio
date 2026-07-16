import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Hassan Ali for Frappe/ERPNext development, ERP implementation, business automation, or technical consulting. Available for projects — typically responds within 24 hours.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}