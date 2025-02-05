import { Manrope, Open_Sans } from "next/font/google"

export const openSans = Open_Sans({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
   display: "swap",
})

export const manrope = Manrope({
   subsets: ["latin"],
   weight: ["400", "600", "700"],
   variable: "--font-manrope",
   display: "swap",
})
