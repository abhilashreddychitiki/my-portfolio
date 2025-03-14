import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card>
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1573496527892-904f897eb744"
                  alt="Professional headshot"
                  className="w-full h-full object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
          <div>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold mb-6"
            >
              About Me
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-6"
            >
              I'm a passionate full-stack developer with a love for creating
              beautiful and functional web applications. With expertise in modern
              web technologies, I bring ideas to life through clean code and
              thoughtful design.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                download
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
