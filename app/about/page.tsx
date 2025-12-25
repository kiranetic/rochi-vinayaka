import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
    title: "About Us | Vinayaka Groups",
    description: "A Family Enterprise Rooted in Craft, Built on Continuity. Established in 1987 in Bengaluru.",
};

const timelineEvents = [
    { year: "1987", title: "Establishment", desc: "Vinayaka Service Center founded, focused on sewing machine service and repairs." },
    { year: "2003", title: "Expansion", desc: "Launch of Vinayaka Overseas to support sales and sourcing of sewing machines." },
    { year: "2009", title: "Showroom", desc: "Opening of a multi-brand showroom in BTM Layout, Bengaluru." },
    { year: "2019", title: "Specialization", desc: "Formation of Vinayaka Embroidery World, a dedicated embroidery technology division." },
];

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
                                    A Family Enterprise Rooted in Craft, Built on Continuity
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
            <Section background="stone" className="overflow-hidden">
                <Container>
                    <FadeIn>
                        <h2 className="font-headline text-4xl text-charcoal mb-16">Our Evolution</h2>
                        <div className="flex flex-col md:flex-row gap-12 md:gap-0 relative">
                            {/* Line */}
                            <div className="hidden md:block absolute top-[18px] left-0 right-0 h-px bg-mist" />

                            {timelineEvents.map((event, index) => (
                                <div key={event.year} className="flex-1 relative pr-8">
                                    <div className="hidden md:block w-3 h-3 bg-bronze rounded-full absolute top-[13px] hover:scale-125 transition-transform" />
                                    <div className="md:pt-12">
                                        <span className="font-headline text-3xl text-bronze mb-2 block">{event.year}</span>
                                        <h3 className="font-semibold text-charcoal mb-3">{event.title}</h3>
                                        <p className="text-sm text-graphite leading-relaxed">{event.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-16 text-lg font-medium italic text-stone-darker opacity-60">
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
                                "Trust is built through consistency",
                                "Quality must be experienced, not promised",
                                "Relationships matter more than transactions",
                                "Modern systems should respect traditional values"
                            ].map((belief, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <span className="font-headline text-6xl text-mist leading-none select-none">{i + 1}</span>
                                    <p className="text-xl md:text-2xl text-charcoal font-medium pt-2">{belief}</p>
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
