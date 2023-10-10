import { useEffect, useState } from "react";

const ItemDetailPictures = ({ pictures }) => {
  const [picture, setPicture] = useState<string | undefined>(undefined);

  useEffect(() => {
    setPicture(pictures && pictures[0].url);
    return;
  }, [pictures]);

  const handleHover = (url: string) => {
    setPicture(url);
  };

  return (
    <>
      <div className="flex flex-col self-start order-1 gap-y-2">
        {pictures?.map((pic) => (
          <img
            key={pic.id}
            src={pic.url}
            className="object-contain p-0.5 w-10 h-10 bg-white border-[0.3px] rounded-sm border-slate-500 hover:cursor-pointer"
            onMouseEnter={() => handleHover(pic.url)}
          />
        ))}
      </div>

      <figure className="self-center order-2 bg-white h-96 w-80">
        <img src={picture} alt="" className="object-contain w-auto h-full" />
      </figure>
    </>
  );
};

export default ItemDetailPictures;
