import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/svg/logo.svg" alt="Boldo Logo" width={162} height={42} />
    </Link>
  );
};

export default Logo;
