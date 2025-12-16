"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });

            // Check if hovering over clickable elements
            const target = e.target as HTMLElement;
            setIsHovering(
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") !== null ||
                target.closest("button") !== null
            );
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                    borderColor: isHovering ? "var(--color-accent)" : "var(--color-primary)",
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            >
                {/* Crosshair details */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-primary/50" />
                <div className="absolute top-0 left-1/2 h-full w-px bg-primary/50" />
            </motion.div>
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-50 hidden md:block"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
                transition={{
                    type: "spring",
                    stiffness: 1000,
                    damping: 50
                }}
            />
        </>
    );
}
