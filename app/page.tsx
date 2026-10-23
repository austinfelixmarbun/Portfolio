"use client";

import Link from "next/link";
import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Cover } from "./components/ui/Cover";
import { PointerHighlight } from "./components/ui/pointer";
import { Spotlight } from "./components/ui/Spotlight";
import { cn } from "./lib/utils";
import { homePageStyles as hps, spotlightStyles as ss } from "./styles/styles";

export default function Home(): React.ReactElement {
  return (
    <div className={hps.container}>
      <div
        className={cn(hps.backgroundGrid.wrapper, hps.backgroundGrid.pattern)}
      />
      <Spotlight
        className={ss.position}
        fill="hsla(0, 100%, 67%, 0.68)"
      />
      <section className={cn(hps.heroSection, "relative z-20")}>
        <div className="relative z-20">
          <h1 className={hps.h1}>
            Hey, I&apos;m{" "}
            <span className={hps.spanWithMargin}>
              <Cover>Austin</Cover>
            </span>
          </h1>
          <h2 className={hps.h2}>
            Software{" "}
            <span className={hps.spanInline}>
              <PointerHighlight>Engineer</PointerHighlight>
            </span>
          </h2>
          <div className="mb-6">
            <div className={hps.calloutCard.wrapper}>
              <div className={hps.calloutCard.innerContainer}>
                <div className={hps.calloutCard.textContainer}>
                  <svg
                    className={hps.calloutCard.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden
                  ></svg>
                  <div className={hps.calloutCard.text}>
                    Connect with me on Github
                  </div>
                </div>
                <a
                  href="https://github.com/austinfelixmarbun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={hps.calloutCard.button}
                >
                  Follow
                </a>
              </div>
            </div>
          </div>
          <div className={hps.paragraph}>
            Solving problem through web app. Currently looking for internship. I
            have built web app for{" "}
            <a
              className={hps.link}
              href="https://www.indonesian-aerospace.com/en/"
              target="_blank"
            >
              <em>Indonesian Aerospace Company</em>
            </a>{" "}
            for Detail Part Manufacturing Division. Check for the project{" "}
            <a
              className={hps.link}
              href="/projects"
            >
              here.
            </a>
          </div>
          <div className={hps.article.wrapper}>
            <div className={hps.article.actContainer}></div>
            <div className={hps.article.content}>
              <div className={hps.article.header}>
                <h3 className={hps.article.title}>Activity</h3>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-white/10 p-4">
                <GitHubCalendar username="austinfelixmarbun" />
              </div>
              <div className={hps.article.linkContainer}>
                <Link
                  href="/projects"
                  className={hps.article.link}
                >
                  <span>See My Projects</span>
                  <svg
                    className={hps.article.linkIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
