import { Reveal } from "./motion";
import { SectionLabel } from "./SectionLabel";

const cities = ["Lagos", "Accra", "Nairobi", "Johannesburg", "Dakar", "Cairo", "Kigali", "Abidjan"];

export function AfricaSection() {
  return <section className="africa-section section-pad"><div className="container africa-grid"><Reveal className="africa-copy"><SectionLabel>AFRICA</SectionLabel><h2 className="display-title">Built in Africa.<br /><em>Designed for the world.</em></h2><p>Africa&apos;s creative economy is full of people producing work for global audiences. Proofoya is building infrastructure around the people behind that work.</p><div className="city-grid">{cities.map((city) => <span key={city}>{city}</span>)}</div></Reveal><Reveal className="africa-photo" delay={0.08}><figure><img src="/assets/proofoya-africa-editorial.png" alt="A creative professional walking through contemporary African architecture" /><figcaption>CONTEMPORARY AFRICAN CREATIVE PRACTICE · 2026</figcaption></figure></Reveal></div></section>;
}
