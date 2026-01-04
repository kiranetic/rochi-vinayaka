"use client";

import { motion, HTMLMotionProps, useReducedMotion } from "framer-motion";
import { cn } from "./button";

interface FadeInProps extends HTMLMotionProps<"div"> {
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({
    children,
    className,
    delay = 0,
    direction = "up",
    ...props
}: FadeInProps) {
    const shouldReduceMotion = useReducedMotion();

    const variants = {
        hidden: {
            opacity: shouldReduceMotion ? 1 : 0,
            y: shouldReduceMotion ? 0 : (direction === "up" ? 20 : direction === "down" ? -20 : 0),
            x: shouldReduceMotion ? 0 : (direction === "left" ? 20 : direction === "right" ? -20 : 0),
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: shouldReduceMotion ? 0 : 0.6,
                ease: [0.25, 0.1, 0.25, 1], // Smoother cubic-bezier
                delay: shouldReduceMotion ? 0 : delay,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={variants as any}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
