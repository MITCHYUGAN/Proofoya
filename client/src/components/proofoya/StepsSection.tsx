import { motion } from "framer-motion";
import { steps } from "./data";
import { revealProps, Reveal } from "./motion";
import { SectionLabel } from "./SectionLabel";

export function StepsSection() {
  return (
    <section id="how-it-works" className="steps-section section-pad">
      <Reveal className="container narrow-heading">
        <SectionLabel>HOW PROOFOYA WORKS</SectionLabel>
        <h2 className="display-title">
          From first message to forever —<br />
          <em>every step is proof.</em>
        </h2>
      </Reveal>
      <Reveal className="container flow-legend">
        <span>MESSAGES</span>
        <i />
        <span>AGREEMENT</span>
        <i />
        <span>DELIVERY</span>
        <i />
        <span>PAYMENT</span>
        <i />
        <span>PERMANENT RECORD</span>
      </Reveal>
      <div className="container steps-list">
        {steps.map((step, index) => (
          <motion.article {...revealProps(index * 0.08)} className="step-row" key={step.number}>
            <div className="step-number">
              <strong>{step.number}</strong>
              <span>{step.eyebrow}</span>
            </div>
            <div className="step-copy">
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
            <div className="step-tags">
              {step.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
