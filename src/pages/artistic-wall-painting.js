import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/ArtisticWallPainting.module.css";
import Image from "next/image";

export default function ArtisticWallPainting() {
    return (
        <>
            <Header/>
            <section className={styles.maxWidth}>
                <div className={styles.mainPhoto}>
                    <Image
                        src='/photos/wallPaint.jpg'
                        alt="Main Photos"
                        className={styles.vercelLogo}
                        fill
                        priority
                    />
                </div>
                <section className={styles.descriptionWrapper}>
                    <div className={styles.description}>
                        <p>   &quot;Vi förstår att varje kunds vision och behov är unika, vilket är varför vi erbjuder
                            anpassade skisser och design för att skapa en unik väggmålning som passar deras specifika
                            önskemål. Vårt team av erfarna konstnärer och muralmålare kan skapa allt från realistiska
                            porträtt och landskap till abstrakta mönster och illusionistiska konstverk. Vi tar hänsyn
                            till faktorer som storlek, komplexitet, mättnad och färger vid beräkning av priset för
                            varje väggmålning, så priset kan variera beroende på de specifika kraven för varje projekt.
                            Illusionsmålningar kan kräva mer tid och detaljering, och kan därför vara mer kostsamma än
                            enklare designkoncept. Vi arbetar alltid med våra kunder för att hitta en lösning som passar
                            deras budget och behov, och vårt mål är alltid att erbjuda högkvalitativa anpassade
                            väggmålningar till rimliga priser. Kontakta oss idag för att diskutera dina önskemål
                            och få en offert på en anpassad väggmålning som är skräddarsydd för dig.&quot;</p>
                    </div>
                </section>
            </section>
            <Footer/>
        </>
    )
}
