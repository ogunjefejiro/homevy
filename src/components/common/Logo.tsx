import React from "react"

import Image from "next/image"
import Link from "next/link"

const Logo = () => {
   return (
      <Link href="/">
         <Image src="/svg/logo.svg" alt="Boldo Logo" width={162} height={42} />
      </Link>
   )
}

export default Logo
