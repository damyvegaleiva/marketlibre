import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import CarouselButton from "./CarouselButton";
import CarouselSlider from "./CarouselSlider";

type CarouselProps = {
  index: number;
  direction: number;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
  handleClickNext: () => void;
  handleClickPrev: () => void;
  pictures: { id: number; src: string; alt: string; cat: string }[];
};

const Carousel: React.FC<CarouselProps> = ({
  index,
  direction,
  setIsHovered,
  handleClickNext,
  handleClickPrev,
  pictures,
}) => {
  const [visibility, setVisibility] = useState<boolean>(false);

  return (
    <div
      className="relative flex items-center justify-center w-full h-[300px] md:w-full xl:h-[450px] mx-auto overflow-hidden"
      onMouseEnter={() => {
        setVisibility(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setVisibility(false);
        setIsHovered(false);
      }}
    >
      <CarouselButton
        handleClick={handleClickPrev}
        sideClass="left-0 rounded-r-full"
        visibility={visibility}
        svg={<FaAngleLeft className="md:ml-8" />}
      />

      <CarouselSlider index={index} pictures={pictures} direction={direction} />

      <CarouselButton
        handleClick={handleClickNext}
        visibility={visibility}
        sideClass="right-0 rounded-l-full"
        svg={<FaAngleRight className="ml-3" />}
      />
    </div>
  );
};

export default Carousel;
