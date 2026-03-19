import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Radial spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, hsla(192,80%,55%,0.08) 0%, transparent 70%)",
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative text-4xl sm:text-5xl md:text-7xl font-bold text-primary max-w-4xl"
        style={{ textWrap: "balance" }}
      >
        Cara Install Custom Add-in di Word Desktop
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative mt-6 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed"
      >
        Ikuti langkah-langkah di bawah ini untuk memasang add-in secara manual
        (Sideloading) di laptop Windows kamu.
      </motion.p>

      {/* Bagian tombol yang diubah */}
      <motion.a
        href="/manifest.xml" // Mengarah langsung ke file di folder public
        download="manifest.xml" // Atribut ini yang memaksa browser untuk mendownload, bukan membukanya
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative mt-10 inline-flex items-center gap-2.5 h-14 px-8 rounded-md bg-primary text-primary-foreground font-semibold text-base shadow-glow hover:shadow-glow-hover transition-shadow duration-300"
      >
        <Download size={20} />
        Download manifest.xml
      </motion.a>
    </section>
  );
};

export default Hero