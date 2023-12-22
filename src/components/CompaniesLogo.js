import styles from '@/styles/CompaniesLogo.module.css'
import Image from "next/image";


export default function CompaniesLogo() {
    const isMobile = globalThis.innerWidth < 1150;
    const isSmallMobileScreen = globalThis.innerWidth < 765
    return (
        <section className={styles.companies}>
            <a href={'https://www.byggnads.se/'} target='_blank' rel="noreferrer">
                <Image
                    src='/companies/logotype.png'
                    alt="Main Photos"
                    className={styles.vercelLogo}
                    width={isMobile? 100 : 200}
                    height={isSmallMobileScreen ? 45 :60}
                    priority
                />
            </a>
            <a href={'https://id06.se/'} target='_blank' rel="noreferrer">
                <Image
                    src='/companies/id06.png'
                    alt="Main Photos"
                    className={styles.vercelLogo}
                    width={isMobile? 100 : 200}
                    height={isSmallMobileScreen ? 30 :100}
                    priority
                />
            </a>
                    
            <a href={'https://www.trygghansa.se/'} target='_blank' rel="noreferrer">
                <Image
                    src='/companies/Trygg-Hansa.svg'
                    alt="Main Photos"
                    className={styles.hansa}
                    width={isMobile? 100 : 200}
                    height={isSmallMobileScreen ? 30 :100}
                    priority
                />
            </a>
            
            <a href={'https://www.fora.se/'} target='_blank' rel="noreferrer">
                <Image
                    src='/companies/logo_white.svg'
                    alt="Main Photos"
                    className={styles.vercelLogo}
                    width={isMobile? 100 : 200}
                    height={isSmallMobileScreen ? 30 :100}
                    priority
                />
            </a>
                    
            <a href={'https://www.hetaarbeten.se/'} target='_blank' rel="noreferrer">
                <Image
                    src='/companies/logo-default.svg'
                    alt="Main Photos"
                    className={styles.vercelLogo}
                    width={isMobile? 100 : 200}
                    height={isSmallMobileScreen ? 30 :100}
                    priority
                />
            </a>   
        </section>
   )

}
