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

            {/* Product Categories */}
            <Section>
                <Container>
                    <FadeIn className="mb-12 text-center">
                        <h2 className="font-headline text-3xl md:text-4xl text-charcoal mb-4">Our Specialized Range</h2>
                        <p className="text-graphite text-lg max-w-2xl mx-auto">
                            From heavy-duty industrial setups to precise domestic units, we cover the entire spectrum.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Industrial Machines",
                                desc: "Engineered for high-speed, high-volume production environments.",
                                image: "/assets/picture/industrial_sewing_machine_1767279297400.png",
                                href: "/products?category=industrial"
                            },
                            {
                                title: "Domestic Machines",
                                desc: "User-friendly, versatile models for home creators and boutique designers.",
                                image: "/assets/picture/domestic_sewing_machine_1767279315180.png",
                                href: "/products?category=domestic"
                            },
                            {
                                title: "Refurbished Units",
                                desc: "Cost-effective, expert-inspected machines backed by our service guarantee.",
                                image: "/assets/picture/refurbished_sewing_machine_1767279332236.png",
                                href: "/products?category=refurbished"
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
                                                    View Products <span aria-hidden="true">&rarr;</span>
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

            {/* Store Front Showcase */}
            <Section background="stone" className="py-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <FadeIn>
                            <div className="relative aspect-[5/4] rounded-sm overflow-hidden shadow-lg border border-white/50">
                                <Image
                                    src="/assets/picture/vinayaka-overseas-storefront.png"
                                    alt="Vinayaka Overseas Showroom"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-1000"
                                />
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2} className="flex flex-col justify-center">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A85846] mb-3">The Experience</span>
                            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
                                Where Craft Meets Consultation.
                            </h2>

                            <p className="text-graphite text-lg leading-relaxed mb-8 max-w-lg">
                                Our showroom is a dedicated testing ground. Whether you're optimising a factory line or selecting your first machine, we invite you to experience the tactility of our units firsthand—running fabrics, testing stitches, and verifying performance before you commit.
                            </p>

                            <div className="grid grid-cols-2 gap-8 border-t border-stone-200 pt-8 max-w-lg">
                                <div>
                                    <h4 className="font-headline text-lg text-charcoal mb-2">Hands-On Demos</h4>
                                    <p className="text-stone-darker text-sm leading-relaxed">
                                        Bring your own materials and feel the feed mechanism yourself.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-headline text-lg text-charcoal mb-2">Technical Guidance</h4>
                                    <p className="text-stone-darker text-sm leading-relaxed">
                                        Speak directly with engineers who understand production flows.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </Container>
            </Section>

            {/* Why Choose Us - Bento Grid Light Mode */}
            <section className="py-24 bg-[#FFFCF8] overflow-hidden">
                <Container>
                    <FadeIn>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div>
                                <h2 className="font-headline text-3xl md:text-5xl text-charcoal mb-4">Why Industry Leaders Choose Us</h2>
                                <p className="text-graphite text-lg max-w-xl font-body">
                                    Reliability isn't a feature; it's our baseline. We build partnerships that last decades.
                                </p>
                            </div>
                            <Link href="/about">
                                <Button variant="ghost" className="text-charcoal hover:text-[#A85846] gap-2 hover:bg-[#F5F0E8]">
                                    Read Our Story <span aria-hidden="true">&rarr;</span>
                                </Button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

                            {/* Card 1: Experience (Large Number) */}
                            <div className="group row-span-2 p-10 rounded-sm bg-white border border-stone-100 flex flex-col justify-between hover:border-[#A85846]/30 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-32 bg-[#A85846]/5 group-hover:bg-[#A85846]/10 blur-[100px] rounded-full -mr-16 -mt-16 pointer-events-none transition-colors duration-500" />
                                <div>
                                    <h3 className="text-charcoal font-headline text-xl mb-2">Market Leadership</h3>
                                    <p className="text-sm text-graphite">Consistently delivering excellence.</p>
                                </div>
                                <div className="relative z-10 mt-8">
                                    <span className="text-8xl md:text-9xl font-headline font-bold text-charcoal group-hover:text-[#A85846] transition-colors duration-500 tracking-tighter">
                                        20+
                                    </span>
                                    <p className="text-xl text-graphite mt-4 font-light border-t border-stone-100 pt-6 group-hover:border-[#A85846]/20 transition-colors">
                                        Years of trust, operational expertise, and service continuity in the textile industry.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2: Technical Evaluation */}
                            <div className="group p-8 rounded-sm bg-white border border-stone-100 flex flex-col items-center justify-center text-center hover:border-[#A85846]/30 hover:shadow-lg transition-all duration-500 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />
                                <div className="w-20 h-20 rounded-full bg-[#F5F0E8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-stone-100 text-[#A85846]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                                </div>
                                <h3 className="text-xl font-headline text-charcoal mb-2">Technical Vetting</h3>
                                <p className="text-graphite text-sm">Every machine is rigorously tested before it reaches your floor.</p>
                            </div>

                            {/* Card 3: Genuine Parts */}
                            <div className="group p-8 rounded-sm bg-white border border-stone-100 flex flex-col justify-between hover:border-[#A85846]/30 hover:shadow-lg transition-all duration-500 relative overflow-hidden">
                                <div>
                                    <h3 className="text-xl font-headline text-charcoal mb-2">Original Parts Only</h3>
                                    <p className="text-graphite text-sm">No compromises on component longevity.</p>
                                </div>
                                <div className="mt-8 flex items-end gap-1 h-24 opacity-80 group-hover:opacity-100 transition-opacity">
                                    {/* Mock Graph Bars */}
                                    <div className="w-1/5 bg-stone-100 h-[40%] rounded-t-sm group-hover:bg-stone-200 transition-colors" />
                                    <div className="w-1/5 bg-stone-200 h-[60%] rounded-t-sm group-hover:bg-stone-300 transition-colors" />
                                    <div className="w-1/5 bg-stone-100 h-[50%] rounded-t-sm group-hover:bg-stone-200 transition-colors" />
                                    <div className="w-1/5 bg-[#A85846] h-[90%] rounded-t-sm relative shadow-md" />
                                    <div className="w-1/5 bg-stone-100 h-[70%] rounded-t-sm group-hover:bg-stone-200 transition-colors" />
                                </div>
                            </div>

                            {/* Card 4: Service Backbone (Wide) */}
                            <div className="md:col-span-2 p-10 rounded-sm bg-white border border-stone-100 flex flex-row items-center justify-between hover:border-[#A85846]/30 hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                                <div className="relative z-10 max-w-md">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs uppercase tracking-widest text-[#A85846] font-semibold">Service Network</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-headline text-charcoal mb-4">
                                        Legacy Support Backbone
                                    </h3>
                                    <p className="text-graphite">
                                        We operate with the understanding that machine reliability directly affects your business continuity. Our support team is always on standby.
                                    </p>
                                </div>
                                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#F5F0E8] to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                {/* Abstract Visual */}
                                <div className="hidden md:block relative z-10 text-stone-100 group-hover:text-stone-200 transition-colors duration-700 transform group-hover:scale-110 group-hover:rotate-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                                </div>
                            </div>

                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* Clients / Partners Section */}
            <Section background="stone" className="py-24 border-t border-stone-200">
                <Container>
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="text-sm font-semibold uppercase tracking-widest text-[#A85846] mb-2 block">Trusted Partnerships</span>
                            <h2 className="font-headline text-3xl md:text-4xl text-charcoal">Supporting Industry Leaders</h2>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 opacity-100 mt-12">
                            {[
                                { name: "Genous Automotive", src: "/assets/clients/genous-automotive.png", width: 140 },
                                { name: "Ovion Lifestyle", src: "/assets/clients/ovion-lifestyle.png", width: 120 },
                                { name: "Saddles Inc", src: "/assets/clients/saddles-inc.png", width: 100 },
                                { name: "Saddles International", src: "/assets/clients/saddles-international.png", width: 140 },
                                { name: "Stanley", src: "/assets/clients/stanley.png", width: 130 },
                            ].map((client, i) => (
                                <div key={i} className="relative group flex items-center justify-center">
                                    <div className="relative h-24 w-44 md:w-56 transition-transform duration-300 hover:scale-110">
                                        <Image
                                            src={client.src}
                                            alt={client.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </Container>
            </Section>

            {/* CTA - Split List Design */}
            <Section background="slate" className="py-24 md:py-32">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
                        <div className="lg:w-1/2">
                            <FadeIn>
                                <span className="text-sm font-semibold uppercase tracking-widest text-[#A85846] mb-4 block">Partnership</span>
                                <h2 className="font-headline text-3xl md:text-5xl text-paper mb-6 leading-tight">
                                    Built for Long-Term <br /> Production Resilience.
                                </h2>
                                <p className="text-stone-300 text-lg leading-relaxed mb-8 max-w-xl">
                                    Our clients include workshops, factories, exporters, and institutional buyers who value clarity, consistency, and dependable follow-through.
                                </p>
                                <Link href="/contact">
                                    <Button variant="primary" size="lg" className="bg-[#A85846] text-white hover:bg-[#A85846]/90 border-transparent">
                                        Start a Conversation <span className="ml-2">&rarr;</span>
                                    </Button>
                                </Link>
                            </FadeIn>
                        </div>
                        <div className="lg:w-1/3 w-full">
                            <FadeIn delay={0.2}>
                                <ul className="space-y-6">
                                    {[
                                        "Seamless Factory Integration",
                                        "24/7 Technical Consultation",
                                        "Customized Procurement Plans",
                                        "Scalable Supply Chain",
                                        "Volume-Based Pricing"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-paper p-4 bg-white/5 rounded-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
                                            <div className="w-6 h-6 rounded-full bg-[#A85846] flex items-center justify-center shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12" /></svg>
                                            </div>
                                            <span className="font-medium tracking-wide">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </FadeIn>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
