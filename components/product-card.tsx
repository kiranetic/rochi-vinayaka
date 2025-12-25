import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
    id: string;
    name: string;
    brand?: string;
    image: string;
    description?: string;
}

export function ProductCard({ product, className }: { product: Product; className?: string }) {
    return (
        <div className={cn("group h-full flex flex-col bg-paper border border-mist hover:border-bronze hover:shadow-lg transition-all duration-500 overflow-hidden rounded-sm", className)}>
            <div className="relative aspect-square overflow-hidden bg-white p-6 flex items-center justify-center">
                <Image
                    src={product.image.startsWith("./") ? product.image.slice(1) : product.image}
                    alt={product.name}
                    width={400} // Approximate width for optimization
                    height={400}
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-700 img-warm-tone"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-auto">
                    {product.brand && (
                        <p className="text-xs font-bold uppercase tracking-widest text-bronze mb-2">{product.brand}</p>
                    )}
                    <h3 className="font-headline text-xl text-ink mb-2">{product.name}</h3>
                </div>

                <div className="pt-6 mt-6 border-t border-mist/30">
                    <a
                        href={`https://wa.me/919845189492?text=${encodeURIComponent(`Hi, I'm interested in the ${product.brand ? product.brand + ' ' : ''}${product.name}. Could you please provide more details?`)}`}
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
    );
}
