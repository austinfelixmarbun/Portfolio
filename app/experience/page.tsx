"use client";

import { Ship, Code2 } from "lucide-react";
import { Timeline } from "../components/ui/timeline";
import { cn } from "../lib/utils";
import { homePageStyles as hps, timelineStyles as s } from "../styles/styles";

export default function TimeLine() {
  const data = [
    {
      title: "Aug - Dec 2025",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerBlue}>
              <Ship className={s.iconBlue} />
            </div>
            <div>
              <h3 className={s.contentTitle}>Database Teaching Assistant</h3>
              <p className={s.contentSubtitle}>Computer Science Faculty</p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Guided 40+ students through relational database management and
              hands-on SQL query optimization.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Managed weekly lab sessions, practical assignments, and database
              design reviews.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Evaluated database architecture projects using MySQL and EA Spark.
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>DBMS</span>
            <span className={s.techBadge}>MariaDB</span>
            <span className={s.techBadge}>EA Spark</span>
            <span className={s.techBadge}>MySQL</span>
          </div>
        </div>
      ),
    },
    {
      title: "Sep - Dec 2025",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerBlue}>
              <Ship className={s.iconBlue} />
            </div>
            <div>
              <h3 className={s.contentTitle}>AI Research Assistant</h3>
              <p className={s.contentSubtitle}>Computer Science Faculty</p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Built responsive dynamic web interfaces to visualize complex data
              outputs and AI model metrics.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Integrated frontend UI components with Python backend data
              pipelines.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Collaborated on data pre-processing and model evaluation
              workflows.
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>TypeScript</span>
            <span className={s.techBadge}>Tailwind</span>
            <span className={s.techBadge}>Python</span>
          </div>
        </div>
      ),
    },
    {
      title: "Jan - Feb 2026",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerBlue}>
              <Ship className={s.iconBlue} />
            </div>
            <div>
              <h3 className={s.contentTitle}>Full-Stack Developer</h3>
              <p className={s.contentSubtitle}>Indonesian Aerospace</p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Architected and built a full-stack tool management application to
              streamline asset tracking and inventory workflows.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Designed interactive React components backed by Node.js and
              Express RESTful APIs for real-time data handling.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Integrated PostgreSQL databases to ensure structured schema design
              and scalable server-side data storage.
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>PostgreSQL</span>
            <span className={s.techBadge}>ExpressJs</span>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>NodeJs</span>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className={s.container}>
      <div
        className={cn(hps.backgroundGrid.wrapper, hps.backgroundGrid.pattern)}
      />
      <div className={s.innerContainer}>
        <div className="mb-8">
          <div className={s.timelineBadge}>
            <span className={s.timelineBadge}>Career Timeline</span>
          </div>
          <h1 className={s.mainTitle}>My Journey</h1>
          <p className={s.mainParagraph}>
            A timeline of my hands-on experience in full-stack development, AI
            research, and academic instruction.
          </p>
          <div className={s.legendContainer}>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-green-500`}></div>\
              <span className={s.legendText}>Web</span>
            </div>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-yellow-500`}></div>\
              <span className={s.legendText}>AI</span>
            </div>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-blue-500`}></div>\
              <span className={s.legendText}>Data</span>
            </div>
          </div>
        </div>
        <Timeline data={data} />
        <div className={s.techSectionContainer}>
          <div className={s.techSectionHeader}>
            <div className={s.techSectionIconContainer}>
              <Code2 className={s.techSectionIcon} />
            </div>
            <div>
              <h3 className={s.techSectionTitle}>Technologies Mastered</h3>
              <p className={s.techSectionSubtitle}>
                Full-Stack expertise across modern tech stack
              </p>
            </div>
          </div>
          <div className={s.techGrid}>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>Frontend</div>
              <div className={s.techCardContent}>
                React, Next.js, TypeScript, Tailwind CSS
              </div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>Backend</div>
              <div className={s.techCardContent}>
                Node.js, Express, Python, PyTorch
              </div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>
                Databases
              </div>
              <div className={s.techCardContent}>
                PostgreSQL, MongoDB, MySQL
              </div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>
                Cloud & DevOps
              </div>
              <div className={s.techCardContent}>Docker, CI/CD</div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>Tools</div>
              <div className={s.techCardContent}>Git, Figma, Vercel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
