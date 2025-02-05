import { Button } from "@heroui/react"
import { HiMenuAlt3 } from "react-icons/hi"

import { useEffect, useState } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { navLinks } from "@/utils/constants"

import Logo from "../common/Logo"

const NavBar = () => {
   const [scroll, setScroll] = useState(false)

   const pageLink = usePathname()

   useEffect(() => {
      if (typeof window !== "undefined") {
         window.addEventListener("scroll", () => setScroll(window.scrollY > 200))
      }
   }, [])

   return (
      <header className={`transition-all duration-300 sticky top-0 z-[9999] bg-white ${scroll ? "border-b" : ""}`}>
         <div
            className={`flex justify-between items-center py-3 text-black transition-all duration-300 ${
               scroll ? "md:py-4" : "md:py-6"
            } `}
         >
            <Logo />

            <div className="flex items-center gap-12">
               <nav className="hidden lg:block">
                  <ul className="flex gap-12 items-center">
                     {navLinks?.map((item) => (
                        <li key={item.title}>
                           <Link
                              href={item.path}
                              className={`${
                                 pageLink.includes(item.path) ? "text-secondary" : ""
                              } flex gap-1 items-center relative text-primary font-semibold`}
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
            </div>

            <HiMenuAlt3 className="lg:hidden text-4xl text-primary cursor-pointer" />
         </div>
      </header>
   )
}

export default NavBar
