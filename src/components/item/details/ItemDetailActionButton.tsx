import { motion } from "framer-motion";

type ItemDetailActionButtonProps = {
  className: string;
  functionToDispatch?: () => void;
  text: string;
};

const ItemDetailActionButton: React.FC<ItemDetailActionButtonProps> = ({
  className,
  functionToDispatch,
  text,
}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden px-8 w-[75%] py-2 mx-auto text-center text-white rounded-md bg-blue-primary hover:cursor-pointer whitespace-nowrap hover:bg-dark-blue ${className}`}
      onClick={functionToDispatch}
    >
      <motion.button
        variants={{
          initial: { y: 0 },
          hovered: { y: "-150%" },
        }}
      >
        {text}
      </motion.button>

      <motion.button
        className="absolute inset-0"
        variants={{
          initial: { y: "150%" },
          hovered: { y: 0 },
        }}
      >
        {text}
      </motion.button>
    </motion.div>
  );
};

export default ItemDetailActionButton;
