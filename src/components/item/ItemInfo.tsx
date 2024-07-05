import { Link } from "react-router-dom";
import ItemInfoButton from "./ItemInfoButton";
import { TDataResults } from "../../types/types";

type TItemInfo = {
  item: TDataResults;
};

const ItemInfo: React.FC<TItemInfo> = ({ item }) => {
  return (
    <div className="flex flex-col items-start justify-between px-4">
      <h2 className="text-sm lg:text-lg">
        <Link
          to={`/item/${item.id}?qty=${item.available_quantity}&price=${item.price}&og_price=${item.original_price}`}
        >
          {item.title}
        </Link>
      </h2>

      <div className="my-5">
        {item?.original_price && (
          <span className="text-xs text-gray-400 line-through">
            ${item.original_price}
          </span>
        )}
        <p className="text-lg lg:text-2xl">$ {item.price}</p>
      </div>

      <ItemInfoButton item={item} />
    </div>
  );
};

export default ItemInfo;
