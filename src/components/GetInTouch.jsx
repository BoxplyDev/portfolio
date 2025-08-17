import FadeInSection from "./FadeInSection";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import { SiGmail } from "react-icons/si"; // Gmail icon

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const socialLinks = [
  {
    id: "gmail",
    icon: <SiGmail size={40} />,
    href: "mailto:raahimtaimain@gmail.com?subject=Let's%20Talk&body=Hi%20Raahim,%0D%0A%0D%0AI saw your portfolio and...",
    color: "hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(255,0,0,0.6)]",
  },
  {
    id: "github",
    icon: <FaGithub size={40} />,
    href: "https://github.com/BoxplyDev",
    color: "hover:text-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]",
  },
  {
    id: "linkedin",
    icon: <FaLinkedin size={40} />,
    href: "https://www.linkedin.com/in/raahim-t/",
    color: "hover:text-blue-400 hover:drop-shadow-[0_0_12px_rgba(0,191,255,0.6)]",
  },
  {
    id: "youtube",
    icon: <FaYoutube size={40} />,
    href: "https://youtube.com/c/Boxply",
    color: "hover:text-red-500 hover:drop-shadow-[0_0_12px_rgba(255,0,0,0.6)]",
  },
];

export default function GetInTouch() {
  const [startAnim, setStartAnim] = useState(false);

  return (
    <section
      className="py-20 bg-transparent flex justify-center"
      style={{ fontFamily: "'Graphik', sans-serif" }}
    >
      <FadeInSection onShow={() => setStartAnim(true)}>
        <div className="max-w-6xl w-full rounded-xl px-8 py-20 text-center text-teal-400">
          <motion.h2
            className="text-[3.5rem] font-extrabold mb-12 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]"
            style={{ lineHeight: 1.1 }}
            variants={fadeVariants}
            initial="hidden"
            animate={startAnim ? "visible" : "hidden"}
            custom={0}
          >
            Get in touch
          </motion.h2>

          <motion.p
            className="text-lg max-w-3xl mx-auto mb-12 leading-relaxed text-gray-300"
            style={{ fontWeight: 400 }}
            variants={fadeVariants}
            initial="hidden"
            animate={startAnim ? "visible" : "hidden"}
            custom={1}
          >
            I’m currently open to new opportunities. Whether you want to collaborate on a
            project, ask a question, or just say hello, feel free to get in touch.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center gap-10 mt-6"
            variants={fadeVariants}
            initial="hidden"
            animate={startAnim ? "visible" : "hidden"}
            custom={2}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-all duration-300 ${link.color}`}
                whileHover={{ scale: 1.3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </FadeInSection>
    </section>
  );
}
