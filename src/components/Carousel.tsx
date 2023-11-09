import { useNavigate } from "react-router-dom";

type CarouselProps = {
  handleRightClick: (index: number) => void;
  handleLeftClick: (index: number) => void;
  index: number;
  pictures: { src: string; alt: string; cat: string }[];
};

const Carousel: React.FC<CarouselProps> = ({
  handleLeftClick,
  handleRightClick,
  index,
  pictures,
}) => {
  const navigate = useNavigate();

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
