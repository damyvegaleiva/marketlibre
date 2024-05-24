type CarouselButtonProps = {
  handleClick: (index: number) => void;
  index: number;
  visibility: boolean;
  sideClass: string;
  svg: React.ReactNode;
};

const CarouselButton: React.FC<CarouselButtonProps> = ({
  handleClick,
  index,
  visibility,
  sideClass,
  svg,
}) => {
  return (
    <button
      className={
        `absolute w-10 h-14 md:w-16 md:h-[65px] text-xl transition-all hover:shadow-xl translate-y-[-50%] text-blue-primary duration-500 bg-white top-[50%] z-10 ${sideClass} ` +
        (visibility ? "md:visible" : "md:hidden ")
      }
      onClick={() => handleClick(index)}
    >
      {svg}
    </button>
  );
};

export default CarouselButton;
