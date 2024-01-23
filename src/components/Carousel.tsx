import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

type CarouselProps = {
  handleRightClick: (index: number) => void;
  handleLeftClick: (index: number) => void;
  index: number;
  pictures: { src: string; alt: string; cat: string }[];
  direction: number;
};

const Carousel: React.FC<CarouselProps> = ({
  handleLeftClick,
  handleRightClick,
  index,
  pictures,
  direction,
}) => {
  const navigate = useNavigate();

  const variants = {
    initial: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },

    animate: {
      x: [0, 100, 0],
      opacity: 1,
      transition: {
        x: {
          type: "spring",
          stiffness: 1,
          damping: 30,
        },
        opacity: { duration: 0.5 },
      },
    },

    exit: (direction: number) => {
      return {
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        transition: {
          x: {
            type: "spring",
            stiffness: 300,
            damping: 30,
          },
          opacity: { duration: 0.5 },
        },
      };
    },
  };

  return (
    <div className="relative flex items-center justify-center w-2/3 md:w-1/2 max-w-[1200px] h-[500px] gap-3 mx-auto mt-4 overflow-hidden">
      <button
        className="absolute w-11 h-20 rounded-r-full text-xl transition-all hover:shadow-xl translate-y-[-50%]  text-black font-bold duration-500  bg-white/70 opacity-70 top-[50%] hover:opacity-100 left-0 z-10 "
        onClick={() => handleLeftClick(index)}
      >
        &lt;
      </button>

      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={index}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={direction}
          src={`./images/${pictures[index].src}`}
          alt={pictures[index].alt}
          onClick={() => navigate(`/category/${pictures[index].cat}`)}
          className={`absolute transition-all object-cover hover:cursor-pointer rounded-md top-0 left-0 w-full h-full`}
        />
      </AnimatePresence>

      <button
        className="absolute w-11 h-20 rounded-l-full text-xl transition-all hover:shadow-xl translate-y-[-50%]  text-black font-bold duration-500  bg-white/70 opacity-70 top-[50%] hover:opacity-100 right-0 z-10 "
        onClick={() => handleRightClick(index)}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
