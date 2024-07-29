import { Button } from "@/components/ui/button";
import AnimatedSection from "@/hooks/animated-section";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-8 text-white">
      <AnimatedSection delay={0}>
        <div className="flex flex-col items-center">
          <span className="font-halyard font-bold tracking-tighter text-[96px]">CONFIEZ VOS</span>
          <span className="font-halyard font-bold tracking-tighter text-[48px]">DEPANNAGES ET TRAVAUX</span>
          <span className="font-halyard font-bold tracking-tighter text-[48px]">A DES PROFESSIONNELS !</span>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <Button className="rounded-full bg-white text-gray-800">
          En savoir plus
        </Button>
      </AnimatedSection>
    </div>
  )
}