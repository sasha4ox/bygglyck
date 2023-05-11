import Head from "next/head";
import styles from '@/styles/Header.module.css'
import Image from "next/image";
import Navigation from "@/components/Navigation";
import {useEffect} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("header").classList.add(styles.smallHeader)
    } else {
        document.getElementById("header").classList.remove(styles.smallHeader)
    }
}

export default function Header() {
    const router = useRouter();
    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", scrollFunction, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
            window.removeEventListener("scroll", scrollFunction, { passive: true });
        }
    }, []);
    return ( <>
        <Head>
            <title>ByggLyck</title>
            <meta property="og:title" content="ByggLyck"></meta>
            <meta property="og:description" content="ByggLyck - byggföretag i Sverige där vi levererar högkvalitativa byggtjänster och konstnärlig väggmålning."></meta>
            <meta property="og:image" content="https://bygglyck.se/_next/image?url=%2Fphotos%2Fomoss.jpg&w=1920&q=75"></meta>
            <meta name="description" content="ByggLyck - byggföretag i Sverige där vi levererar högkvalitativa byggtjänster och konstnärlig väggmålning." />
            <meta name="keywords" content="Byggtjänster, Byggföretag, Renovering, Byggprojekt, Byggarbetsplats, Byggmaterial, Byggnadsteknik,Byggplanering, Entreprenadarbete, Hantverkstjänster, Takläggning, Fasadrenovering, Badrumsrenovering, Köksrenovering,Golvslipning, Måleri- och,tapetseringstjänster, Plattsättning, Snickeritjänster, Anläggningsarbeten,Byggkonsultation, Energibesparing, Byggnadsunderhåll, Isolering, Ventilation, Brandskydd, Fastighetsrenovering, Ljudisolering, Byggreparationer, Byggbesiktning, Byggledning, Byggkonstruktion, Byggskador, Byggningssnickeri, Prefab-hus, Tillbyggnad, Ombyggnad, Fönsterrenovering, Trapprenovering, Poolbyggande, Anpassade väggmålningar, Muralmålning, Konstnärlig väggmålning, Illusionsmålningar, Skisser och design, Konstverk för hemmet, Målningstjänster för inomhusväggar, Konstnärer för väggdekoration, Priser för väggmålningar, Konstverk för företag," ></meta>
            <meta name="robots" content="index, follow"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header} id={'header'}>
            <Link href='/'>
                <Image
                src="/logo-no-background.svg"
                alt="Bygg Lyck AB Logo"
                className={styles.vercelLogo}
                width={130}
                height={80}
                priority
                 />
            </Link>
            
            <Navigation/>
            <section className={styles.socialWrapper}>
                <a href={'https://www.instagram.com/bygglyck/'} target='_blank' rel="noreferrer"><Image
                    src="/instagram-svgrepo-com.svg"
                    alt="Instagram Logo"
                    fill
                    priority
                /></a>
                <a href={'https://www.facebook.com/ByggLyckAB'} target='_blank' rel="noreferrer">
                    <Image
                    src="/facebook.svg"
                    alt="Facebook logo"
                    fill
                    priority
                    /></a>

            </section>
            <div className={styles.hamburgerMenu}>
                <input id="menu__toggle" type="checkbox"/>
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>

                <ul className="menu__box">
                    <li><Link
                        className={router.pathname === "/" ? styles.menuItemActive : styles.menuItem }
                        href='/'>HOME</Link></li>
                    <li><Link
                        className={router.pathname === "/about-us" ? styles.menuItemActive : styles.menuItem }
                        href='/about-us'>OM OSS</Link></li>
                    <li><Link
                        className={router.pathname === "/verksamheter" ? styles.menuItemActive : styles.menuItem }
                        href='/verksamheter'>VERKSAMHETER</Link></li>
                    <li><Link
                        className={router.pathname === "/artistic-wall-painting" ? styles.menuItemActive : styles.menuItem }
                        href='/artistic-wall-painting'>KONSTNÄRLIG VÄGGMÅLNING</Link></li>
                </ul>
            </div>
        </header>

        <style jsx>{`#menu__toggle {
    opacity: 0;
   
}
#menu__toggle:checked + .menu__btn > span {
    transform: rotate(45deg);
}
#menu__toggle:checked + .menu__btn > span::before {
    top: 0;
    transform: rotate(0deg);
}
#menu__toggle:checked + .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
    left: 0 !important;
}
.menu__btn {
    position: fixed;
    top: 37px;
    left: 20px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 2;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transition-duration: .25s;
}
.menu__btn > span::before {
    content: '';
    top: -8px;
}
.menu__btn > span::after {
    content: '';
    top: 8px;
}
.menu__box {
    display: block;
    position: fixed;
    top: 0;
    z-index: 1;
    left: -100%;
    width: 300px;
    height: 100%;
    margin: 0;
    padding: 80px 0;
    list-style: none;
    background-color: var(--main-color);
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
    transition-duration: .25s;
}
.menu__item {
    display: block;
    padding: 12px 24px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: .25s;
}
.menu__item:hover {
    background-color: var(--yellow);
}`}</style>
    </>)

}
