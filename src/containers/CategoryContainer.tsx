import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { CATEGORY_SEARCH_URL } from "../config/config";
import ItemList from "../components/item/list/ItemList";
import Spinner from "../components/spinner/Spinner";
import { TDataSearch } from "../types/types";

type TCategoryContainer = {
  data: TDataSearch | null;
  isLoading: boolean;
};

const CategoryContainer = () => {
  const { id } = useParams();
  const { data, isLoading }: TCategoryContainer = useFetch(
    CATEGORY_SEARCH_URL(id)
  );

  if (isLoading) return <Spinner />;

  return <ItemList fetchedData={data} />;
};

export default CategoryContainer;
