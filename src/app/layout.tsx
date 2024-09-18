import type { Metadata } from "next";
import localFont from "next/font/local";
import { Permanent_Marker, Paytone_One } from 'next/font/google';
import "./globals.css";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "600 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "500 900",
});

const permanent_marker = Permanent_Marker({
  subsets: ["latin"],
  variable: "--font-permanent_marker",
  weight: "400",
});
const paytone_one = Paytone_One({
  subsets: ["latin"],
  variable: "--font-paytone_one",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kojokillz",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${permanent_marker.variable} ${paytone_one.variable} antialiased`}
      >
        {children}

        
      </body>
    </html>
  );
}
