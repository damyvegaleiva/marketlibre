import { useState } from "react";
import { TDataItemPictures } from "../types/types";
import PicturesList from "../components/item/details/pictures/PicturesList";
import PictureDisplay from "../components/item/details/pictures/PictureDisplay";

type ItemDetailPicturesProps = {
  pictures: TDataItemPictures[] | undefined;
};

const ItemDetailPicturesListContainer: React.FC<ItemDetailPicturesProps> = ({
  pictures,
}) => {
  const [picture, setPicture] = useState<string | undefined>(
    pictures && pictures[0].url
  );

  const handleHover = (url: string) => {
    setPicture(url);
  };

  return (
    <>
      <PicturesList pictures={pictures} handleHover={handleHover} />

      <PictureDisplay pictureUrl={picture} />
    </>
  );
};

export default ItemDetailPicturesListContainer;
