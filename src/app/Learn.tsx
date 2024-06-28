
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '/node_modules/swiper/swiper-bundle.min.css';
import 'swiper/css/autoplay';
import { Autoplay} from 'swiper/modules';
import styles from './styles/Learn.module.css';





export default function Learn () {
    return (
        <section className={styles.learnSection}>
               <div className={styles.background}>
               <img src="/images/learn-elipse.svg" alt="Semicircles" className={styles.learnelipse}/>
  
                </div>
        <div className={styles.leftSection}> 
        </div>
        <div className={styles.rightSection}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <h1>Learn</h1>
              <p>Explore our curated resources and tutorials to understand the fundamentals of the decentralized web.</p>
              <p>Start your journey and expand your knowledge!</p>
            </div>
            <div className={styles.swiperContainer}>
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                },

                768: {
                 
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                300:
                {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }
              }}
              modules={[Autoplay]}
             
            >
    <SwiperSlide className={styles.swiperSlide}>
    <a href="/research/daos" className={styles.card}>
        <h2>DAOS</h2>
        <span className={styles.dash}></span>
        <p>Small explanation on the subject.</p>
      </a>
    </SwiperSlide>
    <SwiperSlide className={styles.swiperSlide}>
    <a href="/research/grants" className={styles.card}>
        <h2>GRANTS
        </h2>
        <span className={styles.dash}></span>
        <p>Small explanation on the subject.</p>
      </a>
    </SwiperSlide>
    <SwiperSlide className={styles.swiperSlide}>
    <a href="/link4" className={styles.card}>
        <h2>COMING SOON</h2>
        <span className={styles.dash}></span> 
        <p>Small explanation on the subject.</p>
      </a>
    </SwiperSlide>
    <SwiperSlide className={styles.swiperSlide}>
    <a href="/research/grants" className={styles.card}>
        <h2>GRANTS</h2>
        <span className={styles.dash}></span>
        <p>Small explanation on the subject.</p>
      </a>
    </SwiperSlide> 
  </Swiper>
</div>
<div className={styles.buttonWrapper}>
    <a href="/research" className={styles.learnMore}>
      <span className={styles.arrows}>&gt;&gt;&gt;</span>
      CHECK OUT ALL
    </a>
  </div>
        </div>
        </div>


  
      </section>
      
    );
  }
  