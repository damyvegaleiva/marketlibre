type CartActionButtonProps = {
  text: string;
  className: string;
  functionToDispatch: () => void;
};

const CartActionButton: React.FC<CartActionButtonProps> = ({
  text,
  className,
  functionToDispatch,
}) => {
  return (
    <button className={className} onClick={functionToDispatch}>
      {text}
    </button>
  );
};

export default CartActionButton;
