import { Button } from "@heroui/react"

import { useEffect, useState } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { navLinks } from "@/utils/constants"

import Logo from "../common/Logo"

const NavBar = () => {
   // const [menuOpen, setMenuOpen] = useState(false)
   const [pageReady, setPageReady] = useState(false)
   const [scroll, setScroll] = useState(false)

   const pageLink = usePathname()

   useEffect(() => {
      setPageReady(true)
   }, [])
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
                        <li className="" key={item.title}>
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

            {/* mobile menu start */}
            {/* <MenuAlt3Icon
               className={`lg:hidden w-9 text-primary cursor-pointer`}
               onClick={() => setMenuOpen(true)}
            />
            <motion.div
               initial={false}
               animate={{ opacity: menuOpen ? 1 : 0, scale: menuOpen ? 1 : 0 }}
               transition={{ duration: 0.5 }}
               className="fixed top-0 left-0 right-0 bottom-0 bg-primary bg-opacity-95 h-screen text-center overflow-y-scroll z-[99999] lg:hidden"
               onClick={(e) => e.stopPropagation()}>
               <MobileNavbar setMenuOpen={setMenuOpen} pageLink={pageLink} />
            </motion.div> */}
            {/* mobile menu end */}
         </div>
      </header>
   )
}

export default NavBar
