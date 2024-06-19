import React, { ChangeEvent, useState } from "react";
import FormInput from "../components/form/FormInput";

type TInitialState = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: number | undefined;
  direccion: string;
  ciudad: string;
  provincia: string;
};

export type TErrors = {
  [key: string]: string | undefined;
};

const initialState: TInitialState = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: undefined,
  direccion: "",
  ciudad: "",
  provincia: "",
};

const FormContainer = () => {
  const [userInfo, setUserInfo] = useState<TInitialState>(initialState);
  const [errors, setErrors] = useState<TErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onValidate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: TErrors = {};
    const regExpNombre = /^[A-Za-zs'-]+$/;
    const regExpEmail = /^[\w.-]+@[\w.-]+\.\w+$/;

    if (!userInfo.nombre.trim()) {
      errors.nombre = "Nombre no puede estar vació.";
    } else if (!regExpNombre.test(userInfo.nombre)) {
      errors.nombre = "Nombre contiene caracteres inválidos.";
    }

    if (!userInfo.apellido.trim()) {
      errors.apellido = "Apellido no puede estar vació.";
    }

    if (!userInfo.email.trim()) {
      errors.email = "Email no puede estar vació.";
    } else if (!regExpEmail.test(userInfo.email)) {
      errors.email = "Email no tiene un formato valido.";
    }

    // if (!userInfo.telefono.trim() || undefined) {
    //   errors.telefono = "Telefono no puede estar vació.";
    // }

    if (!userInfo.direccion.trim()) {
      errors.direccion = "Direccion no puede estar vació.";
    }

    if (!userInfo.ciudad.trim()) {
      errors.ciudad = "Ciudad no puede estar vació.";
    }

    if (!userInfo.provincia.trim()) {
      errors.provincia = "Provincia no puede estar vació.";
    }

    setErrors(errors);
  };

  return (
    <form
      action="submit"
      className="flex flex-col items-center justify-center  gap-2 w-[500px] bg-white mt-10"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => onValidate(e)}
    >
      <h2>Información del Comprador</h2>

      <FormInput
        label={"Nombre:"}
        type={"text"}
        name={"nombre"}
        value={userInfo.nombre}
        handleChange={handleChange}
        errors={errors}
      />

      <FormInput
        label={"Apellido:"}
        type={"text"}
        name={"apellido"}
        value={userInfo.apellido}
        handleChange={handleChange}
        errors={errors}
      />

      <FormInput
        label={"Email:"}
        type={"text"}
        name={"email"}
        value={userInfo.email}
        handleChange={handleChange}
        errors={errors}
      />

      <FormInput
        label={"Telefono:"}
        type={"tel"}
        name={"telefono"}
        value={userInfo.telefono}
        handleChange={handleChange}
        errors={errors}
      />

      <FormInput
        label={"Direccion:"}
        type={"text"}
        name={"direccion"}
        value={userInfo.direccion}
        handleChange={handleChange}
        errors={errors}
      />

      <FormInput
        label={"Ciudad:"}
        type={"text"}
        name={"ciudad"}
        value={userInfo.ciudad}
        handleChange={handleChange}
        errors={errors}
      />

      <FormInput
        label={"Provincia:"}
        type={"text"}
        name={"provincia"}
        value={userInfo.provincia}
        handleChange={handleChange}
        errors={errors}
      />

      <button>Finalizar Compra.</button>
    </form>
  );
};

export default FormContainer;
