import { Chip } from "@heroui/react"

import Link from "next/link"

import { footerLinks } from "@/utils/constants"

import Logo from "../common/Logo"

const Footer = () => {
   return (
      <footer className="py-10 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:flex gap-6 lg:gap-12 justify-between">
         <div className="w-full text-[#fdf9ee] text-base md:mr-0 lg:mr-24">
            <Logo />

            <p className="my-6 text-paragraph">
               Social media validation business model canvas graphical user interface launch party creative facebook
               iPad twitter.
            </p>
            <p className="text-paragraph">All rights reserved.</p>
         </div>

         {footerLinks?.map(({ heading, subMenus }, i) => (
            <div className="w-full flex flex-col" key={heading + i}>
               <h3 className="text-xl text-black font-bold mb-8">{heading}</h3>

               <div className="space-y-6 flex flex-col">
                  {subMenus.map((item, i) => (
                     <Link
                        key={i}
                        href={item.path}
                        className="cursor-pointer text-paragraph flex items-center gap-3 w-fit"
                     >
                        {item.title}{" "}
                        {item.tag && (
                           <Chip color="secondary" classNames={{ content: "font-bold" }}>
                              {item.tag}
                           </Chip>
                        )}
                     </Link>
                  ))}
               </div>
            </div>
         ))}
      </footer>
   )
}

export default Footer
