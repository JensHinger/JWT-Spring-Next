"use client"

import Link from "next/link";
import styles from "./modal.module.css"
import { usePathname } from "next/navigation";

export default function Modal(
    {children}
    :
    {children: React.ReactNode}
){

    const pathname = usePathname();
    if (!pathname.includes("login") && !pathname.includes("register")) {
        return null
    }

    return (
        <div className={styles.modal}>
            <Link className={styles.closeButton} href="/">Close</Link>
            <div>{children}</div>
        </div>
    )
}