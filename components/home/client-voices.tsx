"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "../layout/container";
import { FadeIn } from "../ui/fade-in";
import { Section } from "../layout/section";

// Curated Reviews Data
const reviews = [
    {
        name: "Nelson Jose Paul",
        role: "Garment Unit Owner",
        image: "/assets/testimonials/NelsonJosePaul.png",
        rating: 5,
        text: "Wonderful service i have been experiencing in Vinayaka Overseas. I have purchased a lot of sewing machines for my garments unit. Perfect service and demo.",
    },
    {
        name: "Saniya Aadil",
        role: "Home Creator",
        image: "/assets/testimonials/AashithaUpadhyaya.png",
        rating: 5,
        text: "After checking a lot of reviews, we finalized to buy the Usha sewing machine from here... The service and follow up from Kavita after purchase is really good.",
    },
    {
        name: "Dr. Swapna Jadhav",
        role: "Professional",
        image: "/assets/testimonials/DrSwapnaJadhav.png",
        rating: 5,
        text: "I have purchased sewing Usha machine from Vinayaka dealers. They are helpful and respond immediately for any queries. For services and sales I will give 5 star for them.",
    },
    {
        name: "Vinayak Rajashekar",
        role: "Client",
        image: "/assets/testimonials/VinayakRajashekar.png",
        rating: 5,
        text: "Extremely helpful staff and owner. They have all the patience in the world to explain the minutest detail... They are considerate enough to even provide demo at residence.",
    },
    {
        name: "Sweety Raphel",
        role: "Home Creator",
        image: "/assets/testimonials/SweetyRaphel.png",
        rating: 5,
        text: "I bought Singer 1304 in March. Machine is very good and very comfortable. Ms Shobha only helped me to select this machine. She cleared all my doubts through video call.",
    },
    {
        name: "Shobana Seenuram",
        role: "Client",
        image: "/assets/testimonials/ShobanaSeenuram.png",
        rating: 5,
        text: "I brought Singer M3505 Sewing machine here. Shobha explained the feature about this machine and helping me out to choose which model best for me. She gave demo as very patiently.",
    },
    {
        name: "Sarada M",
        role: "Long-term Client (12 Years)",
        image: "/assets/testimonials/SaradaM.png",
        rating: 5,
        text: "I am very happy to tell about this shop, I purchased so many machines from here only. From 12 years i know this shop. Any body wants machine buy here only. Too good.",
    },
    {
        name: "Bhavani Subramani",
        role: "Beginner Sewist",
        image: "/assets/testimonials/BhavaniSubramani.png",
        rating: 5,
        text: "I was buying a sewing machine for the first time and didn’t know much, but the staff at Vinayaka Overseas were very helpful. They patiently explained all the functions, usage.",
    },
    {
        name: "Amar Yadav",
        role: "Embroidery Client",
        image: "/assets/testimonials/AmarYadav.png",
        rating: 5,
        text: "Recently I purchased Usha embroidery 550E in Vinayaka embroidery in BTM. They are giving best service and quick response, on time delivery, well explained by trainer.",
    },
    {
        name: "Mani",
        role: "Client",
        image: "/assets/testimonials/Mani.png",
        rating: 5,
        text: "Today we have bought a sewing machine wonder stitch plus of Usha Janome... Really my experience was superb and the staff was very friendly and knowledgeable.",
    },
    {
        name: "Yesh",
        role: "Singer User",
        image: "/assets/testimonials/Yesh.png",
        rating: 5,
        text: "Purchased Singer heavy duty 4423... The features of the product were well explained and I was given demo by Sobha who patiently answered all my questions.",
    },
    {
        name: "Jessy David",
        role: "Client",
        image: "/assets/testimonials/JessyDavid.png",
        rating: 5,
        text: "I purchased Usha Janome Stitch Magic from vinakaya overseas, they are providing a wonderful service. I am very much satisfied.",
    },
    {
        name: "Aashish Kumar Gupta",
        role: "Client",
        image: "/assets/testimonials/AashishKumarGupta.png",
        rating: 5,
        text: "Purchased an usha machine from here they are really helpful and knowledgeable and provided full support to choose the sewing machine for us.",
    },
    {
        name: "Rajesh Raj",
        role: "Client",
        image: "/assets/testimonials/RajeshRaj.png",
        rating: 5,
        text: "As I raised a complaint regarding the sewing machine....executive niyaz has done a good service and it was a very good response from the company.",
    },
    {
        name: "Shiva Shankar",
        role: "Client",
        image: "/assets/testimonials/ShivaShankar.png",
        rating: 5,
        text: "Have purchased Singer Zig zag machine and given good demo by shop person and have cleared explained about the machine. Also price have been given best price.",
    },
    {
        name: "Umre Fahad",
        role: "Client",
        image: "/assets/testimonials/UmreFahad.png",
        rating: 5,
        text: "One the best sewing machines of janome Usha all functions are available in one machine Shop has all the models Usha,singer and jack etc.",
    }
];

export function ClientVoices({
    headline = "Voices of Our Community",
    subhead = "Real experiences from trusted partners and creators."
}: {
    headline?: string,
    subhead?: string
}) {
    return (
        <Section background="paper" className="py-24 overflow-hidden">
            <Container size="full">
                <FadeIn className="text-center mb-16">
                    <h2 className="font-headline text-4xl md:text-5xl text-charcoal mb-6">{headline}</h2>
                    <p className="text-xl text-stone-500 max-w-2xl mx-auto px-4">{subhead}</p>
                </FadeIn>

                {/* Infinite Carousel */}
                <div className="relative flex overflow-hidden group">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none" />

                    <div
                        className="flex gap-8 px-8 animate-marquee w-max"
                    >
                        {/* Loop twice to ensure infinite effect */}
                        {[...reviews, ...reviews].map((review, index) => (
                            <div
                                key={index}
                                className="w-[350px] md:w-[400px] flex-shrink-0 bg-white p-8 rounded-sm shadow-sm border border-stone-100 select-none hover:shadow-md transition-shadow"
                            >
                                {/* Header: Image + Info */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative w-12 h-12 shrink-0">
                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            fill
                                            className="rounded-full object-cover border border-stone-200"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-headline text-lg text-charcoal leading-none mb-1">{review.name}</h4>
                                        <p className="text-xs uppercase tracking-widest text-[#A85846]">{review.role}</p>
                                    </div>
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-4 text-[#A85846]">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="text-stone-600 leading-relaxed italic relative">
                                    <span className="text-4xl text-stone-200 font-serif leading-none mr-2">“</span>
                                    {review.text}
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section >
    );
}
