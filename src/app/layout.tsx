import ReactQueryProvider from "@/shared/providers/ReactQueryProvider";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "../styles/globals.scss";

import GalaxyRenderer from "@/shared/providers/GalaxyProvider";

import { Theme } from "@radix-ui/themes";
import localfont from "next/font/local";

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

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={ppnFont.className}>
                <Theme>
                    <GalaxyRenderer />
                    <ReactQueryProvider>{children}</ReactQueryProvider>
                </Theme>
            </body>
        </html>
    );
}
