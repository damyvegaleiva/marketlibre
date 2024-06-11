import { useState } from "react";
import { TDataItemPictures } from "../types/types";

type ItemDetailPicturesProps = {
  pictures: TDataItemPictures[] | undefined;
};

const ItemDetailPictures: React.FC<ItemDetailPicturesProps> = ({
  pictures,
}) => {
  const [picture, setPicture] = useState<string | undefined>(
    pictures && pictures[0].url
  );

  const handleHover = (url: string) => {
    setPicture(url);
  };

  return (
    <div className="flex flex-col w-[90%] m-auto h-full gap-y-5 lg:flex-row lg:max-h-[500px] lg:gap-x-3 lg:max-w-[600px] overflow-hidden">
      <figure className="order-1 w-[90%] h-96 m-auto lg:order-2">
        <img src={picture} alt="" className="object-contain w-full h-full" />
      </figure>

      <div className="item-detail__scroll-bar flex self-start flex-row flex-nowrap order-2 m-auto lg:overflow-x-hidden gap-x-2 lg:flex-col lg:max-h-[375px] lg:gap-y-3 lg:order-1">
        {pictures?.map((pic) => (
          <div
            key={pic.id}
            className="w-16 h-16 border-[0.5px] border-slate-400 m-auto p-1 lg:hover:cursor-pointer lg:w-[40px] lg:h-[40px]"
          >
            <img
              src={pic.url}
              className="object-contain w-full h-full"
              onMouseEnter={() => handleHover(pic.url)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemDetailPictures;
