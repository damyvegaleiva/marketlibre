import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const NavbarSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const navigate: NavigateFunction = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (inputValue !== "") {
      navigate(`/search/${inputValue}`);
      setInputValue("");
      return;
    }
    navigate("/");
  };

  return (
    <div className="navbar-search">
      <form
        action="submit"
        onSubmit={(e: React.FormEvent<HTMLFormElement>): void =>
          handleSubmit(e)
        }
      >
        <input
          type="text"
          placeholder="Buscar productos, marcas y mas... "
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setInputValue(e.target.value)
          }
          className="navbar-search"
        />
      </form>
    </div>
  );
};

export default NavbarSearch;
