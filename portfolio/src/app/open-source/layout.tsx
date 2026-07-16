import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source",
  description: "Open source contributions and projects — Vue 3 component libraries for Frappe, CLI automation tools, HTML/CSS templates, Flask invoicing apps, and more. Building in public for the Frappe and ERPNext ecosystem.",
};

export default function OpenSourceLayout({ children }: { children: React.ReactNode }) {
  return children;
}