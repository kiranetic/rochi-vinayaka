"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";

const divisions = [
    {
        title: "Vinayaka Overseas",
        id: "overseas",
        href: "/divisions/overseas",
        image: "/assets/picture/accessories-storage.jpg",
        description: "Sales and sourcing of domestic, industrial, and refurbished sewing machines.",
    },
    {
        title: "Vinayaka Embroidery World",
        id: "embroidery",
        href: "/divisions/embroidery",
        image: "/assets/picture/production-line.jpg",
        description: "Specialized vertical dedicated to computerized embroidery technology.",
    },
    {
        title: "Vinayaka Service Center",
        id: "service-center",
        href: "/divisions/service-center",
        image: "/assets/picture/precision-sewing.jpg",
        description: "The foundation of our legacy – service, maintenance, and genuine spare parts.",
    },
];

export function DivisionsGrid() {
    return (
        <section id="divisions" className="py-24 bg-stone">
            <Container>
                <FadeIn className="mb-16 text-center">
                    <h2 className="font-headline text-3xl md:text-5xl text-charcoal mb-4">
                        Our Divisions
                    </h2>
                    <p className="text-graphite text-lg max-w-2xl mx-auto">
                        Specialized verticals working in unison to provide a complete sewing ecosystem.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {divisions.map((division, index) => (
                        <FadeIn key={division.id} delay={index * 0.1}>
                            <Link href={division.href} className="block group relative h-[500px] rounded-sm overflow-hidden cursor-pointer bg-charcoal">
                                {/* Background Image */}
                                <Image
                                    src={division.image}
                                    alt={division.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                />

                                {/* Hover Frame - Inset Border */}
                                <div className="absolute inset-3 border border-[#A85846] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />

                                {/* Overlays */}
                                {/* 1. Base Darkening */}
                                <div className="absolute inset-0 bg-charcoal/20 transition-colors duration-500 group-hover:bg-charcoal/40" />

                                {/* 2. Gradient for Text Legibility (Bottom Up) */}
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content Container - Bottom Sheet Effect */}
                                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full">

                                    {/* Hover Glow Effect at Bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#A85846] opacity-0 group-hover:opacity-100 shadow-[0_0_20px_rgba(168,88,70,0.6)] transition-all duration-500" />

                                    <motion.div
                                        initial={false}
                                        className="transform transition-all duration-500 translate-y-[80px] group-hover:translate-y-0"
                                    >
                                        <h3 className="font-headline text-2xl lg:text-3xl text-white font-medium mb-4 drop-shadow-md">
                                            {division.title}
                                        </h3>

                                        {/* Hidden Content revealed on hover */}
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            <p className="text-white/90 text-base leading-relaxed mb-8 font-light tracking-wide">
                                                {division.description}
                                            </p>

                                            <div className="flex items-center gap-2 text-white font-semibold uppercase tracking-widest text-sm">
                                                Explore <MoveRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </section>
    );
}
