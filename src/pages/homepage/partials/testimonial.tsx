// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import AnimatedSection from '@/hooks/animated-section';

export default function Testimonial() {
  const testi = [
    { id: 1,
      text: "Travailler à domicile depuis mon cabanon est un véritable plaisir. L'attention portée par l'équipe aux détails se retrouve dans le bureau et les armoires fabriqués sur mesure. J'ai hâte de travailler avec eux lorsqu'il s'agira de construire l'extension de notre maison.",
      name: "Keith Finley" },
    { id: 2,
      text: "L'équipe s'est assurée que notre maison soit construite conformément aux normes écoénergétiques de notre ville. Nous adorons notre nouvelle maison !",
      name: "Emmett Marsh" },
    { id: 3,
      text: "Notre nouvelle terrasse est magnifiquement conçue. Elle nous a offert l'espace extérieur dont nous avions besoin sans dépasser notre budget. Nous ne pouvons pas imaginer comment nous vivions sans elle depuis si longtemps.",
      name: "Lindsey Beumer" },
  ]
  return (
    <div className="container flex flex-col items-center justify-center gap-10 py-48">
      <AnimatedSection delay={0}>
        <span className="font-halyard font-bold tracking-tighter text-[48px]">
          Ce que disent nos clients
        </span>
      </AnimatedSection>
      <Swiper navigation={true} modules={[Navigation]} className="w-full h-full">
        {
          testi.map(({ id, text, name }) => (
            <SwiperSlide key={id} className="px-96 text-center flex justify-center items-center">
              <p className='font-halyard font-bold mb-10'>{text}</p>
              <p className='font-halyard'>{name}</p>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}
