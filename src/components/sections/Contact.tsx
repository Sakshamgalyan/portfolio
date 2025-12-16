"use client";

import { motion } from "framer-motion";

export function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-50" />

            <div className="container px-4 md:px-8 max-w-screen-xl mx-auto relative z-10">
                <div className="rounded-none border-2 border-primary bg-black/80 p-8 md:p-12 lg:p-16 text-center overflow-hidden relative shadow-[0_0_20px_rgba(255,0,255,0.3)]">
                    {/* Terminal Header */}
                    <div className="absolute top-0 left-0 w-full h-8 bg-primary/20 flex items-center px-4 space-x-2">
                        <div className="text-xs font-mono text-primary uppercase">terminal_session_042</div>
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto mt-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold tracking-widest sm:text-5xl mb-4 font-[family-name:var(--font-orbitron)] uppercase text-accent"
                        >
                            Initialize_Protocol: <br /> Collaboration
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground mb-8 font-mono"
                        >
                            &gt; My neural network is open for new connections. <br />
                            &gt; Awaiting transmission...
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <a
                                href="mailto:saksham4503@gmail.com"
                                className="relative inline-flex h-14 items-center justify-center overflow-hidden bg-primary px-10 text-xl font-bold text-black uppercase tracking-widest transition-transform hover:scale-105"
                            >
                                <span className="relative z-10">Transmit_Message()</span>
                                <div className="absolute inset-0 z-0 bg-white/30 translate-x-full transition-transform hover:translate-x-0" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
