import styles from '@/styles/CompaniesLogo.module.css'
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function CompaniesLogo() {
    const isMobile = globalThis.innerWidth < 1150;
    const isSmallMobileScreen = globalThis.innerWidth < 765;

    return (
        <section className={styles.companies}>
          <Swiper
            spaceBetween={isSmallMobileScreen ? 0 : 50}
            slidesPerView={isSmallMobileScreen ? 3 : 5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
    >
            <SwiperSlide>
                <a href={'https://www.byggnads.se/'} target='_blank' rel="noreferrer">
                    <Image
                        src='/companies/logotype.png'
                        alt="Main Photos"
                        className={styles.vercelLogo}
                        width={isMobile? 100 : 100}
                        height={isSmallMobileScreen ? 45 : 20}
                        priority
                    />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href={'https://id06.se/'} target='_blank' rel="noreferrer">
                    <Image
                        src='/companies/id06.png'
                        alt="Main Photos"
                        className={styles.vercelLogo}
                        width={isMobile? 50 : 80}
                        height={isSmallMobileScreen ? 20 : 25}
                        priority
                    />
                </a>
            </SwiperSlide>
            
            <SwiperSlide>
                <a href={'https://www.trygghansa.se/'} target='_blank' rel="noreferrer">
                    <Image
                        src='/companies/tryggHansa.png'
                        alt="Main Photos"
                        className={styles.hansa}
                        width={isMobile? 100 : 100}
                        height={isSmallMobileScreen ? 20 : 20}
                        priority
                    />
                </a>
            </SwiperSlide>       
            
            <SwiperSlide>
                <a href={'https://www.fora.se/'} target='_blank' rel="noreferrer">
                    <Image
                        src='/companies/logo_white.svg'
                        alt="Main Photos"
                        className={styles.vercelLogo}
                        width={isMobile? 100 : 100}
                        height={isSmallMobileScreen ? 20 : 20}
                        priority
                    />
                </a>
            </SwiperSlide>
            
            <SwiperSlide>
                <a href={'https://www.hetaarbeten.se/'} target='_blank' rel="noreferrer">
                    <Image
                        src='/companies/logo-default.svg'
                        alt="Main Photos"
                        className={styles.vercelLogo}
                        width={isMobile? 100 : 100}
                        height={isSmallMobileScreen ? 20 : 20}
                        priority
                    />
                </a>
            </SwiperSlide>        
            
            </Swiper>
            
        </section>
   )

}
