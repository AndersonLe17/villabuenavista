import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { LoginInput } from "../Input";
import { ButtonCustom } from "../ButtonCustom";
import { useState } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    navigate('/dashboard');
  }

  return (
    <Form onSubmit={submitHandler}>
      <LoginInput placeholder="Ingrese su email o username" type="text" onChange={(e) => setUsername(e.target.value)}/>
      <LoginInput placeholder="Contraseña" type="password" onChange={(e) => setpassword(e.target.value)}/>

      <p className="text-center mb-4">
        <Link className="text-decoration-none">¿Olvidaste tu contraseña?</Link>
      </p>
      <ButtonCustom
        className="w-100 fs-6 family-poppins"
        variant="basic"
        type="submit"
        text="Ingresar"
      />
    </Form>
  );
};

export default LoginForm;
