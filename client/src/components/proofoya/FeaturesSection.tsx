import { motion } from "framer-motion";
import { features } from "./data";
import { revealProps, Reveal } from "./motion";
import { SectionLabel } from "./SectionLabel";

export function FeaturesSection() {
  return <section id="features" className="features-section section-pad"><Reveal className="container narrow-heading"><SectionLabel>WHAT MAKES PROOFOYA DIFFERENT</SectionLabel><h2 className="display-title">Built on infrastructure.<br /><em>Designed for creatives.</em></h2></Reveal><div className="container feature-grid">{features.map((feature, index) => { const Icon = feature.icon; return <motion.article {...revealProps(index * 0.055)} className={feature.wide ? "feature-card feature-wide" : "feature-card"} key={feature.title}><Icon size={19} strokeWidth={1.45} /><h3>{feature.title}</h3><p>{feature.copy}</p><span className="feature-label">{feature.label}</span></motion.article>; })}</div></section>;
}
