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

                    {/* Right Column: Visual Diagram */}
                    <FadeIn delay={0.2} className="relative h-[400px] flex items-center justify-center lg:justify-end select-none">
                        {/* Connection Lines (SVG) - Minimal */}
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none stroke-[#A85846]/10"
                            style={{ strokeWidth: 1.5, fill: "none" }}
                        >
                            {/* Paths from satellite nodes to center node */}
                            <path d="M 120,60 C 220,60 250,200 350,200" className="hidden lg:block" />
                            <path d="M 120,150 C 180,150 250,200 350,200" className="hidden lg:block" />
                            <path d="M 120,250 C 180,250 250,200 350,200" className="hidden lg:block" />
                            <path d="M 120,340 C 200,340 250,200 350,200" className="hidden lg:block" />
                        </svg>

                        <div className="relative w-full max-w-lg h-full flex items-center justify-between">
                            {/* Satellite Nodes (Left Side) - Minimalist */}
                            <div className="flex flex-col justify-between h-full py-4 gap-6 z-10 pl-6">
                                <SatelliteNode icon={Home} label="Households" />
                                <SatelliteNode icon={Scissors} label="Boutiques" />
                                <SatelliteNode icon={Factory} label="Manufacturers" />
                                <SatelliteNode icon={Globe} label="Exporters" />
                            </div>

                            {/* Central Hub Node (Right Side) - Understated */}
                            <div className="relative z-20 flex flex-col items-center gap-3 lg:mr-12">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#A85846] shadow-sm border border-stone-100 ring-4 ring-[#F5F0E8]/50">
                                    <Layers className="w-8 h-8 opacity-80" />
                                </div>
                                <span className="font-headline text-xl text-charcoal/90 font-medium tracking-tight mt-1">Vinayaka Groups</span>
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
        <div className="flex items-center gap-4 w-48 group cursor-default transition-all duration-500">
            <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-charcoal/60 group-hover:text-[#A85846] group-hover:border-[#A85846]/30 transition-all shadow-sm">
                <Icon className="w-4 h-4" />
            </div>
            <span className="font-medium text-graphite/80 group-hover:text-charcoal transition-colors text-sm tracking-wide">{label}</span>
        </div>
    );
}
