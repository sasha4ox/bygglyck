import '@/styles/globals.css'
import { Patua_One } from '@next/font/google';

const patuaOne = Patua_One({ subsets: ['latin'], weight: '400' });
export default function App({ Component, pageProps }) {
  return (
          <div className={patuaOne.className}>
            <Component {...pageProps} />
          </div>
      )


}
