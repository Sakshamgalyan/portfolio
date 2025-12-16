"use client";

import { SKILLS } from "@/lib/data";
import { motion } from "framer-motion";
import { useCyberSound } from "@/hooks/use-cyber-sound";
import { Tilt } from "react-tilt";

const fadeInAnimationVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: (index: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.05 * index,
            // Spring is valid but sometimes causes type issues in strict mode if not exact
        },
    }),
};

export function Skills() {
    const { playHover } = useCyberSound();
    return (
        <section id="skills" className="py-20 md:py-32 relative">
            {/* Decorative HUD Elements */}
            <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute bottom-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="container px-4 md:px-8 max-w-screen-xl mx-auto z-10 relative">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-widest sm:text-4xl md:text-5xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-foreground to-primary drop-shadow-lg">
                        <span className="text-primary mr-2">&lt;</span>
                        Tech_Stack_Db
                        <span className="text-primary ml-2">/&gt;</span>
                    </h2>
                    <p className="mt-4 text-accent font-mono text-lg uppercase tracking-wider">
                        [ Loading Modules... ]
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {SKILLS.map((skill, index) => (
                        <Tilt key={skill.name} options={{ max: 25, scale: 1.05, speed: 400 }}>
                            <motion.div
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                custom={index}
                                onMouseEnter={() => playHover()}
                                className="group relative bg-card/50 backdrop-blur-sm border border-primary/30 p-6 flex flex-col items-center justify-center hover:border-accent transition-all duration-300 relative overflow-hidden clip-path-polygon cursor-none"
                            >
                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary group-hover:border-accent" />
                                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary group-hover:border-accent" />
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary group-hover:border-accent" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary group-hover:border-accent" />

                                <skill.icon className="mb-4 h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                                <h3 className="font-bold text-foreground font-mono group-hover:text-accent">{skill.name}</h3>
                                <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-widest border border-muted px-2 py-0.5 rounded-none">
                                    {skill.category}
                                </p>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
}
