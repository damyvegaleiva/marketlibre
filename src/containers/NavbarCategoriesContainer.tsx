import { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import CategoriesList from "../components/categories/CategoriesList";

type NavbarCategoriesContainerProps = {
  handleNavbarClick: () => void;
};

const NavbarCategoriesContainer: React.FC<NavbarCategoriesContainerProps> = ({
  handleNavbarClick,
}) => {
  const [isHidden, setHidden] = useState<boolean>(true);

  const handleClick = () => {
    setHidden(!isHidden);
  };

  return (
    <li className="navbar-categories__container" onClick={handleClick}>
      Categorías <BsChevronCompactDown className={"inline"} />
      <CategoriesList
        isHidden={isHidden}
        handleNavbarClick={handleNavbarClick}
      />
    </li>
  );
};

export default NavbarCategoriesContainer;
