import { motion } from "framer-motion";
import { Link } from "wouter";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  // Add smooth scroll behavior
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href || href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            onClick={handleClick}
            className="text-xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.a>
          
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={handleClick}
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
