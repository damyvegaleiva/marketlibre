import useCarousel from "../hooks/useCarousel";
import Carousel from "../components/carousel/Carousel";

const pictures = [
  {
    id: 1,
    src: "./images/electro.webp",
    alt: "Electrodomésticos varios.",
    cat: "MLA5726",
  },
  {
    id: 2,
    src: "./images/gaming.webp",
    alt: "Teclado, auriculares y 2 controles.",
    cat: "MLA1144",
  },
  {
    id: 3,
    src: "./images/instruments.jpg",
    alt: "Instrumentos varios.",
    cat: "MLA1182",
  },
  {
    id: 4,
    src: "./images/autos.avif",
    alt: "Autos varios en forma horizontal.",
    cat: "MLA1743",
  },
];

const CarouselContainer: React.FC = () => {
  const { index, direction, setIsHovered, handleClickNext, handleClickPrev } =
    useCarousel(pictures.length);

  return (
    <Carousel
      index={index}
      direction={direction}
      setIsHovered={setIsHovered}
      handleClickNext={handleClickNext}
      handleClickPrev={handleClickPrev}
      pictures={pictures}
    />
  );
};

export default CarouselContainer;
