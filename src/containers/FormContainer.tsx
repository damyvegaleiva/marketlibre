import { TPurchaseSchema } from "../types/types";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import FormInput from "../components/form/FormInput";
import FormSubmitButton from "../components/form/FormSubmitButton";

type FormContainerProps = {
  handleSubmit: UseFormHandleSubmit<TPurchaseSchema>;
  onSubmit: (data: TPurchaseSchema) => Promise<void>;
  register: UseFormRegister<TPurchaseSchema>;
  errors: FieldErrors<TPurchaseSchema>;
  isSubmitting: boolean;
};

const FormContainer: React.FC<FormContainerProps> = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  isSubmitting,
}) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center pt-8 pb-2 w-[95%] lg:w-[50%] gap-2 bg-white lg:m-auto lg:mt-0 max-w-[800px] rounded-lg shadow-2xl mt-10"
    >
      <h2 className="mb-5 font-semibold underline">Información personal:</h2>

      <FormInput
        type="name"
        name="name"
        placeHolder="Nombre"
        register={register}
        errors={errors}
      />

      <FormInput
        type="last_name"
        name="last_name"
        placeHolder="Apellido"
        register={register}
        errors={errors}
      />

      <FormInput
        type="email"
        name="email"
        placeHolder="Email"
        register={register}
        errors={errors}
      />

      <FormInput
        type="phone"
        name="phone"
        placeHolder="Telefono"
        register={register}
        errors={errors}
      />

      <FormSubmitButton isSubmitting={isSubmitting} />
    </form>
  );
};

export default FormContainer;
