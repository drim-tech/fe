import { Button } from "@/components/ui/button";
import AnimatedSection from "@/hooks/animated-section";

export default function ContactUs() {
  return (
    <div className="container flex items-center justify-center gap-6">
      <div className="w-1/2 max-w-96 p-10">
        <AnimatedSection delay={0} direction="left">
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="contact-us" />
        </AnimatedSection>
      </div>
      <div className="flex flex-col gap-6 w-1/2">
        <AnimatedSection delay={200} direction="right">
          <p className="font-halyard font-bold text-2xl tracking-tight">
            Vous avez un projet à réaliser ?
          </p>
        </AnimatedSection>
        <AnimatedSection delay={400} direction="right">
          <p className="tracking-tight text-justify text-xs">
            Tout commence par une idée. Peut-être voulez-vous créer une entreprise. Peut-être voulez-vous donner une nouvelle dimension à un passe-temps. Ou peut-être avez-vous un projet créatif que vous souhaitez partager avec le monde entier.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={600} direction="right">
          <Button
            className="max-w-40 font-sans font-light bg-white text-gray-800 rounded-full text-xs hover:bg-gray-200"
          >
            NOUS CONTACTER
          </Button>
        </AnimatedSection>
      </div>
    </div>
  )
}