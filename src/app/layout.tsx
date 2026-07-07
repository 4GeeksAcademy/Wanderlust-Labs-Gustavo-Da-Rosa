import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { FavoritesProvider } from "../components/FavoritesProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanderlust Explorer",
  description: "Explora experiencias turisticas unicas alrededor del mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${montserrat.variable} h-full bg-white antialiased`}
    >
      <body className="min-h-full bg-background text-on-background">
        <FavoritesProvider>
          <div className="fixed inset-x-0 top-0 z-50">
            <Navbar />
          </div>
          <main className="mx-auto flex min-h-screen w-full flex-col pt-16">
            {children}
          </main>
        </FavoritesProvider>
      </body>
    </html>
  );
}
