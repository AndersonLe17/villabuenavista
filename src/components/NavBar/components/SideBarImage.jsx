import { NavDropdown, Image } from "react-bootstrap";
import user from "../../../img/user.png";

const SideBarImage = () => {
  return (
    <div className="mb-3 layout-sidebar-img">
      <NavDropdown
        drop="end"
        title={
          <>
            <Image src={user} roundedCircle fluid />
            <p>Administrador</p>
          </>
        }
      >
        <NavDropdown.Header className="d-flex">
          <Image src={user} roundedCircle fluid />
          <div>
            <p>Anderson Leonardo</p>
            <span>anderleorellana@gmail.com</span>
          </div>
        </NavDropdown.Header>
        <NavDropdown.Divider />
        <NavDropdown.Item to="/account">
          <i className="fa-light fa-gear"></i> Cuenta
        </NavDropdown.Item>
        <NavDropdown.Item to="/">
          <i className="fa-light fa-arrow-right-from-bracket"></i> Cerrar Sesión
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default SideBarImage;
