import Link from "next/link";
import { Facebook, Instagram, Youtube, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Container } from "./container";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate text-stone-400 py-16 md:py-24 border-t border-white/5">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Column 1: Brand (Span 4) */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="block">
                            <span className="font-headline text-3xl text-paper tracking-tight">
                                Vinayaka Groups
                            </span>
                        </Link>
                        <p className="leading-relaxed text-sm max-w-sm opacity-80">
                            Empowering productivity since 1987. A legacy of precision, reliability, and continuous support for the textile and manufacturing industries.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <SocialLink href="https://www.instagram.com/vinayaka.groups/" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
                            <SocialLink href="https://www.youtube.com/@vinayaka.groups" icon={<Youtube className="w-5 h-5" />} label="YouTube" />
                            <SocialLink href="https://www.facebook.com/Vinayakaoverseas/" icon={<Facebook className="w-5 h-5" />} label="Facebook" />
                            <SocialLink href="https://wa.me/919845189492" icon={<MessageCircle className="w-5 h-5" />} label="WhatsApp" />
                        </div>
                    </div>

                    {/* Column 2: Divisions (Span 3) */}
                    <div className="lg:col-span-3 lg:pl-8">
                        <h4 className="uppercase tracking-widest text-[#A85846] font-semibold text-xs mb-6">Verticals</h4>
                        <ul className="space-y-4 text-sm">
                            <li><FooterLink href="/divisions/overseas">Vinayaka Overseas</FooterLink></li>
                            <li><FooterLink href="/divisions/embroidery">Embroidery World</FooterLink></li>
                            <li><FooterLink href="/divisions/service-center">Service Center</FooterLink></li>
                        </ul>
                    </div>

                    {/* Column 3: Company (Span 2) */}
                    <div className="lg:col-span-2">
                        <h4 className="uppercase tracking-widest text-[#A85846] font-semibold text-xs mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><FooterLink href="/">Home</FooterLink></li>
                            <li><FooterLink href="/about">About Us</FooterLink></li>
                            <li><FooterLink href="/products">Products</FooterLink></li>
                            <li><FooterLink href="/contact">Contact</FooterLink></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact (Span 3) */}
                    <div className="lg:col-span-3">
                        <h4 className="uppercase tracking-widest text-[#A85846] font-semibold text-xs mb-6">Get in Touch</h4>
                        <address className="not-italic space-y-4 text-sm opacity-80">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#A85846] shrink-0 mt-0.5" />
                                <a
                                    href="https://maps.app.goo.gl/4Kbh6x2ZJSBegF5M6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="leading-relaxed hover:text-white transition-colors"
                                >
                                    BTM Layout, 2nd Stage,<br />
                                    Bengaluru, Karnataka - 560076
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#A85846] shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:+919845189492" className="hover:text-white transition-colors">(+91) 98451 89492</a>
                                    <a href="tel:+919606500492" className="hover:text-white transition-colors">(+91) 96065 00492</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#A85846] shrink-0" />
                                <a href="mailto:vinayaka-groups@gmail.com" className="hover:text-white transition-colors">vinayaka-groups@gmail.com</a>
                            </div>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
                    <p>© {currentYear} Vinayaka Groups. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-stone-300 hover:bg-[#A85846] hover:text-white transition-all duration-300"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="block hover:text-white hover:translate-x-1 transition-all duration-300">
            {children}
        </Link>
    );
}
