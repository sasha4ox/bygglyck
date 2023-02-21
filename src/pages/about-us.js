import styles from "@/styles/About.module.css";
import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function AboutUs() {
    return (
        <>
            <Header />
            <section className={styles.maxWidth}>
                <div className={styles.mainPhoto}>
                    <Image
                        src='/photos/omoss.jpg'
                        alt="Main Photos"
                        className={styles.vercelLogo}
                        fill
                        priority
                    />
                </div>
                <section className={styles.descriptionWrapper}>
                    <div className={styles.description}>
                        <p>   Vi är ett professionellt byggföretag som strävar efter att leverera högkvalitativa byggtjänster
                            till våra kunder. Oavsett om det gäller byggnation av en ny fastighet, renovering av ett
                            befintligt hem eller kommersiell fastighet, eller mindre projekt som till exempel
                            installation av tak eller byte av fönster, kan vi hjälpa till.</p>
                        <p>Vi har erfarna och kunniga hantverkare som arbetar noggrant och effektivt för att uppfylla våra kunders önskemål och behov. Vi tror på att bygga starka relationer med våra kunder genom att lyssna på deras visioner och samarbeta med dem för att skapa det perfekta resultatet.</p>
                        <p> Som ett svenskt företag förstår vi vikten av att följa strikta byggregler och riktlinjer. Vi arbetar alltid med hänsyn till säkerhet och miljö för att säkerställa att våra projekt genomförs på ett hållbart och ansvarsfullt sätt.</p>
                        <p>Kontakta oss för att diskutera dina byggbehov. Vi erbjuder fria offertförfrågor och är redo att hjälpa dig med ditt projekt. Tillsammans kan vi skapa bygglösningar som du kommer att älska och som du kan lita på att de är utförda på ett professionellt och pålitligt sätt.</p>
                    </div>
                </section>
            </section>
            <Footer/>
        </>

    )
}
