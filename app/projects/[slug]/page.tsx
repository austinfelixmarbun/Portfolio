import { getAllProjectSlugs, getProjectBySlug } from "@/app/lib/projects";
import { projectDetailStyles as s } from "@/app/styles/styles";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { homePageStyles as hps } from "../../styles/styles"
import { cn } from "@/app/lib/utils";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}


export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className={s.pageContainer}>
      <div
        className={cn(hps.backgroundGrid.wrapper, hps.backgroundGrid.pattern)}
      />
      <div className={s.innerContainer}>
          <div className={s.backButtonContainer}>
          <Link
            href="/projects"
            className={s.backButton}
          >
            <ArrowLeft className={s.backIcon} />
            Back to Projects
          </Link>
        </div>
        <div className={s.projectHeader}>
          <div className={s.headerFlex}>
            <div className={s.headerLeft}>
              <div className={s.titleContainer}>
                <h1 className={s.projectTitle}>{project.title}</h1>
              </div>
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
            </div>
            <div className={s.actionButtonsContainer}>
              {project.links.visit && (
                <Link
                  href={project.links.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.visitButton}
                >
                  <ExternalLink className={s.buttonIcon} />
                  Github
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className={s.imageContainer}>
          <img
            src={project.image}
            alt={project.title}
            className={s.projectImage}
          />
        </div>
        <div className={s.gridContainer}>
          <div className={s.mainContent}>
            <section>
              <h2 className={s.sectionTitle}>Project Overview</h2>
              <div className={s.prose}>
                <p className={s.proseText}>{project.detailedDescription}</p>
              </div>
            </section>
            <section>
              <h2 className={s.sectionTitle}>Learning Outcomes</h2>
              <div className={s.learningOutcomesGrid}>
                {project.learningOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className={s.learningOutcomeCard}
                  >
                    <div className={s.learningOutcomeNumber}>
                      <span className={s.learningOutcomeNumberText}>
                        {idx + 1}
                      </span>
                    </div>
                    <span className={s.learningOutcomeText}>{outcome}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className={s.sidebar}>
            <section>
              <h3 className={s.sidebarSectionTitle}>Tech Stack</h3>
              <div className={s.techStackContainer}>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={s.techStackItem}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
            <section className={s.sidebarSection}>
              <h3 className={s.sidebarSectionTitle}>Project Info</h3>
              <div className={s.projectInfoContainer}>
                <div>
                  <p className={s.projectInfoLabel}>Author</p>
                  <div className={s.authorContainer}>
                    <img
                      src={project.authorAvatar}
                      alt={project.author}
                      className={s.authorAvatar}
                    ></img>
                    <p className={s.authorName}>{project.author}</p>
                  </div>
                </div>
                <div>
                  <p className={s.projectInfoLabel}>Category</p>
                  <p className={s.projectInfoText}>{project.category}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetaData({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project not found" };
  }
  return {
    title: `${project.title} - Services`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
    },
  };
}
