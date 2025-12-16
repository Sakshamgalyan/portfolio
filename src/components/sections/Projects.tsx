"use client";

import { PROJECTS } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react"; // Replaced Github with FolderGit2 as standard lucide icon
import Link from "next/link";
import { useCyberSound } from "@/hooks/use-cyber-sound";
import { Tilt } from "react-tilt";

export function Projects() {
    const { playHover, playClick } = useCyberSound();
    return (
        <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="container px-4 md:px-8 max-w-screen-xl mx-auto relative z-10">
                <div className="mb-12 flex items-end justify-between border-b border-primary/30 pb-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl uppercase text-foreground drop-shadow-[0_0_5px_rgba(0,0,0,1)]">
                            Mission_Logs
                        </h2>
                        <p className="mt-2 text-primary font-mono text-sm">
              // Executing deployed protocols...
                        </p>
                    </div>
                    <div className="hidden md:block text-right font-mono text-xs text-muted-foreground">
                        SECURE CONNECTION ESTABLISHED <br />
                        ENCRYPTION: AES-256
                    </div>
                </div>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((project, index) => (
                        <Tilt key={project.title} options={{ max: 15, scale: 1.02, speed: 400 }}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                onMouseEnter={() => playHover()}
                                className="group relative bg-black/60 border border-muted hover:border-primary transition-colors overflow-hidden h-full flex flex-col"
                            >
                                {/* Top Bar */}
                                <div className="h-6 bg-muted/20 border-b border-muted flex items-center px-2 space-x-1 shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                    <div className="ml-auto text-[10px] font-mono text-muted-foreground uppercase">
                                        ID: {1024 + index * 42}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                        <FolderGit2 className="w-16 h-16 text-primary" />
                                    </div>

                                    <h3 className="font-bold text-2xl text-accent mb-2 group-hover:text-primary transition-colors decoration-2 underline-offset-4">
                                        {project.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-2 mb-4 shrink-0">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/50"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        onClick={() => playClick()}
                                        className="inline-flex w-full items-center justify-center gap-2 border border-foreground/20 bg-foreground/5 py-3 text-sm font-bold uppercase tracking-widest text-foreground transition-all hover:bg-primary hover:text-black hover:border-primary mt-auto"
                                    >
                                        Initialize <ExternalLink className="h-4 w-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
}
