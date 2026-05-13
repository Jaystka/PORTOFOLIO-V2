"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var framer_motion_1 = require("framer-motion");
var FadeIn_1 = require("@/components/FadeIn");
var Navbar_1 = require("@/components/Navbar");
var SaturnBackground_1 = require("@/components/SaturnBackground"); // IMPORT INI
var image_1 = require("next/image");
var next_themes_1 = require("next-themes");
// --- DATA ---
var heroSlides = [
    {
        id: "summary",
        label: "ABOUT ME",
        icon: React.createElement(lucide_react_1.Code2, { className: "w-5 h-5 mb-2 text-amber-600 dark:text-amber-400" }),
        content: (React.createElement("p", { className: "max-w-2xl mx-auto text-stone-600 dark:text-stone-400 leading-relaxed text-lg" },
            "Saya seorang Full Stack Developer yang berfokus pada performa dan skalabilitas. Membangun ekosistem digital menggunakan",
            " ",
            React.createElement("span", { className: "text-stone-900 dark:text-amber-100 font-bold" }, "Laravel, React, dan Docker"),
            ". Menjelajahi teknologi baru layaknya mengarungi antariksa."))
    },
    // ... Education & Certifications (Gunakan logika warna yang sama: stone & amber)
    {
        id: "education",
        label: "EDUCATION",
        icon: (React.createElement(lucide_react_1.GraduationCap, { className: "w-5 h-5 mb-2 text-amber-600 dark:text-amber-400" })),
        content: (React.createElement("div", { className: "max-w-2xl mx-auto text-stone-600 dark:text-stone-400 space-y-4 text-left md:text-center" },
            React.createElement("div", null,
                React.createElement("h3", { className: "text-stone-900 dark:text-white text-xl font-bold" }, "Sarjana Informatika"),
                React.createElement("p", { className: "text-stone-500 dark:text-stone-500" }, "Universitas Amikom Yogyakarta (2021 - 2025)"),
                React.createElement("p", { className: "text-sm mt-2" }, "Fokus studi pada Software Engineering. Lulus dengan predikat Cum Laude(GPA 3.89)."))))
    },
    {
        id: "certification",
        label: "CERTIFICATIONS",
        icon: React.createElement(lucide_react_1.Award, { className: "w-5 h-5 mb-2 text-amber-600 dark:text-amber-400" }),
        content: (React.createElement("div", { className: "max-w-2xl mx-auto text-stone-600 dark:text-stone-400 text-left md:text-center grid grid-cols-1 md:grid-cols-2 gap-4" },
            React.createElement("div", { className: "bg-white/50 dark:bg-stone-900/50 p-3 rounded border border-stone-200 dark:border-stone-800 shadow-sm backdrop-blur-sm" },
                React.createElement("h4", { className: "text-stone-900 dark:text-white font-semibold" }, "PyTorch DL Framework"),
                React.createElement("p", { className: "text-xs text-stone-500" }, "Jago Digital Academy - 2025")),
            React.createElement("div", { className: "bg-white/50 dark:bg-stone-900/50 p-3 rounded border border-stone-200 dark:border-stone-800 shadow-sm backdrop-blur-sm" },
                React.createElement("h4", { className: "text-stone-900 dark:text-white font-semibold" }, "Fundamental of Deep Learning"),
                React.createElement("p", { className: "text-xs text-stone-500" }, "NVIDIA- 2023"))))
    },
];
var projects = [
    {
        title: "Villa Reservation",
        category: "Full Stack Development",
        tech: ["Laravel", "Vue JS", "Tailwind CSS", "PostgreSQL"],
        description: "Web aplikasi untuk reservasi villa secara online.",
        image: "/images/villa.png",
        link: "https://villa.jays.codes",
        repo: "#"
    },
    {
        title: "Interactive Resume Builder",
        category: "Frontend Application",
        tech: ["React.js", "Framer Motion", "Vite"],
        description: "Aplikasi web untuk membuat CV/Resume secara dinamis.",
        image: "/images/cv.png",
        link: "https://resume.jays.codes",
        repo: "#"
    },
    {
        title: "Dashboard Internal Perusahaan",
        category: "Full Stack Development",
        tech: ["Laravel", "PostgreSQL", "Vite"],
        description: "Dashboard internal untuk manajemen data perusahaan. Follow up, tracking, dll.",
        image: "/images/aici.png",
        link: "https://aici.jays.codes",
        repo: "#"
    },
    {
        title: "Personality Test Web",
        category: "Full Stack Development",
        tech: ["React.js", "Vite"],
        description: "Web aplikasi untuk mengukur kecenderungan kepribadian berdasarkan soal yang diberikan.",
        image: "/images/personality.png",
        link: "https://personality.jays.codes",
        repo: "#"
    },
];
var skills = [
    {
        category: "Frontend",
        items: "Vue.js, React.js, Tailwind CSS",
        icon: React.createElement(lucide_react_1.Layout, { size: 32 })
    },
    {
        category: "Backend",
        items: "Laravel, CodeIgniter 3, MySQL",
        icon: React.createElement(lucide_react_1.Server, { size: 32 })
    },
    {
        category: "DevOps",
        items: "Docker, Nginx, Easypanel",
        icon: React.createElement(lucide_react_1.Database, { size: 32 })
    },
    {
        category: "Creative",
        items: "UI/UX Implementation, Figma",
        icon: React.createElement(lucide_react_1.Code2, { size: 32 })
    },
];
var experiences = [
    // ... Data experiences SAMA ...
    {
        period: "2025 - Present",
        role: "Full Stack Developer",
        company: "Penerbit Deepublish",
        description: "Membangun dan memelihara platform sistem internal menggunakan Laravel dan React."
    },
    {
        period: "2025 - 2026",
        role: "AI Engineer",
        company: "Arutala App",
        description: "Focused on building and optimizing OCR (Optical Character Recognition) models tailored to recognize and digitize Nusantara’s Indigenous Scripts."
    },
    {
        period: "2024 - 2025",
        role: "Project Manager Computer Vision Team",
        company: "Data Sorcerers",
        description: "Create a work plan that includes targets for achievement within a certain period of time."
    },
];
var socialLinks = [
    {
        name: "LinkedIn",
        icon: React.createElement(lucide_react_1.Linkedin, { size: 18 }),
        href: "https://linkedin.com/in/jaystka"
    },
    {
        name: "Instagram",
        icon: React.createElement(lucide_react_1.Instagram, { size: 18 }),
        href: "https://instagram.com/jaystka_kusuma"
    },
    {
        name: "Medium",
        icon: React.createElement(lucide_react_1.Bookmark, { size: 18 }),
        href: "https://medium.com/@jaystkapradana233"
    },
];
var languages = [
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
];
function Portfolio() {
    var _a = react_1.useState(0), currentSlideIndex = _a[0], setCurrentSlideIndex = _a[1];
    var theme = next_themes_1.useTheme().theme;
    var _b = react_1.useState(false), mounted = _b[0], setMounted = _b[1];
    // Mencegah Hydration Mismatch
    react_1.useEffect(function () {
        setMounted(true);
    }, []);
    var handleNextSlide = function () {
        setCurrentSlideIndex(function (prev) { return (prev + 1) % heroSlides.length; });
    };
    var activeSlide = heroSlides[currentSlideIndex];
    var _c = react_1.useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var heroImage = mounted && theme === "dark" ? "/images/pp3.png" : "/images/pp1.png";
    return (
    // TEXT: text-stone-800 & dark:text-stone-200 (Warna Batu lebih natural daripada Gray)
    React.createElement("main", { className: "min-h-screen relative transition-colors duration-700 text-stone-800 dark:text-stone-200 font-sans overflow-x-hidden" },
        React.createElement(SaturnBackground_1.SaturnBackground, null),
        React.createElement(Navbar_1.Navbar, null),
        React.createElement("div", { className: "hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-[9999]" },
            React.createElement("div", { className: "w-px h-16 bg-gradient-to-t from-amber-500 to-transparent opacity-50" }),
            socialLinks.map(function (social, index) { return (React.createElement(framer_motion_1.motion.a, { key: index, href: social.href, initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.8 + index * 0.1 }, className: "w-11 h-11 flex items-center justify-center rounded-full border border-stone-300 dark:border-stone-700 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md text-stone-600 dark:text-stone-400 hover:border-amber-500 hover:text-amber-500 hover:scale-110 transition-all duration-300 shadow-xl" }, social.icon)); }),
            React.createElement("div", { className: "w-px h-16 bg-gradient-to-b from-amber-500 to-transparent opacity-50" })),
        React.createElement("div", { className: "lg:hidden fixed left-6 bottom-6 z-[9999] flex flex-col-reverse items-center gap-4" },
            React.createElement("button", { onClick: function () { return setIsOpen(!isOpen); }, className: "w-14 h-14 flex items-center justify-center rounded-full bg-amber-500 text-white shadow-2xl shadow-amber-500/40 active:scale-90 transition-transform z-10" }, isOpen ? React.createElement(lucide_react_1.X, { size: 24 }) : React.createElement(lucide_react_1.Share2, { size: 24 })),
            React.createElement(framer_motion_1.AnimatePresence, null, isOpen && (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20, scale: 0.8 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: 20, scale: 0.8 }, className: "flex flex-col gap-4" }, socialLinks.map(function (social, index) { return (React.createElement(framer_motion_1.motion.a, { key: index, href: social.href, target: "_blank", rel: "noopener noreferrer", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, className: "w-12 h-12 flex items-center justify-center rounded-full border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 shadow-xl" }, social.icon)); }))))),
        React.createElement("section", { id: "hero", className: "min-h-screen flex flex-col justify-center items-center text-center px-4 relative pt-20 pb-20" },
            React.createElement(FadeIn_1.FadeIn, null,
                React.createElement("div", { className: "w-45 h-45 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white dark:border-stone-800 mx-auto mb-8 shadow-2xl shadow-amber-500/20 dark:shadow-amber-900/30 relative z-10 bg-stone-200 dark:bg-stone-800" },
                    React.createElement("div", { className: "w-full h-full flex items-center justify-center text-stone-500 dark:text-stone-400" }, mounted ? (React.createElement(image_1["default"], { src: heroImage, alt: "Logo", width: 230, height: 230 })) : (React.createElement("div", { className: "w-full h-full bg-stone-200 dark:bg-stone-800 animate-pulse" }))))),
            React.createElement(FadeIn_1.FadeIn, { delay: 0.2, className: "relative z-10" },
                React.createElement("h1", { className: "text-2xl md:text-5xl font-bold tracking-tight text-stone-900 dark:text-amber-50 mb-2" }, "JAYSTKA PRADANA KUSUMA"),
                React.createElement("p", { className: "text-xl md:text-2xl text-amber-600 dark:text-amber-400 font-light mb-8 tracking-widest uppercase" }, "Full Stack Developer"),
                React.createElement("div", { className: "min-h-[180px] mb-8 flex flex-col items-center justify-center" },
                    React.createElement(framer_motion_1.AnimatePresence, { mode: "wait" },
                        React.createElement(framer_motion_1.motion.div, { key: activeSlide.id, initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 1.05 }, transition: { duration: 0.4 }, className: "w-full" },
                            React.createElement("div", { className: "flex flex-col items-center justify-center mb-3" },
                                activeSlide.icon,
                                React.createElement("span", { className: "text-xs font-bold tracking-[0.2em] text-stone-400 dark:text-stone-500 uppercase" }, activeSlide.label)),
                            activeSlide.content)),
                    React.createElement("div", { className: "flex gap-2 mt-4" }, heroSlides.map(function (_, idx) { return (React.createElement("div", { key: idx, className: "w-1.5 h-1.5 rounded-full transition-all duration-300 " + (idx === currentSlideIndex
                            ? "bg-amber-600 dark:bg-amber-400 w-4"
                            : "bg-stone-300 dark:bg-stone-700") })); })))),
            React.createElement(FadeIn_1.FadeIn, { delay: 0.4, className: "flex gap-4 justify-center items-center relative z-10" },
                React.createElement("button", { className: "px-8 py-3 bg-stone-900 dark:bg-amber-100 text-white dark:text-stone-900 font-semibold rounded-full hover:bg-black dark:hover:bg-white transition-colors duration-300 shadow-lg shadow-stone-400/50 dark:shadow-amber-900/50" }, "CONTACT ME"),
                React.createElement("button", { onClick: handleNextSlide, className: "p-3 bg-white/80 dark:bg-stone-800/80 backdrop-blur-md border border-stone-200 dark:border-stone-700 rounded-full hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300 group shadow-sm active:scale-95" },
                    React.createElement(lucide_react_1.ArrowRight, { className: "w-6 h-6 text-stone-900 dark:text-amber-50 group-hover:translate-x-1 transition-transform" })))),
        React.createElement("section", { id: "experience", className: "py-20 px-4 md:px-20 max-w-7xl mx-auto scroll-mt-24" },
            React.createElement(FadeIn_1.FadeIn, null,
                React.createElement("h2", { className: "text-3xl font-bold text-center mb-16 text-stone-900 dark:text-amber-50 tracking-widest uppercase" }, "Experience")),
            React.createElement("div", { className: "relative" },
                React.createElement("div", { className: "absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-stone-300 dark:bg-stone-800 transform md:-translate-x-1/2 ml-4 md:ml-0" }),
                experiences.map(function (exp, index) { return (React.createElement("div", { key: index, className: "relative flex items-center justify-between mb-12 md:mb-24 " + (index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row") },
                    React.createElement("div", { className: "hidden md:block w-5/12" }),
                    React.createElement("div", { className: "absolute left-0 md:left-1/2 w-8 h-8 bg-stone-100 dark:bg-stone-900 border-2 border-stone-400 dark:border-amber-600 rounded-full z-10 transform md:-translate-x-1/2 flex items-center justify-center" },
                        React.createElement("div", { className: "w-2 h-2 bg-amber-500 rounded-full" })),
                    React.createElement(FadeIn_1.FadeIn, { delay: index * 0.1, className: "ml-12 md:ml-0 w-full md:w-5/12" },
                        React.createElement("div", { className: "p-6 bg-white/60 dark:bg-stone-900/40 backdrop-blur-md border border-stone-200 dark:border-stone-800 rounded-xl hover:border-amber-400 dark:hover:border-amber-700/50 transition-all duration-300 group shadow-sm" },
                            React.createElement("span", { className: "text-sm text-stone-400 dark:text-stone-500 font-mono mb-2 block" }, exp.period),
                            React.createElement("h3", { className: "text-xl font-bold text-stone-900 dark:text-amber-50 mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" }, exp.role),
                            React.createElement("h4", { className: "text-stone-500 dark:text-stone-400 mb-4" }, exp.company),
                            React.createElement("p", { className: "text-stone-600 dark:text-stone-400 text-sm leading-relaxed" }, exp.description))))); }))),
        React.createElement("section", { id: "projects", className: "py-20 px-4 md:px-20 max-w-7xl mx-auto scroll-mt-24" },
            React.createElement(FadeIn_1.FadeIn, null,
                React.createElement("h2", { className: "text-3xl font-bold text-center mb-16 text-stone-900 dark:text-amber-50 tracking-widest uppercase" }, "My Projects")),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8" }, projects.map(function (project, i) { return (React.createElement(FadeIn_1.FadeIn, { key: i, delay: i * 0.1 },
                React.createElement("div", { className: "group relative bg-white/60 dark:bg-stone-900/40 backdrop-blur-md border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden hover:border-amber-400 dark:hover:border-amber-700/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col h-full" },
                    React.createElement("div", { className: "h-56 w-full relative overflow-hidden border-b border-stone-100 dark:border-stone-800" },
                        project.image ? (React.createElement(image_1["default"], { src: project.image, alt: project.title, fill: true, className: "object-cover group-hover:scale-110 transition-transform duration-500" })) : (React.createElement("div", { className: "w-full h-full bg-stone-100 dark:bg-stone-800/50 flex items-center justify-center" },
                            React.createElement(lucide_react_1.Code2, { className: "text-stone-400 dark:text-stone-600 w-16 h-16" }))),
                        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" })),
                    React.createElement("div", { className: "p-6 flex flex-col flex-grow" },
                        React.createElement("span", { className: "text-xs font-bold text-amber-600 dark:text-amber-500 tracking-wider uppercase mb-1 block" }, project.category),
                        React.createElement("h3", { className: "text-xl font-bold text-stone-900 dark:text-amber-50 mb-2" }, project.title),
                        React.createElement("p", { className: "text-stone-600 dark:text-stone-400 text-sm mb-6" }, project.description),
                        React.createElement("a", { href: project.link, className: "flex items-center gap-2 text-sm text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors" },
                            React.createElement(lucide_react_1.ExternalLink, { className: "w-4 h-4" }),
                            " Live Demo"))))); }))),
        React.createElement("section", { id: "skills", className: "py-20 px-4 md:px-20 max-w-7xl mx-auto scroll-mt-24" },
            React.createElement(FadeIn_1.FadeIn, null,
                React.createElement("h2", { className: "text-3xl font-bold text-center mb-16 text-stone-900 dark:text-amber-50 tracking-widest uppercase" }, "Skills")),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" }, skills.map(function (skill, i) { return (React.createElement(FadeIn_1.FadeIn, { key: i, delay: i * 0.1 },
                React.createElement("div", { className: "aspect-square bg-white/60 dark:bg-stone-900/40 backdrop-blur-md border border-stone-200 dark:border-stone-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-amber-50 dark:hover:bg-stone-800 transition-all duration-300 shadow-sm group hover:border-amber-300 dark:hover:border-amber-700" },
                    React.createElement("div", { className: "mb-4 p-4 bg-stone-100 dark:bg-stone-800 rounded-full text-stone-900 dark:text-amber-100 group-hover:text-amber-600 transition-colors" }, skill.icon),
                    React.createElement("h3", { className: "text-lg font-bold text-stone-900 dark:text-amber-50 mb-2" }, skill.category),
                    React.createElement("p", { className: "text-sm text-stone-500 dark:text-stone-400" }, skill.items)))); }))),
        React.createElement("section", { className: "pb-20 px-4 max-w-5xl mx-auto" },
            React.createElement(FadeIn_1.FadeIn, null,
                React.createElement("h3", { className: "text-center text-sm font-bold tracking-[0.2em] text-dark dark:text-stone-500 uppercase mb-6" }, "Programming Language"),
                React.createElement("div", { className: "bg-stone-100 dark:bg-stone-900/30 backdrop-blur-md border border-stone-200 dark:border-stone-800 rounded-3xl py-8 overflow-hidden" },
                    React.createElement("div", { className: "relative px-12 flex overflow-hidden" },
                        React.createElement(framer_motion_1.motion.div, { className: "flex gap-12 items-center whitespace-nowrap", animate: { x: ["0%", "-50%"] }, transition: {
                                ease: "linear",
                                duration: 20,
                                repeat: Infinity
                            } }, __spreadArrays(languages, languages).map(function (lang, index) { return (React.createElement("div", { key: index, className: "flex items-center gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" },
                            React.createElement("div", { className: "w-12 h-12 relative flex items-center justify-center bg-white dark:bg-stone-800 rounded-xl p-2 shadow-sm border border-stone-200 dark:border-stone-700" },
                                React.createElement("img", { src: lang.logo, alt: lang.name, className: "w-full h-full object-contain" })),
                            React.createElement("span", { className: "text-stone-600 dark:text-stone-400 font-bold uppercase tracking-widest text-sm" }, lang.name))); })))))),
        React.createElement("footer", { className: "py-8 text-center text-stone-400 dark:text-stone-600 text-sm border-t border-stone-200 dark:border-stone-900 bg-white/50 dark:bg-black/50 backdrop-blur-lg" }, "\u00A9 2026 Alya \u2665. All rights reserved.")));
}
exports["default"] = Portfolio;
