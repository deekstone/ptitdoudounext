import { Footer, Navbar } from "@components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./GlobalRedux/provider";
import { ProvidersReactQuery } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "PtitDoudou App",
    description: "Lebanese clothing store",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ProvidersReactQuery>
                    <Providers>
                        <div className="relative">
                            <Navbar />
                            {children}
                            <Footer />
                        </div>
                    </Providers>
                </ProvidersReactQuery>
            </body>
        </html>
    );
}
