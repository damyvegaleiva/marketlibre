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
        <Link to={`/item/${item.id}`}>{item.title}</Link>
      </h2>

      <p className="mt-2 text-lg lg:text-2xl">$ {item.price}</p>

      <ItemInfoButton {...item} />
    </div>
  );
};

export default ItemInfo;
