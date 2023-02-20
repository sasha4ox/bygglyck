import styles from '@/styles/Footer.module.css'
import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.logoServiceWrapper}>
                <div className={styles.logoWrapper}>
                    <Image
                        src="/logo-no-background.svg"
                        alt="Vercel Logo"
                        className={styles.vercelLogo}
                        width={105}
                        height={95}
                        priority
                    />
                </div>
                <div className={styles.service}>
                    <p>Sverige</p>
                    <a href='tel:+472 0193325'>Tel:+472 0193325</a>
                    <a href='mailto:bygglyck@gmail.com'>Mail: bygglyck@gmail.com</a>
                </div>
            </section>

            <div className={styles.schedule}>
                <ul>
                    <li>Mån - lör: 07.00-17.00</li>
                    <li>Söndag: Ledig</li>
                </ul>
            </div>

        </footer>
   )

}
