import React from "react"

import FeaturedBlog from "@/components/blog/FeaturedBlog"
import LatestNews from "@/components/blog/LatestNews"
import GetStartedCTA from "@/components/common/GetStartedCTA"

const Home = () => {
   return (
      <div className="space-y-12">
         <FeaturedBlog />
         <LatestNews />
         <GetStartedCTA />
      </div>
   )
}

export default Home
