import { ChangeEvent } from "react";
import { TErrors } from "../../containers/FormContainer";

type FormInputProps = {
  label: string;
  type: string;
  name: string;
  value: string | number | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errors: TErrors;
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  name,
  value,
  handleChange,
  errors,
}) => {
  console.log(errors);

  return (
    <>
      <label>
        {label}
        <input
          className="items-stretch border"
          type={type}
          name={name}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
      </label>
      {errors[name] && <p className="text-red-500">{errors[name]}</p>}
    </>
  );
};

export default FormInput;
