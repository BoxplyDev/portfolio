import FadeInSection from "./FadeInSection";
import { motion } from "framer-motion";
import { useState } from "react";
import HeroButton from "./HeroButton";

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

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

          <div className="flex justify-center">
  <HeroButton href="#projects">raahimtaimain@gmail.com</HeroButton>
</div>


        </div>
      </FadeInSection>
    </section>
  );
}
