import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Reveal } from "./motion";
import { SectionLabel } from "./SectionLabel";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const submitWaitlist = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (email.trim()) setSubmitted(true); };
  return <section id="waitlist" className="waitlist-section section-pad"><div className="container waitlist-grid"><Reveal><SectionLabel>EARLY BUILD</SectionLabel><h2 className="display-title">Be among the first creatives<br />to own their work.<br /><em>Forever.</em></h2><p>Proofoya is in early development. Join the waitlist and get priority access when we launch — plus a permanent founding member badge on your profile.</p>{submitted ? <div className="waitlist-success"><Check size={18} /> You’re on the list. We’ll be in touch.</div> : <form className="waitlist-form" onSubmit={submitWaitlist}><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@studio.com" required aria-label="Email address" /><motion.button whileTap={{ scale: 0.97 }} className="button button-light" type="submit">Join the Waitlist <ArrowRight size={16} /></motion.button></form>}</Reveal><Reveal className="perks" delay={0.08}><div><span>01</span><h3>FOUNDING MEMBER BADGE</h3><p>Permanently on your profile.</p></div><div><span>02</span><h3>PRIORITY ACCESS</h3><p>First in when we launch.</p></div><div><span>03</span><h3>FREE AI SUMMARIES</h3><p>For your first 10 deals.</p></div></Reveal></div></section>;
}
