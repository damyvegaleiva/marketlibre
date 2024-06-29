import ItemDetailActionButton from "../item/details/ItemDetailActionButton";

type FormActionsButtonsProps = {
  isSubmitting: boolean;
};

const FormActionsButtons: React.FC<FormActionsButtonsProps> = ({
  isSubmitting,
}) => {
  return (
    <ItemDetailActionButton
      text={isSubmitting ? "Procesando compra..." : "Finalizar Compra"}
      className="px-5 py-2 m-auto text-white rounded-md bg-blue-primary"
    />
  );
};

export default FormActionsButtons;
