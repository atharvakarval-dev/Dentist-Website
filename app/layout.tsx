import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dentistree Dental Clinic | Dr. Poonam Bambarkar | Nanded City, Pune",
  description: "Dentistree Dental Clinic in Nanded City, Pune provides preventive, restorative, implant, and cosmetic dental treatments led by Dr. Poonam Bambarkar with 15+ years of experience.",
  keywords: "Dentist in Nanded City Pune, Dental Clinic in Nanded City, Best Dentist in Pune, Dental Implant Specialist Pune, Root Canal Treatment in Pune, Pediatric Dentist in Pune, Cosmetic Dentist in Pune",
  icons: {
    icon: "/assests/logo.png",
    apple: "/assests/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
