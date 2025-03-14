import { motion } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CustomCursor />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </motion.div>
  );
}