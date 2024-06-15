import { useState } from "react";
import CartWidget from "../components/CartWidget";
import NavbarList from "../components/NavbarList";
import NavbarLogo from "../components/NavbarLogo";
import NavbarSearch from "../components/NavbarSearch";
import NavbarHamburgerButton from "../components/NavbarHamburgerButton";

const NavbarContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-yellow-primary">
      <nav className="navbar-container">
        <NavbarLogo
          url="/"
          src="./images/logo.png"
          alt="Marketlibre logo"
          componentClass="navbar-logo"
        />

        <NavbarSearch />

        <NavbarHamburgerButton isOpen={isOpen} handleClick={handleClick} />

        <NavbarList
          handleNavbarClick={handleClick}
          className={isOpen ? "" : "hide-on-mobile"}
        />

        <CartWidget
          handleNavbarClick={handleClick}
          className={isOpen ? "" : "hide-on-mobile"}
        />

        <NavbarLogo
          url="https://www.disneyplus.com/"
          src="./images/disney.webp"
          alt="Disney Plus logo"
          componentClass={`navbar-disney`}
        />
      </nav>
    </header>
  );
};

export default NavbarContainer;
