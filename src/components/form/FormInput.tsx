import { TPurchaseSchema } from "../../types/types";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type FormInputProps = {
  type: string;
  name: keyof TPurchaseSchema;
  placeHolder: string;
  register: UseFormRegister<TPurchaseSchema>;
  errors: FieldErrors<TPurchaseSchema>;
};

const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  placeHolder,
  errors,
  register,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeHolder}
        {...register(name)}
        className="py-1 pl-3 border-2 rounded-md border-sky-200 w-[85%]"
      />
      {errors[name] && <p className="text-red-500">{errors[name]?.message}</p>}
    </>
  );
};

export default FormInput;
