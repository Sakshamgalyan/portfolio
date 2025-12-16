"use client";

import { store } from "@/lib/store";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
            </ThemeProvider>
        </Provider>
    );
}
