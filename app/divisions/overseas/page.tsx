import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export default function Overseas() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center bg-slate text-paper overflow-hidden">
                <Image
                    src="/assets/picture/accessories-storage.jpg" // Using a relevant image
                    alt="Vinayaka Overseas"
                    fill
                    className="object-cover opacity-30 grayscale"
                />
                <Container className="relative z-10">
                    <FadeIn>
                        <div className="mb-8 relative w-48 h-48 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white/20">
                            <Image
                                src="/assets/logo/vos-logo.jpeg"
                                alt="Vinayaka Overseas Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-widest text-white mb-4 block drop-shadow-md">Division</span>
                        <h1 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Vinayaka <span>Overseas</span>
                        </h1>
                        <p className="text-lg md:text-2xl font-medium text-white max-w-4xl drop-shadow-md">
                            Sewing Machine Sales Backed by Process and Accountability
                        </p>
                    </FadeIn>
                </Container>
            </section>

            {/* Offerings */}
            <Section>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <FadeIn>
                            <h2 className="font-headline text-3xl text-charcoal mb-8">What We Offer</h2>
                            <ul className="space-y-6">
                                {[
                                    "Domestic sewing machines for home and professional use",
                                    "Industrial machines for manufacturing environments",
                                    "Carefully refurbished second-hand machines",
                                    "Multi-brand sourcing with technical evaluation",
                                    "Installation support and after-sales coordination"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-lg text-graphite border-b border-mist pb-4 last:border-0">
                                        <span className="w-1.5 h-1.5 bg-bronze rounded-full mt-2.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                        <FadeIn delay={0.2} className="relative aspect-square lg:aspect-auto bg-stone">
                            <Image
                                src="/assets/picture/accessories-storage.jpg"
                                alt="Sewing Machine Storage"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </FadeIn>
                    </div>
                </Container>
            </Section>

            {/* Why Choose Us */}
            <Section background="stone">
                <Container>
                    <FadeIn>
                        <h2 className="font-headline text-3xl text-charcoal mb-12">Why Clients Choose Vinayaka Overseas</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                "Over two decades of sales experience",
                                "Rigorous technical evaluation processes",
                                "Genuine parts and service integration",
                                "Clear guidance without over-selling",
                                "Support from a legacy service backbone"
                            ].map((item, i) => (
                                <div key={i} className="bg-paper p-8 border border-mist hover:border-bronze transition-colors">
                                    <p className="text-lg text-charcoal font-medium">{item}</p>
                                </div>
                            ))}
                            <div className="bg-slate p-8 flex flex-col justify-center text-center">
                                <p className="text-paper/80 italic">"We operate with the understanding that machine reliability directly affects business continuity."</p>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </Section>

            {/* CTA */}
            <Section>
                <Container>
                    <FadeIn className="text-center bg-slate text-paper py-16 px-6 md:px-12 relative overflow-hidden">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-bronze/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <h2 className="font-headline text-3xl md:text-4xl mb-6 relative z-10">Built for Long-Term Partnerships</h2>
                        <p className="text-lg opacity-80 max-w-2xl mx-auto mb-10 relative z-10">
                            Our clients include workshops, factories, exporters, and institutional buyers who value clarity, consistency, and dependable follow-through.
                        </p>
                        <Link href="/contact" className="relative z-10">
                            <Button variant="primary" size="lg">Contact Vinayaka Overseas</Button>
                        </Link>
                    </FadeIn>
                </Container>
            </Section>
        </>
    );
}
