import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const Carousel = () => {
  const [index, setIndex] = useState<number>(
    Math.floor(Math.random() * pictures.length)
  );

  const navigate = useNavigate();

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
    <div className="flex items-center justify-center gap-3 mt-10">
      <button
        className="w-12 h-12 text-xl transition-all duration-500 bg-gray-200 rounded-full hover:bg-gray-300 "
        onClick={() => handleLeftClick(index)}
      >
        &lt;
      </button>

      <img
        src={`./images/${pictures[index].src}`}
        alt={pictures[index].alt}
        className="w-[1000px] h-[550px] object-cover hover:cursor-pointer rounded-md"
        onClick={() => navigate(`/category/${pictures[index].cat}`)}
      />

      <button
        className="w-12 h-12 text-xl transition-all duration-500 bg-gray-200 rounded-full hover:bg-gray-300 "
        onClick={() => handleRightClick(index)}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
