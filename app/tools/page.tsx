"use client";

import {
  homePageStyles as hps,
  toolsPageStyles as s,
} from "@/app/styles/styles";
import Image from "next/image";
import Link from "next/link";
import { CometCard } from "../components/ui/comet-card";
import { cn } from "../lib/utils";

interface Tool {
  name: string;
  category: string;
  icon: string;
  href: string;
}

const tools: Tool[] = [
  {
    name: "VS Code",
    category: "Text Editor",
    icon: "/tool_images/vscode.webp",
    href: "https://code.visualstudio.com/",
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: "/tool_images/html.webp",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: "/tool_images/css.webp",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JS (ES6+)",
    category: "Language",
    icon: "/tool_images/javascript.webp",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
  },
  {
    name: "React",
    category: "Frontend Library",
    icon: "/tool_images/react.webp",
    href: "https://react.dev/",
  },
  {
    name: "Tailwind CSS",
    category: "CSS Framework",
    icon: "/tool_images/tailwind.webp",
    href: "https://tailwindcss.com/",
  },
  {
    name: "Next.js",
    category: "Full-Stack Framework",
    icon: "/tool_images/nextjs.webp",
    href: "https://nextjs.org/",
  },
  {
    name: "Node.js",
    category: "Runtime",
    icon: "/tool_images/nodejs.webp",
    href: "https://nodejs.org/en",
  },
  {
    name: "Express",
    category: "Backend Framework",
    icon: "/tool_images/express.webp",
    href: "https://expressjs.com/",
  },
  {
    name: "Python",
    category: "Language",
    icon: "/tool_images/python.webp",
    href: "https://www.python.org/",
  },
  {
    name: "Pandas",
    category: "Data Science",
    icon: "/tool_images/pandas.webp",
    href: "https://pandas.pydata.org/",
  },
  {
    name: "PyTorch",
    category: "Machine Learning",
    icon: "/tool_images/pytorch.webp",
    href: "https://pytorch.org/",
  },
  {
    name: "Scikit-Learn",
    category: "Machine Learning",
    icon: "/tool_images/scikitlearn.webp",
    href: "https://scikit-learn.org/",
  },
  {
    name: "PostgreSQL",
    category: "Relational Database",
    icon: "/tool_images/postgresql.webp",
    href: "https://www.postgresql.org/",
  },
  {
    name: "MySQL",
    category: "Relational Database",
    icon: "/tool_images/mysql.webp",
    href: "https://www.mysql.com/",
  },
  {
    name: "MongoDB",
    category: "NoSQL Database",
    icon: "/tool_images/mongodb.webp",
    href: "https://www.mongodb.com/",
  },
  {
    name: "Git",
    category: "Version Control",
    icon: "/tool_images/git.webp",
    href: "https://git-scm.com/",
  },
  {
    name: "Docker",
    category: "Containerization",
    icon: "/tool_images/docker.webp",
    href: "https://www.docker.com/",
  },
  {
    name: "Vercel",
    category: "Deployment",
    icon: "/tool_images/vercel.webp",
    href: "https://vercel.com/",
  },
  {
    name: "Vite",
    category: "Build Tool",
    icon: "/tool_images/vite.webp",
    href: "https://vite.dev/",
  },
];

export default function ToolsPage() {
  return (
    <div className={s.pageContainer}>
      <div
        className={cn(hps.backgroundGrid.wrapper, hps.backgroundGrid.pattern)}
      />
      <div className={s.contentContainer}>
        <div className={s.headerContainer}>
          <h1 className={s.headerTitle}>Tools</h1>
          <p className={s.headerSubtitle}>Tools I Frequently use.</p>
        </div>
        <div className={s.toolsGrid}>
          {tools.map((tool) => (
            <CometCard key={tool.name}>
              <Link
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className={s.toolCardLink}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className={s.toolIconContainer}>
                  <Image
                    src={tool.icon}
                    alt={`${tool.name} logo`}
                    width={56}
                    height={56}
                    className={s.toolIcon}
                  />
                </div>
                <div className={s.toolTextContainer}>
                  <h3 className={s.toolName}>{tool.name}</h3>
                  <p className={s.toolCategory}>{tool.category}</p>
                </div>
              </Link>
            </CometCard>
          ))}
        </div>
      </div>
    </div>
  );
}
