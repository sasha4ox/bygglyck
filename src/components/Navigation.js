import Link from "next/link";
import { useRouter } from "next/router";
import styles from '@/styles/Header.module.css'

export default function Navigation() {
    const router = useRouter();
    const pathName = router.pathname;
    const isHomePage = pathName === "/" || pathName === "/home"
    return (
        <nav className={styles.navigation}>
            <Link
                className={isHomePage ? styles.active : styles.navLink }
                href='/'>HOME</Link>
            <Link
                className={pathName === "/about-us" ? styles.active : styles.navLink }
                href='/about-us'>FÖRETAGSINFO</Link>
            <Link
                className={pathName === "/verksamheter" ? styles.active : styles.navLink }
                href='/verksamheter'>VERKSAMHETER</Link>
            <Link
                className={pathName === "/artistic-wall-painting" ? styles.active : styles.navLink }
                href='/artistic-wall-painting'>KONSTNÄRLIG VÄGGMÅLNING</Link>
        </nav>
    )

}
