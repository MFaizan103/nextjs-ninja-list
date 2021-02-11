import React from "react";
import Link from "next/link";
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav>
      <Link href='/'>
        <a className="logo"><Image width={150} height={100} src="/naruto.png" /></a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/ninjas">
        <a>Ninjas</a>
      </Link>
    </nav>
  );
};

export default NavBar;
