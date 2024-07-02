import { TDataItemPictures } from "../../../../types/types";

type PicturesListProps = {
  pictures: TDataItemPictures[] | undefined;
  handleHover: (pic: string) => void;
};

const PicturesList: React.FC<PicturesListProps> = ({
  pictures,
  handleHover,
}) => {
  return (
    <div className="order-2 scroll-container">
      <div className="content">
        {pictures?.map((pic, index) => (
          <div
            className="image-wrapper"
            key={index}
            onMouseEnter={() => handleHover(pic.url)}
          >
            <img src={pic.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PicturesList;
