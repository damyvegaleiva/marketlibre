import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { TDataSearch } from "../types/types";
import { ITEM_SEARCH_URL } from "../config/config";
import ItemList from "../components/item/list/ItemList";
import Spinner from "../components/spinner/Spinner";

type TItemListContainer = {
  data: TDataSearch | null;
  isLoading: boolean;
};

const ItemListContainer: React.FC = () => {
  const { value } = useParams();
  const { data, isLoading }: TItemListContainer = useFetch(
    ITEM_SEARCH_URL(value)
  );

  if (isLoading) return <Spinner />;

  return <ItemList fetchedData={data} />;
};

export default ItemListContainer;
