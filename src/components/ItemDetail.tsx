import { useEffect, useState } from "react";
import { TDataItem } from "../types/types";

type TItemDetail = {
  item: TDataItem | undefined;
};

const ItemDetail: React.FC<TItemDetail> = ({ item }) => {
  const [picture, setPicture] = useState("");

  useEffect(() => {
    setPicture(item?.pictures[0].url as string);

    return;
  }, [item]);

  const handleHover = (url: string) => {
    setPicture(url);
  };

  return (
    <article className="flex flex-row items-center justify-center w-2/3 m-auto text-center bg-white">
      <div>
        <h2>{item?.title}</h2>
        <p>$ {item?.price}</p>

        {/* {item?.attributes.map((attr) => (
          <p>
            {attr.name}: {attr.value_name}
          </p>
        ))} */}
      </div>

      <div className="flex flex-col gap-y-2">
        {item?.pictures.map((item) => (
          <img
            key={item.id}
            src={item.url}
            className="object-contain p-0.5 w-10 h-10 bg-white border-[0.3px] rounded-sm border-slate-500 hover:cursor-pointer"
            onMouseEnter={() => handleHover(item.url)}
          />
        ))}
      </div>

      <figure className="bg-white h-96 w-80">
        <img src={picture} alt="" className="object-contain w-auto h-full" />
      </figure>
    </article>
  );
};

export default ItemDetail;
