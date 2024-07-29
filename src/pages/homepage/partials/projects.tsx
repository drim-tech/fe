import { Button } from "@/components/ui/button";
import AnimatedSection from "@/hooks/animated-section";
import { useEffect, useState } from "react";

export default function Projects() {
  const images = [
    { id: 1, src: "https://swiperjs.com/demos/images/nature-1.jpg", alt: "cabanon 1", category: "cabanon" },
    { id: 2, src: "https://swiperjs.com/demos/images/nature-2.jpg", alt: "extension de toit 1", category: "extension de toit" },
    { id: 3, src: "https://swiperjs.com/demos/images/nature-3.jpg", alt: "terrace panoramique 1", category: "terrace panoramique" },
    { id: 4, src: "https://swiperjs.com/demos/images/nature-4.jpg", alt: "maison passive 1", category: "maison passive" },
    { id: 5, src: "https://swiperjs.com/demos/images/nature-5.jpg", alt: "toit en bardage 1", category: "toit en bardage" },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredImages, setFilteredImages] = useState(images);
  const [animationClass, setAnimationClass] = useState<string>('translate-y-10 opacity-0');


  const categories = [
    'all', 'cabanon', 'extension de toit', 'terrace panoramique', 'maison passive', 'toit en bardage',
  ];
  
  useEffect(() => {
    const newFilteredImages = selectedCategory === 'all'
      ? images : images.filter(image => image.category === selectedCategory);
    
    // Trigger re-render with animation
    setFilteredImages([]);
    setTimeout(() => {
      setFilteredImages(newFilteredImages);
    }, 0);

    // Set animation class for new entries
    setAnimationClass('animate-fadeInUp');
  }, [selectedCategory]);

  return (
    <div className="container flex flex-col mx-auto py-24 gap-4">
      <AnimatedSection delay={0}>
        <span className="flex justify-center font-halyard font-bold tracking-tighter text-[48px]">
          Nos Projets
        </span>
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <div className="flex justify-center mb-4">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 mx-2 rounded hover:text-white ${
                selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection delay={400}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map(({ id, src, alt, category }, index) => (
            <AnimatedSection delay={index * 100}>
              <div key={id} className="relative overflow-hidden rounded-lg shadow-lg">
                <img src={src} alt={alt} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent">
                  <div className="absolute bottom-0 w-full text-white p-2 text-center">
                    <span className="font-halyard font-bold uppercase">{category}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}