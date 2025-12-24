import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV SABOHAMU HIBATUL - Konstruksi Gedung Pendidikan Profesional",
  description: "Perusahaan profesional yang bergerak di bidang konstruksi gedung pendidikan. Berpengalaman membangun sekolah, kampus, dan fasilitas pendidikan berkualitas tinggi di Balikpapan.",
  keywords: ["CV SABOHAMU HIBATUL", "konstruksi gedung pendidikan", "bangunan sekolah", "konstruksi kampus", "gedung pendidikan", "kontraktor balikpapan", "bangunan pendidikan"],
  authors: [{ name: "CV SABOHAMU HIBATUL" }],
  icons: {
    icon: "/company-logo.png",
  },
  openGraph: {
    title: "CV SABOHAMU HIBATUL - Konstruksi Gedung Pendidikan",
    description: "Perusahaan profesional yang bergerak di bidang konstruksi gedung pendidikan dengan pengalaman lebih dari 10 tahun.",
    url: "https://sabohamuhibatul.com",
    siteName: "CV SABOHAMU HIBATUL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV SABOHAMU HIBATUL - Konstruksi Gedung Pendidikan",
    description: "Perusahaan profesional yang bergerak di bidang konstruksi gedung pendidikan dengan pengalaman lebih dari 10 tahun.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
