import { NavigateFunction, useNavigate } from "react-router-dom";
import { CATEGORIES_URL } from "../config/config";
import useFetch from "../hooks/useFetch";
import { TCategoryData } from "../types/types";

type TCategoriesListProps = {
  isHidden: boolean;
};

type TCategoriesList = {
  data: TCategoryData[] | null;
};

const CategoriesList = ({ isHidden }: TCategoriesListProps) => {
  const { data }: TCategoriesList = useFetch(CATEGORIES_URL);
  const navigate: NavigateFunction = useNavigate();

  return (
    <ul className={"navbar-categories-list"} hidden={isHidden}>
      {data?.map((item, index) => (
        <li key={index} onClick={() => navigate(`/categories/${item.id}`)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
