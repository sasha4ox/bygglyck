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
                        <p><b>ByggLyck AB</b> är ett familjeföretag där både ledningen och det operativa teamet utgör kärnan i verksamheten. Vi tror på öppen kommunikation, där varje medarbetare har en röst och aktivt deltar i analys och diskussion kring våra projekt. Detta skapar en stark sammanhållning och ett engagemang som genomsyrar hela företaget.</p>
                        <br/>
                        <p>Vi började vår resa i byggbranschen redan år 2010, främst som yrkesarbetare. Genom åren har vi samlat på oss värdefull erfarenhet ute på fältet, vilket idag speglas i hur vi driver verksamheten. År 2023 tog vi nästa steg och grundade ByggLyck AB – med målet att kombinera vår praktiska kunskap med en strukturerad och professionell organisation.</p>
                        <br/>
                        <p>Hos oss möts gedigen hantverkserfarenhet, nytänkande och familjär arbetsmiljö – något vi är stolta över att kunna erbjuda våra kunder.</p>
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
                    <section className={styles.descriptionWrapper}>
                        <div className={styles.description}>
                            <h1>Partners i kvalitet</h1>
                            <p><b>På ByggLyck</b> väljer vi kvalitet i varje steg av byggprocessen. Därför samarbetar vi endast med professionella och pålitliga leverantörer av byggmaterial. Våra partners — <b>Södermalm Trä, Beijer, Centro, LIP och NA Svensson</b> — är företag med starkt renommé som erbjuder certifierade produkter av högsta kvalitet.</p>
                            <br/>
                            <p>De förser oss inte bara med material, utan också med fullständig teknisk dokumentation och specifikationer, vilket säkerställer att allt uppfyller branschens krav på kvalitet och säkerhet. Vi lägger även stor vikt vid miljöansvar — våra leverantörer arbetar enligt principer för hållbar utveckling och ansvarsfull resursanvändning.</p>
                            <br/>
                            <p>Det är tack vare dessa samarbeten som vi kan leverera trygga och långsiktiga bygglösningar till våra kunder.</p>
                        </div>
                    </section>
                    <section className={styles.partnersLogo}>
                    <a href="https://nasvensson.woody.se/" target="_blank" className={styles.circlePhoto}>
                                <Image
                                    src='/photos/companiesLogo/1.png'
                                    alt="Worker photo"
                                    className={styles.circlePhotoImg}
                                    fill
                                    // priority
                                />
                            </a>
                            <a href="https://lip.dk/se/" target="_blank" className={styles.circlePhoto}>
                                <Image
                                    src='/photos/companiesLogo/2.png'
                                    alt="Worker photo"
                                    className={styles.circlePhotoImg}
                                    fill
                                    // priority
                                />
                            </a>
                            <a href="https://www.nordstroms.se/vara-anlaggningar/sodermalms-tra-arsta/" target="_blank" className={styles.circlePhoto}>
                                <Image
                                   src='/photos/companiesLogo/3.png'
                                    alt="Worker photo"
                                    className={styles.circlePhotoImg}
                                    fill
                                    // priority
                                />
                            </a>
                            <a href="https://www.beijerbygg.se/privat" target="_blank" className={styles.circlePhoto}>
                                <Image
                                   src='/photos/companiesLogo/4.png'
                                    alt="Worker photo"
                                    className={styles.circlePhotoImg}
                                    fill
                                    // priority
                                />
                            </a>
                            <a href="https://www.centro.se/" target="_blank" className={styles.circlePhoto}>
                                <Image
                                    src='/photos/companiesLogo/5.png'
                                    alt="Worker photo"
                                    className={styles.circlePhotoImg}
                                    fill
                                    // priority
                                />
                            </a>
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
