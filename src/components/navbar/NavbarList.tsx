import NavbarCategoriesContainer from "../../containers/NavbarCategoriesContainer";

type NavbarListProps = {
  handleNavbarClick: () => void;
  className: string;
};

const NavbarList: React.FC<NavbarListProps> = ({
  handleNavbarClick,
  className,
}) => {
  return (
    <ul className={`navbar-list ${className}`}>
      <NavbarCategoriesContainer handleNavbarClick={handleNavbarClick} />
      <li onClick={handleNavbarClick}>Ayuda</li>
    </ul>
  );
};

export default NavbarList;
