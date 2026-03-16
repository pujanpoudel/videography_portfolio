import type React from "react";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import MouseMoveEffect from "@/components/mouse-move-effect";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });
// const nunito = Nunito({ subsets: ["latin"] });q

export const metadata: Metadata = {
  title: {
    default: "Shailesh Mahato – Photographer, Videographer & Video Editor",
    template: "%s | Shailesh Mahato",
  },
  description:
    "Turning moments into visual stories — with style, precision, and cinematic magic. Shailesh Mahato specializes in photography, videography, and high-end video editing, delivering polished storytelling and cinematic visuals.",
  keywords: [
    "Shailesh Mahato",
    "Photographer",
    "Videographer",
    "Video Editor",
    "Photography Portfolio",
    "DaVinci Resolve",
    "Premiere Pro",
    "After Effects",
    "Color Grading",
    "Cinematic Videography",
    "Visual Storytelling",
    "Freelance Photographer",
    "Cinematic Editing",
    "Content Creator",
  ],
  authors: [{ name: "Shailesh Mahato" }],
  creator: "Shailesh Mahato",
  publisher: "Shailesh Mahato",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Shailesh Mahato – Photographer, Videographer & Video Editor",
    description:
      "Passionate Photographer and Video Editor delivering clean, cinematic edits and dynamic visual storytelling.",
    siteName: "Shailesh Mahato Portfolio",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Shailesh Mahato - Photographer & Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shailesh Mahato – Photographer, Videographer & Video Editor",
    description:
      "Crafting cinematic edits, stunning photography, and powerful stories. Let's make your content stand out.",
    creator: "@shailesh_mahato",
    images: ["/hero.webp"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {},
  category: "Photography & Videography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#020817" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shailesh Mahato",
              image: "/hero.webp",
              sameAs: [],
              jobTitle: "Photographer & Video Editor",
              knowsAbout: [
                "Photography",
                "Videography",
                "Video Editing",
                "Color Grading",
                "Cinematography",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen text-white`}
        style={{
          background: "#020817",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid-background-large min-h-screen">
          <SmoothScroll>
            <MouseMoveEffect />
            <Navbar />
            <main className="">{children}</main>
            <Footer />
            <JumpToTop />
            <Toaster position="top-center" />
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
