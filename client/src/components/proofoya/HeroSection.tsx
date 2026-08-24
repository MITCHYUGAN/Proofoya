import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { ProjectDashboard } from "./Dashboard";
import type { DashboardTab } from "./data";
import { Reveal } from "./motion";
import { SectionLabel } from "./SectionLabel";

export function HeroSection({ onWaitlist }: { onWaitlist: () => void }) {
  const [activeDashboardTab, setActiveDashboardTab] = useState<DashboardTab>("Projects");
  return (
    <section className="hero section-pad">
      <div className="container hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}>
          <SectionLabel>BUILT FOR AFRICAN CREATIVES · POWERED BY AI + BLOCKCHAIN</SectionLabel>
          <div className="headline-wrap">
            <h1>
              Your work deserves
              <br />
              to outlast any
              <br />
              platform.
            </h1>
          </div>
          <p className="hero-kicker">
            Get paid. Get proof. <strong>Build legacy.</strong>
          </p>
          <p className="body-copy hero-body">
            Proofoya is where photographers, videographers, and designers find clients, deliver work, and get paid — with every agreement, file, and transaction stored permanently on the blockchain
            and summarized by AI. No disputes. No ghosting. No data loss.
          </p>
          <div className="button-row">
            <motion.button whileTap={{ scale: 0.97 }} className="button button-light" type="button" onClick={onWaitlist}>
              Join the waitlist <ArrowRight size={16} />
            </motion.button>
            <a className="button button-dark" href="#how-it-works">
              See how it works
            </a>
          </div>
        </motion.div>
        <motion.div className="hero-camera" initial={{ opacity: 0, scale: 0.97, x: 18 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.72, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}>
          <img src="/assets/proofoya-camera-hero.png" alt="Purple and gold camera with flowing film representing a permanent creative archive" />
        </motion.div>
      </div>
      <Reveal className="hero-dashboard" delay={0.16}>
        <ProjectDashboard activeTab={activeDashboardTab} onTabChange={setActiveDashboardTab} />
      </Reveal>
    </section>
  );
}
