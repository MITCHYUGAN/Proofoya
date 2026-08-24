/**
 * Proofoya page design reminder: Permanent Editorial Infrastructure.
 * Section components preserve the archival grid, editorial contrast, and
 * evidence-led motion system across both visual themes.
 */
import { AfricaSection } from "@/components/proofoya/AfricaSection";
import { ComparisonSection } from "@/components/proofoya/ComparisonSection";
import { CreativesSection } from "@/components/proofoya/CreativesSection";
import { FeaturesSection } from "@/components/proofoya/FeaturesSection";
import { Footer } from "@/components/proofoya/Footer";
import { GuaranteeSection } from "@/components/proofoya/GuaranteeSection";
import { Header } from "@/components/proofoya/Header";
import { HeroSection } from "@/components/proofoya/HeroSection";
import { ProblemSection } from "@/components/proofoya/ProblemSection";
import { StepsSection } from "@/components/proofoya/StepsSection";
import { WaitlistSection } from "@/components/proofoya/WaitlistSection";

export default function Home() {
  const scrollToWaitlist = () => document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" });
  return (
    <div id="top" className="site-shell">
      <Header onWaitlist={scrollToWaitlist} />
      <main>
        <HeroSection onWaitlist={scrollToWaitlist} />
        <ProblemSection />
        <StepsSection />
        <FeaturesSection />
        <CreativesSection />
        <AfricaSection />
        <GuaranteeSection />
        <ComparisonSection />
        <WaitlistSection />
      </main>
      <Footer onWaitlist={scrollToWaitlist} />
    </div>
  );
}
