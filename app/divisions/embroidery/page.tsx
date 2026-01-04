import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";

export default function Embroidery() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center bg-slate text-paper overflow-hidden">
                <Image
                    src="/assets/picture/work-in-progress.jpg"
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

            {/* Facility Showcase (Store Front) */}
            <Section background="stone" className="py-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <FadeIn>
                            <div className="relative aspect-[5/4] rounded-sm overflow-hidden shadow-xl border border-white/50">
                                <Image
                                    src="/assets/picture/vinayaka-embroidery-world-storefront.png"
                                    alt="Vinayaka Embroidery Facility"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-1000"
                                />
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2} className="flex flex-col justify-center">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A85846] mb-4">Innovation Hub</span>
                            <h2 className="font-headline text-3xl md:text-5xl text-charcoal mb-6 leading-tight">
                                Where Innovation Threads Through Design.
                            </h2>
                            <p className="text-lg text-graphite mb-8 leading-relaxed max-w-lg">
                                Use our facility to push the boundaries of what's possible. From delicate boutique patterns to high-volume industrial runs, simulate your production environment before you invest.
                            </p>

                            <div className="grid grid-cols-2 gap-8 border-t border-stone-200 pt-8 max-w-lg">
                                <div>
                                    <h4 className="font-headline text-lg text-charcoal mb-2">Technical Training</h4>
                                    <p className="text-stone-darker text-sm leading-relaxed">
                                        Master the software and mechanics with our expert-led sessions.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-headline text-lg text-charcoal mb-2">Pattern Digitizing</h4>
                                    <p className="text-stone-darker text-sm leading-relaxed">
                                        Optimize your designs for flawless machine execution.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </Container>
            </Section>

            {/* Featured Categories */}
            <Section>
                <Container>
                    <FadeIn className="mb-12 text-center">
                        <h2 className="font-headline text-3xl md:text-4xl text-charcoal mb-4">Embroidery Machines for Every Scale</h2>
                        <p className="text-graphite text-lg max-w-2xl mx-auto">
                            Empowering creators from home studios to large-scale export houses.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Single Head Machines",
                                desc: "Perfect for boutiques and sampling. Precision work with ease.",
                                image: "/assets/picture/single_head_embroidery_machine.png",
                                href: "/products?category=embroidery-single"
                            },
                            {
                                title: "Multi-Head Systems",
                                desc: "High-speed production workhorses designed for efficiency.",
                                image: "/assets/picture/multi_head_embroidery_machine.png",
                                href: "/products?category=embroidery-multi"
                            },
                            {
                                title: "Speciality Machines",
                                desc: "Cording, sequins, and mixed-media capabilities for unique designs.",
                                image: "/assets/picture/cording_sequin_embroidery_machine.png",
                                href: "/products?category=embroidery-specialty"
                            }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <Link href={item.href} className="group block h-full">
                                    <div className="bg-paper border border-mist hover:border-bronze transition-all duration-300 rounded-sm overflow-hidden h-full flex flex-col hover:shadow-lg">
                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors" />
                                        </div>
                                        <div className="p-8 flex-1 flex flex-col">
                                            <h3 className="font-headline text-2xl text-charcoal mb-3 group-hover:text-[#A85846] transition-colors">{item.title}</h3>
                                            <p className="text-stone-darker leading-relaxed mb-6 flex-1">{item.desc}</p>
                                            <div className="mt-auto">
                                                <span className="text-sm font-bold uppercase tracking-widest text-[#A85846] flex items-center gap-2 group-hover:gap-3 transition-all">
                                                    View Models <span aria-hidden="true">&rarr;</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Why Choose Us - Premium Strict Grid */}
            <section className="py-24 bg-[#FFFCF8]">
                <Container>
                    <FadeIn>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div>
                                <h2 className="font-headline text-3xl md:text-5xl text-charcoal mb-4">The Foundation of Your Production</h2>
                                <p className="text-graphite text-lg max-w-xl font-body">
                                    More than just machinery, we provide the infrastructure for your success.
                                </p>
                            </div>
                            <Link href="/about">
                                <Button variant="ghost" className="text-charcoal hover:text-[#A85846] gap-2 hover:bg-[#F5F0E8]">
                                    About Vinayaka <span aria-hidden="true">&rarr;</span>
                                </Button>
                            </Link>
                        </div>

                        <div className="border-t border-l border-stone-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    title: "Technical Mastery",
                                    desc: "Our engineers understand the physics of every stitch, ensuring your machines run at peak optimization.",
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                                    )
                                },
                                {
                                    title: "Comprehensive Training",
                                    desc: "We don't just install; we educate. Your team will master the software and mechanics before we leave.",
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10v6" /><path d="M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12Z" /><path d="M10 12h4" /><path d="M12 10v4" /></svg>
                                    )
                                },
                                {
                                    title: "Rapid Support",
                                    desc: "Downtime destroys margins. Our local rapid-response teams ensure you are back online in record time.",
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                    )
                                },
                                {
                                    title: "Spare Parts Ecosystem",
                                    desc: "With 98% stock availability, we eliminate the waiting game for critical components.",
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                                    )
                                },
                                {
                                    title: "Production Consulting",
                                    desc: "We analyze your workflow and suggest optimizations to increase output without adding machines.",
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                                    )
                                },
                                {
                                    title: "Legacy of Trust",
                                    desc: "Partnering with Vinayaka means leveraging decades of industry reputation and stability.",
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                    )
                                }
                            ].map((item, i) => (
                                <div key={i} className="group p-10 border-r border-b border-stone-200 bg-white hover:bg-[#FDFBF7] transition-colors duration-300">
                                    <div className="mb-6 text-[#A85846] group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-headline text-xl text-charcoal mb-3">{item.title}</h3>
                                    <p className="text-stone-darker text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </Container>
            </section>


            {/* CTA - Centered Badge Design */}
            <Section background="paper" className="py-24 lg:py-40">
                <Container>
                    <FadeIn>
                        <div className="flex flex-col text-center gap-8 items-center">
                            <div>
                                <Badge variant="accent">Embroidery Consultation</Badge>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-3xl md:text-5xl font-headline text-charcoal tracking-tight max-w-2xl mx-auto leading-tight">
                                    Discuss Your <span className="text-[#A85846]">Requirements</span>
                                </h3>
                                <p className="text-lg leading-relaxed text-graphite max-w-2xl mx-auto">
                                    We engage thoughtfully, understanding design goals, production volumes, and long-term expectations. Let's craft the perfect setup for you.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                <Link href="/contact?type=call">
                                    <Button variant="outline" className="gap-4 w-full sm:w-auto hover:border-[#A85846] hover:text-[#A85846]">
                                        Book a Call <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button className="gap-4 w-full sm:w-auto bg-charcoal hover:bg-black text-white">
                                        Visit Showroom <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
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
