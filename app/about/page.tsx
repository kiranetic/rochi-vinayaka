import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Gem, Handshake, Cpu } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
    title: "About Us | Vinayaka Groups",
    description: "A Family Enterprise Rooted in Craft, Built on Continuity. Established in 1987 in Bengaluru.",
};

import { EvolutionTimeline } from "@/components/about/evolution";


export default function About() {
    return (
        <>
            <Section className="py-20 md:py-32">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        <div className="lg:col-span-7">
                            <FadeIn>
                                <span className="text-sm font-semibold uppercase tracking-widest text-steel mb-4 block">Our Story</span>
                                <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-ink mb-12 leading-tight">
                                    A Family Enterprise Rooted in <span className="text-[#A85846]">Craft</span>, Built on <span className="text-[#A85846]">Continuity</span>
                                </h1>
                                <div className="space-y-6 text-lg text-graphite font-body leading-relaxed max-w-2xl">
                                    <p>
                                        Vinayaka Groups was founded in 1987 in Bengaluru as a sewing machine service centre. From the outset, the focus was clear – technical reliability, honest guidance, and long-term customer relationships.
                                    </p>
                                    <p>
                                        Over time, client trust led to expansion. What began with service grew into sales, sourcing, and specialized embroidery solutions – grounded in the same principles that shaped the early years.
                                    </p>
                                    <p>
                                        Today, Vinayaka Groups operates as a three-vertical organization serving domestic users, professionals, manufacturers, and export-oriented businesses across India.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <FadeIn delay={0.2} className="relative aspect-[3/4] lg:aspect-auto h-full min-h-[500px] bg-mist/20">
                                <Image
                                    src="/assets/picture/vinayaka-overseas-shop-front.jpg" // Using shop front
                                    alt="Vinayaka Groups Foundation"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute bottom-6 left-6 right-6 bg-paper/90 p-4 backdrop-blur-sm">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-charcoal">Foundation of Operations, Bengaluru</p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Timeline */}
            <Section background="stone" className="overflow-hidden py-16">
                <Container>
                    <FadeIn>
                        <EvolutionTimeline />
                        <p className="mt-12 text-center text-lg font-medium italic text-stone-darker opacity-60">
                            Each milestone reflects measured growth – driven by demand, not disruption.
                        </p>
                    </FadeIn>
                </Container>
            </Section>

            {/* Beliefs */}
            <Section>
                <Container>
                    <FadeIn>
                        <h2 className="font-headline text-4xl text-charcoal mb-16">What Guides Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                            {[
                                { text: "Trust is built through consistency", icon: ShieldCheck },
                                { text: "Quality must be experienced, not promised", icon: Gem },
                                { text: "Relationships matter more than transactions", icon: Handshake },
                                { text: "Modern systems should respect traditional values", icon: Cpu }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start group">
                                    <div className="p-3 rounded-full bg-stone border border-mist group-hover:border-bronze transition-colors duration-300">
                                        <item.icon className="w-8 h-8 text-graphite group-hover:text-bronze transition-colors duration-300" strokeWidth={1.5} />
                                    </div>
                                    <p className="text-xl md:text-2xl text-charcoal font-medium pt-2">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </Container>
            </Section>

            {/* Reliable CTA */}
            <Section background="slate" className="text-center">
                <Container>
                    <FadeIn>
                        <h2 className="font-headline text-4xl text-paper mb-6">A Reliable Presence</h2>
                        <p className="text-stone/80 text-lg max-w-2xl mx-auto mb-10">
                            Clients continue to work with Vinayaka Groups not because we are the loudest – but because we are dependable.
                        </p>
                        <Link href="/contact">
                            <Button size="lg">Get in Touch</Button>
                        </Link>
                    </FadeIn>
                </Container>
            </Section>
        </>
    );
}
