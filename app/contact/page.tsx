import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
    title: "Contact Us | Vinayaka Groups",
    description: "Get in touch with Vinayaka Groups in Bengaluru. Professional, approachable, and reliable service for all your sewing needs.",
};

export default function Contact() {
    return (
        <>
            <Section background="paper" className="pb-0">
                <Container>
                    <FadeIn className="mb-16">
                        <h1 className="font-headline text-5xl md:text-6xl text-ink mb-4">Contact Vinayaka Groups</h1>
                        <p className="text-xl font-medium text-charcoal uppercase tracking-widest">Professional. Approachable. Reliable.</p>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 pb-24 border-b border-mist">
                        {/* Contact Info */}
                        <FadeIn className="space-y-12">
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-steel mb-4">Visit Us</h3>
                                <address className="not-italic font-headline text-3xl text-charcoal leading-snug">
                                    Vinayaka Groups <br />
                                    Bengaluru, Karnataka
                                </address>
                                <p className="text-graphite mt-2">Serving clients across India</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-steel mb-4">Reach Us</h3>
                                <div className="space-y-2 text-lg text-charcoal">
                                    <p><span className="text-bronze mr-4">P</span> +91 99999 99999</p>
                                    <p><span className="text-bronze mr-4">E</span> info@vinayakagroups.com</p>
                                </div>
                            </div>

                            <div className="pt-8">
                                <p className="text-graphite max-w-md">
                                    Whether you are exploring machines, planning upgrades, or seeking dependable service, our team will guide you with experience and clarity.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Contact Form */}
                        <FadeIn delay={0.2}>
                            <form
                                action="https://submit-form.com/YOUR_FORM_ID_HERE" // Formspark placeholder
                                className="space-y-8"
                            >
                                {/* Hidden honeypot for spam */}
                                <input type="checkbox" name="_honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                                <div className="space-y-1">
                                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-steel font-semibold">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-transparent border-b border-mist py-3 text-lg text-charcoal focus:outline-none focus:border-bronze transition-colors placeholder:text-whisper"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-steel font-semibold">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-transparent border-b border-mist py-3 text-lg text-charcoal focus:outline-none focus:border-bronze transition-colors placeholder:text-whisper"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-steel font-semibold">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full bg-transparent border-b border-mist py-3 text-lg text-charcoal focus:outline-none focus:border-bronze transition-colors placeholder:text-whisper"
                                        placeholder="Enter your number"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-steel font-semibold">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        className="w-full bg-transparent border-b border-mist py-3 text-lg text-charcoal focus:outline-none focus:border-bronze transition-colors placeholder:text-whisper resize-none"
                                        placeholder="How can we assist you?"
                                    />
                                </div>

                                <div className="pt-4">
                                    <Button type="submit" size="lg" className="w-full md:w-auto">Start a Conversation</Button>
                                </div>
                            </form>
                        </FadeIn>
                    </div>
                </Container>
            </Section>

            {/* Map Embed - Grayscale */}
            <div className="w-full h-[50vh] bg-stone grayscale opacity-80 hover:grayscale-0 transition-all duration-1000">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.750939527715!2d77.61011631482206!3d12.92342899088736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1508db8b3a01%3A0x882a1708170c878!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1672323232323!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
}
