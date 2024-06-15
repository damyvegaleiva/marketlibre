import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

type NavbarHamburgerButtonProps = {
  isOpen: boolean;
  handleClick: () => void;
};

const NavbarHamburgerButton: React.FC<NavbarHamburgerButtonProps> = ({
  isOpen,
  handleClick,
}) => {
  if (isOpen)
    return (
      <RxCross1 size={30} onClick={handleClick} className="hamburger-btn" />
    );

  return (
    <RxHamburgerMenu
      size={30}
      onClick={handleClick}
      className="hamburger-btn"
    />
  );
};

export default NavbarHamburgerButton;
