import { motion, useMotionValue, useTransform } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { useRef } from "react";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const StepCard = ({ stepNumber, title, description, isLast }: StepCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const laserLeft = useTransform(mouseX, (v) => `${v}px`);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) mouseX.set(e.clientX - rect.left);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-10 border-l border-dashed border-border" />
      )}

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative w-full p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-500 overflow-hidden group"
        style={{
          boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Laser line on hover */}
        <motion.div
          className="absolute top-0 h-[2px] w-16 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -translate-x-1/2"
          style={{ left: laserLeft }}
        />

        <span className="font-mono text-sm font-bold text-primary mb-4 block">
          Step {stepNumber}
        </span>

        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>

        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* Image placeholder */}
        <div className="aspect-video rounded-lg bg-secondary/60 border-2 border-dashed border-muted flex items-center justify-center">
          <ImageIcon size={40} className="text-muted-foreground/30" />
        </div>
      </motion.div>
    </div>
  );
};

export default StepCard;
