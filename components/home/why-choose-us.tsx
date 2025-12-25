"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Factory, Globe, Home, Layers, Scissors } from "lucide-react";

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-paper overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Column: Text Content */}
                    <FadeIn>
                        <h2 className="font-headline text-3xl md:text-5xl text-charcoal mb-12">
                            Why Clients Stay With Us
                        </h2>
                        <div className="space-y-12">
                            <div className="group">
                                <h3 className="font-headline text-2xl text-charcoal mb-3 group-hover:text-[#A85846] transition-colors">
                                    Industry Continuity
                                </h3>
                                <p className="text-graphite text-lg leading-relaxed max-w-md">
                                    Over three decades of presence means we don't just sell machines;
                                    we support them through their entire lifecycle.
                                </p>
                            </div>
                            <div className="group">
                                <h3 className="font-headline text-2xl text-charcoal mb-3 group-hover:text-[#A85846] transition-colors">
                                    Complete Ecosystem
                                </h3>
                                <p className="text-graphite text-lg leading-relaxed max-w-md">
                                    Sales, service, and spare parts under one roof—eliminating the
                                    need for third-party dependencies.
                                </p>
                            </div>
                            <div className="group">
                                <h3 className="font-headline text-2xl text-charcoal mb-3 group-hover:text-[#A85846] transition-colors">
                                    Disciplined Accountability
                                </h3>
                                <p className="text-graphite text-lg leading-relaxed max-w-md">
                                    We operate with personal responsibility. Every client relationship
                                    is managed with consistency and respect.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right Column: Visual Diagram - Responsive Refactor */}
                    <FadeIn delay={0.2}>
                        {/* 
                            Fixed aspect ratio container for responsive alignment.
                        */}
                        <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] max-w-lg mx-auto lg:ml-auto">

                            {/* SVG Layer */}
                            <svg
                                className="absolute inset-0 w-full h-full pointer-events-none"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                            >
                                {/* Paths connecting Left Nodes (approx x=10) to Hub (x=85, y=50) */}
                                <path d="M 12,15 C 40,15 50,50 82,50" className="stroke-[#A85846]/30 stroke-[0.5] fill-none" vectorEffect="non-scaling-stroke" />
                                <path d="M 12,38 C 40,38 50,50 82,50" className="stroke-[#A85846]/30 stroke-[0.5] fill-none" vectorEffect="non-scaling-stroke" />
                                <path d="M 12,62 C 40,62 50,50 82,50" className="stroke-[#A85846]/30 stroke-[0.5] fill-none" vectorEffect="non-scaling-stroke" />
                                <path d="M 12,85 C 40,85 50,50 82,50" className="stroke-[#A85846]/30 stroke-[0.5] fill-none" vectorEffect="non-scaling-stroke" />
                            </svg>

                            {/* Nodes Layer - Absolutely Positioned */}

                            {/* 1. Households */}
                            <div className="absolute left-0 top-[5%] md:top-[10%] w-[45%] md:w-[40%]">
                                <SatelliteNode icon={Home} label="Households" />
                            </div>

                            {/* 2. Boutiques */}
                            <div className="absolute left-0 top-[28%] md:top-[33%] w-[45%] md:w-[40%]">
                                <SatelliteNode icon={Scissors} label="Boutiques" />
                            </div>

                            {/* 3. Manufacturers */}
                            <div className="absolute left-0 top-[52%] md:top-[56%] w-[45%] md:w-[40%]">
                                <SatelliteNode icon={Factory} label="Manufacturers" />
                            </div>

                            {/* 4. Exporters */}
                            <div className="absolute left-0 top-[75%] md:top-[80%] w-[45%] md:w-[40%]">
                                <SatelliteNode icon={Globe} label="Exporters" />
                            </div>

                            {/* Center Hub */}
                            <div className="absolute right-0 top-[55%] -translate-y-1/2 flex flex-col items-center gap-3 w-[40%] z-20">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center text-[#A85846] shadow-sm border border-stone-100 ring-4 ring-[#F5F0E8]/50">
                                    <Layers className="w-6 h-6 md:w-8 md:h-8 opacity-80" />
                                </div>
                                <span className="font-headline text-lg md:text-xl text-charcoal/90 font-medium tracking-tight text-center">Vinayaka Groups</span>
                            </div>

                        </div>
                    </FadeIn>
                </div>
            </Container>
        </section>
    );
}

function SatelliteNode({ icon: Icon, label }: { icon: any; label: string }) {
    return (
        <div className="flex items-center gap-4 group cursor-default transition-all duration-500">
            <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-charcoal/60 group-hover:text-[#A85846] group-hover:border-[#A85846]/30 transition-all shadow-sm z-10 relative">
                <Icon className="w-4 h-4" />
            </div>
            <span className="font-medium text-graphite/80 group-hover:text-charcoal transition-colors text-sm tracking-wide">{label}</span>
        </div>
    );
}
