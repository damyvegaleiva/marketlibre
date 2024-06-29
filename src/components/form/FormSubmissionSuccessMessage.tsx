type FormSubmissionSuccessMessageProps = {
  orderId: string;
};

const FormSubmissionSuccessMessage: React.FC<
  FormSubmissionSuccessMessageProps
> = ({ orderId }) => {
  return (
    <div className="contact-us_form-success">
      <p>
        Gracias por tu compra. En breve te redirigiremos a la página de
        inicio...
      </p>

      <p>El id de su compra es: ${orderId} </p>
    </div>
  );
};

export default FormSubmissionSuccessMessage;
