import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { navItems } from "../../../data/NavItems";

const SideBarNav = () => {
  // const navigate = useNavigate();

  return (
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
            drop="end"
            title={
              <>
                <i className={item.icon}></i>
                <p>{item.title}</p>
              </>
            }
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
  );
};

export default SideBarNav;
