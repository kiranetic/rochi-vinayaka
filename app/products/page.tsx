import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
    title: "Products | Vinayaka Groups",
    description: "Explore our curated catalogue of domestic, industrial, and embroidery machines selected for precision and durability.",
};

const categories = [
    {
        title: "Domestic Sewing Machines",
        desc: "For home users and small workshops. Compact, reliable, and easy to maintain.",
        image: "/assets/picture/machine-setup-table.jpg",
        slug: "domestic"
    },
    {
        title: "Industrial Sewing Machines",
        desc: "Built for speed, accuracy, and continuous operation in professional manufacturing environments.",
        image: "/assets/picture/production-line.jpg",
        slug: "industrial"
    },
    {
        title: "Computerized Embroidery Machines",
        desc: "Single-head and multi-head configurations engineered for detailed output and production efficiency.",
        image: "/assets/picture/work-in-progress.jpg",
        slug: "embroidery"
    }
];

export default function Products() {
    return (
        <>
            {/* Philosophy Header */}
            <Section background="paper" className="pt-32 pb-16 text-center">
                <Container size="md">
                    <FadeIn>
                        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-ink mb-6">Our Products</h1>
                        <p className="text-xl md:text-2xl text-charcoal font-medium mb-4">
                            Machines Selected for Precision, Durability, and Consistency
                        </p>
                        <p className="text-graphite text-lg leading-relaxed max-w-2xl mx-auto">
                            Vinayaka Groups offers a structured range of sewing and embroidery machines for varied applications. Our focus is on dependable engineering, availability of service, and long-term operational value.
                        </p>
                    </FadeIn>
                </Container>
            </Section>

            {/* Product Categories Masonry/Grid */}
            <Section background="stone" className="min-h-screen">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((cat, index) => (
                            <FadeIn key={cat.slug} delay={index * 0.1} className="group cursor-pointer">
                                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-paper border border-mist">
                                    <Image
                                        src={cat.image}
                                        alt={cat.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-paper/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-charcoal backdrop-blur-sm">
                                        {cat.slug}
                                    </div>
                                </div>
                                <h3 className="font-headline text-2xl text-charcoal mb-2 group-hover:text-bronze transition-colors">{cat.title}</h3>
                                <p className="text-graphite text-sm leading-relaxed mb-4">{cat.desc}</p>
                                <span className="inline-flex items-center text-xs uppercase tracking-widest text-bronze font-semibold group-hover:ml-2 transition-all">
                                    View Specifications <MoveRight className="ml-2 w-3 h-3" />
                                </span>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn className="mt-24 text-center max-w-2xl mx-auto">
                        <h2 className="font-headline text-3xl text-charcoal mb-6">A Considered Catalogue</h2>
                        <p className="text-graphite mb-8">
                            We believe fewer, better-chosen machines deliver greater value than overwhelming choice. Our team assists clients in selecting equipment based on application, scale, and long-term use.
                        </p>
                        <Link href="/contact">
                            <Button size="lg">Request Product Assistance</Button>
                        </Link>
                    </FadeIn>
                </Container>
            </Section>
        </>
    );
}
