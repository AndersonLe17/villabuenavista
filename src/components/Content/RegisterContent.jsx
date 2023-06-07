import { Col, Container } from "react-bootstrap";
import InfoLogReg from "./components/InfoLogReg";
import FormLogReg from "./components/FormLogReg";

const RegisterContent = () => {
  return (
    <Container fluid className="login row vh-90">
      <Col lg="6" xl="5" className="login-form">
        <FormLogReg title="Registra tus datos" type="register" />
      </Col>
      <Col lg="6" xl="7" className="d-none d-lg-flex login-info">
        <InfoLogReg
          title="No esperes, haz una reserva"
          message="Empieza tu viaje"
        />
      </Col>
    </Container>
  );
};

export default RegisterContent;
