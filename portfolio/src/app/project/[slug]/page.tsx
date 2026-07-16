import { ProjectClientPage } from "./client";
import { CASE_STUDIES } from "./client";

export function generateStaticParams() {
  return [
    { slug: "tradeflow" },
    { slug: "property-management" },
    { slug: "gifoy-shop" },
    { slug: "nx-car-rental" },
    { slug: "nexilo-loan" },
    { slug: "everest-invoicing" },
    { slug: "erpnova-ui" },
    { slug: "frapxel" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = CASE_STUDIES[slug];

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project case study could not be found.",
    };
  }

  return {
    title: project.title,
    description: project.overview.slice(0, 155),
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.overview,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.overview.slice(0, 155),
    },
  };
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  return <ProjectClientPage />;
}
