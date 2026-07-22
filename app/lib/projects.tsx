export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  image: string;
  tags: string[];
  status: "active" | "archived";
  links: {
    visit?: string;
    github?: string;
    pypi?: string;
    link?: string;
    youtube?: string;
    archive?: string;
    howIBuilt?: string;
  };
  author: string;
  authorAvatar: string;
  techStack: string[];
  features: string[];
  learningOutcomes: string[];
}


export const projects: Project[] = [
  {
    id: "1",
    title: "Tool Lending App",
    slug: "tool-lending-app",
    description: "development..",
    detailedDescription:
      "A modern AI-powered Invoice Generator SaaS Web Application built with the MERN Stack (MongoDB, Express.js, React.js, Node.js) integrated with Gemini AI. This smart invoicing platform generates professional invoices in seconds using AI, manages clients, tracks payments, and provides real-time business insights.",
    image: "/p1.webp",
    tags: ["AI", "SaaS", "MERN", "Full-Stack", "Business"],
    status: "active",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Gemini AI",
      "Clerk Auth",
    ],
    features: [
      "AI-powered invoice generation from plain text prompts",
      "Secure user authentication with Clerk",
      "Client and invoice management dashboard",
      "Real-time payment tracking (Paid/Unpaid/Overdue)",
      "Professional invoice templates",
      "Business insights and analytics",
    ],
    learningOutcomes: [
      "Full-stack SaaS application development with MERN",
      "Gemini AI integration for intelligent automation",
      "Secure authentication and user management",
      "RESTful API design with Express.js",
      "Database modeling with MongoDB schemas",
      "Production deployment strategies",
    ],
    links: {
      visit: "projects/tool-lending-app",
      github: "https://github.com/austinfelixmarbun",
      howIBuilt: "",
    },
    author: "Austin",
    authorAvatar: "/p1.webp",
  },
];

/* -------------------------
   Helper utilities
   ------------------------- */

/** Return a project by slug or null */
export function getProjectBySlug(
  slug: string | undefined | null,
): Project | null {
  // defensive normalization: decode URI components, coerce to string, trim
  const normalized = decodeURIComponent(String(slug ?? "")).trim();
  if (!normalized) return null;
  return projects.find((p) => p.slug === normalized) ?? null;
}
/** Return all slugs (useful for generateStaticParams or getStaticPaths) */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Compose the canonical URL for a project (useful in UIs) */
export function getProjectUrl(project: Project | { slug: string }) {
  return `/projects/${project.slug}`;
}

/** Return all projects (shallow copy) */
export function getAllProjects(): Project[] {
  return [...projects];
}
