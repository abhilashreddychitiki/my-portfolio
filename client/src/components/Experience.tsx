import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";
import * as Icons from "react-icons/si";
import { experienceData } from "@shared/content";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-16"
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-primary/20" />

          {experienceData.map((experience, index) => {
            const IconComponent = Icons[experience.companyIcon as keyof typeof Icons];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={experience.title}
                variants={fadeInUp}
                className={`relative flex items-center mb-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary" />

                {/* Content */}
                <motion.div 
                  className={`ml-6 md:ml-0 ${isEven ? 'md:mr-8' : 'md:ml-8'} flex-1`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-card hover:bg-card/80 p-6 rounded-lg shadow-lg transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      {IconComponent && (
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-semibold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {experience.duration}
                    </p>

                    <ul className="space-y-2">
                      {experience.responsibilities.map((item, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
