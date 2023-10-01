import { useRef } from "react";
import { useInView } from "framer-motion";

export const SlidingDiv = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <main ref={ref} className="framer-section">
      <section
        style={{
          transform: isInView ? "none" : "translateX(500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </section>
    </main>
  );
};

export const SlidingDivRight = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
  
    return (
      <main ref={ref} className="framer-section">
        <section
          style={{
            transform: isInView ? "none" : "translateX(-500px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {children}
        </section>
      </main>
    );
  };