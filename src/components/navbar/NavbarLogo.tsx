import { NavigateFunction, useNavigate } from "react-router-dom";

type TNavbarLogoProps = {
  url: string;
  alt: string;
  src: string;
  componentClass: string;
};

const NavbarLogo: React.FC<TNavbarLogoProps> = ({
  url,
  alt,
  src,
  componentClass,
}) => {
  const navigate: NavigateFunction = useNavigate();

  const handleClick = () => {
    if (url.startsWith("https://")) {
      window.open(url, "_blank");
      return;
    }
    navigate(url);
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={componentClass}
        onClick={handleClick}
      />
    </>
  );
};

export default NavbarLogo;
