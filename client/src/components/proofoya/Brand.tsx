export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={footer ? "brand brand-footer" : "brand"} href="#top" aria-label="Proofoya home">
      <img className="brand-wordmark" src="/assets/proofoya-wordmark.png" alt="Proofoya" />
      <img className="brand-wordmark-light" src="/assets/proofoya-wordmark-black.png" alt="Proofoya" />
      <img className="brand-icon" src="/assets/proofoya-icon.png" alt="" />
      <span>Proofoya</span>
    </a>
  );
}
