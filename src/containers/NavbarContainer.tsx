import CartWidget from "../components/CartWidget";
import NavbarList from "../components/NavbarList";
import NavbarLogo from "../components/NavbarLogo";
import NavbarSearch from "../components/NavbarSearch";

const NavbarContainer: React.FC = () => {
  return (
    <header className="bg-yellow-primary">
      <nav className="navbar-container">
        <NavbarLogo
          url="/"
          src="./images/logo.png"
          alt="Mercadolibre logo"
          componentClass="navbar-logo w-1/2"
        />

        <NavbarSearch />

        <NavbarList />

        <CartWidget />

        <NavbarLogo
          url="https://www.disneyplus.com/"
          src="./images/disney.webp"
          alt="Disney Plus logo"
          componentClass="navbar-disney"
        />
      </nav>
    </header>
  );
};

export default NavbarContainer;
