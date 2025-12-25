import Link from "next/link";
import { Container } from "./container";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate text-stone py-16 border-t border-bronze/20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm text-stone/80">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            <span className="font-headline text-2xl text-paper tracking-tight">
                                Vinayaka Groups
                            </span>
                        </Link>
                        <p className="leading-relaxed">
                            Quietly consistent. Professionally driven. Trusted across generations since 1987.
                        </p>
                        <div className="pt-4 border-t border-white/10 w-12"></div>
                        <p className="text-xs uppercase tracking-widest text-bronze">Est. 1987</p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h4 className="uppercase tracking-widest text-white font-semibold text-xs">Explore</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="hover:text-bronze transition-colors">About Us</Link></li>
                            <li><Link href="/products" className="hover:text-bronze transition-colors">Products</Link></li>
                            <li><Link href="/contact" className="hover:text-bronze transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-bronze transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Divisions */}
                    <div className="space-y-6">
                        <h4 className="uppercase tracking-widest text-white font-semibold text-xs">Divisions</h4>
                        <ul className="space-y-3">
                            <li><Link href="/divisions/overseas" className="hover:text-bronze transition-colors">Vinayaka Overseas</Link></li>
                            <li><Link href="/divisions/embroidery" className="hover:text-bronze transition-colors">Embroidery World</Link></li>
                            <li><Link href="/divisions/service-center" className="hover:text-bronze transition-colors">Service Center</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Location */}
                    <div className="space-y-6">
                        <h4 className="uppercase tracking-widest text-white font-semibold text-xs">Visit Us</h4>
                        <address className="not-italic space-y-2 leading-relaxed">
                            <p>Vinayaka Groups</p>
                            <p>Bengaluru, Karnataka</p>
                            <p className="text-bronze pt-2">+91 99999 99999</p> {/* Placeholder, will start from Env */}
                            <p className="hover:text-white transition-colors cursor-pointer">info@vinayakagroups.com</p>
                        </address>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
                    <p>© {currentYear} Vinayaka Groups. All rights reserved.</p>
                    <p>Designed with Quiet Confidence.</p>
                </div>
            </Container>
        </footer>
    );
}
