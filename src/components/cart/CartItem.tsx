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
  stock,
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

      <th>
        <div className="flex justify-between">
          {options && (
            <CartButton
              className="p-1.5 text-sm text-white border bg-blue-primary"
              operator="-"
              id={id}
            />
          )}

          <span className="inline mt-auto mb-auto">{qty}</span>
          {options && (
            <CartButton
              className="p-1.5 text-sm text-white border bg-blue-primary"
              operator="+"
              id={id}
            />
          )}
        </div>
        {stock === 1 && (
          <span className="text-xs text-red-400">(Último disponible)</span>
        )}

        {stock > 1 && qty === stock ? (
          <span className="text-xs text-red-400">(No hay mas en stock)</span>
        ) : (
          <span></span>
        )}
      </th>

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
