import styles from "@/styles/Bathroom.module.css";
import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Bathroom() {
    return (
        <>
            <Header />
            <section className={styles.maxWidth}>
                <div className={styles.mainPhoto}>
                <Image
                    src='/photos/bathroom/1.jpg'
                    alt="Main Photos"
                    className={styles.vercelLogo}
                    fill
                    priority
                />
                </div>
                <section className={styles.wrapper}>
                <section className={styles.descriptionWrapper}>
                    <div className={styles.description}>
                        <p><b>Bygglyck AB är certifierat enligt BBV</b> – Byggkeramikrådets branschregler för våtrum. Detta innebär att vi har behörighet att utföra tätskiktsarbete i badrum och andra våtrum enligt de krav som ställs av Boverket.</p>
                        <p>Här kan du ta del av vårt behörighetsbevis utfärdat av Byggkeramikrådet år 2025.</p>
                    </div>
                </section>
                <section className={styles.certificatePhoto}>
                    <Image
                        src='/photos/bathroom/2.png'
                        alt="Main Photos"
                        className={styles.vercelLogo}
                        fill
                        priority
                    />
                </section>
                </section>
               
                
            </section>
            <Footer/>
        </>

    )
}
