import type { Metadata } from "next";
import "./globals.css";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Montserrat:wght@400;500;600;700&family=Tangerine:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
