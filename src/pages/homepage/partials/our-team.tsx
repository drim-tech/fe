import AnimatedSection from "@/hooks/animated-section";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function OurTeam() {
  const images = [
    { id: 1, src: "https://swiperjs.com/demos/images/nature-1.jpg", alt: "drew weber", name: "drew weber", position: "Fondateur" },
    { id: 2, src: "https://swiperjs.com/demos/images/nature-2.jpg", alt: "jaya dixon", name: "jaya dixon", position: "Chef de projet" },
    { id: 3, src: "https://swiperjs.com/demos/images/nature-3.jpg", alt: "reese platt", name: "reese platt", position: "Entrepreneur général" },
    { id: 4, src: "https://swiperjs.com/demos/images/nature-4.jpg", alt: "jamie kokot", name: "jamie kokot", position: "Ingénieur en construction" },
  ];

  return (
    <div className="container mx-auto flex flex-col justify-center py-24 gap-10">
      <AnimatedSection delay={0}>
        <span className="flex justify-center font-halyard font-bold tracking-tighter text-[48px] mb-4">
          Notre équipe
        </span>
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
        >
          {images.map(({ id, src, alt, name, position }, index) => (
            <AnimatedSection delay={index * 100}>
              <SwiperSlide key={id} className='relative h-full'>
                <img src={src} alt={alt} className='block w-full h-96 object-cover' />
                <div className="absolute bottom-0 w-full h-full items-end bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 w-full text-white p-2 text-center flex flex-col">
                    <span className="font-halyard font-bold uppercase">{name}</span>
                    <span>{position}</span>
                  </div>
                </div>
              </SwiperSlide>
            </AnimatedSection>
          ))}
        </Swiper>
      </AnimatedSection>
    </div>
  )
}