import { NavigateFunction, useNavigate } from "react-router-dom";
import { CATEGORIES_LIST_URL } from "../../config/config";
import useFetch from "../../hooks/useFetch";
import { TCategoryData } from "../../types/types";

type TCategoriesListProps = {
  isHidden: boolean;
  handleNavbarClick: () => void;
};

type TCategoriesList = {
  data: TCategoryData[] | null;
};

const CategoriesList = ({
  isHidden,
  handleNavbarClick,
}: TCategoriesListProps) => {
  const { data: categories }: TCategoriesList = useFetch(CATEGORIES_LIST_URL);
  const navigate: NavigateFunction = useNavigate();

  const combinedClickHandler = (itemId: string) => {
    handleNavbarClick();
    navigate(`/category/${itemId}`);
  };

  return (
    <ul className="navbar-categories__list" hidden={isHidden}>
      {categories?.map((item, index) => (
        <li key={index} onClick={() => combinedClickHandler(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
