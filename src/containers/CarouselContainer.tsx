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

  const handleRightClick = (index: number) => {
    if (index < pictures.length - 1) {
      setIndex((prev) => prev + 1);
      return;
    }

    setIndex(0);
  };

  const handleLeftClick = (index: number) => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      return;
    }

    setIndex(pictures.length - 1);
  };

  return (
    <Carousel
      handleRightClick={handleRightClick}
      handleLeftClick={handleLeftClick}
      index={index}
      pictures={pictures}
    />
  );
};

export default CarouselContainer;
