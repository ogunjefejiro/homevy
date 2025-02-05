import AppLayout from "@/layouts/AppLayout"

import type { Metadata } from "next"

import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
})

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
})

export const metadata: Metadata = {
   title: "Homevy",
   description: "Blog App",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[90%] lg:max-w-[85%] mx-auto`}>
            <AppLayout>{children}</AppLayout>
         </body>
      </html>
   )
}
