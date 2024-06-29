import { TPurchaseSchema } from "../types/types";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import FormInput from "../components/form/FormInput";
import FormActions from "../components/form/FormActions";

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
      className="flex flex-col items-start  gap-2 w-[600px] bg-white mt-10 border-2 border-sky-300 lg:mt-0"
    >
      <h2 className="font-semibold underline">Información personal: </h2>

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

      <FormActions isSubmitting={isSubmitting} />
    </form>
  );
};

export default FormContainer;
