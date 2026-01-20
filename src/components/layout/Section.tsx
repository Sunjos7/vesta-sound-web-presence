import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  animate?: boolean;
}

const Section = ({ 
  children, 
  className, 
  id, 
  containerClassName,
  animate = true 
}: SectionProps) => {
  return (
    <section 
      id={id} 
      className={cn("py-20 md:py-28 overflow-hidden", className)}
    >
      <div className={cn("container mx-auto px-4 md:px-6", containerClassName)}>
        {animate ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        ) : (
          children
        )}
      </div>
    </section>
  );
};

export default Section;
