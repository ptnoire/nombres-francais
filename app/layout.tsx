import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Générateur de nombres aléatoires en français",
  description:
    "Ce site génère des nombres aléatoires et vous donne la réponse en français.",
  lang: "fr",
  keywords: "nombre aléatoire, français, générateur",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
