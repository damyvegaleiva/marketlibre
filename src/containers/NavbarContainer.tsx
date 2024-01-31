import { useState } from "react";
import CartWidget from "../components/CartWidget";
import NavbarList from "../components/NavbarList";
import NavbarLogo from "../components/NavbarLogo";
import NavbarSearch from "../components/NavbarSearch";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const NavbarContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const checkIfOpenSvg = () => {
    if (isOpen) return <RxCross1 size={30} onClick={handleClick} />;

    return <RxHamburgerMenu size={30} onClick={handleClick} />;
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

        {checkIfOpenSvg()}

        {(isOpen || window.innerWidth >= 768) && (
          <>
            <NavbarList />
            <CartWidget />
            <NavbarLogo
              url="https://www.disneyplus.com/"
              src="./images/disney.webp"
              alt="Disney Plus logo"
              componentClass="navbar-disney"
            />
          </>
        )}
      </nav>
    </header>
  );
};

export default NavbarContainer;
