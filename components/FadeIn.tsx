"use client";
import { motion } from "framer-motion";

export const FadeIn = ({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // Posisi awal sedikit lebih bawah
      whileInView={{ opacity: 1, y: 0 }} // Posisi saat terlihat
      viewport={{
        once: false, // UBAH INI: Agar animasi jalan lagi saat di-scroll balik
        margin: "-100px", // Elemen harus masuk 100px ke layar baru animasi mulai
      }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
