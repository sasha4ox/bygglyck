import '@/styles/globals.css'
import { Alegreya } from '@next/font/google';
import Script from 'next/script'

const alegreya = Alegreya({ subsets: ['latin'], weight: '400' });
export default function App({ Component, pageProps }) {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-35NV3VXXYB"/>
      <Script 
        id='google-analytics'
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-35NV3VXXYB', {
                    page_path: window.location.pathname,
                  });
                `,
                }}

      />
      <div className={alegreya.className}>
        <Component {...pageProps} />
      </div>
    </>
          
      )


}
