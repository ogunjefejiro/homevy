import React from "react"

import FeaturedBlog from "@/components/blog/FeaturedBlog"
import LatestNews from "@/components/blog/LatestNews"
import GetStartedCTA from "@/components/common/GetStartedCTA"

const Home = () => {
   return (
      <>
         <FeaturedBlog />
         <LatestNews />
         <GetStartedCTA />
      </>
   )
}

export default Home
