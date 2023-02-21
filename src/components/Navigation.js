import Link from "next/link";
import { useRouter } from "next/router";
import styles from '@/styles/Header.module.css'

export default function Navigation() {
    const router = useRouter();
    return (
        <nav className={styles.navigation}>
            <Link
                className={router.pathname === "/" ? styles.active : styles.navLink }
                href='/'>HOME</Link>
            <Link
                className={router.pathname === "/about-us" ? styles.active : styles.navLink }
                href='/about-us'>OM OSS</Link>
            <Link
                className={router.pathname === "/verksamheter" ? styles.active : styles.navLink }
                href='/verksamheter'>VERKSAMHETER</Link>
            <Link
                className={router.pathname === "/artistic-wall-painting" ? styles.active : styles.navLink }
                href='/artistic-wall-painting'>KONSTNÄRLIG VÄGGMÅLNING</Link>
        </nav>
    )

}
