"use client"

import { HeroUIProvider } from "@heroui/react"

import React from "react"

import Footer from "@/components/navigation/Footer"
import NavBar from "@/components/navigation/NavBar"

const AppLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <HeroUIProvider>
         <NavBar />
         {children}
         <Footer />
      </HeroUIProvider>
   )
}

export default AppLayout
