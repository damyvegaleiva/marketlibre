import FormActionsButtons from "./FormActionsButtons";

type FormActionsProps = {
  isSubmitting: boolean;
};

const FormActions: React.FC<FormActionsProps> = ({ isSubmitting }) => {
  return <FormActionsButtons isSubmitting={isSubmitting} />;
};

export default FormActions;
