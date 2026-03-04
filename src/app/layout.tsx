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
    default: "Shailesh Mahato – Videographer & Video Editor",
    template: "%s | Shailesh Mahato",
  },
  description:
    "Turning raw footage into visual stories — with style, precision, and a touch of cinematic magic. Shailesh Mahato specializes in videography, video editing, color grading, and motion graphics — delivering cinematic edits and polished storytelling.",
  keywords: [
    "Shailesh Mahato",
    "Videographer",
    "Video Editor",
    "DaVinci Resolve",
    "Premiere Pro",
    "After Effects",
    "Color Grading",
    "YouTube Video Editing",
    "Cinematic Videography",
    "Visual Storytelling",
    "Freelance Videographer",
    "Cinematic Editing",
    "Content Creator",
    "Motion Graphics",
    "Audio Sync",
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
    title: "Shailesh Mahato – Videographer & Video Editor",
    description:
      "Passionate Videographer and Video Editor delivering clean, cinematic edits and dynamic visual storytelling using DaVinci Resolve, Premiere Pro, and After Effects.",
    siteName: "Shailesh Mahato Portfolio",
    images: [
      {
        url: "/niloybhowmick.png",
        width: 1200,
        height: 630,
        alt: "Shailesh Mahato - Videographer & Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shailesh Mahato – Videographer & Video Editor",
    description:
      "Crafting cinematic edits, stunning videography, and powerful stories. Let's make your content stand out.",
    creator: "@shailesh_mahato",
    images: ["/niloybhowmick.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {},
  category: "Videography & Video Editing",
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
              image: "/niloybhowmick.png",
              sameAs: [],
              jobTitle: "Videographer & Video Editor",
              knowsAbout: [
                "Videography",
                "Video Editing",
                "Motion Graphics",
                "DaVinci Resolve",
                "Adobe Premiere Pro",
                "Adobe After Effects",
                "Color Grading",
                "Audio Syncing",
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
