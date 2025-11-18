import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { organizationSchema, tourPackagesSchema } from "./structured-data";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cameron Highlands Tours | Mossy Forest & Nature Tours Malaysia",
  description:
    "Experience the enchanting Mossy Forest Cameron Highlands with our guided eco tours. Explore Gunung Brinchang, BOH Tea Plantations, and jungle trekking adventures. Book your half-day or full-day Cameron Highlands tour today.",
  keywords: [
    "Cameron Highlands",
    "Cameron Highlands tours",
    "Cameron Highlands Mossy Forest",
    "Mossy Forest Malaysia",
    "Mossy Forest Brinchang",
    "Mossy Forest tour",
    "Mossy Forest Cameron Highlands map",
    "Mossy Forest entrance",
    "Mossy Forest half-day tour",
    "Mossy Forest full-day tour",
    "Mossy Forest eco tour",
    "Land Rover Mossy Forest",
    "Mossy Forest jungle trekking",
    "Mossy Forest nature trail",
    "Gunung Brinchang viewpoint",
    "BOH Tea Plantation tour",
    "Cameron Highlands sightseeing",
    "Mossy Forest with guide",
    "Mossy Forest photography tour",
    "Mossy Forest Instagram spots",
  ],
  openGraph: {
    title: "Cameron Highlands Tours | Mossy Forest Adventures",
    description:
      "Discover the magical Mossy Forest and stunning landscapes of Cameron Highlands. Expert-guided tours through Malaysia's most mystical nature destination.",
    url: "https://cameronhighlandstour.com",
    siteName: "Cameron Highlands Tours",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cameron Highlands Mossy Forest Tour",
      },
    ],
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cameron Highlands Tours | Mossy Forest Adventures",
    description:
      "Experience the enchanting Mossy Forest with our expert-guided eco tours in Cameron Highlands, Malaysia.",
    images: ["/og-image.jpg"],
  },
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
  alternates: {
    canonical: "https://cameronhighlandstour.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a5f3e" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(tourPackagesSchema),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
