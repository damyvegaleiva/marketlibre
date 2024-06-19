import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { ITEM_URL } from "../config/config";
import { TDataItem } from "../types/types";
import { ItemDetailAdapter } from "../adapters/ItemDetailAdapter";
import Spinner from "../components/spinner/Spinner";
import ItemDetail from "../components/item/details/ItemDetail";

type TItemDetailContainer = {
  data: TDataItem | null;
  isLoading: boolean;
};

const ItemDetailContainer: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading }: TItemDetailContainer = useFetch(ITEM_URL(id));
  const item = ItemDetailAdapter(data);

  if (isLoading) return <Spinner />;

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
