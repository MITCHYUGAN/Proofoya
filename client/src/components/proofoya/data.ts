import { CircleCheck, Infinity as InfinityIcon, LockKeyhole, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";

export const problems = [
  {
    number: "01",
    label: "THE GHOST",
    title: "Clients ghost after delivery.",
    copy: "You shoot the wedding. You deliver 200 edited photos. The client downloads everything — then disappears.",
    tags: ["NO PAYMENT", "NO RECOURSE", "NO PROOF"],
    visual: "ghost",
    stat: "Happens to 1 in 3 African photographers",
  },
  {
    number: "02",
    label: "THE BAN",
    title: "Platforms ban. Work vanishes.",
    copy: "6 years of portfolio. 400 client reviews. One policy dispute. Your Instagram, your entire digital presence — gone overnight.",
    tags: ["PORTFOLIO GONE", "REVIEWS GONE", "NO APPEAL"],
    visual: "grid",
    stat: "No backup. No warning. No appeal.",
  },
  {
    number: "03",
    label: "THE CRASH",
    title: "Hard drives fail. Work disappears.",
    copy: "That SD card with 3 years of your best work. Failed. Traditional platforms are no different — they're just bigger hard drives.",
    tags: ["UNRECOVERABLE", "SINGLE POINT OF FAILURE", "NO BACKUP TRAIL"],
    visual: "lines",
    stat: "Data loss is permanent on legacy systems",
  },
];

export const steps = [
  {
    number: "01",
    eyebrow: "FIND & AGREE",
    title: "Find your client. Lock the deal.",
    copy: "Browse clients or get discovered. Negotiate inside Proofoya. When both sides are ready, click Agree — and every message, brief, style reference, and file exchanged is permanently archived on the blockchain. Summarized into a clean agreement by AI.",
    tags: ["AI AGREEMENT SUMMARY", "STORED ON-CHAIN"],
  },
  {
    number: "02",
    eyebrow: "DELIVER & REVIEW",
    title: "Deliver your work. Client reviews.",
    copy: "Upload final files. The client can view everything at full quality — but cannot download a single file until payment is confirmed. They comment, request final tweaks, approve.",
    tags: ["VIEW-ONLY UNTIL PAYMENT", "REVISION TRACKED"],
  },
  {
    number: "03",
    eyebrow: "PAYMENT UNLOCKS EVERYTHING",
    title: "Client pays. Files unlock. Legacy begins.",
    copy: "Payment confirmed — files unlock instantly. The completed deal: files, agreement, payment record, and review are bundled and stored permanently on Irys. This deal now lives in your verified portfolio.",
    tags: ["PAID", "PERMANENT", "ADDED TO PROFILE"],
  },
];

export type Feature = { icon: LucideIcon; title: string; copy: string; label: string; wide?: boolean };
export const features: Feature[] = [
  {
    icon: InfinityIcon,
    title: "Permanent file storage",
    copy: "Final deliverables are stored on Irys at about $0.05/GB. Not hosted. Written once. Guaranteed to exist forever.",
    label: "POWERED BY IRYS",
    wide: true,
  },
  {
    icon: Sparkles,
    title: "AI-powered deal summaries",
    copy: "Google Gemini reads your negotiation and generates a clean structured agreement. Stored permanently.",
    label: "POWERED BY GOOGLE GEMINI",
    wide: true,
  },
  { icon: LockKeyhole, title: "Pay-to-download delivery", copy: "Not a single file downloads until payment clears. Zero ghosting. Zero disputes.", label: "VIEW → APPROVE → PAY → DOWNLOAD" },
  { icon: ShieldCheck, title: "Deal-verified reputation", copy: "Every review is tied to a completed, paid deal. No fake testimonials. Provably real.", label: "VERIFIED BY COMPLETED WORK" },
  {
    icon: CircleCheck,
    title: "Authorship proof",
    copy: "The earliest verifiable record of your work on a tamper-proof ledger. If someone steals your photo, you can prove you created it first.",
    label: "ON-CHAIN TIMESTAMP",
  },
  {
    icon: InfinityIcon,
    title: "Yours even if we shut down",
    copy: "If Proofoya is acquired or restricted, your files, agreements, and reputation still exist on the blockchain. We cannot take them from you.",
    label: "DESIGNED FOR PERMANENCE",
  },
];

export const creativeTypes = [
  {
    name: "Photographers",
    copy: "Wedding, portrait, event, commercial — if you shoot it, Proofoya protects it.",
    tags: ["WEDDING DELIVERIES", "CLIENT SELECTION", "PERMANENT PORTFOLIO"],
    image: "/assets/proofoya-photographer.png",
  },
  {
    name: "Videographers",
    copy: "Deliver full-resolution footage, music videos, and brand content — payment-gated and permanently stored.",
    tags: ["FILM DELIVERIES", "BRAND SHOOTS", "YOUTUBE CONTENT"],
    image: "/assets/proofoya-videographer.png",
  },
  {
    name: "Designers & illustrators",
    copy: "Logo files, brand kits, illustrations — delivered clean, paid upfront, stored forever.",
    tags: ["BRAND IDENTITY", "ILLUSTRATIONS", "UI/UX HANDOFFS"],
    image: "/assets/proofoya-designer.png",
  },
];

export const comparisons = [
  ["Client marketplace", "Independent client discovery", "Template site"],
  ["Payment-gated delivery", "Payment clears before download", "Limited or add-on workflow"],
  ["Permanent file storage", "Written permanently to Irys", "Subscription-bound"],
  ["Verifiable delivery proof", "Deal record is stored on-chain", "No"],
  ["AI agreement summary", "Structured from your negotiation", "No"],
  ["Encrypted deal history", "Yes, archived with the work", "No"],
  ["Verified deal-based reputation", "Every review is a completed deal", "No"],
  ["Authorship proof", "Earliest permanent work record", "No"],
  ["Survives platform shutdown", "Independent permanent record", "No"],
];

export const dashboardTabs = ["Projects", "Deliveries", "Contracts", "Clients", "Payments"] as const;
export type DashboardTab = (typeof dashboardTabs)[number];
export type DashboardTone = "green" | "amber" | "violet" | "rose";
type DashboardRow = { title: string; subtitle: string; value: string; status: string; tone: DashboardTone };
type DashboardView = { label: string; rows: DashboardRow[]; detailEyebrow: string; detailTitle: string; detailCopy: string; details: { label: string; value: string; tone: DashboardTone }[] };

export const dashboardViews: Record<DashboardTab, DashboardView> = {
  Projects: {
    label: "ACTIVE PROJECTS",
    rows: [
      { title: "Editorial — Lagos", subtitle: "Amara Studios", value: "$2,400", status: "Verified", tone: "green" },
      { title: "Brand Identity — Ngozi", subtitle: "Ngozi & Co", value: "$1,800", status: "Delivered", tone: "amber" },
      { title: "Music Video — Afrobeat", subtitle: "Phoeiz", value: "$3,500", status: "In Brief", tone: "violet" },
      { title: "Lookbook — Arewa", subtitle: "Arewa Fashion", value: "$900", status: "Paid", tone: "green" },
      { title: "Product Shoot — Kente", subtitle: "Kente Lab", value: "$1,200", status: "In Review", tone: "rose" },
    ],
    detailEyebrow: "PROJECT RECORD",
    detailTitle: "Editorial — Lagos",
    detailCopy: "A permanent record of scope, delivery, and payment for Amara Studios.",
    details: [
      { label: "STATUS", value: "Verified", tone: "green" },
      { label: "CLIENT", value: "Amara Studios", tone: "violet" },
      { label: "PAYMENT", value: "$2,400", tone: "amber" },
      { label: "PROOF", value: "On-chain", tone: "violet" },
    ],
  },
  Deliveries: {
    label: "PAYMENT-GATED DELIVERIES",
    rows: [
      { title: "Lagos Editorial Selects", subtitle: "48 images · 2.3 GB", value: "48 files", status: "View-only", tone: "violet" },
      { title: "Ngozi Brand Kit", subtitle: "14 files · 620 MB", value: "14 files", status: "Unlocked", tone: "green" },
      { title: "Afrobeat Director Cut", subtitle: "12 videos · 6.8 GB", value: "12 videos", status: "Approval", tone: "amber" },
      { title: "Arewa Lookbook", subtitle: "32 images · 1.2 GB", value: "32 files", status: "Unlocked", tone: "green" },
      { title: "Kente Product Pack", subtitle: "36 images · 870 MB", value: "36 files", status: "Revision", tone: "rose" },
    ],
    detailEyebrow: "DELIVERY RECORD",
    detailTitle: "Lagos Editorial Selects",
    detailCopy: "High-resolution files remain view-only until the agreed payment is confirmed.",
    details: [
      { label: "ACCESS", value: "View-only", tone: "violet" },
      { label: "FILES", value: "48 images", tone: "green" },
      { label: "STATUS", value: "Awaiting payment", tone: "amber" },
      { label: "RELEASE", value: "Automatic", tone: "violet" },
    ],
  },
  Contracts: {
    label: "AI-SUMMARIZED AGREEMENTS",
    rows: [
      { title: "Amara Studios Agreement", subtitle: "Signed Jul 10, 2026", value: "₦250k", status: "Agreed", tone: "green" },
      { title: "Ngozi Brand Scope", subtitle: "Signed Jul 06, 2026", value: "₦180k", status: "Agreed", tone: "green" },
      { title: "Afrobeat Video Brief", subtitle: "Drafted Jul 14, 2026", value: "₦350k", status: "Review", tone: "amber" },
      { title: "Arewa Lookbook Scope", subtitle: "Signed Jul 02, 2026", value: "₦90k", status: "Agreed", tone: "green" },
      { title: "Kente Revision Terms", subtitle: "Updated Jul 16, 2026", value: "₦120k", status: "Review", tone: "violet" },
    ],
    detailEyebrow: "AI AGREEMENT SUMMARY",
    detailTitle: "Amara Studios Agreement",
    detailCopy: "Full-day editorial coverage, two locations, and a 14-day delivery timeline.",
    details: [
      { label: "SCOPE", value: "Full-day editorial", tone: "violet" },
      { label: "TERMS", value: "14-day delivery", tone: "green" },
      { label: "FEE", value: "₦250,000", tone: "amber" },
      { label: "SIGNATURES", value: "2 confirmed", tone: "green" },
    ],
  },
  Clients: {
    label: "VERIFIED CLIENT RECORDS",
    rows: [
      { title: "Amara Studios", subtitle: "Lagos, Nigeria", value: "4 deals", status: "Verified", tone: "green" },
      { title: "Ngozi & Co", subtitle: "Accra, Ghana", value: "3 deals", status: "Verified", tone: "green" },
      { title: "Phoeiz", subtitle: "Nairobi, Kenya", value: "1 deal", status: "Active", tone: "violet" },
      { title: "Arewa Fashion", subtitle: "Lagos, Nigeria", value: "2 deals", status: "Paid", tone: "green" },
      { title: "Kente Lab", subtitle: "Kigali, Rwanda", value: "1 deal", status: "Review", tone: "amber" },
    ],
    detailEyebrow: "CLIENT PROFILE",
    detailTitle: "Amara Studios",
    detailCopy: "A verified client record built from completed paid projects, not anonymous ratings.",
    details: [
      { label: "STATUS", value: "Verified", tone: "green" },
      { label: "DEALS", value: "4 completed", tone: "violet" },
      { label: "PAYMENT", value: "On time", tone: "green" },
      { label: "REPUTATION", value: "Deal-based", tone: "amber" },
    ],
  },
  Payments: {
    label: "PAYMENT RECORDS",
    rows: [
      { title: "Amara Studios — Final", subtitle: "Editorial — Lagos", value: "₦125k", status: "Cleared", tone: "green" },
      { title: "Ngozi & Co — Final", subtitle: "Brand Identity", value: "₦90k", status: "Cleared", tone: "green" },
      { title: "Phoeiz — Deposit", subtitle: "Music Video", value: "₦175k", status: "Received", tone: "green" },
      { title: "Arewa Fashion — Final", subtitle: "Lookbook", value: "₦45k", status: "Cleared", tone: "green" },
      { title: "Kente Lab — Deposit", subtitle: "Product Shoot", value: "₦60k", status: "Pending", tone: "amber" },
    ],
    detailEyebrow: "PAYMENT CONFIRMATION",
    detailTitle: "Amara Studios — Final Payment",
    detailCopy: "Payment confirmed. The final delivery is now unlocked for client download.",
    details: [
      { label: "STATUS", value: "Cleared", tone: "green" },
      { label: "METHOD", value: "Bank transfer", tone: "violet" },
      { label: "INVOICE", value: "PX-4821", tone: "amber" },
      { label: "RELEASE", value: "Files unlocked", tone: "green" },
    ],
  },
};
