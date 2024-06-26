import { Link, useNavigate } from "react-router-dom";

type TItemProps = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
};

const Item = ({ id, title, thumbnail, price }: TItemProps) => {
  const navigate = useNavigate();

  return (
    <article
      className="flex flex-row border bg-[#FFFFFF] rounded-sm w-full sm:w-[75%] md:w-[60%] lg:max-w-[800px] py-5 m-auto hover:cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
      onClick={() => navigate(`/item/${id}`)}
    >
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
