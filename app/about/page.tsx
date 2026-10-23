import Link from "next/link";
import { BackgroundBeamsWithCollision } from "../components/ui/back-beams-collision";
import { cn } from "../lib/utils";
import { homePageStyles as hps, aboutPageStyles as s } from "../styles/styles";

export default function AboutPage() {
  const interests = [
    "FULL-STACK DEV",
    "DATA SCIENCE",
    "NLP & AI",
    "WEB APPS",
    "MUSIC",
    "SPORTS",
  ];

  const techStack = [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Postgres",
    "Tailwind",
    "Python",
    "PyTorch",
  ];

  const email = "austinfelixmarbun04@gmail.com";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  return (
    <div className={s.pageContainer}>
      <div className={s.contentContainer}>
        <div
          className={cn(hps.backgroundGrid.wrapper, hps.backgroundGrid.pattern)}
        />
        <div className={s.backgroundContainer}>
          <div className={s.backgroundEffect}>
            <BackgroundBeamsWithCollision className="h-full w-full" />
          </div>
          <div className={s.contentWrapper}>
            <h1 className={s.mainHeading}>Austin</h1>
            <div className={s.interestsContainer}>
              {interests.map((interest, index) => (
                <span
                  key={interest}
                  className={s.interestItem}
                >
                  {interest}
                  {index < interests.length - 1 && (
                    <span className={s.interestSeparator}>•</span>
                  )}
                </span>
              ))}
            </div>
            <div className={s.techStackContainer}>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className={s.techPill}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className={s.sectionsContainer}>
              <section>
                <h2 className={s.sectionHeading}>Who I Am</h2>
                <p className={s.paragraph}>
                  Hi, I&apos;m Austin! I&apos;m a Jakarta-based developer and IT
                  student who loves building software that actually makes life
                  easier. I&apos;ve spent the last few years hands-on with
                  full-stack web development and applied AI/NLP, focusing on
                  clean code, solid databases, and practical tools.
                </p>
              </section>

              {/* What I Do */}
              <section>
                <h2 className={s.sectionHeading}>What I Do</h2>
                <p className={s.paragraph}>
                  Right now, I divide my time between finishing my IT degree and
                  shipping real projects. Recently, I built a Tool Management
                  System to streamline inventory tracking with React and
                  Express, as well as NLP sentiment analysis models using
                  PyTorch. I&apos;m always building micro-apps to keep my
                  shipping momentum high.
                </p>
              </section>

              {/* My Journey */}
              <section>
                <h2 className={s.sectionHeading}>Beyond Code</h2>
                <p className={s.paragraph}>
                  When I&apos;m not coding or diving into data, you’ll usually
                  find me staying active with sports, getting lost in a good
                  book, or listening to music.
                </p>
              </section>

              {/* Vision */}
              <section>
                <h2 className={s.sectionHeading}>Vision</h2>
                <p className={s.paragraph}>
                  I believe the best software is the kind that just works
                  without getting in your way. My goal is to build simple,
                  useful tools that actually solve daily problems, combining
                  clean engineering with practical AI to make tech feel
                  effortless.
                </p>
              </section>
            </div>
            <div className={s.ctaContainer}>
              <Link
                href="/contact"
                className={s.primaryButton}
                aria-label="Get in touch — open contact page"
              >
                Get in Touch
              </Link>

              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={s.secondaryButton}
                aria-label={`Compose email to ${email} in Gmail`}
              >
                <svg
                  className={s.emailIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                E-Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
