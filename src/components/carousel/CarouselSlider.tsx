import { AnimatePresence, motion } from "framer-motion";
import { NavigateFunction, useNavigate } from "react-router-dom";

const variants = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? 2000 : -2000,
      opacity: 0,
    };
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.1 },
    },
  },

  exit: (direction: number) => {
    return {
      x: direction > 0 ? -2000 : 2000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.1 },
      },
    };
  },
};

type CarouselSliderProps = {
  index: number;
  direction: number;
  pictures: { id: number; src: string; alt: string; cat: string }[];
};

const CarouselSlider: React.FC<CarouselSliderProps> = ({
  index,
  direction,
  pictures,
}) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <AnimatePresence initial={true} custom={direction}>
      <motion.img
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        key={pictures[index].id}
        src={pictures[index].src}
        alt={pictures[index].alt}
        custom={direction}
        onClick={() => navigate(`/category/${pictures[index].cat}`)}
        className="absolute object-cover w-[95%] h-full md:w-2/3 lg:max-w-[1600px] hover:cursor-pointer mask-gradient-black-transparent"
      />
    </AnimatePresence>
  );
};

export default CarouselSlider;
