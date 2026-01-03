import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Gem, Handshake, Cpu } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
    title: "About Us | Vinayaka Groups",
    description: "A Family Enterprise Rooted in Craft, Built on Continuity. Established in 1987 in Bengaluru.",
};

import { EvolutionTimeline } from "@/components/about/evolution";
import { DivisionsStory } from "@/components/about/divisions-story";
import { ClientVoices } from "@/components/home/client-voices";


export default function About() {
    return (
        <>
            <Section className="py-20 md:py-32">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        <div className="lg:col-span-7">
                            <FadeIn>
                                <span className="text-sm font-semibold uppercase tracking-widest text-steel mb-4 block">Our Foundation</span>
                                <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-ink mb-12 leading-tight">
                                    Founded on <span className="text-[#A85846]">Character</span>,<br />Built for <span className="text-[#A85846]">Generations</span>.
                                </h1>
                                <div className="space-y-6 text-lg text-graphite font-body leading-relaxed max-w-2xl">
                                    <p>
                                        In 1987, <strong>Mr. Krishna Murthy</strong> established Vinayaka Groups in Bengaluru not merely as a business, but as a commitment to craft. With a profound understanding of sewing mechanics and a quiet dedication to service, he laid the cornerstone of what would become a trusted industry name.
                                    </p>
                                    <p>
                                        His philosophy was simple yet exacting: technology should empower the creator, and support should never end at the sale. This ethos—integrity over impulse, long-term relationships over quick transactions—remains the guiding force of our organization today.
                                    </p>
                                    <p>
                                        What began as a specialized service center is now a comprehensive ecosystem serving domestic households, fashion designers, and large-scale textile manufacturers across India.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <FadeIn delay={0.2} className="relative aspect-[3/4] lg:aspect-auto h-full min-h-[500px] bg-mist/20 rounded-sm overflow-hidden border border-stone-200 shadow-2xl">
                                <Image
                                    src="/assets/picture/KrishnaMurthySir.jpeg"
                                    alt="Mr. Krishna Murthy, Founder of Vinayaka Groups"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-24 text-white">
                                    <p className="font-headline text-2xl mb-1">Mr. Krishna Murthy</p>
                                    <p className="text-xs font-semibold uppercase tracking-widest opacity-80">Founder, Est. 1987</p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Divisions Story Section */}
            <DivisionsStory />

            {/* The Team / Service Collective */}
            <Section background="stone" className="py-24">
                <Container>
                    <FadeIn>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <div className="max-w-2xl">
                                <span className="text-sm font-semibold uppercase tracking-widest text-[#A85846] mb-2 block">The Collective</span>
                                <h2 className="font-headline text-3xl md:text-5xl text-charcoal mb-4">The Hands That Serve</h2>
                                <p className="text-graphite text-lg leading-relaxed">
                                    We are a family-run enterprise extended by a team of dedicated technicians, coordinators, and specialists.
                                </p>
                            </div>
                        </div>

                        <div className="relative aspect-[16/9] w-full bg-white rounded-sm overflow-hidden shadow-xl border-4 border-white mb-8">
                            <Image
                                src="/assets/picture/vinayaka-team.jpg"
                                alt="The Vinayaka Groups Team"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-stone-300/50">
                            <div>
                                <h4 className="font-headline text-xl text-charcoal mb-2">Technical Mastery</h4>
                                <p className="text-stone-600 text-sm">
                                    Our technicians aren't just trained in repair; they are educated in the nuance of every machine we sell.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-headline text-xl text-charcoal mb-2">Operational Continuity</h4>
                                <p className="text-stone-600 text-sm">
                                    From logistics to spare parts, our support staff ensures your production never halts.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-headline text-xl text-charcoal mb-2">Shared Values</h4>
                                <p className="text-stone-600 text-sm">
                                    Every member of our team upholds the founder's promise: Service First.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </Section>

            {/* Timeline */}
            <Section className="overflow-hidden py-16">
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

            {/* Impact Stories */}
            <ClientVoices headline="Impact Stories" subhead="Real experiences from our community." />

            {/* Reliable CTA - Centered Badge Design */}
            <Section background="slate" className="py-24 lg:py-40">
                <Container>
                    <FadeIn>
                        <div className="flex flex-col text-center gap-8 items-center">
                            <div>
                                <Badge variant="secondary">Partner With Us</Badge>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-3xl md:text-5xl font-headline text-paper tracking-tight max-w-2xl mx-auto leading-tight">
                                    A Reliable <span className="text-[#A85846]">Presence</span>
                                </h3>
                                <p className="text-lg leading-relaxed text-stone-300 max-w-2xl mx-auto">
                                    Clients continue to work with Vinayaka Groups not because we are the loudest – but because we are dependable. Experience the difference.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                <Link href="/contact?type=call">
                                    <Button variant="outline" className="gap-4 w-full sm:w-auto border-stone-500 text-stone-300 hover:bg-white hover:text-charcoal hover:border-transparent">
                                        Speak to us <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button className="gap-4 w-full sm:w-auto bg-[#A85846] text-white hover:bg-[#A85846]/90 border-transparent">
                                        Get in Touch <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </Section>
        </>
    );
}
