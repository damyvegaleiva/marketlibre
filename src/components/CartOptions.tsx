type CartOptionsButtonProps = {
  text: string;
  className: string;
  functionToDispatch: () => void;
};

const CartOptionsButton: React.FC<CartOptionsButtonProps> = ({
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

export default CartOptionsButton;
