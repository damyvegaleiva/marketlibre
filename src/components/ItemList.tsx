import { ItemListAdapter } from "../adapters/ItemListAdapter";
import { DataType } from "../types/types";
import Item from "./Item";

type TItemListProps = {
  fetchedData: DataType | null;
};

const ItemList: React.FC<TItemListProps> = ({ fetchedData }) => {
  const data = ItemListAdapter(fetchedData);

  return (
    <div className="flex flex-col items-stretch justify-center m-auto gap-0.5 w-[100%]">
      {data?.map((item, index) => (
        <Item key={item} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
