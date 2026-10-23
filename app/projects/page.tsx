"use client";

import { useRouter } from "next/navigation";
import { FollowerPointerCard } from "../components/ui/following-pointer";
import { Project, projects } from "../lib/projects";
import { cn } from "../lib/utils";
import { homePageStyles as hps, projectStyles as s } from "../styles/styles";

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className={s.titleComponentContainer}>
    <img
      src={avatar}
      height="20"
      width="20"
      alt={title}
      className={`${s.titleComponentAvatar} h-5 w-5 rounded-full object-cover`}
    />
    <p className={s.titleComponentText}>{title}</p>
  </div>
);

export default function ProjectsPage() {
  return (
    <div className={s.pageContainer}>
      <div
        className={cn(hps.backgroundGrid.wrapper, hps.backgroundGrid.pattern)}
      />
      <div className={s.innerContainer}>
        <div className={s.header}>
          <h1 className={s.pageTitle}>Projects</h1>
          <p className={s.pageSubtitle}>Apps</p>
        </div>
        <div className={s.projectsGrid}>
          {projects.map((project) => (
            <FollowerPointerCard
              key={project.slug}
              title={
                <TitleComponent
                  title={project.author}
                  avatar={project.authorAvatar}
                />
              }
            >
              <ProjectCard project={project} />
            </FollowerPointerCard>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();
  return (
    <div
      className={s.projectCard}
      onClick={() => {
        router.push(`/projects/${project.slug}`); // HEREE
      }}
    >
      <div className={s.imageContainer}>
        <img
          src={project.image}
          alt={project.title}
          className={s.projectImage}
        ></img>
      </div>
      <div className={s.contentSection}>
        <h3 className={s.projectTitle}>{project.title}</h3>
        <p className={s.projectDescription}>{project.description}</p>
        <div className={s.tagsContainer}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={s.tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className={s.actionsContainer}>
          <div className={s.actionsLinksContainer}>
            {project.links.github && (
              <a
                href={project.links.github}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className={s.otherButton}
                style={{ cursor: "none" }}
              >
                GitHub
              </a>
            )}
            {project.links.pypi && (
              <a
                href={project.links.pypi}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className={s.otherButton}
              >
                PyPI
              </a>
            )}
            {project.links.link && (
              <a
                href={project.links.link}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className={s.otherButton}
              >
                Link
              </a>
            )}
          </div>
          <div className="flex gap-1">
            {project.links.archive && (
              <span className={s.archivedText}>Archived</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
