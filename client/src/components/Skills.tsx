import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiPostgresql, SiDocker } from "react-icons/si";

const skills = [
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiDocker, name: "Docker" }
];

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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          variants={staggerContainer}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card hover:bg-card/80 transition-colors"
            >
              <skill.icon className="w-12 h-12 text-primary" />
              <span className="font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
