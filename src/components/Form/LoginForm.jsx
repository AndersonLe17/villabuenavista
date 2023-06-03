import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginInput } from "../Input";
import { ButtonCustom } from "../ButtonCustom";

const LoginForm = () => {
  return (
    <Form>
      <LoginInput placeholder="Ingrese su email o username" type="text" />
      <LoginInput placeholder="Contraseña" type="password" />

      <p className="text-center mb-4">
        <Link className="text-decoration-none">¿Olvidaste tu contraseña?</Link>
      </p>
      <ButtonCustom
        className="w-100 fs-6 family-poppins"
        variant="basic"
        text="Ingresar"
      />
    </Form>
  );
};

export default LoginForm;
