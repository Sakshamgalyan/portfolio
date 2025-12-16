"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useCyberSound } from "@/hooks/use-cyber-sound";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const { playHover, playClick } = useCyberSound();

    return (
        <header className="fixed top-0 z-50 w-full border-b border-primary/50 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2 group" onClick={() => playClick()}>
                        <span className="font-bold text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground font-[family-name:var(--font-orbitron)] group-hover:text-accent transition-colors">
                            SAKSHAM_GALYAN
                        </span>
                    </Link>
                </div>
                <nav className="flex items-center space-x-6 text-sm font-medium font-mono">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onMouseEnter={() => playHover()}
                            onClick={() => playClick()}
                            className={cn(
                                "relative transition-colors hover:text-primary text-muted-foreground uppercase tracking-wider hover:underline underline-offset-4 decoration-primary decoration-2"
                            )}
                        >
                            <span className="text-primary mr-0.5 opacity-0 hover:opacity-100 transition-opacity">
                                &gt;
                            </span>
                            {item.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}
