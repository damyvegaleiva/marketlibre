import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { ITEM_URL } from "../config/config";
import Spinner from "../components/Spinner";
import { TDataItem } from "../types/types";

type TDetailListContainer = {
  data: TDataItem | null;
  isLoading: boolean;
};

const DetailListContainer: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading }: TDetailListContainer = useFetch(ITEM_URL(id));

  if (isLoading) return <Spinner />;

  return (
    <article>
      <h2>{data?.title}</h2>
    </article>
  );
};

export default DetailListContainer;
