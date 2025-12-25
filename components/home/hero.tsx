"use client";

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function Hero() {
    return (
        <LampContainer className="pt-20 md:pt-32">
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="font-headline text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-ink tracking-tight bg-gradient-to-br from-ink to-ink/60 bg-clip-text text-transparent py-4"
            >
                Since 1987. <br />
                Built on <span className="text-[#A85846]">Trust</span>. <br />
                Refined Through <span className="text-[#A85846]">Experience</span>.
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="max-w-xl text-center mt-8"
            >
                <p className="font-body text-lg md:text-xl text-graphite leading-relaxed">
                    A legacy Indian enterprise delivering sewing, embroidery, and service solutions with precision, reliability, and care.
                </p>
                <div className="h-px bg-bronze/30 w-24 mx-auto mt-8" />
            </motion.div>
        </LampContainer>
    );
}
