import { TDataSearch } from "../../../types/types";
import { ItemListAdapter } from "../../../adapters/ItemListAdapter";
import ItemContainer from "../../../containers/ItemContainer";

type TItemListProps = {
  fetchedData: TDataSearch | null;
};

const ItemList: React.FC<TItemListProps> = ({ fetchedData }) => {
  const data = ItemListAdapter(fetchedData);

  return (
    <div className="flex flex-col items-stretch justify-center m-auto w-[100%]">
      {data?.map((item) => (
        <ItemContainer key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
