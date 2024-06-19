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
    <search className="navbar-search" role="search">
      <form
        action="/search"
        onSubmit={(e: React.FormEvent<HTMLFormElement>): void =>
          handleSubmit(e)
        }
      >
        <input
          type="search"
          placeholder="Buscar productos, marcas y mas... "
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setInputValue(e.target.value)
          }
        />
      </form>
    </search>
  );
};

export default NavbarSearch;
