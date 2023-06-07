import { Container, Nav, Navbar } from "react-bootstrap";
import { ButtonCustom } from "../ButtonCustom";
import { SearchInput } from "../Input";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = ({ img }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar bg="white" expand="lg" collapseOnSelect>
      <Container fluid className="h-100">
        <Navbar.Brand href="#home" className="h-100">
          <img src={img} alt="logo" className="h-100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-custom">
            <ResponsiveNavItems windowWidth={windowWidth} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const ResponsiveNavItems = ({ windowWidth }) => {
  const navigate = useNavigate();
  if (windowWidth > 990) {
    return (
      <>
        <SearchInput />
        <ButtonCustom
          variant="bone"
          className="btn-home me-2"
          text="Registrarse"
          onClick={() => navigate("/register")}
        />
        <ButtonCustom
          variant="basic"
          className="btn-home"
          text="Iniciar Sesión"
          onClick={() => navigate("/login")}
        />
      </>
    );
  } else {
    return (
      <>
        <Nav>
          <Nav.Link href="/login" className="text-center">Iniciar Sesión</Nav.Link>
          <div className="separator bg-dark"></div>
          <Nav.Link href="/register" className="text-center">Registrarse</Nav.Link>
        </Nav>
      </>
    );
  }
};

export default NavBar;
