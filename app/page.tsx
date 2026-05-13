"use client";

import { createElement, useEffect, useState, type ElementType } from "react";
import * as LucideIcons from "lucide-react";
import {
  ArrowRight,
  Code2,
  ExternalLink,
  Share2,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { Navbar } from "@/components/Navbar";
import { SaturnBackground } from "@/components/SaturnBackground"; // IMPORT INI
import Image from "next/image";
import { useTheme } from "next-themes";
import { client, isSanityConfigured, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

function renderIcon(
  iconName: string | undefined,
  props: Record<string, unknown>,
) {
  if (!iconName) return null;

  const normalizedName = iconName.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const matchedEntry = Object.entries(LucideIcons).find(
    ([name]) => name.toLowerCase() === normalizedName,
  );

  if (!matchedEntry) return null;
  return createElement(matchedEntry[1] as ElementType, props);
}

export default function Portfolio() {
  const [data, setData] = useState<any>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchData = async () => {
      if (!isSanityConfigured) {
        setFetchError(
          "Sanity belum dikonfigurasi. Isi NEXT_PUBLIC_SANITY_PROJECT_ID dan NEXT_PUBLIC_SANITY_DATASET di .env.local."
        );
        return;
      }

      const query = `{
        "heroSlides": *[_type == "heroSlide"] | order(_createdAt asc),
        "projects": *[_type == "project"] | order(_createdAt desc),
        "skills": *[_type == "skill"],
        "experiences": *[_type == "experience"] | order(period desc),
        "socialLinks": *[_type == "socialLink"],
        "languages": *[_type == "language"]
      }`;

      try {
        const result = await client.fetch(query);
        setData(result);
      } catch (error) {
        setFetchError("Gagal mengambil data dari Sanity.");
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleNextSlide = () => {
    if (heroSlides.length > 0) {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }
  };

  if (fetchError) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-[#09090b] flex items-center justify-center text-amber-500 px-6 text-center">
        {fetchError}
      </div>
    );
  }

  if (!data)
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-[#09090b] flex items-center justify-center text-amber-500">
        Loading Space...
      </div>
    );

  const heroSlides = Array.isArray(data.heroSlides) ? data.heroSlides : [];
  const socialLinks = Array.isArray(data.socialLinks) ? data.socialLinks : [];
  const experiences = Array.isArray(data.experiences) ? data.experiences : [];
  const projects = Array.isArray(data.projects) ? data.projects : [];
  const skills = Array.isArray(data.skills) ? data.skills : [];
  const languages = Array.isArray(data.languages) ? data.languages : [];
  const activeSlide = heroSlides[currentSlideIndex] ?? heroSlides[0] ?? null;

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
        {socialLinks.map((social: any, index: number) => (
          <motion.a
            key={index}
            href={social.url}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="w-11 h-11 flex items-center justify-center rounded-full border border-stone-300 dark:border-stone-700 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md text-stone-600 dark:text-stone-400 hover:border-amber-500 hover:text-amber-500 hover:scale-110 transition-all duration-300 shadow-xl"
          >
            {renderIcon(social?.iconName, { size: 18 })}
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
              {socialLinks.map((social: any, index: number) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 shadow-xl"
                >
                  {renderIcon(social?.iconName, { size: 18 })}
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
              {activeSlide ? (
                <motion.div
                  key={activeSlide._id ?? currentSlideIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <div className="flex flex-col items-center justify-center mb-3">
                    {renderIcon(activeSlide?.iconName, {
                      className:
                        "w-5 h-5 mb-2 text-amber-600 dark:text-amber-400",
                    })}
                    <span className="text-xs font-bold tracking-[0.2em] text-stone-400 dark:text-stone-500 uppercase">
                      {activeSlide.label}
                    </span>
                  </div>
                  <div className="max-w-2xl mx-auto text-stone-600 dark:text-stone-400 leading-relaxed text-lg">
                    <PortableText value={activeSlide.content} />
                  </div>
                </motion.div>
              ) : (
                <div className="max-w-2xl mx-auto text-stone-600 dark:text-stone-400 leading-relaxed text-lg">
                  Belum ada data Hero Slide di Sanity.
                </div>
              )}
            </AnimatePresence>

            <div className="flex gap-2 mt-4">
              {heroSlides.map((_: any, idx: number) => (
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

          {experiences.map((exp: any, index: number) => (
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
      <section id="projects" className="py-20 px-4 md:px-20 max-w-7xl mx-auto scroll-mt-24">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-16 text-stone-900 dark:text-amber-50 tracking-widest uppercase">
            My Projects
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project: any, i: number) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group relative bg-white/60 dark:bg-stone-900/40 backdrop-blur-md border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden hover:border-amber-400 dark:hover:border-amber-700/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col h-full">
                
                {/* AREA GAMBAR PROYEK */}
                <div className="h-56 w-full relative overflow-hidden border-b border-stone-100 dark:border-stone-800">
                  {project.image ? (
                    <Image 
                      src={urlFor(project.image).url()} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-stone-100 dark:bg-stone-800/50 flex items-center justify-center">
                      <Code2 className="text-stone-400 dark:text-stone-600 w-16 h-16" />
                    </div>
                  )}
                  {/* Overlay Gradient agar teks lebih terbaca jika ada */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />
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
                  <a
                      href={project.link}
                      className="flex items-center gap-2 text-sm text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
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
          {skills.map((skill: any, i: number) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="aspect-square bg-white/60 dark:bg-stone-900/40 backdrop-blur-md border border-stone-200 dark:border-stone-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-amber-50 dark:hover:bg-stone-800 transition-all duration-300 shadow-sm group hover:border-amber-300 dark:hover:border-amber-700">
                <div className="mb-4 p-4 bg-stone-100 dark:bg-stone-800 rounded-full text-stone-900 dark:text-amber-100 group-hover:text-amber-600 transition-colors">
                  {renderIcon(skill?.iconName, { size: 32 })}
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


      {/* --- PROGRAMMING LANGUAGE SECTION --- */}
<section className="pb-20 px-4 max-w-5xl mx-auto">
  <FadeIn>
          <h3 className="text-center text-sm font-bold tracking-[0.2em] text-dark dark:text-stone-500 uppercase mb-6">
        Programming Language
      </h3>
    <div className="bg-stone-100 dark:bg-stone-900/30 backdrop-blur-md border border-stone-200 dark:border-stone-800 rounded-3xl py-8 overflow-hidden">

      {/* Container Marquee */}
      <div className="relative px-12 flex overflow-hidden">
        <motion.div
          className="flex gap-12 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {/* Render dua kali agar tidak ada celah saat looping */}
          {[...languages, ...languages].map((lang: any, index: number) => (
            <div
              key={index}
              className="flex items-center gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="w-12 h-12 relative flex items-center justify-center bg-white dark:bg-stone-800 rounded-xl p-2 shadow-sm border border-stone-200 dark:border-stone-700">
                <img
                  src={lang.logo ? urlFor(lang.logo).url() : ""}
                  alt={lang.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-stone-600 dark:text-stone-400 font-bold uppercase tracking-widest text-sm">
                {lang.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </FadeIn>
</section>

      <footer className="py-8 text-center text-stone-400 dark:text-stone-600 text-sm border-t border-stone-200 dark:border-stone-900 bg-white/50 dark:bg-black/50 backdrop-blur-lg">
        © 2026 Alya ♥. All rights reserved.
      </footer>
    </main>
  );
}
