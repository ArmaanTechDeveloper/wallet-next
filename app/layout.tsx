import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import RecoilProvider from "./RecoilProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Crypto pocket",
  description: "Digital online wallet for solana and etherium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='bg-zinc-950 p-4 text-white min-h-screen flex items-center justify-center'>
          <div className="container h-full flex justify-center ">
            <RecoilProvider>
              {children}
            </RecoilProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
