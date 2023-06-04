import { Image, NavDropdown } from "react-bootstrap";
import user from "../../img/user.png";
import LineSeparator from "../Utils/LineSeparator";
import { navItems } from "../../data/NavItems";
import { Link } from "react-router-dom";

const SideBarDashboard = () => {
  return (
    <div className="layout-sidebar vh-100">
      <div className="mb-3 layout-sidebar-img">
        <NavDropdown
          drop="end"
          title={
            <>
              <Image src={user} roundedCircle fluid />
              <p>Admin</p>
            </>
          }
        >
          <NavDropdown.Header>

          </NavDropdown.Header>
          <NavDropdown.Divider />
          <NavDropdown.Item to="/account">Cuenta</NavDropdown.Item>
          <NavDropdown.Item to="/">Cerrar Sesión</NavDropdown.Item>
        </NavDropdown>
      </div>
      <LineSeparator />
      <div className="mt-3 layout-sidebar-nav">
        {navItems.map((item, idx) =>
          item.to ? (
            <div className="sidebar-item text-center" key={idx}>
              <Link to={item.to}>
                <i className={item.icon}></i>
                <p>{item.title}</p>
              </Link>
            </div>
          ) : (
            <NavDropdown
              key={idx}
              className="sidebar-item text-center"
              title={
                <>
                  <i className={item.icon}></i>
                  <p>{item.title}</p>
                </>
              }
              drop="end"
            >
              <NavDropdown.Header>{item.title}</NavDropdown.Header>
              <NavDropdown.Divider />
              {item.ListSubItems.map((sub, i) => (
                <NavDropdown.Item key={sub.title + i}>
                  {sub.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          )
        )}
      </div>
    </div>
  );
};

export default SideBarDashboard;
