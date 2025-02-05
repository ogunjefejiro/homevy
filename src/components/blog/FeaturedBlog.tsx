"use client"

import { manrope } from "@/app/fonts"
import { Card, CardBody, Image, User } from "@heroui/react"
import { motion } from "framer-motion"

import React from "react"

const FeaturedBlog = () => {
   return (
      <motion.main
         viewport={{ once: true }}
         initial={{ opacity: 0, y: -50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className={`py-8 sm:pt-10 sm:pb-16 border-b border-primary text-center ${manrope.variable}`}
      >
         <p className="text-xl">Blog</p>
         <h1 className={`mt-6 mb-8 sm:mt-8 sm:mb-12 text-5xl sm:text-6xl manrope`}>Thoughts and words</h1>

         <Card isPressable disableRipple shadow="none" className="text-primary">
            <CardBody className="overflow-visible p-0 grid sm:grid-cols-2 items-center gap-6 lg:gap-10 xl:gap-20">
               <Image
                  alt="Featured news"
                  className="w-full object-cover h-auto rounded-xl"
                  shadow="none"
                  src="/images/featured-news.png"
                  width="100%"
               />

               <div className="space-y-3 sm:space-y-5 xl:space-y-8">
                  <div className="flex items-center gap-4">
                     <p className="font-bold">Category</p>
                     <p className="text-paragraph">November 22, 2021</p>
                  </div>

                  <h3 className="text-3xl lg:text-5xl max-w-screen-sm leading-10 lg:leading-[72px] manrope">
                     Pitch termsheet backing validation focus release.
                  </h3>

                  <User
                     avatarProps={{
                        src: "/images/avatar-1.png",
                        size: "sm",
                     }}
                     name="Chandler Bing"
                     classNames={{ name: "text-base text-black" }}
                  />
               </div>
            </CardBody>
         </Card>
      </motion.main>
   )
}

export default FeaturedBlog
