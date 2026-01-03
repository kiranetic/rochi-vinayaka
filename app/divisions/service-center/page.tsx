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
                    src="/assets/picture/technician_repairing_machine.png"
                    alt="Service Technician"
                    fill
                    className="object-cover opacity-40 grayscale"
                />
                <Container className="relative z-10">
                    <FadeIn>
                        <span className="text-sm font-bold uppercase tracking-widest text-white mb-4 block drop-shadow-md">Division</span>
                        <h1 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Vinayaka <span>Service Center</span>
                        </h1>
                        <p className="text-lg md:text-2xl font-medium text-white max-w-4xl drop-shadow-md">
                            The Backbone of Your Operations. Since 1987.
                        </p>
                    </FadeIn>
                </Container>
            </section>

            {/* Core Services Grid */}
            <Section>
                <Container>
                    <FadeIn className="mb-16 text-center max-w-3xl mx-auto">
                        <h2 className="font-headline text-3xl md:text-4xl text-charcoal mb-4">Comprehensive Care</h2>
                        <p className="text-graphite text-lg">
                            We don't just fix machines; we engineer reliability into your workflow through a four-pillar approach.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Preventive maintenance",
                                desc: "Scheduled protocols to identify wear before it becomes a failure.",
                                icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                            },
                            {
                                title: "On-site Repairs",
                                desc: "Rapid deployment of skilled technicians to your facility to minimize downtime.",
                                icon: "M22 10v6M2 10v6M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12ZM10 12h4M12 10v4"
                            },
                            {
                                title: "Genuine Spares",
                                desc: "Direct access to OEM parts for Juki, Brother, and Vinayaka systems.",
                                icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.27 6.96 12 12.01 20.73 6.96M12 22.08 12 12"
                            },
                            {
                                title: "Technical Training",
                                desc: "Empowering your operators with the knowledge to handle minor adjustments.",
                                icon: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                            }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="h-full p-8 bg-paper border border-mist hover:border-bronze/50 transition-all duration-300 rounded-sm group hover:shadow-lg">
                                    <div className="w-12 h-12 mb-6 text-[#A85846] group-hover:scale-110 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d={item.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="font-headline text-xl text-charcoal mb-3 group-hover:text-[#A85846] transition-colors">{item.title}</h3>
                                    <p className="text-stone-darker text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* The Service Process - Timeline */}
            <Section background="stone" className="py-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <h2 className="font-headline text-3xl md:text-4xl text-charcoal mb-6">Precision Protocol</h2>
                            <p className="text-lg text-graphite mb-8 leading-relaxed">
                                We don't guess. Every service request follows a strict diagnostic protocol to ensure the root cause is addressed, not just the symptom.
                            </p>
                            <div className="space-y-8 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-0.5 before:bg-stone-300">
                                {[
                                    { step: "01", title: "Diagnostic Assessment", desc: "Digital and mechanical analysis to pinpoint faults." },
                                    { step: "02", title: "Transparent Proposal", desc: "Clear breakdown of required parts and labor costs." },
                                    { step: "03", title: "Expert Rectification", desc: "Repair execution by certified division specialists." },
                                    { step: "04", title: "Quality Verification", desc: "Stress testing to confirm operational stability." }
                                ].map((item, i) => (
                                    <div key={i} className="relative pl-16">
                                        <div className="absolute left-0 top-0 w-10 h-10 bg-white border border-stone-300 rounded-full flex items-center justify-center text-xs font-bold text-[#A85846] z-10 shadow-sm">
                                            {item.step}
                                        </div>
                                        <h4 className="font-headline text-xl text-charcoal mb-1">{item.title}</h4>
                                        <p className="text-stone-darker text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2} className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/assets/picture/technical_diagnostics_tools.png"
                                alt="Diagnostic Process"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-1000"
                            />
                        </FadeIn>
                    </div>
                </Container>
            </Section>

            {/* Logistics & Parts */}
            <Section>
                <Container>
                    <div className="bg-charcoal rounded-sm overflow-hidden text-paper relative">
                        <div className="absolute inset-0 opacity-20">
                            <Image
                                src="/assets/picture/spare_parts_inventory.png"
                                alt="Inventory"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 lg:p-24 items-center">
                            <div>
                                <span className="text-[#A85846] font-bold tracking-widest uppercase text-sm mb-4 block">Logistics</span>
                                <h2 className="font-headline text-3xl md:text-5xl text-white mb-6">Parts When You Need Them.</h2>
                                <p className="text-stone-300 text-lg leading-relaxed mb-8">
                                    A service team is only as good as its supply chain. Our centralized warehouse maintains a 98% stock rate for critical components, ensuring that "waiting for parts" doesn't become your bottleneck.
                                </p>
                                <ul className="grid grid-cols-2 gap-4 text-stone-300 text-sm">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#A85846] rounded-full" /> Same-Day Dispatch</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#A85846] rounded-full" /> OEM Certified</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#A85846] rounded-full" /> Legacy Machine Support</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#A85846] rounded-full" /> Electronic Components</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA - Split List Design */}
            <Section background="stone" className="py-24 md:py-32">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
                        <div className="lg:w-1/2">
                            <FadeIn>
                                <span className="text-sm font-semibold uppercase tracking-widest text-[#A85846] mb-4 block">Uptime Assurance</span>
                                <h2 className="font-headline text-3xl md:text-5xl text-charcoal mb-6 leading-tight">
                                    Prevent Downtime <br /> Before It Happens.
                                </h2>
                                <p className="text-graphite text-lg leading-relaxed mb-8 max-w-xl">
                                    Don't wait for a breakdown to think about maintenance. Schedule a comprehensive health check for your production line today.
                                </p>
                                <Link href="/contact">
                                    <Button size="lg" className="bg-[#A85846] text-white hover:bg-[#A85846]/90 border-transparent">
                                        Schedule Health Check <span className="ml-2">&rarr;</span>
                                    </Button>
                                </Link>
                            </FadeIn>
                        </div>
                        <div className="lg:w-1/3 w-full">
                            <FadeIn delay={0.2}>
                                <ul className="space-y-6">
                                    {[
                                        "Detailed Mechanical Audit",
                                        "Calibration Certificate",
                                        "Safety Compliance Check",
                                        "Performance Optimization",
                                        "Operator Best-Practice Briefing"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-charcoal p-4 bg-white rounded-sm border border-stone-200 hover:border-[#A85846]/30 shadow-sm transition-colors duration-300">
                                            <div className="w-6 h-6 rounded-full bg-[#A85846]/10 flex items-center justify-center shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#A85846]"><polyline points="20 6 9 17 4 12" /></svg>
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
