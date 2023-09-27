import { ItemListAdapter } from "../adapters/ItemListAdapter";
import { TDataSearch } from "../types/types";
import Item from "./Item";

type TItemListProps = {
  fetchedData: TDataSearch | null;
};

const ItemList: React.FC<TItemListProps> = ({ fetchedData }) => {
  const data = ItemListAdapter(fetchedData);

  return (
    <div className="flex flex-col items-stretch justify-center m-auto w-[100%]">
      {data?.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
