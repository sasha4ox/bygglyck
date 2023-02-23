import '@/styles/globals.css'
import {  Alegreya } from '@next/font/google';

const alegreya = Alegreya({ subsets: ['latin'], weight: '400' });
export default function App({ Component, pageProps }) {
  return (
          <div className={alegreya.className}>
            <Component {...pageProps} />
          </div>
      )


}
