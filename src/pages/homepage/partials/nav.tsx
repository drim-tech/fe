import { Button } from "@/components/ui/button";
import AnimatedSection from "@/hooks/animated-section";
import { useEffect, useState } from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Nav() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full items-center p-4 transition-colors duration-300 ${scrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'} z-50`}>
      <div className="container flex justify-between items-center">
        <AnimatedSection delay={0} direction="left">
          <div className="flex items-center gap-6">
            <img src="navbar-logo.png" alt="logo" width={200} />
            <ul className="flex justify-center space-x-8 text-white">
                <li>
                  <a href="#boutique">Boutique</a>
                </li>
                <li>
                  <a href="#demandez">Demandez un devis</a>
                </li>
            </ul>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0} direction="right">
          <div className="flex items-center gap-6">
            <ul className="flex justify-center space-x-8 text-white">
              <li>
                <a href="#connexion" >Connexion</a>
              </li>
            </ul>
            <div className="flex space-x-8 text-white">
              <FaInstagram className="text-xl" />
              <FaYoutube className="text-xl" />
              <FaTiktok className="text-xl" />
            </div>
            <Button
              className="font-sans font-light bg-white text-gray-800 rounded-full text-xs hover:bg-gray-200"
            >
              NOUS CONTACTER
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </nav>
  );
}