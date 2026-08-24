import { motion } from "framer-motion";
import { problems } from "./data";
import { revealProps, Reveal } from "./motion";
import { SectionLabel } from "./SectionLabel";

function ProblemVisual({ type }: { type: string }) {
  if (type === "ghost")
    return (
      <div className="issue-visual issue-ghost" aria-hidden="true">
        <span className="skeleton first" />
        <span className="skeleton second" />
        <span className="skeleton third" />
        <span className="fade-block" />
      </div>
    );
  if (type === "grid")
    return (
      <div className="issue-visual issue-grid" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} className={index === 0 ? "active" : ""} />
        ))}
      </div>
    );
  return (
    <div className="issue-visual issue-lines" aria-hidden="true">
      {Array.from({ length: 7 }).map((_, index) => (
        <span key={index} style={{ width: `${86 - index * 8}%` }} />
      ))}
    </div>
  );
}

export function ProblemSection() {
  return (
    <section id="for-clients" className="problem-section section-pad">
      <Reveal className="container narrow-heading">
        <SectionLabel>THE PROBLEM</SectionLabel>
        <h2 className="display-title">
          African creatives are brilliant.
          <br />
          <em>But the system is stacked against them.</em>
        </h2>
      </Reveal>
      <div className="container problem-list">
        {problems.map((problem, index) => (
          <motion.article {...revealProps(index * 0.07)} className="problem-row" key={problem.number}>
            <div className="problem-index">
              <strong>{problem.number}</strong>
              <span>{problem.label}</span>
            </div>
            <div className="problem-copy">
              <h3>{problem.title}</h3>
              <p>{problem.copy}</p>
              <div className="tag-row">
                {problem.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="problem-viz">
              <ProblemVisual type={problem.visual} />
              <p>{problem.stat}</p>
            </div>
          </motion.article>
        ))}
      </div>
      <Reveal className="container problem-bottom">
        There has never been a platform built to protect the creative. <em>Until now.</em>
      </Reveal>
    </section>
  );
}
