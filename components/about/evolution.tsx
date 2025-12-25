"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const milestones = [
    {
        year: "1987",
        title: "Establishment",
        subtitle: "Vinayaka Service Center",
        description: "Founded with a singular focus on sewing machine service and repairs. Building trust through technical expertise and honest guidance.",
        logo: "/assets/logo/vinayaka-groups-logo.svg",
    },
    {
        year: "2003",
        title: "Expansion",
        subtitle: "Vinayaka Overseas",
        description: "Expanding horizons to support sales and global sourcing of high-quality sewing machines for the Indian market.",
        logo: "/assets/logo/vos-logo.jpeg",
    },
    {
        year: "2009",
        title: "Showroom",
        subtitle: "BTM Layout, Bengaluru",
        description: "Opening our multi-brand showroom to provide a tactile, hands-on experience for our customers.",
        logo: "/assets/logo/vinayaka-groups-logo.svg",
    },
    {
        year: "2019",
        title: "Specialization",
        subtitle: "Vinayaka Embroidery World",
        description: "Formation of a dedicated division for advanced embroidery technology, serving professionals and creators.",
        logo: "/assets/logo/vew-logo.png",
    },
];

export function EvolutionTimeline() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse position for magnetic effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    // Transform for parallax on the large number
    const numberX = useTransform(x, [-200, 200], [-20, 20]);
    const numberY = useTransform(y, [-200, 200], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            mouseX.set(e.clientX - centerX);
            mouseY.set(e.clientY - centerY);
        }
    };

    const goNext = () => setActiveIndex((prev) => (prev + 1) % milestones.length);
    const goPrev = () => setActiveIndex((prev) => (prev - 1 + milestones.length) % milestones.length);

    useEffect(() => {
        const timer = setInterval(goNext, 8000);
        return () => clearInterval(timer);
    }, []);

    const current = milestones[activeIndex];

    return (
        <div className="flex items-center justify-center min-h-[600px] overflow-hidden bg-stone py-20 rounded-md border border-mist/30">
            <div ref={containerRef} className="relative w-full max-w-6xl px-4 md:px-8" onMouseMove={handleMouseMove}>
                {/* Oversized index number - positioned to bleed off left edge */}
                <motion.div
                    className="absolute -left-12 lg:-left-24 top-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] lg:text-[28rem] font-bold text-ink/[0.03] select-none pointer-events-none leading-none tracking-tighter z-0"
                    style={{ x: numberX, y: numberY }}
                >
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="block"
                        >
                            {current.year.slice(-2)}
                        </motion.span>
                    </AnimatePresence>
                </motion.div>

                {/* Main content - asymmetric layout */}
                <div className="relative flex flex-col md:flex-row z-10">
                    {/* Left column - vertical text */}
                    <div className="hidden md:flex flex-col items-center justify-center pr-16 border-r border-mist/50">
                        <motion.span
                            className="text-xs font-mono text-bronze tracking-widest uppercase"
                            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Our Evolution
                        </motion.span>

                        {/* Vertical progress line */}
                        <div className="relative h-32 w-px bg-mist/50 mt-8">
                            <motion.div
                                className="absolute top-0 left-0 w-full bg-bronze origin-top"
                                animate={{
                                    height: `${((activeIndex + 1) / milestones.length) * 100}%`,
                                }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </div>
                    </div>

                    {/* Center - main content */}
                    <div className="flex-1 md:pl-16 py-8 md:py-12">
                        {/* Year Badge */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4 }}
                                className="mb-8"
                            >
                                <span className="inline-flex items-center gap-2 text-sm font-mono text-charcoal border border-mist bg-paper/50 rounded-full px-4 py-1.5 shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-bronze" />
                                    {current.year}
                                </span>
                            </motion.div>
                        </AnimatePresence>

                        {/* Description with character reveal */}
                        <div className="relative mb-12 min-h-[160px] md:min-h-[140px]">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={activeIndex}
                                    className="text-2xl md:text-4xl font-light text-ink leading-[1.25] tracking-tight font-headline"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {current.description.split(" ").map((word, i) => (
                                        <motion.span
                                            key={i}
                                            className="inline-block mr-[0.3em]"
                                            variants={{
                                                hidden: { opacity: 0, y: 20, rotateX: 90 },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    rotateX: 0,
                                                    transition: {
                                                        duration: 0.5,
                                                        delay: i * 0.05,
                                                        ease: [0.22, 1, 0.36, 1],
                                                    },
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: -10,
                                                    transition: { duration: 0.2, delay: i * 0.02 },
                                                },
                                            }}
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        {/* Author/Logo row */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    className="flex items-center gap-6"
                                >
                                    {/* Logo */}
                                    <div className="relative w-16 h-16 rounded-full border border-mist bg-white p-2 flex items-center justify-center overflow-hidden shadow-sm shrink-0">
                                        <Image
                                            src={current.logo}
                                            alt={current.title}
                                            width={60}
                                            height={60}
                                            className="object-contain" // object-contain to ensure logos fit well
                                        />
                                    </div>

                                    <div>
                                        <p className="text-xl font-headline text-ink">{current.title}</p>
                                        <p className="text-sm text-graphite">{current.subtitle}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation */}
                            <div className="flex items-center gap-4">
                                <motion.button
                                    onClick={goPrev}
                                    className="group relative w-12 h-12 rounded-full border border-mist flex items-center justify-center overflow-hidden bg-paper hover:border-bronze transition-colors"
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-bronze"
                                        initial={{ x: "-100%" }}
                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    />
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        className="relative z-10 text-charcoal group-hover:text-white transition-colors"
                                    >
                                        <path
                                            d="M10 12L6 8L10 4"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </motion.button>

                                <motion.button
                                    onClick={goNext}
                                    className="group relative w-12 h-12 rounded-full border border-mist flex items-center justify-center overflow-hidden bg-paper hover:border-bronze transition-colors"
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-bronze"
                                        initial={{ x: "100%" }}
                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    />
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        className="relative z-10 text-charcoal group-hover:text-white transition-colors"
                                    >
                                        <path
                                            d="M6 4L10 8L6 12"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom ticker - subtle repeating years */}
                <div className="absolute -bottom-20 left-0 right-0 overflow-hidden opacity-[0.05] pointer-events-none">
                    <motion.div
                        className="flex whitespace-nowrap text-6xl font-bold tracking-tight text-ink"
                        animate={{ x: [0, -1000] }}
                        transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                        {[...Array(10)].map((_, i) => (
                            <span key={i} className="mx-8">
                                {milestones.map((t) => t.year).join(" • ")} •
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
