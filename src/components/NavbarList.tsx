import NavbarCategoriesContainer from "../containers/NavbarCategoriesContainer";

const NavbarList = () => {
  return (
    <ul className="navbar-list">
      <li>Celulares</li>
      <li>Tablet</li>
      <NavbarCategoriesContainer />
    </ul>
  );
};

export default NavbarList;
