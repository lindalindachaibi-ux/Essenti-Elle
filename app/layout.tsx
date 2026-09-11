import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Tangerine } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tangerine",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Essenti'Elle — Formation et Bien-être",
  description:
    "Centre de formation professionnelle international pour femmes — réflexologie, kinésiologie, massages, ostéopathie, hijama, nutrition.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${tangerine.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
