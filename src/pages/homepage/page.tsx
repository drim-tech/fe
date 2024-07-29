import Nav from "./partials/nav";
import useMediaQuery from "@/hooks/use-media-query";
import Slides from "./partials/slides";
import Hero from "./partials/hero";
import Projects from "./partials/projects";
import ContactUs from "./partials/contact-us";
import OurTeam from "./partials/our-team";
import Testimonial from "./partials/testimonial";
import Footer from "./partials/footer";

export default function HomePage() {
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  return isDesktop ?
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <section id="home" className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <Hero />
        </section>
        <section id="slides" className="h-screen bg-gray-900 text-white">
          <Slides />
        </section>
        <section id="gallery" className="flex justify-center mb-4">
          <Projects />
        </section>
        <section id="contact-us" className="bg-gray-900 text-white">
          <ContactUs />
        </section>
        <section id="our-team" className="mb-4">
          <OurTeam />
        </section>
        <section id="testimonial" className="bg-gray-900 min-h-96 text-white flex items-center justify-center">
          <Testimonial />
        </section>
        <section id="footer" className="bg-black">
          <Footer />
        </section>
      </div>
    </div>
    :
    <div>Mobile</div>;
}
