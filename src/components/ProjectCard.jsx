import { motion } from "framer-motion";

export default function ProjectCard({ title, imageUrl, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <motion.div
        className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg max-w-sm will-change-transform"
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.03 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformOrigin: "center" }}
      >
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover will-change-transform"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.03 },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none"
        />

        <motion.p
          variants={{
            rest: { opacity: 0, y: 10 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute bottom-2 left-3 text-sm text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)] font-semibold pointer-events-none"
        >
          {title}
        </motion.p>
      </motion.div>
    </a>
  );
}
