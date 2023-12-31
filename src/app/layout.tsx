import "./globals.css";
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
