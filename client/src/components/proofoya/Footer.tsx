import { Instagram } from "lucide-react";
import { Brand } from "./Brand";

export function Footer({ onWaitlist }: { onWaitlist: () => void }) {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Brand footer />
          <p>
            Your work.
            <br />
            <em>Permanently yours.</em>
          </p>
        </div>
        <div className="footer-group">
          <span>NAVIGATE</span>
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#creatives">For Creatives</a>
          <a href="#for-clients">For Clients</a>
          <button type="button" onClick={onWaitlist}>
            Join Waitlist
          </button>
        </div>
        <div className="footer-group">
          <span>SOCIAL</span>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            X / Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram size={15} /> Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 PROOFOYA · BUILT FOR AFRICAN CREATIVES</span>
        <span>POWERED BY AI + BLOCKCHAIN INFRASTRUCTURE</span>
      </div>
    </footer>
  );
}
