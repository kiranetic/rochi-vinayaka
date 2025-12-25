import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export default function ServiceCenter() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center bg-slate text-paper overflow-hidden">
                <Image
                    src="/assets/picture/precision-sewing.jpg" // Using macro shot
                    alt="Service Center"
                    fill
                    className="object-cover opacity-30 grayscale"
                />
                <Container className="relative z-10">
                    <FadeIn>
                        <span className="text-sm font-semibold uppercase tracking-widest text-bronze mb-4 block">Division</span>
                        <h1 className="font-headline text-5xl md:text-6xl mb-6">Vinayaka Service Center</h1>
                        <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
                            The Foundation of Our Legacy Since 1987
                        </p>
                    </FadeIn>
                </Container>
            </section>

            {/* Services */}
            <Section text-balance>
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <FadeIn>
                            <h2 className="font-headline text-3xl text-charcoal mb-8 text-center">Service grounded in technical knowledge and accountability</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                {[
                                    "Preventive maintenance",
                                    "On-site and in-house repairs",
                                    "Genuine spare parts supply",
                                    "Technical diagnostics",
                                    "Support for domestic, industrial, and embroidery machines"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-stone p-6 border border-mist">
                                        <span className="w-2 h-2 bg-bronze rounded-full" />
                                        <span className="text-lg text-charcoal font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-paper border border-mist p-8 text-center text-graphite relative">
                                <p className="italic text-lg">"Service is approached methodically – with respect for both the machine and the client's time."</p>
                            </div>
                        </FadeIn>
                    </div>
                </Container>
            </Section>

            {/* Why Service Matters */}
            <Section background="stone">
                <Container>
                    <FadeIn className="text-center max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl text-charcoal mb-6">Why Service Matters</h2>
                        <p className="text-lg text-graphite mb-10 leading-relaxed">
                            Reliable service extends machine life, protects investment, and ensures uninterrupted operations. Our technicians are trained, experienced, and supported by a structured parts and documentation system.
                        </p>
                        <div className="h-px bg-bronze/30 w-full" />
                        <p className="text-lg text-graphite mt-10 leading-relaxed">
                            Many of our service relationships span decades – a reflection of consistency rather than claims.
                        </p>
                    </FadeIn>
                </Container>
            </Section>

            {/* CTA */}
            <Section>
                <Container>
                    <FadeIn className="text-center py-16">
                        <h2 className="font-headline text-3xl md:text-4xl text-charcoal mb-6">Schedule Support</h2>
                        <p className="text-graphite text-lg max-w-2xl mx-auto mb-10">
                            For service requests or maintenance planning, reach out to our team.
                        </p>
                        <Link href="/contact">
                            <Button variant="primary" size="lg">Request Service Assistance</Button>
                        </Link>
                    </FadeIn>
                </Container>
            </Section>
        </>
    );
}
