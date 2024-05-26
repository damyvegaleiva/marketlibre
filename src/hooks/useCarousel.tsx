import { useEffect, useState } from "react";

const useCarousel = (picturesLength: number) => {
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    setDirection(1);

    if (!isHovered) {
      const interval = setInterval(() => {
        setIndex((prevIndex) =>
          prevIndex === picturesLength - 1 ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isHovered, picturesLength]);

  const handleClickNext = () => {
    setDirection(1);

    if (index === picturesLength - 1) return setIndex(0);
    return setIndex((prev) => prev + 1);
  };

  const handleClickPrev = () => {
    setDirection(0);

    if (index === 0) return setIndex(picturesLength - 1);
    return setIndex((prev) => prev - 1);
  };

  return { index, direction, setIsHovered, handleClickPrev, handleClickNext };
};

export default useCarousel;
