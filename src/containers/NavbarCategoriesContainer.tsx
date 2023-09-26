import { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import CategoriesList from "../components/CategoriesList";

const NavbarCategoriesContainer = () => {
  const [isHidden, setHidden] = useState<boolean>(true);

  const handleClick = () => {
    setHidden(!isHidden);
  };

  return (
    <li onClick={handleClick}>
      Mas Categorías <BsChevronCompactDown className={"inline"} />
      <CategoriesList isHidden={isHidden} />
    </li>
  );
};

export default NavbarCategoriesContainer;
