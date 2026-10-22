"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Cover } from "./components/ui/Cover";
import { PointerHighlight } from "./components/ui/pointer";
import { Spotlight } from "./components/ui/Spotlight";
import { cn } from "./lib/utils";
import { homePageStyles as hps, spotlightStyles as ss } from "./styles/styles";

export default function Home(): React.ReactElement {
  const vidRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.play().catch((e) => {
        console.log("Autoplay prevented:", e);
      });
    }
  }, []);

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
                    Connect with me on Linkedin
                  </div>
                </div>
                <a
                  href="https://linkedin.com/in/austin-felix-marbun"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Linkedin"
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
          <article className={hps.article.wrapper}>
            <div className={hps.article.videoContainer}>
              <video
                ref={vidRef}
                className={hps.article.video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                style={hps.article.videoStyles}
              >
                <source
                  src="/images/homevideo.webm"
                  type="video/webm"
                />
                Your browser does not support the video
              </video>
            </div>
            <div className={hps.article.content}>
              <div className={hps.article.header}>
                <svg
                  className={hps.article.headerIcon}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>Featured Work</span>
              </div>
              <h3 className={hps.article.title}>Development..</h3>
              <p className={hps.article.description}>Development..</p>
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
          </article>
        </div>
      </section>
    </div>
  );
}
