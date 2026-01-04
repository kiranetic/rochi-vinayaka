import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Hero } from "@/components/home/hero";
import { ProductCard } from "@/components/product-card";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ProductCarousel } from "@/components/home/product-carousel";
import { DivisionsGrid } from "@/components/home/divisions-grid";
import { ClientVoices } from "@/components/home/client-voices";
import popularProductsData from "@/json-data/popular_products.json";

export default function Home() {
  return (
    <>
      {/* 1. Hero Statement with Lamp Effect */}
      <Hero />

      {/* 2. The Origin (Intro) */}
      <Section background="stone">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn className="order-2 lg:order-1 relative group">
              <div className="aspect-[4/5] relative overflow-hidden bg-mist/20">
                <Image
                  src="/assets/picture/precision-sewing.jpg"
                  alt="Precision Sewing"
                  fill
                  className="object-cover img-hero-bw"
                />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-steel">Foundation of Operations, Bengaluru</p>
            </FadeIn>

            <div className="order-1 lg:order-2">
              <FadeIn delay={0.2}>
                <h2 className="font-headline text-4xl md:text-5xl text-charcoal mb-8">
                  Quietly <span className="text-[#A85846]">consistent</span>. <br /> Professionally <span className="text-[#A85846]">driven</span>.
                </h2>
                <div className="space-y-6 text-lg text-graphite leading-relaxed font-body">
                  <p>
                    Vinayaka Groups is a family-owned organization founded in Bengaluru in 1987. What began as a service centre has grown into a three-vertical enterprise serving households, professionals, manufacturers, and export partners across India.
                  </p>
                  <p>
                    Trusted across generations.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/about">
                    <Button variant="link" className="pl-0 text-bronze hover:text-bronze/80">Read Our Story <MoveRight className="ml-2 w-4 h-4" /></Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Popular Products (Carousel) */}
      <ProductCarousel />

      {/* 4. The Tri-Vertical System (Card Grid) */}
      <DivisionsGrid />

      {/* 5. Philosophy (Redesigned) */}
      <WhyChooseUs />

      {/* 6. Trusted By */}
      <Section background="stone">
        <Container>
          <FadeIn className="text-center">
            <h3 className="uppercase tracking-widest text-sm font-semibold text-bronze mb-8">Trusted by Established Businesses</h3>
            <p className="font-headline text-2xl md:text-3xl text-charcoal max-w-4xl mx-auto leading-normal">
              Our machines and services support operations across manufacturing, leather, lifestyle, apparel, and creative industries – quietly enabling scale, consistency, and output.
            </p>

            {/* Client Logos Grid */}
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mt-16">
              {[
                { name: "Genous Automotive", src: "/assets/clients/genous-automotive.png" },
                { name: "Ovion Lifestyle", src: "/assets/clients/ovion-lifestyle.png" },
                { name: "Saddles Inc", src: "/assets/clients/saddles-inc.png" },
                { name: "Saddles International", src: "/assets/clients/saddles-international.png" },
                { name: "Stanley", src: "/assets/clients/stanley.png" },
              ].map((client, i) => (
                <div key={i} className="relative group flex items-center justify-center">
                  <div className="relative h-24 w-44 md:w-56 transition-all duration-300 hover:scale-105 opacity-70 hover:opacity-100">
                    <Image
                      src={client.src}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* 7. Client Voices */}
      <ClientVoices headline="Voices of Trust" subhead="From home creators to industrial partners." />

      {/* 7. CTA */}
      <Section background="slate" className="text-center">
        <Container>
          <FadeIn>
            <h2 className="font-headline text-4xl md:text-5xl text-paper mb-6">Begin a Conversation</h2>
            <p className="text-stone/80 text-lg max-w-2xl mx-auto mb-10">
              Whether you are evaluating machines, planning expansion, or seeking dependable service, our team is here to guide you with clarity and experience.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-rust text-stone hover:bg-rust/90 border-0">Connect with Vinayaka Groups</Button>
            </Link>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}

