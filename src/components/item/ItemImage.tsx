import { useNavigate } from "react-router-dom";

type ItemImageProps = {
  thumbnail: string;
  id: string;
};

const ItemImage: React.FC<ItemImageProps> = ({ thumbnail, id }) => {
  const navigate = useNavigate();
  return (
    <img
      src={thumbnail}
      alt="Imagen del producto."
      className="w-[35%] lg:w-[20%] hover:cursor-pointer"
      onClick={() => navigate(`/item/${id}`)}
    />
  );
};

export default ItemImage;
