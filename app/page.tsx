import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export default function Home() {
  return (
    <>
      {/* 1. Hero Statement */}
      <section className="min-h-screen flex items-center bg-paper relative overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center min-h-[80vh]">
            <div className="flex-1">
              <FadeIn>
                <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-ink tracking-tight mb-8">
                  Since 1987. <br />
                  Built on Trust. <br />
                  Refined Through Experience.
                </h1>
              </FadeIn>
              <FadeIn delay={0.2} className="max-w-xl">
                <p className="font-body text-lg md:text-xl text-graphite leading-relaxed">
                  A legacy Indian enterprise delivering sewing, embroidery, and service solutions with precision, reliability, and care.
                </p>
                <div className="h-px bg-bronze/30 w-24 mt-8" />
              </FadeIn>
            </div>
            {/* Right side is intentionally empty or could have subtle texture per design system 'Typographic Only' but layout mentions 'Left side: Headline, Right side: Photography'. 
                However, Asset Integration says 'Hero Statement (Typographic Only) - Assets: None'.
                I will follow Asset Integration v2 as it seems more specific/updated.
            */}
          </div>
        </Container>
      </section>

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
                  className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-steel">Foundation of Operations, Bengaluru</p>
            </FadeIn>

            <div className="order-1 lg:order-2">
              <FadeIn delay={0.2}>
                <h2 className="font-headline text-4xl md:text-5xl text-charcoal mb-8">
                  Quietly consistent. <br /> Professionally driven.
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
                    <Button variant="link" className="pl-0">Read Our Story <MoveRight className="ml-2 w-4 h-4" /></Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. The Tri-Vertical System */}
      <Section id="divisions" background="paper" className="!p-0 !py-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[80vh]">
          {/* Division 1: Overseas */}
          <Link href="/divisions/overseas" className="group relative border-r border-mist last:border-0 min-h-[50vh] lg:min-h-auto block overflow-hidden">
            <div className="absolute inset-0 bg-slate transition-transform duration-700 translate-y-full group-hover:translate-y-0 z-10 opacity-95" />
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/picture/accessories-storage.jpg"
                alt="Vinayaka Overseas"
                fill
                className="object-cover grayscale group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-white/80 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="relative z-20 h-full p-12 flex flex-col justify-between group-hover:text-stone transition-colors duration-300">
              <div>
                <h3 className="font-headline text-3xl font-medium mb-4 group-hover:text-paper">Vinayaka Overseas</h3>
                <div className="w-12 h-px bg-charcoal group-hover:bg-bronze transition-colors" />
              </div>
              <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <p className="mb-6 font-body text-stone/90">Sales and sourcing of domestic, industrial, and refurbished sewing machines.</p>
                <span className="flex items-center text-sm uppercase tracking-widest text-bronze font-semibold">Explore <MoveRight className="ml-2 w-4 h-4" /></span>
              </div>
            </div>
          </Link>

          {/* Division 2: Embroidery World */}
          <Link href="/divisions/embroidery" className="group relative border-r border-mist last:border-0 min-h-[50vh] lg:min-h-auto block overflow-hidden">
            <div className="absolute inset-0 bg-slate transition-transform duration-700 translate-y-full group-hover:translate-y-0 z-10 opacity-95" />
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/picture/production-line.jpg"
                alt="Vinayaka Embroidery World"
                fill
                className="object-cover grayscale group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-white/80 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="relative z-20 h-full p-12 flex flex-col justify-between group-hover:text-stone transition-colors duration-300">
              <div>
                <h3 className="font-headline text-3xl font-medium mb-4 group-hover:text-paper">Vinayaka Embroidery World</h3>
                <div className="w-12 h-px bg-charcoal group-hover:bg-bronze transition-colors" />
              </div>
              <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <p className="mb-6 font-body text-stone/90">Specialized vertical dedicated to computerized embroidery technology.</p>
                <span className="flex items-center text-sm uppercase tracking-widest text-bronze font-semibold">Explore <MoveRight className="ml-2 w-4 h-4" /></span>
              </div>
            </div>
          </Link>

          {/* Division 3: Service Center */}
          <Link href="/divisions/service-center" className="group relative min-h-[50vh] lg:min-h-auto block overflow-hidden">
            <div className="absolute inset-0 bg-slate transition-transform duration-700 translate-y-full group-hover:translate-y-0 z-10 opacity-95" />
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/picture/precision-sewing.jpg"
                alt="Vinayaka Service Center"
                fill
                className="object-cover object-left grayscale group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-white/80 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="relative z-20 h-full p-12 flex flex-col justify-between group-hover:text-stone transition-colors duration-300">
              <div>
                <h3 className="font-headline text-3xl font-medium mb-4 group-hover:text-paper">Vinayaka Service Center</h3>
                <div className="w-12 h-px bg-charcoal group-hover:bg-bronze transition-colors" />
              </div>
              <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <p className="mb-6 font-body text-stone/90">The foundation of our legacy – service, maintenance, and genuine spare parts.</p>
                <span className="flex items-center text-sm uppercase tracking-widest text-bronze font-semibold">Explore <MoveRight className="ml-2 w-4 h-4" /></span>
              </div>
            </div>
          </Link>
        </div>
      </Section>

      {/* 4. Philosophy */}
      <Section background="stone">
        <Container size="sm">
          <FadeIn className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl text-charcoal mb-12">Why Clients Stay With Us</h2>
            <div className="grid gap-8 font-body text-lg text-graphite">
              <div className="py-4 border-b border-mist">Over three decades of industry continuity</div>
              <div className="py-4 border-b border-mist">Sales, service, and spares under one group</div>
              <div className="py-4 border-b border-mist">Long-standing relationships with businesses and households</div>
              <div className="py-4">Disciplined operations with personal accountability</div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* 5. Trusted By */}
      <Section background="paper">
        <Container>
          <FadeIn className="text-center">
            <h3 className="uppercase tracking-widest text-sm font-semibold text-steel mb-8">Trusted by Established Businesses</h3>
            <p className="font-headline text-2xl md:text-3xl text-charcoal max-w-4xl mx-auto leading-normal">
              Our machines and services support operations across manufacturing, leather, lifestyle, apparel, and creative industries – quietly enabling scale, consistency, and output.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* 6. CTA */}
      <Section background="slate" className="text-center">
        <Container>
          <FadeIn>
            <h2 className="font-headline text-4xl md:text-5xl text-paper mb-6">Begin a Conversation</h2>
            <p className="text-stone/80 text-lg max-w-2xl mx-auto mb-10">
              Whether you are evaluating machines, planning expansion, or seeking dependable service, our team is here to guide you with clarity and experience.
            </p>
            <Link href="/contact">
              <Button size="lg">Connect with Vinayaka Groups</Button>
            </Link>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
