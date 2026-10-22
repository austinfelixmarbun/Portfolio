export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  image: string;
  slides?: string[];
  tags: string[];
  status: "active" | "archived";
  links: {
    visit?: string;
    github?: string;
    pypi?: string;
    link?: string;
    youtube?: string;
    archive?: string;
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
    description: "Project from PTDI internship",
    detailedDescription: `A modern Inventory management SaaS Web Application 
    built with the PostgreSQL, Express.js, React.js, Node.js.`,
    image: "/project_slides/login_page.png",
    slides: [
      "/project_slides/login_page.png",
      "/project_slides/dashboard_dark.png",
      "/project_slides/dashboard_light.png",
      "/project_slides/borrow_dark.png",
      "/project_slides/inventory_dark.png",
      "/project_slides/verify_dark.png",
      "/project_slides/return_dark.png",
      "/project_slides/user_dark.png"
    ],
    tags: ["SaaS", "PERN", "Full-Stack", "Inventory"],
    status: "archived",
    techStack: [
      "React",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "Drizzle ORM",
      "Docker",
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
      "Full-stack SaaS application development with PERN",
      "Secure authentication and user management",
      "RESTful API design with Express.js",
      "Database schemas modeling with Drizzle ORM",
      "Production deployment strategies",
    ],
    links: {
      visit: "https://github.com/austinfelixmarbun",
      github: "https://github.com/austinfelixmarbun",
    },
    author: "Austin",
    authorAvatar: "/icon.svg",
  },
];

export function getProjectBySlug(
  slug: string | undefined | null,
): Project | null {
  return projects.find((p) => p.slug === String(slug ?? "")) ?? null;
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getProjectUrl(project: Project | { slug: string }) {
  return `/projects/${project.slug}`;
}

export function getAllProjects(): Project[] {
  return [...projects];
}
