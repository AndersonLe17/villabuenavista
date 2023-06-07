import { LoginInput } from "../Input";
import { ButtonCustom } from "../ButtonCustom";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";


const RegisterForm = () => {
    const navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault();
        navigate('/');
      }
  return (
    <Form  onSubmit={submitHandler}>
      <LoginInput placeholder="Ingrese tu email" type="text" />
      <LoginInput placeholder="Nombre de usuario" type="text" />
      <LoginInput placeholder="Numero telefónico" type="text" />
      <LoginInput placeholder="Contraseña" type="password" />
      <LoginInput placeholder="Confirma tu contraseña" type="password" />
      <ButtonCustom
        className="w-100 fs-6 family-poppins"
        variant="basic"
        type="submit"
        text="Registrar"
      />
    </Form>
  );
};

export default RegisterForm;
