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
                <section className={styles.workersPhotoWrapper}>
                    <p className={styles.h1}>Kontaktpersoner</p>
                    <section className={styles.workerPhotos}>
                        <div className={styles.workerAbout}>
                            <div className={styles.logoWrapper}>
                                <Image
                                    src="/logo-no-background.svg"
                                    alt="Main Logo"
                                    className={styles.circlePhotoImgLogo}
                                    fill
                                />
                            </div>
                            <p><a href='mailto:Info@bygglyck.se'>Info@bygglyck.se</a></p>
                            <p><a href='mailto:Bygglyck@gmail.com'>Bygglyck@gmail.com</a></p>
                            <p><a href='mailto:Faktura@bygglyck.se'>Faktura@bygglyck.se</a></p>
                        </div>
                        <div className={styles.workerAbout}>
                            <div className={styles.circlePhoto}>
                                <Image
                                    src='/photos/photo2.jpg'
                                    alt="Worker photo"
                                    className={styles.circlePhotoImg}
                                    fill
                                    // priority
                                />
                            </div>
                            <p className={styles.workerName}>Sergii Soloshenko</p>
                            <p className={styles.workerPosition}>VD</p>
                            <p><a href='mailto:Sergii@bygglyck.se'>Sergii@bygglyck.se</a></p>
                        </div>
                        <div className={styles.workerAbout}>
                            <div className={styles.circlePhoto}>
                                <Image
                                    src='/photos/photo1.jpg'
                                    alt="Worker photo"
                                    className={styles.circlePhotoImg}
                                    fill
                                    // priority
                                />
                            </div>
                            <p className={styles.workerName}>Iurrii Abramov</p>
                            <p className={styles.workerPosition}>Entreprenad chef</p>
                            <p><a href='mailto:Iurii@bygglyck.se'>Iurii@bygglyck.se</a></p>
                            <p><a href='tel:070 07 07 130'>070 07 07 130</a></p>
                        </div>
                        <div className={styles.workerAbout}>
                            <div className={styles.circlePhoto}>
                                <Image
                                    src='/photos/photo3.jpg'
                                    alt="Worker photo"
                                    className={styles.circlePhotoImg}
                                    fill
                                    // priority
                                />
                            </div>
                            <p className={styles.workerName}>Olha Soloshenko</p>
                            <p className={styles.workerPosition}>Administratör</p>
                            <p><a href='mailto:Olha@bygglyck.se'>Olha@bygglyck.se</a></p>
                            <p><a href='tel:072 019 333 25'>072 019 333 25</a></p>
                        </div>
                        
                    </section>
                    
                    {/* <div className={styles.description}>
                        <p>   Vi är ett professionellt byggföretag som strävar efter att leverera högkvalitativa byggtjänster
                            till våra kunder. Oavsett om det gäller byggnation av en ny fastighet, renovering av ett
                            befintligt hem eller kommersiell fastighet, eller mindre projekt som till exempel
                            installation av tak eller byte av fönster, kan vi hjälpa till.</p>
                        <p>Vi har erfarna och kunniga hantverkare som arbetar noggrant och effektivt för att uppfylla våra kunders önskemål och behov. Vi tror på att bygga starka relationer med våra kunder genom att lyssna på deras visioner och samarbeta med dem för att skapa det perfekta resultatet.</p>
                        <p> Som ett svenskt företag förstår vi vikten av att följa strikta byggregler och riktlinjer. Vi arbetar alltid med hänsyn till säkerhet och miljö för att säkerställa att våra projekt genomförs på ett hållbart och ansvarsfullt sätt.</p>
                        <p>Kontakta oss för att diskutera dina byggbehov. Vi erbjuder fria offertförfrågor och är redo att hjälpa dig med ditt projekt. Tillsammans kan vi skapa bygglösningar som du kommer att älska och som du kan lita på att de är utförda på ett professionellt och pålitligt sätt.</p>
                    </div> */}
                </section>
            </section>
            <Footer/>
        </>

    )
}
