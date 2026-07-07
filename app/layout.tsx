import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Loader from "@/components/layout/Loader";
import CustomCursor from "@/components/animations/CustomCursor";
import AnimatedBackground from "@/components/animations/AnimatedBackground";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Karri Joshi Sai Govind | Python Backend Developer",
  description: "Portfolio of Karri Joshi Sai Govind, a Senior-level Python Backend Developer, Data Engineer, and Machine Learning enthusiast.",
  openGraph: {
    title: "Karri Joshi Sai Govind | Python Backend Developer",
    description: "Portfolio of Karri Joshi Sai Govind, a Python Backend Developer, Data Engineer, and Machine Learning enthusiast.",
    url: "https://kjoshisaigovind.dev",
    siteName: "Karri Joshi Sai Govind Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karri Joshi Sai Govind | Python Backend Developer",
    description: "Portfolio of Karri Joshi Sai Govind, a Python Backend Developer, Data Engineer, and Machine Learning enthusiast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <SmoothScroll>
          <AnimatedBackground />
          <Loader />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
