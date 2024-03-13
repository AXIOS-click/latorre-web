import React from "react";
import ReactQueryProvider from "@/shared/providers/ReactQueryProvider";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "../styles/globals.scss";
import GalaxyRenderer from "@/shared/providers/GalaxyProvider";
import { Theme } from "@radix-ui/themes";
import localfont from "next/font/local";
import { Navbar } from "@/shared/components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";

const ppnFont = localfont({
    src: [
        {
            path: "../../public/PPNeueMontreal-Bold.otf",
            weight: "900",
        },
        {
            path: "../../public/PPNeueMontreal-Medium.otf",
            weight: "500",
        },
        {
            path: "../../public/PPNeueMontreal-Book.otf",
            weight: "400",
        },
        {
            path: "../../public/PPNeueMontreal-Thin.otf",
            weight: "100",
        },
    ],
    variable: "--PPNfont",
});

export const metadata: Metadata = {
    title: "Latorre",
    verification: {
        google: "-yRgllx1P4rboKuL6eZn_52M07ds7dIGeOW-trGpIGM",
    }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={ppnFont.className + " bg-latorre-bg"}>
                <Theme>
                    <Navbar />
                    <ReactQueryProvider>{children}</ReactQueryProvider>
                    <GalaxyRenderer />
                </Theme>
            </body>
            <GoogleAnalytics gaId="G-7FBCMCM6ML" />
        </html>
    );
}
