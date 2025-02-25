import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guhuza Job-Seeking Game",
  description: "Level up your career with our gamified job-seeking platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-background flex flex-col custom-scrollbar`}
      >
        <SessionProvider>
          <Header />
          <Toaster position="top-center" richColors />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
