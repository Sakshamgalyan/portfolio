"use client";

import { useEffect, useRef } from "react";

export function BackgroundVideo() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        let columns = Math.floor(width / 20);
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const characters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンabcdefghijklmnopqrstuvwxyz0123456789";
        const charArray = characters.split("");

        const draw = () => {
            // Semi-transparent black to create trail effect
            ctx.fillStyle = "rgba(10, 10, 20, 0.05)";
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = "#0ff"; // Cyan text #0F0 for green
            ctx.font = "15px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            columns = Math.floor(width / 20);
            // specific logic to maintain drops array size could be added here
            // for now, just resetting drops is easier
            for (let i = 0; i < columns; i++) {
                if (!drops[i]) drops[i] = 1;
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 h-full w-full opacity-40 pointer-events-none"
        />
    );
}
