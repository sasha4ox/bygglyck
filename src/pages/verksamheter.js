import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/Verksamheter.module.css";
import Image from "next/image";


export default function Verksamheter() {
    return (
        <>
            <Header />
            <div className={styles.mainPhoto}>
                <Image
                    src='/photos/verksamheter.jpg'
                    alt="Main Photos"
                    className={styles.vercelLogo}
                    fill
                    priority
                />
            </div>
            <section className={styles.descriptionWrapperLeft}>
                <div className={styles.description}>
                    <p>"Vi är ett byggföretag som specialiserar oss på högkvalitativt snickeri och träbearbetning.
                        Vi erbjuder en rad olika tjänster, inklusive design och tillverkning av inredning, installation
                        av dörrar och fönster, byggnation av väggar och tak samt renovering av befintliga strukturer.
                        Vårt team av erfarna snickare har en passion för träbearbetning och tar stolthet i att leverera
                        vackra och funktionella lösningar som uppfyller våra kunders unika behov. Oavsett om du behöver
                        en specialdesignad möbel eller en fullständig renovering av ditt hem eller företag, så är vi
                        här för att hjälpa till."</p>
                </div>
            </section>
            <section className={styles.descriptionWrapperRight}>
                <div className={styles.description}>
                    <p>"Utöver vårt specialiserade snickeriarbete har vi också omfattande erfarenhet av takarbeten.
                        Vårt team av snickare och takläggare har många års erfarenhet av att arbeta med alla typer
                        av takkonstruktioner, från traditionella tegel till plåttak  Vi kan hjälpa till med allt från
                        takrenoveringar och takläggning till takunderhåll och reparationer. Vi är stolta över att kunna
                        erbjuda högkvalitativa takarbeten till våra kunder och vi strävar alltid efter att överträffa
                        deras förväntningar."</p>
                </div>
            </section>
            <section className={styles.descriptionWrapperLeft}>
                <div className={styles.description}>
                    <p>"Vi har också en erfarenhet av betongformning och formgivning. Vårt team av erfarna snickare
                        och hantverkare kan hjälpa dig att skapa anpassade betongelement som uppfyller dina unika
                        designbehov. Vi kan tillverka allt från betonggolv och -väggar till trappor, bänkskivor och
                        andra specialanpassade element. Vi använder högkvalitativt betongmaterial och noggrann teknik
                        för att säkerställa att våra betongelement har en slät yta och en hållbar konstruktion som
                        kommer att hålla länge. Vi är stolta över vår förmåga att skapa anpassade betongformgivningar
                        som överträffar våra kunders förväntningar och skapar en unik och minnesvärd estetisk
                        upplevelse."</p>
                </div>
            </section>
            <section className={styles.descriptionWrapperRight}>
                <div className={styles.description}>
                    <p>"Vi är glada att meddela att vi har utökat vårt expertisområde till att omfatta konstnärlig
                        väggmålning och måleri. Vårt team av skickliga målare och konstnärer kan hjälpa dig att skapa
                        unika och anpassade målningar som ger liv och färg till dina väggar och rum. Vi kan skapa allt
                        från realistiska landskap och porträtt till abstrakta mönster och grafitti-inspirerade
                        konstverk. Vi använder högkvalitativt målarfärg och noggrann teknik för att säkerställa att
                        våra konstverk har en livlig och hållbar färg. Vi är passionerade om att skapa anpassade
                        konstverk som hjälper våra kunder att skapa en unik och personlig estetisk upplevelse för
                        deras hem eller företag."</p>
                </div>
            </section>
            <Footer/>
        </>
    )
}
