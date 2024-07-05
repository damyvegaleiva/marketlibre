import useFetch from "../hooks/useFetch";
import { useParams, useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();

  const itemQueryParams = {
    stock: searchParams.get("qty") ? +searchParams.get("qty")! : 1,
    price: searchParams.get("price") ? +searchParams.get("price")! : undefined,
    og_price: searchParams.get("og_price")
      ? +searchParams.get("og_price")!
      : undefined,
  };

  if (isLoading) return <Spinner />;

  return <ItemDetail item={item} itemQueryParams={itemQueryParams} />;
};

export default ItemDetailContainer;
