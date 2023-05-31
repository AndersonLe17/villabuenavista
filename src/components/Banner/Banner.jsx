import { Container } from "react-bootstrap";
import { ButtonCustom } from "../ButtonCustom";

const Banner = () => {
  return (
    <Container fluid className="d-flex banner">
        <div>
          <h1>Villa Buenavista</h1>
          <p>
            ¡Bienvenidos a Hospedaje Villa Buenavista! Nuestro alojamiento
            ofrece una estancia cómoda y relajante con impresionantes vistas
            panorámicas. Ya sea por negocios o placer, nuestro equipo brinda un
            servicio cálido y personalizado para una experiencia inolvidable.
            ¡Esperamos darles la bienvenida pronto!
          </p>
          <ButtonCustom variant="basic" text="Empezar" className="px-4" />
        </div>
        <div>A</div>
    </Container>
  );
};

export default Banner;
