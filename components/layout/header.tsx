"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Scissors, Wrench } from "lucide-react";
import { Container } from "./container";
import { cn } from "../ui/button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
        name: "Divisions",
        href: "/divisions", // Placeholder, triggers dropdown
        children: [
            { name: "Vinayaka Overseas", href: "/divisions/overseas", icon: Globe },
            { name: "Vinayaka Embroidery World", href: "/divisions/embroidery", icon: Scissors },
            { name: "Vinayaka Service Center", href: "/divisions/service-center", icon: Wrench },
        ],
    },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
        setDropdownOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-mist/50 h-20 flex items-center"
            >
                <Container size="full" className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="font-headline font-medium text-2xl md:text-3xl text-ink tracking-tight group-hover:opacity-80 transition-opacity">
                            Vinayaka Groups
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            if (link.children) {
                                return (
                                    <div
                                        key={link.name}
                                        className="relative group"
                                        onMouseEnter={() => setDropdownOpen(true)}
                                        onMouseLeave={() => setDropdownOpen(false)}
                                    >
                                        <button className="flex items-center gap-1 text-sm uppercase tracking-widest font-semibold text-charcoal hover:text-bronze transition-colors py-4">
                                            {link.name}
                                            <ChevronDown className="w-4 h-4" />
                                        </button>

                                        <AnimatePresence>
                                            {dropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full right-0 w-64 bg-paper border border-mist shadow-lg pt-2 pb-4 px-4 flex flex-col gap-2"
                                                >
                                                    <div className="absolute -top-2 left-0 right-0 h-4 bg-transparent" /> {/* Bridge */}
                                                    {link.children.map((child) => (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            className="flex items-center gap-3 text-sm font-semibold text-charcoal hover:text-bronze py-2 border-b border-dashed border-mist last:border-0 transition-colors group/item"
                                                        >
                                                            {child.icon && <child.icon className="w-4 h-4 text-stone-400 group-hover/item:text-bronze transition-colors" />}
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-sm uppercase tracking-widest font-semibold text-charcoal hover:text-bronze transition-colors relative group-link",
                                        pathname === link.href && "text-bronze"
                                    )}
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bronze transition-all group-hover:w-full group-link-hover:w-full" />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-charcoal"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </Container>
            </motion.header>

            {/* Mobile Menu Overlay - OUTSIDE the header transform context */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 top-20 bg-paper z-40 flex flex-col p-6 overflow-y-auto border-t border-mist"
                        style={{ height: "calc(100vh - 80px)" }} // Ensure it fills the rest of the screen
                    >
                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col gap-4">
                                    {link.children ? (
                                        <div className="flex flex-col gap-4">
                                            <span className="text-lg font-headline font-medium text-ink border-b border-mist pb-2">{link.name}</span>
                                            <div className="flex flex-col gap-3 pl-4">
                                                {link.children.map(child => (
                                                    <Link key={child.name} href={child.href} className="flex items-center gap-3 text-base text-graphite hover:text-bronze transition-colors" onClick={() => setIsOpen(false)}>
                                                        {child.icon && <child.icon className="w-5 h-5 text-stone-400" />}
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-lg font-headline font-medium text-ink hover:text-bronze transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
