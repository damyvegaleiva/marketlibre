import CartButton from "./CartButton";

type CartItem = {
  id: string;
  image: string;
  price: number;
  qty: number;
  stock: number;
  title: string;
  options: boolean;
};

const CartItem: React.FC<CartItem> = ({
  title,
  qty,
  image,
  price,
  id,
  options,
}) => {
  return (
    <tr className="border-[0.5px]">
      <th className="p-2">
        <img src={image} alt="" className="w-[100px]" />
      </th>

      <th>
        <h2 className="px-2 text-xs lg:font-normal text-pretty md:text-base">
          {title}
        </h2>
      </th>

      {options && (
        <th>
          <div className="flex justify-center">
            <CartButton
              className="p-1.5 text-sm text-white border bg-blue-primary"
              operator="-"
              id={id}
            />

            <span className="inline p-2">{qty}</span>

            <CartButton
              className="p-1.5 text-sm text-white border bg-blue-primary"
              operator="+"
              id={id}
            />
          </div>
        </th>
      )}

      <th>
        <span className="px-3 text-sm md:text-base">${price}</span>
      </th>

      {options && (
        <th className="pr-2">
          <CartButton className="" operator="x" id={id} />
        </th>
      )}
    </tr>
  );
};

export default CartItem;
