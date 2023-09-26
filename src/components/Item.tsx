import { Link } from "react-router-dom";

type TItemProps = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
};

const Item = ({ id, title, thumbnail, price }: TItemProps) => {
  return (
    <article className="flex flex-row border bg-[#FFFFFF] rounded-sm w-[70%] lg:w-[30%] pl-2 pr-10 py-5 m-auto">
      <img
        src={thumbnail}
        alt="Imagen del producto."
        className="w-[35%] lg:w-[20%]"
      />
      <div className="pl-5">
        <h2 className="text-lg">
          <Link to={`/item/${id}`}>{title}</Link>
        </h2>
        <p className="mt-2 text-2xl">$ {price}</p>
      </div>
    </article>
  );
};

export default Item;
