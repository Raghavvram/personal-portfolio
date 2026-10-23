
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { milestones } from "./milestone";

gsap.registerPlugin(ScrollTrigger);


const statusColor = {
  COMPLETED: "#ef3038",
  CURRENT: "#22c55e",
  LOADING: "#64748b",
};

function TimelineCard({ item, index }) {
  const color = statusColor[item.status];
  const isLeft = index % 2 === 0;

  return (
    <article
      className={`tl-row ${isLeft ? "tl-left" : "tl-right"}`}
      data-timeline-card
    >
      <div className="tl-side tl-side-left">
        {isLeft ? (
          <Card item={item} color={color} />
        ) : (
          <span className="tl-year">{item.year}</span>
        )}
      </div>

      <div className="tl-node-wrap">
        <span
          className={`tl-node ${item.status === "LOADING" ? "tl-node-loading" : ""}`}
          style={{ "--node-color": color }}
        />
      </div>

      <div className="tl-side tl-side-right">
        {!isLeft ? (
          <Card item={item} color={color} />
        ) : (
          <span className="tl-year">{item.year}</span>
        )}
      </div>
    </article>
  );
}

function Card({ item, color }) {
  return (
    <div
      className={`tl-card ${item.status === "CURRENT" ? "tl-card-current" : ""}`}
      style={{ "--card-color": color }}
    >
      <div className="tl-meta">
        <span>{item.year}</span>
        <span>[{item.status}]</span>
      </div>

      <div className="tl-heading">
        <span className="tl-icon">{item.icon}</span>
        <h3>{item.title}</h3>
      </div>

      <p className="tl-description">{item.description}</p>

      <div className="tl-tags">
        {item.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="tl-card-footer">
        <span>NODE_{String(item.year).replace("?", "X")}</span>
        <span className="tl-card-indicator">●</span>
      </div>
    </div>
  );
}

export default function Timeline() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;

    if (!section || !line) return;

    const ctx = gsap.context(() => {
      // Draw the central timeline line as the user scrolls.
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            end: "bottom 65%",
            scrub: 0.6,
          },
        }
      );

      // Reveal each milestone as it enters the viewport.
      gsap.utils.toArray("[data-timeline-card]").forEach((card, index) => {
        const fromX = card.classList.contains("tl-left") ? -35 : 35;

        gsap.fromTo(
          card,
          { autoAlpha: 0, x: fromX, y: 15 },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
            delay: (index % 2) * 0.08,
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cyber-timeline" ref={sectionRef}>
      <style>{`
        .cyber-timeline {
          width: 100%;
          margin: 0;
        }
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@400;500;600;700&display=swap');

        .cyber-timeline {
          --tl-red: #ef3038;
          --tl-bg: #050505;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 100px 24px 120px;
          color: #e5e7eb;
          background-color: var(--tl-bg);
          background-image:
            linear-gradient(rgba(239,48,56,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239,48,56,.035) 1px, transparent 1px);
          background-size: 42px 42px;
        }

        .cyber-timeline *,
        .cyber-timeline *::before,
        .cyber-timeline *::after {
          box-sizing: border-box;
        }

        .cyber-timeline::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 3px,
            rgba(0,0,0,.22) 4px
          );
        }

        .tl-container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 24px;
        }

        .tl-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .tl-kicker {
          font-family: 'Share Tech Mono', monospace;
          font-size: .72rem;
          letter-spacing: .3em;
          color: var(--tl-red);
          margin-bottom: 14px;
        }

        .tl-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: .95;
          font-weight: 700;
          letter-spacing: .04em;
          margin: 0;
          color: #f3f4f6;
          text-align: center;
        }

        .tl-title span {
          color: var(--tl-red);
          text-shadow: 0 0 10px rgba(239,48,56,.75),
                       0 0 32px rgba(239,48,56,.2);
        }

        .tl-subtitle {
          font-family: 'Share Tech Mono', monospace;
          font-size: .7rem;
          color: #52525b;
          margin-top: 18px;
          letter-spacing: .1em;
        }

        .tl-track {
          position: relative;
          width: 100%;
        }

        .tl-track-base {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 1px;
          transform: translateX(-50%);
          background: rgba(239,48,56,.2);
        }

        .tl-track-line {
          position: absolute;
          inset: 0;
          transform: scaleY(0);
          transform-origin: top center;
          background: linear-gradient(
            to bottom,
            #ff525a,
            #c91d29 70%,
            #541017
          );
          box-shadow: 0 0 8px rgba(239,48,56,.8);
        }

        .tl-row {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 56px minmax(0, 1fr);
          align-items: center;
          margin-bottom: 46px;
          opacity: 1;
        }

        .tl-side {
          min-width: 0;
        }

        .tl-side-left {
          padding-right: 20px;
          text-align: right;
        }

        .tl-side-right {
          padding-left: 20px;
          text-align: left;
        }

        .tl-year {
          font-family: 'Share Tech Mono', monospace;
          font-size: .72rem;
          color: #52525b;
          letter-spacing: .12em;
        }

        .tl-node-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 2;
          min-height: 30px;
        }

        .tl-node {
          width: 13px;
          height: 13px;
          flex: 0 0 13px;
          border-radius: 50%;
          background: var(--node-color);
          border: 2px solid var(--node-color);
          box-shadow: 0 0 12px var(--node-color);
        }

        .tl-node-loading {
          background: var(--tl-bg);
          box-shadow: none;
        }

        .tl-row:has(.tl-card-current) .tl-node {
          animation: tl-pulse 2s ease-in-out infinite;
        }

        .tl-card {
          position: relative;
          padding: 19px;
          text-align: left;
          background: rgba(7, 7, 9, .94);
          border: 1px solid rgba(239,48,56,.22);
          transition: border-color .25s, box-shadow .25s,
                      transform .25s, background .25s;
          overflow-wrap: anywhere;
        }

        .tl-left .tl-card {
          text-align: right;
        }

        .tl-card:hover {
          border-color: var(--card-color);
          box-shadow: 0 0 24px color-mix(in srgb, var(--card-color) 12%, transparent);
          transform: translateY(-3px);
          background: rgba(13, 7, 9, .98);
        }

        .tl-card-current {
          border-color: rgba(34,197,94,.4);
          box-shadow: 0 0 24px rgba(34,197,94,.06);
        }

        .tl-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          font: .62rem 'Share Tech Mono', monospace;
          letter-spacing: .09em;
          color: var(--card-color);
        }

        .tl-heading {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 10px;
        }

        .tl-left .tl-heading {
          justify-content: flex-end;
        }

        .tl-icon {
          color: var(--card-color);
          font: 1rem 'Share Tech Mono', monospace;
          flex-shrink: 0;
        }

        .tl-heading h3 {
          margin: 0;
          color: #e5e7eb;
          font: 700 clamp(.95rem, 1.8vw, 1.2rem)/1.2 'Rajdhani', sans-serif;
        }

        .tl-description {
          margin: 0 0 15px;
          color: #85858f;
          font: .7rem/1.8 'Share Tech Mono', monospace;
        }

        .tl-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tl-left .tl-tags {
          justify-content: flex-end;
        }

        .tl-tags span {
          padding: 4px 7px;
          border: 1px solid color-mix(in srgb, var(--card-color) 30%, transparent);
          background: color-mix(in srgb, var(--card-color) 5%, transparent);
          color: var(--card-color);
          font: .58rem 'Share Tech Mono', monospace;
        }

        .tl-card-footer {
          display: flex;
          justify-content: space-between;
          margin-top: 17px;
          padding-top: 10px;
          border-top: 1px solid rgba(255,255,255,.06);
          color: #41414a;
          font: .55rem 'Share Tech Mono', monospace;
          letter-spacing: .08em;
        }

        .tl-card-indicator {
          color: var(--card-color);
          font-size: .5rem;
        }

        @keyframes tl-pulse {
          0%, 100% { box-shadow: 0 0 8px #22c55e; }
          50% { box-shadow: 0 0 20px #22c55e, 0 0 36px rgba(34,197,94,.3); }
        }

        @media (max-width: 640px) {
          .cyber-timeline {
            padding: 76px 16px 80px;
          }

          .tl-header {
            margin-bottom: 54px;
          }

          .tl-track-base {
            left: 9px;
          }

          .tl-row {
            grid-template-columns: 20px minmax(0, 1fr);
            margin-bottom: 30px;
            align-items: start;
          }

          .tl-node-wrap {
            grid-column: 1;
            grid-row: 1;
            justify-content: flex-start;
            padding-top: 8px;
          }

          .tl-side-left,
          .tl-side-right {
            grid-column: 2;
            padding: 0;
            text-align: left;
          }

          .tl-side-left:has(.tl-card) {
            display: none;
          }

          .tl-side-right:has(.tl-year) {
            display: none;
          }

          .tl-left .tl-side-right,
          .tl-right .tl-side-right {
            display: block;
            text-align: left;
          }

          .tl-left .tl-card {
            text-align: left;
          }

          .tl-left .tl-heading {
            justify-content: flex-start;
          }

          .tl-left .tl-tags {
            justify-content: flex-start;
          }

          .tl-meta {
            justify-content: flex-start;
            gap: 10px;
          }

          .tl-card {
            padding: 15px;
          }

          .tl-description {
            font-size: .68rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tl-node {
            animation: none !important;
          }
        }
      `}</style>

      <div className="tl-container">
        <header className="tl-header">
          <div className="tl-kicker">// Dawn of the Begining</div>
          <h2 className="tl-title">
            MY <span>JOURNEY</span>
          </h2>
          <p className="tl-subtitle">
            [ ACCESSING CAREER DATABASE ... CONNECTION ESTABLISHED ]
          </p>
        </header>

        <div className="tl-track">
          <div className="tl-track-base" aria-hidden="true">
            <div className="tl-track-line" ref={lineRef} />
          </div>

          {milestones.map((item, index) => (
            <TimelineCard key={`${item.year}-${item.title}`} item={item} index={index} />
          ))}
        </div>

        <div className="tl-kicker" style={{ textAlign: "center", marginTop: 64 }}>
          // END_OF_LOG <span className="tl-blink">█</span>
        </div>
      </div>

      <style>{`
        .tl-blink {
          animation: tl-blink 1s step-end infinite;
        }
        @keyframes tl-blink {
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
