import { Container } from "react-bootstrap";
import CardsService from "./components/CardsService";
import ServiceDetails from "./components/ServiceDetails"; 

const HomeContent = () => {
  return (
    <Container fluid>
        <ServiceDetails/>
        <CardsService/>
    </Container>
  )
}

export default HomeContent;