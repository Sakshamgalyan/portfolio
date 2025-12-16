"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const glitchAnimation = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.2,
            staggerChildren: 0.1,
        },
    },
};

export function Hero() {
    const [text, setText] = useState("");
    const fullText = "SYSTEM INITIALIZED...";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-20 text-center md:py-32">
            {/* HUD Borders */}
            <div className="absolute inset-4 z-10 pointer-events-none border border-primary/20 rounded-lg">
                <div className="absolute top-0 left-0 h-8 w-8 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-0 right-0 h-8 w-8 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-primary" />
                <div className="absolute top-1/2 left-0 -translate-y-1/2 h-20 w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50" />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 h-20 w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50" />
            </div>

            <div className="z-10 container flex flex-col items-center gap-6 px-4">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-4 inline-flex items-center gap-2 rounded-none border border-primary bg-primary/10 px-3 py-1 text-xs font-bold text-primary tracking-[0.2em] backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    NET_RUNNER_ACTIVE
                </motion.div>

                {/* Glitch Title */}
                <div className="relative">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="max-w-5xl text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-accent drop-shadow-[0_0_10px_rgba(255,0,255,0.5)] leading-none select-none"
                    >
                        SAKSHAM GALYAN
                    </motion.h1>
                    <div className="absolute -inset-1 opacity-20 blur-xl bg-gradient-to-r from-primary via-foreground to-accent -z-10 animate-pulse" />
                </div>

                {/* Typing Subtitle */}
                <div className="h-8">
                    <span className="font-mono text-lg md:text-xl text-accent tracking-widest uppercase">
                        {text}
                        <span className="animate-pulse">_</span>
                    </span>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl font-light"
                >
                    Full Stack Architect & Neural Network Engineer. <br /> Creating exceptional digital experiences in the cloud.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="mt-10 flex flex-col gap-6 sm:flex-row"
                >
                    <Link
                        href="#projects"
                        className="group relative inline-flex h-14 items-center justify-center overflow-hidden bg-primary px-8 text-sm font-bold text-black uppercase tracking-widest transition-transform hover:scale-105"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Init_Projects()
                        </span>
                        <div className="absolute inset-0 z-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0" />
                    </Link>
                    <Link
                        href="#contact"
                        className="inline-flex h-14 items-center justify-center border border-accent bg-transparent px-8 text-sm font-bold text-accent uppercase tracking-widest transition-colors hover:bg-accent hover:text-black"
                    >
                        Ping_Me()
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
