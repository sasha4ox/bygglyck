import styles from "@/styles/Cleaning.module.css";
import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Cleaning() {
    return (
        <>
            <Header />
            <section className={styles.maxWidth}>
                <div className={styles.mainPhoto}>
                    <div className={styles.photoWrapper}>
                        <Image
                            src='/photos/cleaningPhotos/1.png'
                            alt="Main Photos"
                            className={styles.cleaningPhoto}
                            priority
                            fill
                        />
                    </div>
                    
                    <div className={styles.photoWrapper}>
                        <Image
                            src='/photos/cleaningPhotos/2.png'
                            alt="Main Photos"
                            className={styles.cleaningPhoto}
                            priority
                            fill
                        />
                    </div>
                    <div className={styles.photoWrapper}>
                        <Image
                            src='/photos/cleaningPhotos/3.png'
                            alt="Main Photos"
                            className={styles.cleaningPhoto}
                            priority
                            fill
                        />
                    </div>
                   
                </div>
                <section className={styles.descriptionWrapper}>
                    <div className={styles.description}>
                        <h1>Byggstädning & Slutstäd </h1>
                        <p><b>Efter renovering – vi fixar resten!</b></p>
                        <p>Vi är inte en städfirma – vi är ett byggföretag. Och just därför vet vi exakt hur ett hem eller en lokal ser ut efter ett bygg- eller renoveringsprojekt. Dammet, färgresterna, byggspill – vi känner till allt det där, och vi vet hur man får bort det på rätt sätt.</p>
                        <br/>
                        <p>Som en naturlig del av våra byggtjänster erbjuder vi professionell byggstädning och slutstädning för att lämna över ett färdigt och fräscht resultat.</p>
                        <p>Vi tar hand om:</p>
                        <br/>
                        <p><i>-Grovstädning under byggprojektets gång</i></p>
                        <br/>
                        <p><i>-Slutstädning inför inflytt</i></p>
                        <br/>
                        <p><i>-Städning av badrum, kök, fönster och ytskikt</i></p>
                        <br/>
                        <p><i>-Borttagning av byggdamm och skräp</i></p>
                        <br/>
                        <p>Du behöver inte anlita flera företag – vi tar ansvar från första spiken till sista trasan. <b>Bygglyck AB</b> gör jobbet klart – på riktigt.</p>
                    </div>
                </section>
                
            </section>
            <Footer/>
        </>

    )
}
