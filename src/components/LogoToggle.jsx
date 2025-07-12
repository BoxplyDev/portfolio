import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const nodeLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";

export default function LogoToggle() {
  const [containerHovered, setContainerHovered] = useState(false);
  const [textHovered, setTextHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setContainerHovered(true)}
      onMouseLeave={() => setContainerHovered(false)}
      onClick={() => window.location.reload()}
      className="fixed top-6 left-6 z-50 cursor-pointer select-none bg-[#111111] rounded-lg flex items-center overflow-hidden shadow-lg px-3"
      initial={false}
      animate={{ width: containerHovered ? 160 : 48 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ height: 48 }}
    >
      {/* Icon grayscale toggles on container hover */}
      <motion.img
        src={nodeLogo}
        alt="Logo"
        className="h-8 w-8"
        draggable={false}
        animate={{
          filter: containerHovered ? "grayscale(0%)" : "grayscale(80%)",
          transition: { duration: 0.3 },
        }}
        style={{ filter: "grayscale(80%)" }}
      />

      <AnimatePresence>
        {containerHovered && (
          <motion.span
            key="name"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            className="font-medium ml-4 whitespace-nowrap"
            onMouseEnter={() => setTextHovered(true)}
            onMouseLeave={() => setTextHovered(false)}
            style={{ color: textHovered ? "#14b8a6" : "#d1d5db", transition: "color 0.3s ease" }}
          >
            Raahim Tai
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
