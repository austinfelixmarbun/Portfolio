export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  image: string;
  images: string[];
  tags: string[];
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
  category: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Tool Lending App",
    slug: "tool-lending-app",
    description: `Inventory and tool lending system that digitized 150,000 industrial tools 
      at PT Dirgantara Indonesia`,
    detailedDescription: `A full-stack inventory management web application 
      built during my internship at PT Dirgantara Indonesia (Indonesian Aerospace). 
      It replaces paper-based inventory cards with a digital workflow for borrowing, 
      verifying, and returning industrial tools, using a PostgreSQL, Express.js, 
      React, and Node.js (PERN) stack in a containerized monorepo.`,
    image: "/project_slides/login_page.png",
    images: [
      "/project_slides/login_page.png",
      "/project_slides/dashboard_dark.png",
      "/project_slides/dashboard_light.png",
      "/project_slides/borrow_dark.png",
      "/project_slides/inventory_dark.png",
      "/project_slides/verify_dark.png",
      "/project_slides/return_dark.png",
      "/project_slides/user_dark.png",
    ],
    tags: ["PERN", "Full-Stack", "Inventory", "Docker"],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "Tailwind CSS",
      "Docker Compose",
    ],
    features: [
      "Digitized inventory of 150,000 industrial tools, with 100,000+ physical inventory cards migrated to PostgreSQL",
      "Barcode-based real-time tool tracking",
      "End-to-end borrow, verify, and return workflow",
      "Fast/slow-moving item categorization for procurement insights",
      "Dashboard with dark and light themes",
      "User management and secure login",
      "Eliminated an estimated Rp 6.5M/year in procurement costs",
    ],
    learningOutcomes: [
      "Building a full-stack PERN application for a real enterprise use case",
      "Designing and migrating relational schemas with PostgreSQL and Drizzle ORM",
      "Designing RESTful APIs with Express.js",
      "Containerizing a monorepo with Docker Compose",
      "Translating paper-based operational workflows into software",
    ],
    links: {
      visit: "/projects/tool-lending-app",
      github: "https://github.com/austinfelixmarbun",
    },
    author: "Austin",
    authorAvatar: "/icon.svg",
    category: "Web Application",
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
