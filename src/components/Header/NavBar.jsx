import { Container, Nav, Navbar } from "react-bootstrap";
import { ButtonCustom } from "../ButtonCustom";
import SearchInput from "../SearchInput/SearchInput";

const NavBar = ({ img }) => {
  return (
    <Navbar bg="white" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={img} alt="logo" className="img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <SearchInput />
            <ButtonCustom variant="bone" className="btn-home me-2" text="Registrarse" />
            <ButtonCustom variant="basic" className="btn-home" text="Iniciar Sesíon" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
