import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const variants = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? 2000 : -2000,
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
      x: direction > 0 ? -2000 : 2000,
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

type CarouselSliderProps = {
  index: number;
  direction: number;
  pictures: { src: string; alt: string; cat: string }[];
};

const CarouselSlider: React.FC<CarouselSliderProps> = ({
  index,
  direction,
  pictures,
}) => {
  const navigate = useNavigate();

  return (
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
        className="absolute object-cover w-full h-full rounded-md md:w-2/3 lg:max-w-[1600px] hover:cursor-pointer"
      />
    </AnimatePresence>
  );
};

export default CarouselSlider;
