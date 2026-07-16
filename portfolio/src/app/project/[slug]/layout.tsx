import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const titles: Record<string, string> = {
    "tradeflow": "TradeFlow ERP Platform",
    "property-management": "Property Management System",
  };
  const title = titles[slug] || slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${title} | Hassan Ali`,
    description: `Case study: ${title} — a Frappe/ERPNext project by Hassan Ali.`,
  };
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
