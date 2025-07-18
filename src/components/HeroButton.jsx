import { motion } from "framer-motion";

export default function HeroButton({ href, children }) {
  const handleClick = (e) => {
    if (href.startsWith("#")) {
      e.preventDefault();

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className="relative inline-flex justify-center items-center px-10 py-3 rounded-lg font-semibold tracking-wide text-teal-400 bg-[rgba(255,255,255,0.05)] border border-teal-400 backdrop-blur-md shadow-[0_0_15px_rgba(0,128,128,0.6)] overflow-hidden"
      initial={{ scale: 1 }}
      animate={{
        boxShadow: [
          "0 0 8px rgba(22, 190, 190, 0.7), 0 0 20px rgba(22, 190, 190, 0.4)",
          "0 0 15px rgba(22, 190, 190, 0.9), 0 0 30px rgba(22, 190, 190, 0.6)",
          "0 0 8px rgba(22, 190, 190, 0.7), 0 0 20px rgba(22, 190, 190, 0.4)",
        ],
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 25px rgba(22, 190, 190, 1), 0 0 40px rgba(22, 190, 190, 0.8)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex justify-center items-center w-full text-center">{children}</span>

      <motion.span
        className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-20 pointer-events-none"
        initial={{ x: "-100%" }}
        animate={{ x: "150%" }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ filter: "blur(10px)" }}
      />
    </motion.a>
  );
}
