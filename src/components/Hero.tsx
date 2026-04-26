import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/8b1ed2c9-efc8-49e8-8c6a-f25bc4509491/files/c217aff4-2258-437a-8bda-b7eccdb598e0.jpg"
          alt="Чистый интерьер"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          ЧИСТО.<br />БЫСТРО.<br />НАДЁЖНО.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 mb-10">
          Профессиональная уборка квартир, домов и офисов. Приедем в удобное время — результат гарантируем.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-black px-8 py-4 uppercase text-sm tracking-widest font-semibold hover:bg-neutral-200 transition-colors duration-300"
        >
          Заказать уборку
        </a>
      </div>
    </div>
  );
}