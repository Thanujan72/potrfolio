import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider"; // ThemeProvider-ஐ Import செய்யவும்

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'ThanujanDev',
  description: 'Software Developer Portfolio',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning-ஐ இங்கே சேர்க்கவும்
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ThemeProvider-க்குள் children-ஐ வைக்கவும் */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}