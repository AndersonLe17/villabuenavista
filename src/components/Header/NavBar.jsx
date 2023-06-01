import { Container, Nav, Navbar } from "react-bootstrap";
import { ButtonCustom } from "../ButtonCustom";
import SearchInput from "../SearchInput/SearchInput";
import { useNavigate } from "react-router-dom";

const NavBar = ({ img }) => {
  const navigate = useNavigate();

  return (
    <Navbar bg="white" expand="lg" >
      <Container fluid className="h-100">
        <Navbar.Brand href="#home" className="h-100">
          <img src={img} alt="logo" className="h-100"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <SearchInput />
            <ButtonCustom variant="bone" className="btn-home me-2" text="Registrarse" onClick={() => navigate('/register')} />
            <ButtonCustom variant="basic" className="btn-home" text="Iniciar Sesíon" onClick={() => navigate('/login')} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
