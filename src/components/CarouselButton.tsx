type CarouselButtonProps = {
  handleClick: (index: number) => void;
  index: number;
  visibility: boolean;
  buttonSide: string;
  buttonRounded: string;
  svg: React.ReactNode;
};

const CarouselButton: React.FC<CarouselButtonProps> = ({
  handleClick,
  index,
  visibility,
  buttonSide,
  buttonRounded,
  svg,
}) => {
  return (
    <button
      className={
        `absolute w-8 h-14 md:w-16 md:h-[65px] rounded-${buttonRounded}-full text-xl transition-all hover:shadow-xl translate-y-[-50%] text-blue-primary duration-500 bg-white top-[50%] ${buttonSide}-0 z-10 ` +
        (visibility ? "md:visible" : "md:hidden")
      }
      onClick={() => handleClick(index)}
    >
      {svg}
    </button>
  );
};

export default CarouselButton;
