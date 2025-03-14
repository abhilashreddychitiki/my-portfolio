import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { skillsData } from "@shared/content";
import * as Icons from "react-icons/si";
import { Card } from "@/components/ui/card";

export default function Skills() {
  return (
    <section className="py-20">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-16"
        >
          Technical Skills
        </motion.h2>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {skillsData.map((skill) => {
            const Icon = (Icons as any)[skill.icon];
            return (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-12 h-12 text-primary" />
                    </motion.div>
                    <h3 className="font-medium text-lg">{skill.name}</h3>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {skill.category}
                    </span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}