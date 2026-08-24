import { motion } from "framer-motion";
import { creativeTypes } from "./data";
import { revealProps, Reveal } from "./motion";
import { SectionLabel } from "./SectionLabel";

export function CreativesSection() {
  return <section id="creatives" className="creatives-section section-pad"><Reveal className="container creatives-head"><div><SectionLabel>BUILT FOR</SectionLabel><h2 className="display-title">Every creative professional<br /><em>who deserves to be protected.</em></h2></div><p>Proofoya is made for the people whose work carries a client’s milestone — and whose careers deserve an evidence trail that stays theirs.</p></Reveal><div className="container creative-grid">{creativeTypes.map((creative, index) => <motion.article {...revealProps(index * 0.085)} className="creative-card" key={creative.name}><div className="creative-photo"><img src={creative.image} alt={`${creative.name} using Proofoya`} /></div><h3>{creative.name}</h3><p>{creative.copy}</p><div className="creative-tags">{creative.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></motion.article>)}</div></section>;
}
