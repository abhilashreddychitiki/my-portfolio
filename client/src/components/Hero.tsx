import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function Hero() {
  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          variants={fadeInUp}
        >
          Creative Developer
        </motion.h1>
        <motion.p 
          className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          Building beautiful, interactive experiences for the web
        </motion.p>
        <motion.div 
          className="mt-10"
          variants={fadeInUp}
        >
          <a 
            href="#projects" 
            className="bg-primary text-primary-foreground px-8 py-3 rounded-md text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
