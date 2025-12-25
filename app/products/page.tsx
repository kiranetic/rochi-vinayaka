"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronDown, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { ProductCard } from "@/components/product-card";
import allProductsData from "@/json-data/all_products.json";
import { cn } from "@/lib/utils";

const categoryTabs = [
    { id: "all", label: "All Products" },
    { id: "domestic", label: "Domestic Machines" },
    { id: "industrial", label: "Industrial Machines" },
    { id: "embroidery", label: "Embroidery Machines" },
];

const ITEMS_PER_PAGE = 9;

export default function Products() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("All Brands");
    const [currentPage, setCurrentPage] = useState(1);
    const [isBrandOpen, setIsBrandOpen] = useState(false);

    // Extract unique brands
    const brands = useMemo(() => {
        const allBrands = allProductsData.products.map((p) => p.brand).filter(Boolean);
        return ["All Brands", ...Array.from(new Set(allBrands))].sort();
    }, []);

    // Filter Logic
    const filteredProducts = useMemo(() => {
        return allProductsData.products.filter((product) => {
            // Category Filter
            if (activeCategory !== "all" && product.category !== activeCategory) return false;

            // Brand Filter
            if (selectedBrand !== "All Brands" && product.brand !== selectedBrand) return false;

            // Search Filter
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                const searchTarget = `${product.name} ${product.brand} ${product.category}`.toLowerCase();
                return searchTarget.includes(query);
            }

            return true;
        });
    }, [activeCategory, selectedBrand, searchQuery]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Reset pagination when filters change
    useMemo(() => {
        setCurrentPage(1);
    }, [activeCategory, selectedBrand, searchQuery]);

    const clearFilters = () => {
        setActiveCategory("all");
        setSearchQuery("");
        setSelectedBrand("All Brands");
        setCurrentPage(1);
    };

    return (
        <>
            <Section background="paper" className="pt-32 pb-12 text-center">
                <Container size="md">
                    <FadeIn>
                        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-ink mb-6">Our Products</h1>
                        <p className="text-xl text-charcoal font-medium mb-4">
                            Precision. Durability. Performance.
                        </p>
                    </FadeIn>
                </Container>
            </Section>

            <Section background="stone" className="min-h-screen pt-12">
                <Container>
                    {/* Controls Row */}
                    <FadeIn className="bg-paper p-6 rounded-xl shadow-sm border border-mist mb-12">
                        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">

                            {/* Search Bar */}
                            <div className="relative w-full lg:w-1/3">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-steel" />
                                <input
                                    type="text"
                                    placeholder="Search by name, brand, or category..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-mist bg-paper focus:bg-white focus:border-bronze focus:outline-none transition-all text-charcoal placeholder:text-graphite/60 shadow-sm"
                                />
                            </div>

                            {/* Brand Filter Dropdown */}
                            <div className="relative w-full lg:w-1/4">
                                <button
                                    onClick={() => setIsBrandOpen(!isBrandOpen)}
                                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-mist bg-paper hover:bg-white hover:border-bronze transition-all text-charcoal shadow-sm"
                                >
                                    <span className="truncate">{selectedBrand}</span>
                                    <ChevronDown className={cn("w-4 h-4 transition-transform", isBrandOpen ? "rotate-180" : "")} />
                                </button>

                                {isBrandOpen && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-paper border border-mist rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                                        {brands.map((brand) => (
                                            <button
                                                key={brand}
                                                onClick={() => {
                                                    setSelectedBrand(brand);
                                                    setIsBrandOpen(false);
                                                }}
                                                className="w-full text-left px-4 py-2 hover:bg-stone hover:text-bronze transition-colors text-sm text-graphite"
                                            >
                                                {brand}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Clear Filters & Count */}
                            <div className="flex items-center gap-6 w-full lg:w-auto justify-between lg:justify-end">
                                <button
                                    onClick={clearFilters}
                                    className="flex items-center gap-2 text-rust hover:text-rust/80 transition-colors font-medium text-sm group"
                                >
                                    <X className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    Clear Filters
                                </button>
                                <span className="text-steel text-sm font-medium whitespace-nowrap">
                                    Showing <span className="text-ink font-bold">{filteredProducts.length}</span> products
                                </span>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Category Tabs */}
                    <FadeIn className="flex flex-wrap justify-center gap-8 mb-16 border-b border-mist/50 pb-4">
                        {categoryTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveCategory(tab.id)}
                                className={cn(
                                    "text-lg font-medium pb-4 border-b-2 transition-all duration-300 px-2",
                                    activeCategory === tab.id
                                        ? "text-ink border-ink"
                                        : "text-steel border-transparent hover:text-bronze"
                                )}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </FadeIn>

                    {/* Product Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <AnimatePresence mode="popLayout">
                            {paginatedProducts.map((product) => (
                                <motion.div
                                    layout
                                    key={product.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="group h-full flex flex-col bg-paper border border-mist hover:border-bronze hover:shadow-lg transition-all duration-500 overflow-hidden rounded-sm relative">
                                        <div className="relative aspect-square overflow-hidden bg-white p-6 flex items-center justify-center">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={product.image.startsWith("./") ? product.image.slice(1) : product.image}
                                                alt={product.name}
                                                className="object-contain w-full h-full group-hover:scale-95 transition-transform duration-700"
                                            />

                                            {/* Description Overlay on Hover */}
                                            <div className="absolute inset-0 bg-paper/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                                                <p className="text-charcoal font-medium leading-relaxed">
                                                    {product.description || "Designed for precision and reliability."}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow relative z-10 bg-paper">
                                            <div className="mb-auto">
                                                <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2">{product.brand}</p>
                                                <h3 className="font-headline text-xl text-ink mb-2">{product.name}</h3>
                                            </div>

                                            <div className="pt-6 mt-6 border-t border-mist/30">
                                                <a
                                                    href={`https://wa.me/919845189492?text=${encodeURIComponent(`Hi, I'm interested in the ${product.brand} ${product.name}. Could you please provide more details?`)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-2 w-full py-3 bg-stone hover:bg-ink hover:text-white text-ink font-semibold uppercase tracking-wider text-xs transition-colors duration-300 rounded"
                                                >
                                                    <MessageCircle className="w-4 h-4" />
                                                    Inquire Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {paginatedProducts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-xl text-graphite mb-4">No products found for your criteria.</p>
                            <button onClick={clearFilters} className="text-rust underline font-medium">Clear all filters</button>
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <FadeIn className="flex justify-center gap-2">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(p => p - 1)}
                                className="px-4 py-2 border border-mist rounded hover:bg-stone disabled:opacity-50 disabled:cursor-not-allowed text-charcoal"
                            >
                                Previous
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={cn(
                                        "w-10 h-10 rounded border transition-colors font-medium",
                                        currentPage === page
                                            ? "bg-ink border-ink text-white"
                                            : "border-mist text-graphite hover:border-bronze hover:text-bronze"
                                    )}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(p => p + 1)}
                                className="px-4 py-2 border border-mist rounded hover:bg-stone disabled:opacity-50 disabled:cursor-not-allowed text-charcoal"
                            >
                                Next
                            </button>
                        </FadeIn>
                    )}

                </Container>
            </Section>
        </>
    );
}
