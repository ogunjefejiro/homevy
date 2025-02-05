"use client"

import { HeroUIProvider } from "@heroui/react"

import React from "react"

import Footer from "@/components/navigation/Footer"
import TopBar from "@/components/navigation/TopBar"

const AppLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <HeroUIProvider>
         <TopBar />
         {children}
         <Footer />
      </HeroUIProvider>
   )
}

export default AppLayout
