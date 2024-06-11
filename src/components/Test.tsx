import { TDataItemPictures } from "../types/types";

type ItemDetailPicturesProps = {
  pictures: TDataItemPictures[] | undefined;
};

const Test: React.FC<ItemDetailPicturesProps> = ({ pictures }) => {
  console.log(pictures);
  return (
    <div className="scroll-container">
      <div className="content">
        {pictures?.map((item, index) => (
          <img src={item.url} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Test;
