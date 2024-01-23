import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
  const [visibility, setVisibility] = useState<boolean>(false);
  const navigate = useNavigate();

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

  return (
    <div
      className="relative flex items-center justify-center w-[95%] h-[300px] md:w-full xl:h-[450px] mx-auto overflow-hidden"
      onMouseEnter={() => setVisibility((prev) => !prev)}
      onMouseLeave={() => setVisibility((prev) => !prev)}
    >
      <button
        className={
          "absolute w-8 h-14 md:w-16 md:h-[66px] rounded-r-full text-xl transition-all hover:shadow-xl translate-y-[-50%] text-blue-primary font-bold duration-500 bg-white top-[50%] left-0 z-10 " +
          (visibility ? "md:visible" : "md:hidden")
        }
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
          className="absolute object-cover w-full h-full rounded-md md:w-2/3 lg:max-w-[1600px] hover:cursor-pointer"
        />
      </AnimatePresence>

      <button
        className={
          "absolute w-8 h-14 md:w-16 md:h-[66px] rounded-l-full text-xl transition-all hover:shadow-xl translate-y-[-50%] text-blue-primary font-bold duration-500 bg-white top-[50%] right-0 z-10 " +
          (visibility ? "md:visible" : "md:hidden")
        }
        onClick={() => handleRightClick(index)}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
