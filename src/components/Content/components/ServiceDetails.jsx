import { Row, Col } from "react-bootstrap";

const ServiceDetails = () => {
  return (
    <div>
      <Offer />
      <div className="d-flex justify-content-center align-items-center">
        <Row
          xs={1}
          md={2}
          lg={3}
          className="g-4 justify-content-center"
        >
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

const Feature = ({ icon, sub, detail }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-icon">
          <i className={icon}></i>
        </div>
        <h4 className="sub-card">{sub}</h4>
        <p className="card-detail">{detail}</p>
      </div>
    </div>
  );
};

const Offer = () => {
  return (
    <div>
      <div className=" offer text-center">
        <h3 className="offer-sub text-center">Lo que ofrecemos</h3>
        <div className="offer-content">
          <p>
            Como hospedaje, ofrecemos una variedad de comodidades diseñados para
            hacer que su estancia sea lo más cómoda y agradable posible.
          </p>
        </div>
      </div>
      <br/>
    </div>
  );
};


export default ServiceDetails;
