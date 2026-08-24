import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const viewport = { once: true, amount: 0.16 } as const;

export function revealProps(delay = 0) {
  return {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: { duration: 0.56, delay, ease: [0.23, 1, 0.32, 1] as const },
  };
}

type RevealProps = HTMLMotionProps<"div"> & { children: ReactNode; delay?: number };

export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div {...revealProps(delay)} {...props}>
      {children}
    </motion.div>
  );
}
