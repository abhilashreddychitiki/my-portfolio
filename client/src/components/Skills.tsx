import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { skillsData } from "@shared/content";
import * as Icons from "react-icons/si";
import { Button } from "@/components/ui/button";

const uniqueCategories = Array.from(new Set(skillsData.map(skill => skill.category)));
const categories = ["All", ...uniqueCategories];

// Function to generate random positions without overlap
const generatePosition = (index: number, total: number) => {
  const angle = (index / total) * 2 * Math.PI;
  const radius = Math.min(window.innerWidth, 800) * 0.3;
  return {
    x: Math.cos(angle) * radius + radius * 0.3 * (Math.random() - 0.5),
    y: Math.sin(angle) * radius + radius * 0.3 * (Math.random() - 0.5)
  };
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [positions, setPositions] = useState<{ [key: string]: { x: number; y: number } }>({});

  const filteredSkills = skillsData.filter(skill => 
    selectedCategory === "All" || skill.category === selectedCategory
  );

  // Initialize positions when category changes
  useEffect(() => {
    const newPositions = {};
    filteredSkills.forEach((skill, index) => {
      const pos = generatePosition(index, filteredSkills.length);
      newPositions[skill.name] = pos;
    });
    setPositions(newPositions);
  }, [selectedCategory]);

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

        <div className="relative h-[500px] bg-muted/30 dark:bg-muted/10 rounded-xl p-8 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const IconComponent = Icons[skill.icon as keyof typeof Icons];
              const position = positions[skill.name] || { x: 0, y: 0 };

              return IconComponent ? (
                <motion.div
                  key={skill.name}
                  className="absolute"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    x: position.x,
                    y: position.y
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  drag
                  dragConstraints={{
                    top: -100,
                    left: -100,
                    right: 100,
                    bottom: 100
                  }}
                  dragElastic={0.3}
                  dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                  whileHover={{ scale: 1.2 }}
                  whileDrag={{ scale: 1.1 }}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="w-20 h-20 flex flex-col items-center justify-center bg-background dark:bg-muted rounded-full shadow-lg cursor-grab active:cursor-grabbing">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-8 h-8 text-primary dark:text-primary-foreground" />
                    </motion.div>
                    <span className="text-xs mt-1 font-medium text-foreground dark:text-foreground-muted">
                      {skill.name}
                    </span>
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