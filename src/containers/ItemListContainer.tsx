import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { TDataSearch } from "../types/types";
import { SEARCH_URL } from "../config/config";
import ItemList from "../components/ItemList";
import Spinner from "../components/Spinner";

type TItemListContainer = {
  data: TDataSearch | null;
  isLoading: boolean;
};

const ItemListContainer: React.FC = () => {
  const { value } = useParams();
  const { data, isLoading }: TItemListContainer = useFetch(SEARCH_URL(value));

  if (isLoading) return <Spinner />;

  return <ItemList fetchedData={data} />;
};

export default ItemListContainer;
