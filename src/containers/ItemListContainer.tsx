import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { SEARCH_URL } from "../config/config";
import ItemList from "../components/ItemList";
import { DataType } from "../types/types";

const ItemListContainer: React.FC = () => {
  const { value } = useParams();
  const { data, isLoading }: { data: DataType | null; isLoading: boolean } =
    useFetch(SEARCH_URL(value));

  if (isLoading) return <h1>...LOADING</h1>;

  return <ItemList fetchedData={data} />;
};

export default ItemListContainer;
