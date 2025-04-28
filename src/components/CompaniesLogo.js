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
            spaceBetween={isSmallMobileScreen ? 50 : 50}
            slidesPerView={isSmallMobileScreen ? 2 : 6}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
    >
            <SwiperSlide>
                <a href={'https://www.byggnads.se/'} target='_blank' rel="noreferrer">
                    <Image
                        src='/companies/logotype.png'
                        alt="Main Photos"
                        className={styles.vercelLogo}
                        width={isMobile ? 150 : 150}
                        height={isSmallMobileScreen ? 45 : 50}
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
                        width={isMobile ? 150 : 170}
                        height={isSmallMobileScreen ? 20 : 55}
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
                        width={isMobile ? 150 : 150}
                        height={isSmallMobileScreen ? 20 : 50}
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
                        width={isMobile? 100 : 150}
                        height={isSmallMobileScreen ? 20 : 50}
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
                        width={isMobile ? 100 : 150}
                        height={isSmallMobileScreen ? 20 : 50}
                        priority
                    />
                </a>
            </SwiperSlide>        
            <SwiperSlide>
                <a href={'https://www.bkr.se/'} target='_blank' rel="noreferrer">
                    <Image
                        src='/companies/keramik.jpg'
                        alt="Main Photos"
                        className={styles.vercelLogo}
                        width={isMobile ? 100 : 150}
                        height={isSmallMobileScreen ? 20 : 100}
                        priority
                    />
                </a>
            </SwiperSlide>   
            </Swiper>
            
        </section>
   )

}
