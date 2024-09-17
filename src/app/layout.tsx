import type { Metadata } from "next";
import localFont from "next/font/local";
import {Inter, Permanent_Marker} from "next/font/google";
import "./globals.css";


const inter = Inter({subsets: ["latin"]});

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
const skranji = Permanent_Marker({
  weight: ["400",],
  subsets:["latin"]
  
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
        className={`${geistSans.variable} ${geistMono.variable} ${skranji.className} antialiased`}
      >
        {children}

        
      </body>
    </html>
  );
}
