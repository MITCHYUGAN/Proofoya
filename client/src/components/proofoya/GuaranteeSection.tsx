import { Infinity as InfinityIcon, Sparkles } from "lucide-react";
import { Reveal } from "./motion";
import { SectionLabel } from "./SectionLabel";

export function GuaranteeSection() {
  return (
    <section className="guarantee-section section-pad">
      <div className="container guarantee-grid">
        <Reveal>
          <SectionLabel>THE PROOFOYA GUARANTEE</SectionLabel>
          <h2 className="display-title guarantee-title">
            Even if Proofoya disappears tomorrow —<br />
            <span>your work,</span>
            <br />
            <span>your proof,</span>
            <br />
            <em>your legacy survives.</em>
          </h2>
        </Reveal>
        <Reveal className="guarantee-side" delay={0.08}>
          <p>
            Traditional platforms are hard drives with a nice UI. When they shut down, your files go with them. Proofoya stores your final deliverables on Irys — a permanent blockchain storage layer.
            Not our servers. Not AWS. The blockchain. We are physically incapable of deleting your work.
          </p>
          <div className="guarantee-stats">
            <div>
              <InfinityIcon size={18} />
              <h3>PERMANENT</h3>
              <span>No expiry date. Ever.</span>
            </div>
            <div>
              <span className="icon-glyph">⬡</span>
              <h3>ON-CHAIN</h3>
              <span>Irys blockchain. Tamper-proof.</span>
            </div>
            <div>
              <Sparkles size={18} />
              <h3>AI-VERIFIED</h3>
              <span>Google Gemini summarizes every deal.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
