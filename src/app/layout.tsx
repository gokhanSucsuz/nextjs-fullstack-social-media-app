import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D.K. Social Media App",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <Navbar/>
        </div>
          <main className="bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">{children}</main>
        </ClerkProvider>
      </body>
    </html>
    
    
  );
}