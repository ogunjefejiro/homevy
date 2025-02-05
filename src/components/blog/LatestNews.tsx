"use client"

import { Button } from "@heroui/react"

import React from "react"

import { news } from "@/utils/dummyData"

import LatestNewsCard from "./LatestNewsCard"

const LatestNews = () => {
   const [pageSize, setPageSize] = React.useState(6)

   const handleLoadMore = () => {
      setPageSize((prev) => Math.min(prev + 3, news.length))
   }

   return (
      <div className="max-w-screen-xl mx-auto">
         <h2 className="text-4xl sm:text-5xl mb-8">Latest News</h2>

         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 sm:gap-y-14">
            {news.slice(0, pageSize).map((item) => (
               <LatestNewsCard key={item.id} {...item} />
            ))}
         </div>

         {pageSize < news.length && (
            <div className="flex justify-center mt-8 sm:mt-16">
               <Button
                  variant="bordered"
                  color="primary"
                  size="lg"
                  radius="full"
                  className="px-12 font-semibold"
                  onPress={handleLoadMore}
               >
                  Load more
               </Button>
            </div>
         )}
      </div>
   )
}

export default LatestNews
