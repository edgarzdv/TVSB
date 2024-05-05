'use client'
import Link from 'next/link'
import React from 'react'
import style from "./style.module.scss";
import { usePathname } from 'next/navigation';


const Header = () => {
    const path = usePathname()

    return (
        <div className={style.header}>
            <Link className={path === "/" ? style.active : ""} href="/">Home</Link>
            <Link className={path === "/comperssion" ? style.active : ""} href="/comperssion">Comperssion</Link>
            <Link className={path === "/articals" ? style.active : ""} href="/articals">Articals</Link>
        </div>
    )
}

export default Header