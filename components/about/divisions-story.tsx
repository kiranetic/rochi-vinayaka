"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, Globe, Palette, Cog } from "lucide-react"; // Using Globe, Palette, Cog as clearer metaphors
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/ui/fade-in";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const divisions = [
    {
        id: "overseas",
        title: "Vinayaka Overseas",
        icon: Globe,
        image: "/assets/picture/accessories-storage.jpg", // Using relevant image
        href: "/divisions/overseas",
        headline: "The Global Marketplace, Curated for You.",
        story: "In a world flooded with options, finding the right tool is an art. Vinayaka Overseas was established to bridge the gap between global innovation and local needs. We don't just stock machines; we curate a portfolio of the world's finest sewing technology—from domestic staples to industrial powerhouses. Whether it's the precision of Juki or the versatility of Usha, we ensure that every machine we sell is a perfect fit for the hands that will use it.",
    },
    {
        id: "embroidery",
        title: "Vinayaka Embroidery World",
        icon: Palette, // Represents creativity/art
        image: "/assets/picture/production-line.jpg",
        href: "/divisions/embroidery",
        headline: "Where Thread Meets Digital Precision.",
        story: "Embroidery is no longer just a craft; it is a digital frontier. Recognizing the shift towards automation and intricate design, we launched a dedicated vertical to master this evolution. From multi-head industrial giants to intuitive domestic units, we empower creators to turn digital concepts into tangible art. This division also houses our flagship legacy—our support for the creative industry's technological leap.",
    },
    {
        id: "service",
        title: "Vinayaka Service Centre",
        icon: Cog, // Represents mechanism/maintenance
        image: "/assets/picture/precision-sewing.jpg",
        href: "/divisions/service-center",
        headline: "The Promise of Perpetuity.",
        story: "A machine is only as good as the care it receives. Our journey began as a service center in 1987, and that DNA remains our strongest trait. While others see a sale as the end of a transaction, we see it as the beginning of a relationship. With a stockpile of genuine spares and a team of veteran technicians, we ensure that your production line never falls silent. We don't just fix machines; we protect livelihoods.",
    },
];

export function DivisionsStory() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-24 bg-stone">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="font-headline text-3xl md:text-5xl text-charcoal mb-6">
                        Three Pillars, One Legacy.
                    </h2>
                    <p className="text-graphite text-lg max-w-2xl mx-auto font-body">
                        What began as a single service point has evolved into a comprehensive ecosystem
                        supporting every stage of the garment creation process.
                    </p>
                </div>

                {/* Top Row: Navigation Tabs + Active Image */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-6">

                    {/* Left Column: Interactive Story List */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                        {divisions.map((division, index) => {
                            const isActive = activeTab === index;
                            // Simplify: Just icons and titles, cleaner selection state
                            return (
                                <div
                                    key={division.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`
                                group cursor-pointer rounded-sm p-6 lg:p-8 transition-all duration-300 border relative overflow-hidden flex-1 flex items-center
                                ${isActive
                                            ? "bg-[#F5F0E8] border-[#E8E1D9] shadow-sm"
                                            : "bg-transparent border-transparent hover:bg-[#F5F0E8]/50 hover:border-[#E8E1D9]/50"
                                        }
                            `}
                                >
                                    {/* Active Edge Indicator */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-[#A85846]"
                                        />
                                    )}

                                    <div className="flex items-center gap-6 w-full">
                                        <div className={`
                                    p-4 rounded-full transition-colors duration-300 flex-shrink-0
                                    ${isActive ? "bg-stone text-[#A85846]" : "bg-stone/50 text-stone-darker group-hover:bg-stone group-hover:text-[#A85846]"}
                                `}>
                                            <division.icon className="w-6 h-6" strokeWidth={1.5} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`font-headline text-xl transition-colors ${isActive ? "text-charcoal" : "text-graphite group-hover:text-charcoal"}`}>
                                                {division.title}
                                            </h3>

                                            {/* Mobile Only: Inline Details */}
                                            <div className="lg:hidden block pt-4">
                                                {isActive && (
                                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                                                        <p className="text-graphite mb-4 text-sm leading-relaxed">{division.story}</p>
                                                        <Link href={division.href}>
                                                            <Button variant="outline" size="sm" className="gap-2 text-[#A85846] border-[#A85846]/30 hover:bg-[#A85846] hover:text-white w-full rounded-sm">
                                                                Know More <MoveRight className="w-4 h-4" />
                                                            </Button>
                                                        </Link>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Desktop Arrow showing active state */}
                                        <div className={`hidden lg:block transition-all duration-300 ${isActive ? "opacity-100 translate-x-0 text-[#A85846]" : "opacity-0 -translate-x-4 text-stone-300"}`}>
                                            <MoveRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column: Dynamic Visual Only (Same height as list) */}
                    <div className="lg:col-span-7 relative h-full min-h-[400px] lg:min-h-auto hidden lg:block rounded-sm overflow-hidden bg-[#F5F0E8] shadow-sm border border-[#E8E1D9]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="h-full w-full relative"
                            >
                                <Image
                                    src={divisions[activeTab].image}
                                    alt={divisions[activeTab].title}
                                    fill
                                    className="object-cover"
                                />
                                {/* Subtle Overlay */}
                                <div className="absolute inset-0 bg-charcoal/10" />

                                {/* Badge */}
                                <div className="absolute top-6 right-6">
                                    <span className="bg-[#F5F0E8]/90 backdrop-blur text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm text-charcoal shadow-sm border border-[#E8E1D9]">
                                        {divisions[activeTab].title}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom Row: Full Width Story Card */}
                <div className="hidden lg:block w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`story-${activeTab}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="bg-[#F5F0E8] p-10 rounded-sm border border-[#E8E1D9] shadow-sm relative overflow-hidden"
                        >
                            {/* Decorative Background Element */}
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                                <div className="text-9xl font-headline text-charcoal leading-none">
                                    0{activeTab + 1}
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-12 items-center">
                                <div className="col-span-8 pr-12">
                                    <h3 className="font-headline text-3xl text-charcoal mb-6">
                                        {divisions[activeTab].headline}
                                    </h3>
                                    <p className="text-lg text-graphite/90 leading-relaxed font-light font-body">
                                        {divisions[activeTab].story}
                                    </p>
                                </div>
                                <div className="col-span-4 flex flex-col justify-center items-start border-l border-[#E8E1D9] pl-12 h-full">
                                    <p className="text-sm uppercase tracking-widest text-[#A85846] font-semibold mb-4">Explore Division</p>
                                    <Link href={divisions[activeTab].href}>
                                        <Button size="lg" className="bg-[#1C1C1C] hover:bg-[#A85846] text-white rounded-sm px-8 w-full transition-all duration-300">
                                            Know More
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </Container>
        </section>
    );
}
