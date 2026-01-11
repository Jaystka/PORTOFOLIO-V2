"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Github,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Server,
  GraduationCap,
  Award,
  Linkedin,
  Instagram,
  Bookmark,
  Share2,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { Navbar } from "@/components/Navbar";
import { SaturnBackground } from "@/components/SaturnBackground"; // IMPORT INI
import Image from "next/image";
import { useTheme } from "next-themes";

// --- DATA ---
const heroSlides = [
  {
    id: "summary",
    label: "ABOUT ME",
    icon: <Code2 className="w-5 h-5 mb-2 text-amber-600 dark:text-amber-400" />, // Ganti warna jadi Amber
    content: (
      <p className="max-w-2xl mx-auto text-stone-600 dark:text-stone-400 leading-relaxed text-lg">
        Seorang Full Stack Developer yang berfokus pada performa dan
        skalabilitas. Membangun ekosistem digital menggunakan{" "}
        <span className="text-stone-900 dark:text-amber-100 font-bold">
          Laravel, React, dan Docker
        </span>
        . Menjelajahi teknologi baru layaknya mengarungi antariksa.
      </p>
    ),
  },
  // ... Education & Certifications (Gunakan logika warna yang sama: stone & amber)
  {
    id: "education",
    label: "EDUCATION",
    icon: (
      <GraduationCap className="w-5 h-5 mb-2 text-amber-600 dark:text-amber-400" />
    ),
    content: (
      <div className="max-w-2xl mx-auto text-stone-600 dark:text-stone-400 space-y-4 text-left md:text-center">
        <div>
          <h3 className="text-stone-900 dark:text-white text-xl font-bold">
            Sarjana Informatika
          </h3>
          <p className="text-stone-500 dark:text-stone-500">
            Universitas Amikom Yogyakarta (2021 - 2025)
          </p>
          <p className="text-sm mt-2">
            Fokus studi pada Software Engineering. Lulus dengan predikat Cum
            Laude(GPA 3.89).
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "certification",
    label: "CERTIFICATIONS",
    icon: <Award className="w-5 h-5 mb-2 text-amber-600 dark:text-amber-400" />,
    content: (
      <div className="max-w-2xl mx-auto text-stone-600 dark:text-stone-400 text-left md:text-center grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Kotak Sertifikasi */}
        <div className="bg-white/50 dark:bg-stone-900/50 p-3 rounded border border-stone-200 dark:border-stone-800 shadow-sm backdrop-blur-sm">
          <h4 className="text-stone-900 dark:text-white font-semibold">
            AWS Certified Cloud Practitioner
          </h4>
          <p className="text-xs text-stone-500">Amazon Web Services - 2024</p>
        </div>
        <div className="bg-white/50 dark:bg-stone-900/50 p-3 rounded border border-stone-200 dark:border-stone-800 shadow-sm backdrop-blur-sm">
          <h4 className="text-stone-900 dark:text-white font-semibold">
            Laravel Certified Developer
          </h4>
          <p className="text-xs text-stone-500">Laravel LLC - 2023</p>
        </div>
      </div>
    ),
  },
];

const projects = [
  // ... Data projects SAMA ...
  {
    title: "Villa Reservation Admin",
    category: "Full Stack Development",
    tech: ["Laravel", "Tailwind CSS", "MySQL"],
    description: "Dashboard admin modern untuk manajemen reservasi villa.",
    link: "#",
    repo: "#",
  },
  {
    title: "Interactive Resume Builder",
    category: "Frontend Application",
    tech: ["React.js", "Framer Motion", "Vite"],
    description: "Aplikasi web untuk membuat CV/Resume secara dinamis.",
    link: "#",
    repo: "#",
  },
];

const skills = [
  {
    category: "Frontend",
    items: "Vue.js, React.js, Tailwind CSS",
    icon: <Layout size={32} />,
  },
  {
    category: "Backend",
    items: "Laravel, CodeIgniter 3, MySQL",
    icon: <Server size={32} />,
  },
  {
    category: "DevOps",
    items: "Docker, Nginx, Easypanel",
    icon: <Database size={32} />,
  },
  {
    category: "Creative",
    items: "UI/UX Implementation, Figma",
    icon: <Code2 size={32} />,
  },
];

const experiences = [
  // ... Data experiences SAMA ...
  {
    period: "2025 - Present",
    role: "Full Stack Developer",
    company: "Penerbit Deepublish",
    description:
      "Membangun dan memelihara platform e-commerce serta sistem internal menggunakan Laravel dan React.",
  },
  {
    period: "2025 - 2026",
    role: "AI Engineer",
    company: "Arutala App",
    description:
      "Focused on building and optimizing OCR (Optical Character Recognition) models tailored to recognize and digitize Nusantara’s Indigenous Scripts.",
  },
  {
    period: "2024 - 2025",
    role: "Project Manager Computer Vision Team",
    company: "Data Sorcerers",
    description:
      "Create a work plan that includes targets for achievement within a certain period of time.",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <Linkedin size={18} />,
    href: "https://linkedin.com/in/jaystka",
  },
  {
    name: "Instagram",
    icon: <Instagram size={18} />,
    href: "https://instagram.com/jaystka_kusuma",
  },
  {
    name: "Medium",
    icon: <Bookmark size={18} />,
    href: "https://medium.com/@jaystkapradana233",
  },
];

export default function Portfolio() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mencegah Hydration Mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };
  const activeSlide = heroSlides[currentSlideIndex];
  const [isOpen, setIsOpen] = useState(false);

  const heroImage =
    mounted && theme === "dark" ? "/images/pp3.png" : "/images/pp1.png";

  return (
    // TEXT: text-stone-800 & dark:text-stone-200 (Warna Batu lebih natural daripada Gray)
    <main className="min-h-screen relative transition-colors duration-700 text-stone-800 dark:text-stone-200 font-sans overflow-x-hidden">
      {/* 1. BACKGROUND COMPONENT */}
      <SaturnBackground />

      <Navbar />

      {/* --- SOSIAL MEDIA MENGAMBANG (Sisi Kiri) --- */}
      <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-[9999]">
        <div className="w-px h-16 bg-gradient-to-t from-amber-500 to-transparent opacity-50" />
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="w-11 h-11 flex items-center justify-center rounded-full border border-stone-300 dark:border-stone-700 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md text-stone-600 dark:text-stone-400 hover:border-amber-500 hover:text-amber-500 hover:scale-110 transition-all duration-300 shadow-xl"
          >
            {social.icon}
          </motion.a>
        ))}
        <div className="w-px h-16 bg-gradient-to-b from-amber-500 to-transparent opacity-50" />
      </div>

      {/* --- MOBILE VIEW (Tombol di pojok kiri bawah) --- */}
      <div className="lg:hidden fixed left-6 bottom-6 z-[9999] flex flex-col-reverse items-center gap-4">
        {/* Tombol Utama (Toggle) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-amber-500 text-white shadow-2xl shadow-amber-500/40 active:scale-90 transition-transform z-10"
        >
          {isOpen ? <X size={24} /> : <Share2 size={24} />}
        </button>

        {/* List Sosial Media (Muncul ke atas) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="flex flex-col gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 shadow-xl"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- HERO SECTION --- */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative pt-20 pb-20"
      >
        <FadeIn>
          {/* Avatar Border: Amber/Gold */}
          <div className="w-45 h-45 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white dark:border-stone-800 mx-auto mb-8 shadow-2xl shadow-amber-500/20 dark:shadow-amber-900/30 relative z-10 bg-stone-200 dark:bg-stone-800">
            <div className="w-full h-full flex items-center justify-center text-stone-500 dark:text-stone-400">
              {/* LOGO DINAMIS */}
              {mounted ? (
                <Image src={heroImage} alt="Logo" width={230} height={230} />
              ) : (
                <div className="w-full h-full bg-stone-200 dark:bg-stone-800 animate-pulse" />
              )}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="relative z-10">
          <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-stone-900 dark:text-amber-50 mb-2">
            JAYSTKA PRADANA KUSUMA
          </h1>
          <p className="text-xl md:text-2xl text-amber-600 dark:text-amber-400 font-light mb-8 tracking-widest uppercase">
            Full Stack Developer
          </p>

          <div className="min-h-[180px] mb-8 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <div className="flex flex-col items-center justify-center mb-3">
                  {activeSlide.icon}
                  <span className="text-xs font-bold tracking-[0.2em] text-stone-400 dark:text-stone-500 uppercase">
                    {activeSlide.label}
                  </span>
                </div>
                {activeSlide.content}
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-2 mt-4">
              {heroSlides.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlideIndex
                      ? "bg-amber-600 dark:bg-amber-400 w-4"
                      : "bg-stone-300 dark:bg-stone-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn
          delay={0.4}
          className="flex gap-4 justify-center items-center relative z-10"
        >
          <button className="px-8 py-3 bg-stone-900 dark:bg-amber-100 text-white dark:text-stone-900 font-semibold rounded-full hover:bg-black dark:hover:bg-white transition-colors duration-300 shadow-lg shadow-stone-400/50 dark:shadow-amber-900/50">
            CONTACT ME
          </button>
          <button
            onClick={handleNextSlide}
            className="p-3 bg-white/80 dark:bg-stone-800/80 backdrop-blur-md border border-stone-200 dark:border-stone-700 rounded-full hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300 group shadow-sm active:scale-95"
          >
            <ArrowRight className="w-6 h-6 text-stone-900 dark:text-amber-50 group-hover:translate-x-1 transition-transform" />
          </button>
        </FadeIn>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section
        id="experience"
        className="py-20 px-4 md:px-20 max-w-7xl mx-auto scroll-mt-24"
      >
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-16 text-stone-900 dark:text-amber-50 tracking-widest uppercase">
            Experience
          </h2>
        </FadeIn>
        <div className="relative">
          {/* Garis Timeline: Stone */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-stone-300 dark:bg-stone-800 transform md:-translate-x-1/2 ml-4 md:ml-0"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between mb-12 md:mb-24 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="hidden md:block w-5/12"></div>

              {/* Titik Tengah: Amber Ring */}
              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-stone-100 dark:bg-stone-900 border-2 border-stone-400 dark:border-amber-600 rounded-full z-10 transform md:-translate-x-1/2 flex items-center justify-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              </div>

              <FadeIn
                delay={index * 0.1}
                className="ml-12 md:ml-0 w-full md:w-5/12"
              >
                <div className="p-6 bg-white/60 dark:bg-stone-900/40 backdrop-blur-md border border-stone-200 dark:border-stone-800 rounded-xl hover:border-amber-400 dark:hover:border-amber-700/50 transition-all duration-300 group shadow-sm">
                  <span className="text-sm text-stone-400 dark:text-stone-500 font-mono mb-2 block">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-amber-50 mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {exp.role}
                  </h3>
                  <h4 className="text-stone-500 dark:text-stone-400 mb-4">
                    {exp.company}
                  </h4>
                  <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section
        id="projects"
        className="py-20 px-4 md:px-20 max-w-7xl mx-auto scroll-mt-24"
      >
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-16 text-stone-900 dark:text-amber-50 tracking-widest uppercase">
            My Projects
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group relative bg-white/60 dark:bg-stone-900/40 backdrop-blur-md border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden hover:border-amber-400 dark:hover:border-amber-700/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col h-full">
                <div className="h-56 bg-stone-100 dark:bg-stone-800/50 w-full relative overflow-hidden flex items-center justify-center border-b border-stone-100 dark:border-stone-800">
                  <Code2 className="text-stone-400 dark:text-stone-600 w-16 h-16 relative z-10" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-500 tracking-wider uppercase mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-amber-50 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 text-sm mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded text-xs text-stone-600 dark:text-stone-300 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 border-t border-gray-100 dark:border-neutral-800 pt-4">
                    <a
                      href={project.repo}
                      className="flex items-center gap-2 text-sm text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-sm text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section
        id="skills"
        className="py-20 px-4 md:px-20 max-w-7xl mx-auto scroll-mt-24"
      >
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-16 text-stone-900 dark:text-amber-50 tracking-widest uppercase">
            Skills
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="aspect-square bg-white/60 dark:bg-stone-900/40 backdrop-blur-md border border-stone-200 dark:border-stone-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-amber-50 dark:hover:bg-stone-800 transition-all duration-300 shadow-sm group hover:border-amber-300 dark:hover:border-amber-700">
                <div className="mb-4 p-4 bg-stone-100 dark:bg-stone-800 rounded-full text-stone-900 dark:text-amber-100 group-hover:text-amber-600 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-stone-900 dark:text-amber-50 mb-2">
                  {skill.category}
                </h3>
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  {skill.items}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <footer className="py-8 text-center text-stone-400 dark:text-stone-600 text-sm border-t border-stone-200 dark:border-stone-900 bg-white/50 dark:bg-black/50 backdrop-blur-lg">
        © 2026 Alya ♥. All rights reserved.
      </footer>
    </main>
  );
}
