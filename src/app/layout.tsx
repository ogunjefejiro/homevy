import AppLayout from "@/layouts/AppLayout"

import type { Metadata } from "next"

import { Open_Sans } from "next/font/google"

import "./globals.css"

const openSans = Open_Sans({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
   display: "swap",
})

export const metadata: Metadata = {
   title: "Boldo",
   description: "Blog App",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={`${openSans.className} antialiased max-w-[90%] lg:max-w-[85%] mx-auto`}>
            <AppLayout>{children}</AppLayout>
         </body>
      </html>
   )
}
