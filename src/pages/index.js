import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
        <section className={styles.maxWidth}>
            <div className={styles.mainPhoto}>
                <Image
                    src='/photos/main.jpg'
                    alt="Main Photos"
                    className={styles.vercelLogo}
                    fill
                    priority
                />
            </div>
            <section className={styles.descriptionWrapper}>
                <div className={styles.description}>
                    <p>Välkommen till vårt byggföretag i Sverige där vi levererar högkvalitativa byggtjänster och  konstnärlig väggmålning. Vi är en pålitlig partner som alltid strävar efter att överträffa våra kunders förväntningar och leverera fantastiska resultat varje gång.</p>

                    <p>Vi tror på att byggprocessen ska vara en lycklig och problemfri upplevelse för våra kunder. Därför arbetar vi hårt för att leverera den högsta kvaliteten på alla våra projekt och att alltid behandla våra kunder med respekt och ärlighet. Vi tror på att bygga långsiktiga relationer med våra kunder baserat på tillit och öppen kommunikation.</p>

                    <p>Kontakta oss för att se hur vi kan hjälpa dig att förverkliga dina byggdrömmar på ett lyckligt och framgångsrikt sätt.</p>
                </div>
            </section>
            <div className={styles.mainPhotoSecond}>
                <Image
                    src='/photos/mainSecond.jpg'
                    alt="Main Photos"
                    className={styles.vercelLogo}
                    fill
                    priority
                />
            </div>
            <section className={styles.descriptionWrapper}>
                <div className={styles.description}>
                    <p>En konstnärlig väggmålning är ett fantastiskt sätt att förvandla en tråkig vägg eller ett utrymme
                        till ett imponerande konstverk. Det kan ge din inredning ett unikt och personligt utseende samtidigt
                        som det bidrar till att skapa en speciell atmosfär och känsla i rummet. Konstnärliga väggmålningar
                        kan utföras i olika stilar och tekniker för att passa dina behov och önskemål. Du kan välja en stor
                        och färgglad mural som skapar en imponerande visuell effekt eller en mindre målning som passar
                        perfekt i ett hörn. Oavsett vad du väljer kommer en konstnärlig väggmålning att göra ditt hem eller
                        din arbetsplats unikt och personligt.</p>
                </div>
            </section>
        </section>

      <Footer/>
      {/*<main className={styles.main}>*/}
      {/*  <div className={styles.description}>*/}
      {/*    <p>*/}
      {/*      Get started by editing&nbsp;*/}
      {/*      <code className={styles.code}>src/pages/index.js</code>*/}
      {/*    </p>*/}
      {/*    <div>*/}
      {/*      <a*/}
      {/*        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
      {/*        target="_blank"*/}
      {/*        rel="noopener noreferrer"*/}
      {/*      >*/}
      {/*        By{' '}*/}
      {/*        <Image*/}
      {/*          src="/vercel.svg"*/}
      {/*          alt="Vercel Logo"*/}
      {/*          className={styles.vercelLogo}*/}
      {/*          width={100}*/}
      {/*          height={24}*/}
      {/*          priority*/}
      {/*        />*/}
      {/*      </a>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className={styles.center}>*/}
      {/*    <Image*/}
      {/*      className={styles.logo}*/}
      {/*      src="/next.svg"*/}
      {/*      alt="Next.js Logo"*/}
      {/*      width={180}*/}
      {/*      height={37}*/}
      {/*      priority*/}
      {/*    />*/}
      {/*    <div className={styles.thirteen}>*/}
      {/*      <Image*/}
      {/*        src="/thirteen.svg"*/}
      {/*        alt="13"*/}
      {/*        width={40}*/}
      {/*        height={31}*/}
      {/*        priority*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className={styles.grid}>*/}
      {/*    <a*/}
      {/*      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
      {/*      className={styles.card}*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*    >*/}
      {/*      <h2 className={inter.className}>*/}
      {/*        Docs <span>-&gt;</span>*/}
      {/*      </h2>*/}
      {/*      <p className={inter.className}>*/}
      {/*        Find in-depth information about Next.js features and&nbsp;API.*/}
      {/*      </p>*/}
      {/*    </a>*/}

      {/*    <a*/}
      {/*      href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
      {/*      className={styles.card}*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*    >*/}
      {/*      <h2 className={inter.className}>*/}
      {/*        Learn <span>-&gt;</span>*/}
      {/*      </h2>*/}
      {/*      <p className={inter.className}>*/}
      {/*        Learn about Next.js in an interactive course with&nbsp;quizzes!*/}
      {/*      </p>*/}
      {/*    </a>*/}

      {/*    <a*/}
      {/*      href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
      {/*      className={styles.card}*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*    >*/}
      {/*      <h2 className={inter.className}>*/}
      {/*        Templates <span>-&gt;</span>*/}
      {/*      </h2>*/}
      {/*      <p className={inter.className}>*/}
      {/*        Discover and deploy boilerplate example Next.js&nbsp;projects.*/}
      {/*      </p>*/}
      {/*    </a>*/}

      {/*    <a*/}
      {/*      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
      {/*      className={styles.card}*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*    >*/}
      {/*      <h2 className={inter.className}>*/}
      {/*        Deploy <span>-&gt;</span>*/}
      {/*      </h2>*/}
      {/*      <p className={inter.className}>*/}
      {/*        Instantly deploy your Next.js site to a shareable URL*/}
      {/*        with&nbsp;Vercel.*/}
      {/*      </p>*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</main>*/}
    </>
  )
}
