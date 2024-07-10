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
    <tr className="border-[0.5px] h-[125px]">
      <th className="p-2">
        <img src={image} alt="" className="w-[100px]" />
      </th>

      <th>
        <h2 className="px-2 text-xs lg:font-normal text-pretty md:text-base">
          {title}
        </h2>
      </th>

      <th>
        {options ? (
          <div className="relative flex items-center justify-between">
            <CartButton
              className="p-1.5 text-sm text-white border bg-blue-primary"
              operator="-"
              id={id}
            />

            <span className="inline mt-auto mb-auto">{qty}</span>

            <CartButton
              className="p-1.5 text-sm text-white border bg-blue-primary"
              operator="+"
              id={id}
            />

            {options && stock === 1 && (
              <span className="absolute text-[0.6rem] text-red-400 top-full inset-0 mt-1 w-full text-center">
                (Último disponible)
              </span>
            )}

            {options && stock > 1 && stock === qty && (
              <span className="absolute text-[0.6rem] text-red-400 top-full inset-0 mt-1 w-full text-center">
                (No hay más en stock)
              </span>
            )}
          </div>
        ) : (
          <div>
            <span className="inline mt-auto mb-auto">{qty}</span>
          </div>
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
