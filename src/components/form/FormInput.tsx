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
        className="w-[95%] py-1 pl-3 border-2 rounded-md"
      />
      {errors[name] && (
        <p className="text-red-500 w-[95%] pb- pl-1 mb-5">
          {errors[name]?.message}
        </p>
      )}
    </>
  );
};

export default FormInput;
