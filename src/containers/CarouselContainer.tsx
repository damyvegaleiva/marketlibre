import { useState } from "react";
import Carousel from "../components/Carousel";

const pictures = [
  { src: "electro.webp", alt: "Electrodomésticos varios.", cat: "MLA5726" },
  {
    src: "gaming.webp",
    alt: "Teclado, auriculares y 2 controles.",
    cat: "MLA1144",
  },
  {
    src: "herramientas.jpg",
    alt: "Selección variada de herramientas sobre una mesa de madera.",
    cat: "MLA407134",
  },
  {
    src: "autos.avif",
    alt: "Autos varios en forma horizontal.",
    cat: "MLA1743",
  },
];

const CarouselContainer: React.FC = () => {
  const [index, setIndex] = useState<number>(
    Math.floor(Math.random() * pictures.length)
  );

  const [effect, setEffect] = useState<string>("opacity-1");

  const handleRightClick = (index: number) => {
    setEffect("opacity-0");

    setTimeout(() => {
      setEffect("opacity-1");

      if (index < pictures.length - 1) {
        setIndex((prev) => prev + 1);
        return;
      }

      setIndex(0);
    }, 250);
  };

  const handleLeftClick = (index: number) => {
    setEffect("opacity-0");

    setTimeout(() => {
      setEffect("opacity-1");

      if (index > 0) {
        setIndex((prev) => prev - 1);
        return;
      }

      setIndex(pictures.length - 1);
    }, 250);
  };

  return (
    <Carousel
      handleRightClick={handleRightClick}
      handleLeftClick={handleLeftClick}
      index={index}
      pictures={pictures}
      effect={effect}
    />
  );
};

export default CarouselContainer;
