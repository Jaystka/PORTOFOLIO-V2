"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X, Rocket } from "lucide-react"; // Import ikon tambahan

interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  duration: number;
  delay: number;
}

export function SaturnBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [showEgg, setShowEgg] = useState(false); // State untuk Easter Egg

  useEffect(() => {
    const generatedStars = [...Array(20)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, []);

  return (
    // Note: Kita hapus pointer-events-none di sini agar bisa klik planet,
    // tapi kita beri ke div pembungkus yang tidak perlu interaksi.
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* --- BACKGROUND GRADIENT (Non-interactive) --- */}
      <div className="absolute inset-0 bg-stone-50 dark:bg-[#09090b] transition-colors duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200/40 via-transparent to-transparent dark:from-indigo-900/20 dark:via-transparent dark:to-transparent opacity-70"></div>
      </div>

      {/* --- STARS (Non-interactive) --- */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-700 pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            initial={{ opacity: 0.1, scale: 0.5 }}
            animate={{ opacity: [0.1, 0.5, 0.1], scale: [0.5, 1, 0.5] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
          />
        ))}
      </div>

      {/* --- THE SATURN PLANET (KLIK DI SINI) --- */}
      <motion.div
        className="absolute top-[-5%] right-[-10%] md:top-20 md:right-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] opacity-40 dark:opacity-30 cursor-pointer pointer-events-auto group "
        onClick={() => setShowEgg(true)} // Trigger Easter Egg
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Tooltip petunjuk kecil saat hover */}
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 bg-amber-500 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          IDENTIFY?
        </div>

        {/* Planet Body */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-300 to-amber-100 dark:from-stone-700 dark:to-stone-900 shadow-[0_0_50px_rgba(251,191,36,0.2)] transition-all"></div>

        {/* Rings */}
        <div className="absolute top-[50%] left-[50%] w-[160%] h-[160%] -translate-x-1/2 -translate-y-1/2 border-[40px] md:border-[60px] border-orange-200/30 dark:border-stone-500/10 rounded-[50%] [transform:rotateX(75deg)_rotateZ(20deg)] shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
        <div className="absolute top-[50%] left-[50%] w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 border-[20px] md:border-[30px] border-orange-300/20 dark:border-stone-400/20 rounded-[50%] [transform:rotateX(75deg)_rotateZ(20deg)]"></div>
      </motion.div>

      {/* --- EASTER EGG MODAL --- */}
      <AnimatePresence>
        {showEgg && (
          <div className="fixed inset-0 flex items-center justify-center z-[100] px-6 pointer-events-auto">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowEgg(false)}
              className="absolute inset-0 bg-stone-950/60 backdrop-blur-md"
            />

            {/* Content Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-stone-900 border border-amber-500/30 p-8 rounded-2xl max-w-md shadow-2xl overflow-hidden"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 p-2">
                <button
                  onClick={() => setShowEgg(false)}
                  className="text-stone-400 hover:text-amber-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex items-center gap-3 mb-4 text-amber-600 dark:text-amber-400">
                <Rocket size={24} />
                <h3 className="font-bold tracking-widest text-sm uppercase">
                  Data Log: Mission Saturnus
                </h3>
              </div>

              <div className="space-y-4 text-stone-600 dark:text-stone-300 leading-relaxed font-mono text-sm">
                <p>
                  <span className="text-amber-500 font-bold">{">"}</span>{" "}
                  Mengapa Saturnus?
                </p>
                <p>
                  Sebagai developer, saya melihat Saturnus bukan sekadar planet,
                  tapi simbol dari
                  <span className="text-gray-900 dark:text-white font-semibold italic">
                    {" "}
                    "Disciplined Structure"
                  </span>
                  .
                </p>
                <p>
                  Cincinnya melambangkan sistem yang kompleks namun
                  teratur—seperti barisan kode yang saya susun. Saturnus adalah
                  planet ke-6, angka yang merepresentasikan harmoni antara
                  estetika desain dan logika backend.
                </p>
                <p className="text-[10px] text-stone-400 mt-6 border-t border-stone-100 dark:border-stone-800 pt-4">
                  STATUS: EXPLORATION COMPLETE. <br />
                  COORDINATES: JAYSTKA_PORTFOLIO_V1
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
