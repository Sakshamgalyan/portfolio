"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative h-9 w-9 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 0 : 1,
                    rotate: theme === "dark" ? 90 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="absolute"
            >
                <Sun className="h-4 w-4" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 1 : 0,
                    rotate: theme === "dark" ? 0 : -90,
                }}
                transition={{ duration: 0.2 }}
                className="absolute"
            >
                <Moon className="h-4 w-4" />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
