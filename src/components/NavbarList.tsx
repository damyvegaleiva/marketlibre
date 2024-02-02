import NavbarCategoriesContainer from "../containers/NavbarCategoriesContainer";

type NavbarListProps = {
  handleNavbarClick: () => void;
};

const NavbarList: React.FC<NavbarListProps> = ({ handleNavbarClick }) => {
  return (
    <ul className="navbar-list">
      <NavbarCategoriesContainer handleNavbarClick={handleNavbarClick} />
      <li onClick={handleNavbarClick}>Ayuda</li>
    </ul>
  );
};

export default NavbarList;
