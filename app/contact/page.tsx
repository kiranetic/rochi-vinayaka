import { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
    title: "Contact Us | Vinayaka Groups",
    description: "Get in touch with Vinayaka Groups in Bengaluru. No 12 and 13, Outer Ring Rd, BTM 2nd Stage.",
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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 pb-24 border-b border-mist">
                        {/* Contact Info */}
                        <FadeIn className="space-y-12">
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-steel mb-6">Visit Us</h3>
                                <a
                                    href="https://maps.app.goo.gl/nJT6NJ3A3C4QoqSD9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex gap-4 items-start"
                                >
                                    <MapPin className="w-6 h-6 md:w-8 md:h-8 text-bronze shrink-0 mt-1" />
                                    <address className="not-italic font-headline text-2xl md:text-3xl text-charcoal leading-snug group-hover:text-bronze transition-colors">
                                        No 12 and 13, Outer Ring Rd,<br />
                                        near Water Tank, BTM 2nd Stage,<br />
                                        BTM Layout, Bengaluru,<br />
                                        Karnataka 560076
                                    </address>
                                </a>
                                <p className="text-graphite mt-4 pl-12 text-lg">Serving clients across India</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-steel mb-6">Reach Us</h3>
                                <div className="space-y-6 text-lg text-charcoal">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-stone flex items-center justify-center shrink-0">
                                            <Phone className="w-5 h-5 text-bronze" />
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                                            <a href="tel:+919845189492" className="hover:text-bronze transition-colors font-medium">(+91) 98451 89492</a>
                                            <span className="hidden sm:inline text-mist">/</span>
                                            <a href="tel:+919606500492" className="hover:text-bronze transition-colors font-medium">(+91) 96065 00492</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-stone flex items-center justify-center shrink-0">
                                            <Mail className="w-5 h-5 text-bronze" />
                                        </div>
                                        <a href="mailto:vinayaka-groups@gmail.com" className="hover:text-bronze transition-colors font-medium">vinayaka-groups@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <p className="text-graphite max-w-md text-lg leading-relaxed">
                                    Whether you are exploring machines, planning upgrades, or seeking dependable service, our team will guide you with experience and clarity.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Contact Form */}
                        <FadeIn delay={0.2}>
                            <form
                                action="https://submit-form.com/YOUR_FORM_ID_HERE" // Formspark placeholder
                                className="space-y-6 bg-white p-8 md:p-10 rounded-sm shadow-xl border border-stone-100"
                            >
                                {/* Hidden honeypot for spam */}
                                <input type="checkbox" name="_honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-steel font-semibold block">Name <span className="text-[#A85846]">*</span></label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 text-charcoal focus:outline-none focus:border-bronze focus:bg-white transition-all placeholder:text-stone-400"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-steel font-semibold block">Email <span className="text-[#A85846]">*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 text-charcoal focus:outline-none focus:border-bronze focus:bg-white transition-all placeholder:text-stone-400"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-steel font-semibold block">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 text-charcoal focus:outline-none focus:border-bronze focus:bg-white transition-all placeholder:text-stone-400"
                                        placeholder="Enter your number"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-steel font-semibold block">Message <span className="text-[#A85846]">*</span></label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 text-charcoal focus:outline-none focus:border-bronze focus:bg-white transition-all placeholder:text-stone-400 resize-none"
                                        placeholder="How can we assist you?"
                                    />
                                </div>

                                <div className="pt-4">
                                    <Button type="submit" size="lg" className="w-full">Start a Conversation</Button>
                                </div>
                            </form>
                        </FadeIn>
                    </div>
                </Container>
            </Section>

            {/* Map Embed - Full Color */}
            <div className="w-full h-[60vh] bg-stone relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.863105764537!2d77.60409337469207!3d12.916518787393825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fc2d81d001%3A0x25eed9206855cb21!2sVinayaka%20Overseas%20(%20Sewing%20Machine%20Dealers%20in%20Bangalore%20USHA%2C%20SINGER%2C%20MERRITT%2C%20JUKI%2C%20%26%20JACK%20%26%20EMBROIDERY%20SEWING%20MACHINES))!5e0!3m2!1sen!2sin!4v1767454065981!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vinayaka Groups Location"
                    className="absolute inset-0"
                ></iframe>
            </div>
        </>
    );
}
