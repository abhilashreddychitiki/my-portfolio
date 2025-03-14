import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { skillsData } from "@shared/content";
import * as Icons from "react-icons/si";
import { Button } from "@/components/ui/button";

// Get unique categories from skillsData
const uniqueCategories = Array.from(new Set(skillsData.map(skill => skill.category)));
const categories = ["All", ...uniqueCategories];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = skillsData.filter(skill => 
    selectedCategory === "All" || skill.category === selectedCategory
  );

  return (
    <section id="skills" className="py-20">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          Technical Skills
        </motion.h2>

        <motion.div variants={fadeInUp} className="mb-12 flex justify-center gap-2 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="relative h-[400px] bg-muted/30 rounded-xl p-8">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const IconComponent = Icons[skill.icon as keyof typeof Icons];
              return IconComponent ? (
                <motion.div
                  key={skill.name}
                  className="absolute"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    x: `${Math.random() * 80 + 10}%`,
                    y: `${Math.random() * 80 + 10}%`,
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.4
                  }}
                  drag
                  dragConstraints={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  dragElastic={0.1}
                  whileHover={{ scale: 1.2 }}
                  style={{
                    position: 'absolute',
                    width: 80,
                    height: 80,
                  }}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center bg-background rounded-full shadow-lg cursor-pointer">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-8 h-8 text-primary" />
                    </motion.div>
                    <span className="text-xs mt-1 font-medium">{skill.name}</span>
                  </div>
                </motion.div>
              ) : null;
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}