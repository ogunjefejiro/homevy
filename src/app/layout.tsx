import AppLayout from "@/layouts/AppLayout"

import type { Metadata } from "next"

import { openSans } from "./fonts"
import "./globals.css"

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
