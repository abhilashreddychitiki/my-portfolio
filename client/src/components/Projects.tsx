import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Project Management Dashboard",
    description: "A comprehensive project management solution with real-time updates",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    link: "#"
  },
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with advanced filtering and search",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    link: "#"
  },
  {
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media performance tracking",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    link: "#"
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-first fitness tracking application with workout plans",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    link: "#"
  }
];

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
          {projects.map((project) => (
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
                <Card>
                  <CardHeader className="p-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2">{project.title}</CardTitle>
                    <p className="text-muted-foreground">{project.description}</p>
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
