import ItemDetailActionButton from "../item/details/ItemDetailActionButton";

type FormSubmitButton = {
  isSubmitting: boolean;
};

const FormSubmitButton: React.FC<FormSubmitButton> = ({ isSubmitting }) => {
  return (
    <ItemDetailActionButton
      text={isSubmitting ? "Procesando compra..." : "Finalizar Compra"}
      className="m-auto mt-10 text-white rounded-md bg-blue-primary "
    />
  );
};

export default FormSubmitButton;
