import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { ITEM_URL } from "../config/config";
import Spinner from "../components/Spinner";
import { TDataItem } from "../types/types";
import { ItemDetailAdapter } from "../adapters/ItemDetailAdapter";
import ItemDetail from "../components/ItemDetail";

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
