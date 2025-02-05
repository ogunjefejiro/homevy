import { Button, Drawer, DrawerContent, useDisclosure } from "@heroui/react"
import { HiMenuAlt3 } from "react-icons/hi"

import React from "react"

import Link from "next/link"

import { navLinks } from "@/utils/constants"

import Logo from "../common/Logo"
import MobileSidebar from "./MobileSidebar"

const NavBar = () => {
   const [scroll, setScroll] = React.useState(false)
   const { isOpen, onOpen, onOpenChange } = useDisclosure()

   React.useEffect(() => {
      if (typeof window !== "undefined") {
         window.addEventListener("scroll", () => setScroll(window.scrollY > 200))
      }
   }, [])

   return (
      <header className={`transition-all duration-300 sticky top-0 z-[20] bg-white ${scroll ? "border-b" : ""}`}>
         <div
            className={`flex justify-between items-center py-3 text-black transition-all duration-300 ${
               scroll ? "md:py-4" : "md:py-6"
            } `}
         >
            <Logo />

            <nav className="hidden lg:flex">
               <ul className="flex gap-12 items-center">
                  {navLinks?.map((item) => (
                     <li key={item.title}>
                        <Link
                           href={item.path}
                           className="text-primary hover:text-secondary font-semibold duration-300 transition-colors"
                        >
                           {item.featured ? (
                              <Button
                                 variant="bordered"
                                 color="primary"
                                 size="lg"
                                 radius="full"
                                 className="px-12 font-semibold"
                              >
                                 {item.title}
                              </Button>
                           ) : (
                              item.title
                           )}
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>

            <HiMenuAlt3 className="lg:hidden text-4xl text-primary cursor-pointer" onClick={onOpen} />
         </div>

         <Drawer placement="left" isOpen={isOpen} onOpenChange={onOpenChange} className="max-w-[300px]">
            <DrawerContent>{(onClose) => <MobileSidebar onClose={onClose} />}</DrawerContent>
         </Drawer>
      </header>
   )
}

export default NavBar
