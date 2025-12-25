"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";
import popularProductsData from "@/json-data/popular_products.json";

export function ProductCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const products = popularProductsData.products;
    const [itemsPerScreen, setItemsPerScreen] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setItemsPerScreen(3);
            else if (window.innerWidth >= 768) setItemsPerScreen(2);
            else setItemsPerScreen(1);
        };

        handleResize(); // Init
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalSlides = Math.ceil(products.length / itemsPerScreen);
    // Actually for a continuous sliding track, we want to index by ITEM, but clamp at bounds.
    // maxIndex = length - itemsPerScreen
    const maxIndex = products.length - itemsPerScreen;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <section className="py-24 bg-paper overflow-hidden">
            <Container>
                <FadeIn className="text-center mb-16">
                    <h2 className="font-headline text-3xl md:text-5xl text-ink mb-4">
                        Curated Excellence
                    </h2>
                    <p className="text-graphite text-lg max-w-xl mx-auto">
                        Precision-engineered machines selected for durability and consistent performance.
                    </p>
                </FadeIn>

                <div className="relative group max-w-7xl mx-auto">
                    {/* Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border border-mist rounded-full shadow-md text-charcoal hover:text-[#A85846] hover:border-[#A85846] transition-all"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border border-mist rounded-full shadow-md text-charcoal hover:text-[#A85846] hover:border-[#A85846] transition-all"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Carousel Track */}
                    <div className="overflow-hidden py-4 -mx-4 px-4">
                        <motion.div
                            className="flex"
                            animate={{ x: `-${currentIndex * (100 / itemsPerScreen)}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="px-4 flex-shrink-0"
                                    style={{ width: `${100 / itemsPerScreen}%` }}
                                >
                                    <div className="bg-white border border-mist p-1 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group/card">
                                        {/* Inner Border Look from Screenshot */}
                                        <div className="border border-mist/50 p-6 flex flex-col h-full bg-[#FFFCF8]">

                                            <div className="relative aspect-square mb-6">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-contain p-2 group-hover/card:scale-105 transition-transform duration-500"
                                                />
                                            </div>

                                            <div className="mt-auto text-center">
                                                <h3 className="font-headline text-lg md:text-xl text-charcoal font-medium mb-8 leading-relaxed">
                                                    {product.name}
                                                </h3>

                                                <div className="border-t border-mist/50 pt-6">
                                                    <Link href="/contact" className="block">
                                                        <div className="w-full py-3 bg-[#F2ECE4] text-[#8C7A6B] font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#A85846] hover:text-white transition-colors rounded-sm">
                                                            <MessageCircle className="w-4 h-4" />
                                                            Inquire Now
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
