import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { ImageIcon, X } from "lucide-react"; // Tambahin icon X buat tombol tutup
import { useRef, useState } from "react"; // Tambahin useState

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  isLast?: boolean;
  imageUrl?: string;
}

const StepCard = ({ stepNumber, title, description, isLast, imageUrl }: StepCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const laserLeft = useTransform(mouseX, (v) => `${v}px`);
  
  // State untuk ngatur popup gambar kebuka/tertutup
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) mouseX.set(e.clientX - rect.left);
  };

  return (
    <>
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

          {/* Image / Placeholder Area */}
          <div 
            className={`aspect-video rounded-lg bg-secondary/60 border-2 border-dashed border-muted flex items-center justify-center overflow-hidden group/img ${imageUrl ? 'cursor-pointer' : ''}`}
            onClick={() => imageUrl && setIsImageOpen(true)} // Kalau ada gambar, klik buat buka popup
          >
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={`Step ${stepNumber} - ${title}`} 
                // Tambahin efek zoom dikit pas di-hover biar keliatan bisa diklik
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" 
              />
            ) : (
              <ImageIcon size={40} className="text-muted-foreground/30" />
            )}
          </div>
        </motion.div>
      </div>

      {/* POPUP / LIGHTBOX GAMBAR */}
      <AnimatePresence>
        {isImageOpen && imageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Klik background area luar buat nutup popup
            onClick={() => setIsImageOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={imageUrl}
              alt={`Full Step ${stepNumber}`}
              // Supaya ukurannya proporsional dan nggak kepotong
              className="max-w-full max-h-full rounded-md object-contain shadow-2xl cursor-default"
              // Biar pas klik gambarnya langsung nggak ikut nutup (harus klik luar gambar atau tombol silang)
              onClick={(e) => e.stopPropagation()} 
            />
            
            {/* Tombol Silang */}
            <button
              onClick={() => setIsImageOpen(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StepCard;