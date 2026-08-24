import { Check } from "lucide-react";
import { comparisons } from "./data";
import { Reveal } from "./motion";
import { SectionLabel } from "./SectionLabel";

export function ComparisonSection() {
  return <section className="comparison-section section-pad"><Reveal className="container comparison-head"><SectionLabel>THE PROOFOYA DIFFERENCE</SectionLabel><h2 className="display-title">We built what the others couldn't.</h2></Reveal><Reveal className="container table-scroll"><div className="comparison-table comparison-table-three" role="table" aria-label="Proofoya platform comparison"><div className="comparison-tr table-head" role="row"><span>CAPABILITY</span><span>TRADITIONAL PLATFORMS</span><span>PROOFOYA</span></div>{comparisons.map((row) => <div className="comparison-tr" role="row" key={row[0]}><strong>{row[0]}</strong><span>{row[2]}</span><span className="proofoya-cell"><Check size={15} /> {row[1]}</span></div>)}</div></Reveal><Reveal className="container comparison-caption">Traditional platforms do important work. They just were not built for permanence.</Reveal></section>;
}
