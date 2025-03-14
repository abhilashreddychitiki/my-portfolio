import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projectsData } from "@shared/content";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
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
          Featured Projects
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
            >
              <motion.a
                href={project.link}
                variants={scaleOnHover}
                whileHover="hover"
                className="block"
              >
                <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="p-0 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                      whileHover={{ scale: 1.1 }}
                    />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}