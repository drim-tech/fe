import { Button } from "@/components/ui/button";
import { FaInstagram, FaMapMarkedAlt, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import AnimatedSection from "@/hooks/animated-section";

export default function Footer() {
  return (
    <div className="flex items-center justify-between gap-10 py-24 px-96">
      <AnimatedSection delay={0} direction="left">
        <div className="flex flex-col items-center gap-5">
          <img src="navbar-logo.png" alt="logo" width={200} />
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
      <AnimatedSection delay={0} direction="right">
        <div className="flex flex-col text-white gap-5 text-xl">
          <div className="flex items-center gap-6">
            <FaMapMarkedAlt />
            <p>99 Rue De Reuilly Paris, 75012</p>
          </div>
          <div className="flex items-center gap-6">
            <IoMdCall />
            <p>+33 6 35 29 24 08</p>
          </div>
          <div className="flex items-center gap-6">
            <MdEmail />
            <p>contact@drimtech.fr</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}