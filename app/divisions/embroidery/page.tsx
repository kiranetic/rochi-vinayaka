import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export default function Embroidery() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center bg-slate text-paper overflow-hidden">
                <Image
                    src="/assets/picture/work-in-progress.jpg" // Using embroidery usage shot
                    alt="Embroidery Work"
                    fill
                    className="object-cover opacity-40 grayscale"
                />
                <Container className="relative z-10">
                    <FadeIn>
                        <div className="mb-8 relative w-48 h-48 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white/20">
                            <Image
                                src="/assets/logo/vew-logo.png"
                                alt="Vinayaka Embroidery World Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-widest text-white mb-4 block drop-shadow-md">Division</span>
                        <h1 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Vinayaka <span>Embroidery World</span>
                        </h1>
                        <p className="text-lg md:text-2xl font-medium text-white max-w-4xl drop-shadow-md">
                            Precision Technology for Creative and Industrial Embroidery
                        </p>
                    </FadeIn>
                </Container>
            </section>

            {/* Specialization */}
            <Section>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <FadeIn className="order-2 lg:order-1 relative aspect-square lg:aspect-auto bg-stone">
                            <Image
                                src="/assets/picture/active-stitching-process.jpg"
                                alt="Active Stitching"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </FadeIn>
                        <FadeIn className="order-1 lg:order-2">
                            <h2 className="font-headline text-3xl text-charcoal mb-8">Our Specialization</h2>
                            <p className="text-lg text-graphite mb-8">
                                We focus exclusively on computerized embroidery systems – supporting designers, boutiques, manufacturers, and production units across India.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    "Single-head embroidery machines for detailed work",
                                    "Multi-head systems for production environments",
                                    "Cording and specialty embroidery solutions",
                                    "In-house Vinayaka models and curated brands",
                                    "Training, installation, and technical support"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-lg text-graphite border-b border-mist pb-4 last:border-0">
                                        <span className="w-1.5 h-1.5 bg-bronze rounded-full mt-2.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                    </div>
                </Container>
            </Section>

            {/* Reliability & Trusted By */}
            <Section background="stone">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <FadeIn>
                            <h3 className="font-headline text-2xl text-charcoal mb-4">Built for Reliability</h3>
                            <p className="text-graphite leading-relaxed">
                                Every embroidery machine is evaluated for stitch accuracy, software stability, and service access. Backed by the wider Vinayaka service infrastructure, clients benefit from continuity beyond installation.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <h3 className="font-headline text-2xl text-charcoal mb-4">Trusted by Professionals</h3>
                            <p className="text-graphite leading-relaxed">
                                Fashion houses, creative studios, and manufacturing units rely on Vinayaka Embroidery World for technology that performs consistently – not occasionally.
                            </p>
                        </FadeIn>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section>
                <Container>
                    <FadeIn className="text-center py-16">
                        <h2 className="font-headline text-3xl md:text-4xl text-charcoal mb-6">Discuss Your Requirements</h2>
                        <p className="text-graphite text-lg max-w-2xl mx-auto mb-10">
                            We engage thoughtfully, understanding design goals, production volumes, and long-term expectations.
                        </p>
                        <Link href="/contact">
                            <Button variant="primary" size="lg">Connect With Embroidery Specialists</Button>
                        </Link>
                    </FadeIn>
                </Container>
            </Section>
        </>
    );
}
