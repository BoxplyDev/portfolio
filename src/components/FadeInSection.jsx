import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useScrollDirection } from "./useScrollDirection";

export default function FadeInSection({ children, delay = 0, onShow }) {
  const ref = useRef(null);
  const scrollDir = useScrollDirection();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // If on mobile/small screen, just show immediately
    if (window.innerWidth < 768) {
      if (!show) {
        setShow(true);
        if (onShow) onShow();
      }
      return; // skip adding scroll listeners on mobile
    }

    function checkVisibility() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const elementHeight = rect.height;
      const fullyVisible = visibleHeight / elementHeight >= 0.95;

      if (fullyVisible) {
        if (!show) {
          setShow(true);
          if (onShow) onShow(); 
        }
        return;
      }

      if (scrollDir === "up" && rect.top > windowHeight) {
        setShow(false);
      }
    }

    checkVisibility();

    window.addEventListener("scroll", checkVisibility, { passive: true });
    return () => window.removeEventListener("scroll", checkVisibility);
  }, [scrollDir, onShow, show]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      style={{ position: "relative", willChange: "transform, opacity" }}
      className="max-w-6xl w-full rounded-xl px-8 py-12"
    >
      {children}
    </motion.div>
  );
}
