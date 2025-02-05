import { Button } from "@heroui/react"

import React from "react"

import Link from "next/link"

import { navLinks } from "@/utils/constants"

import Logo from "../common/Logo"

const MobileSidebar = ({ onClose }: { onClose: VoidFunction }) => {
   return (
      <div className="p-6 space-y-12">
         <Logo />

         <nav>
            <ul className="flex flex-col gap-6">
               {navLinks?.map((item) => (
                  <li key={item.title}>
                     <Link
                        href={item.path}
                        className="text-base text-primary hover:text-secondary font-semibold duration-300 transition-colors"
                        onClick={onClose}
                     >
                        {item.featured ? (
                           <Button
                              variant="bordered"
                              color="primary"
                              size="lg"
                              radius="full"
                              className="px-12 font-semibold"
                              onPress={onClose}
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
   )
}

export default MobileSidebar
