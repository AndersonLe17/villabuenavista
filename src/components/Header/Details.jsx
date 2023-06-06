import { Feature, Offer } from "../Header";
import { Row, Col } from "react-bootstrap";

const Details = () => {
  return (
    <div>
    <Offer/>
    <div className="DetailsWrapper"></div>
    <div className="d-flex justify-content-center align-items-center">
      <Row xs={1} md={2} lg={3} className="g-4" style={{ justifyContent: "center" }}>
        <Col>
          <Feature
            icon="fa-regular fa-water-ladder fa-2x"
            sub="Piscina"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
          />
          <Feature
            icon="fa-regular fa-glasses-round fa-2x"
            sub="Vista privilegiada"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
          />
        </Col>
        <Col>
          <Feature
            icon="fa-sharp fa-regular fa-seedling fa-2x"
            sub="Huerto"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
          />
          <Feature
            icon="fa-regular fa-road fa-2x"
            sub="Ruta directa"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
          />
        </Col>
        <Col>
          <Feature
            icon="fa-regular fa-paw-simple fa-2x"
            sub="Pet friendly"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
          />
          <Feature
            icon="fa-regular fa-car fa-2x"
            sub="Cochera"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
          />
        </Col>
      </Row>
    </div>
  </div>
  );
};

export default Details;
