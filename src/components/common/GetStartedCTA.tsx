"use client"

import { manrope } from "@/app/fonts"
import { Button, Input } from "@heroui/react"
import { motion } from "framer-motion"

import React from "react"

const GetStartedCTA = () => {
   return (
      <motion.div
         viewport={{ once: true }}
         initial={{ opacity: 0, y: -50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className={`flex justify-center items-center bg-primary rounded-xl bg-[url('/svg/get-started-mask.svg')] bg-right-top bg-no-repeat ${manrope.variable}`}
      >
         <div className="flex flex-col items-center space-y-7 sm:space-y-10 py-10 px-6 sm:py-20 sm:px-12 ">
            <p className="text-center text-3xl sm:text-5xl max-w-screen-md leading-10 sm:leading-[72px] text-white manrope">
               An enterprise template to ramp up your company website
            </p>

            <form
               className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full"
               onSubmit={(e) => e.preventDefault()}
            >
               <Input
                  className="max-w-[370px]"
                  classNames={{ input: "placeholder:text-black px-2 text-base" }}
                  size="lg"
                  placeholder="Your email address"
                  radius="full"
                  type="email"
               />

               <Button
                  type="submit"
                  variant="solid"
                  color="secondary"
                  size="lg"
                  radius="full"
                  className="px-12 font-semibold"
               >
                  Start now
               </Button>
            </form>
         </div>
      </motion.div>
   )
}

export default GetStartedCTA
