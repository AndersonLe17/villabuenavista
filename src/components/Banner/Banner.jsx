import { Container, Row, Col } from "react-bootstrap";
import { ButtonCustom } from "../ButtonCustom";

const Banner = () => {
  return (
    <Container fluid className="d-flex banner">
      <Row>
        <Col md={5} className="ms-5 d-flex justify-content-center flex-column">
          <h1 className="banner-title">Villa Buenavista</h1>
          <p className="banner-desc">
            ¡Bienvenidos a Hospedaje Villa Buenavista! Nuestro alojamiento
            ofrece una estancia cómoda y relajante con impresionantes vistas
            panorámicas. Ya sea por negocios o placer, nuestro equipo brinda un
            servicio cálido y personalizado para una experiencia inolvidable.
            ¡Esperamos darles la bienvenida pronto!
          </p>
          <div>
            <ButtonCustom variant="basic" text="Empezar" className="px-5" />
          </div>
        </Col>
        <Col>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
