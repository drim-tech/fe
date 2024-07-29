'use client'

import { CSSProperties, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import AnimatedSection from '@/hooks/animated-section';

export default function Slides() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    { id: 1, src: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { id: 2, src: "https://swiperjs.com/demos/images/nature-2.jpg" },
    { id: 3, src: "https://swiperjs.com/demos/images/nature-3.jpg" },
    { id: 4, src: "https://swiperjs.com/demos/images/nature-4.jpg" },
    { id: 5, src: "https://swiperjs.com/demos/images/nature-5.jpg" },
    { id: 6, src: "https://swiperjs.com/demos/images/nature-6.jpg" },
    { id: 7, src: "https://swiperjs.com/demos/images/nature-7.jpg" },
    { id: 8, src: "https://swiperjs.com/demos/images/nature-8.jpg" },
    { id: 9, src: "https://swiperjs.com/demos/images/nature-9.jpg" },
    { id: 10, src: "https://swiperjs.com/demos/images/nature-10.jpg" },
  ]

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as CSSProperties}
        loop={true}
        spaceBetween={10}
        navigation={true}
        // @ts-ignore
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-5/6 w-full ml-auto mr-auto"
      >
        {
          images.map(({ id, src }, index) => (
            <AnimatedSection delay={index * 100}>
              <SwiperSlide key={id} className='bg-cover bg-center'>
                <img src={ src } className='block w-full h-full object-cover' />
              </SwiperSlide>
            </AnimatedSection>
          ))
        }
      </Swiper>
      <Swiper
        // @ts-ignore
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-1/6 box-border !p-[10px]"
      >
        {
          images.map(({ id, src }, index) => (
            <AnimatedSection delay={index * 100}>
              <SwiperSlide key={id} className='bg-cover bg-center'>
                <img src={ src } className='block w-full h-full object-cover' />
              </SwiperSlide>
            </AnimatedSection>
          ))
        }
      </Swiper>
    </>
  );
}