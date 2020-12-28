import React from "react";
import Link from "next/link";
import style from "../styles/Navbar.module.css"

export default function Navbar() {
  return (
    <nav>
      <span className={style.logo}><Link href="/">Cool Projects</Link></span>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  );
}
