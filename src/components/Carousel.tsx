import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import CarouselButton from "./CarouselButton";
import CarouselSlider from "./CarouselSlider";

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

  return (
    <div
      className="relative flex items-center justify-center w-[95%] h-[300px] md:w-full xl:h-[450px] mx-auto overflow-hidden"
      onMouseEnter={() => setVisibility((prev) => !prev)}
      onMouseLeave={() => setVisibility((prev) => !prev)}
    >
      <CarouselButton
        handleClick={handleLeftClick}
        index={index}
        visibility={visibility}
        buttonRounded="r"
        buttonSide="left"
        svg={<FaAngleLeft className="ml-8" />}
      />

      <CarouselSlider index={index} pictures={pictures} direction={direction} />

      <CarouselButton
        handleClick={handleRightClick}
        index={index}
        visibility={visibility}
        buttonRounded="l"
        buttonSide="right"
        svg={<FaAngleRight className="ml-3" />}
      />
    </div>
  );
};

export default Carousel;
