import { Card, Col, Row } from "react-bootstrap";

const CardServiceCustom = ({ title, price, imageRoom }) => {
  return (
    <Card bg="dark" text="text-white border-0" className="card-service">
      <Card.Img
        src={imageRoom}
      ></Card.Img>

      <div className="card-img-overlay d-flex flex-column justify-content-end">
        <div className="text-white">
          <Row>
            <Col md="6">
              <p className="card-text">
                {title}
                <br />
                {price} Noche
              </p>
            </Col>
            <Col md="6" className="text-end">
              <a href="/detail-room" className="link-light" style={{ textDecoration: "none" }}>
                <br />
                Mas detalles
                <i className="fa-regular fa-arrow-right ps-2"></i>
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </Card>
  );
};

export default CardServiceCustom;