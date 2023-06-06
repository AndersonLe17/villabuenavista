import React from "react";
import { CardServiceCustom } from "../../CardsCustom";
import { services } from "../../../data/Services";
import { Col, Container, Row } from "react-bootstrap";

const CardsService = () => {
  return (
    <Container className="my-5">
      <Row className="g-4">
        {services.map(({ title, id, price, image }) => (
          <Col md={4} key={id}>
            <CardServiceCustom title={title} price={"S/. " + price} imageRoom={image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardsService;