import { Col, Container } from "react-bootstrap";
import InfoLogReg from "./components/InfoLogReg";
import FormLogReg from "./components/FormLogReg";

const LoginContent = () => {
  return (
    <Container fluid className="login row vh-90">
      <Col lg="6" xl="7" className="d-none d-lg-flex login-info">
        <InfoLogReg
          title="Empieza a hacer tus reservas"
          message="Si todavía no tienes una cuentas"
          to="/register"
        />
      </Col>
      <Col lg="6" xl="5" className="login-form">
        <FormLogReg title="Iniciar Sesión" type="login"/>
      </Col>
    </Container>
  );
};

export default LoginContent;
