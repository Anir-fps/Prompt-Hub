import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'; // Make sure this path is correct

// 1. Initialize fonts at the top level
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Define Metadata
export const metadata: Metadata = {
  title: "PromptHub",
  description: "The GitHub for AI Prompts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Apply font variables and styling to body */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white min-h-screen flex flex-col`}>
        
        {/* Navbar sits at the top */}
        <Navbar />

        {/* 4. Sidebar + Main Content Wrapper */}
        <div className="flex flex-1">
          <Sidebar /> 
          
          <main className="flex-1 p-4 md:p-6">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}