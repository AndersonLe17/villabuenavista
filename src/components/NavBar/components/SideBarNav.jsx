import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { navItems } from "../../../data/NavItems";

const SideBarNav = ({path}) => {
  const navigate = useNavigate();

  return (
    <div className="mt-3 layout-sidebar-nav">
      {navItems.map((item, idx) =>
        item.to ? (
          <NavLinkItem
            title={item.title}
            icon={item.icon}
            to={item.to}
            active={(path === item.to || (path === "" && item.to === "/dashboard"))}
            key={idx}
          />
        ) : (
          <NavDropdownItem
            title={item.title}
            icon={item.icon}
            listSubItems={item.listSubItems}
            navigate={navigate}
            path={path}
            key={idx}
          />
        )
      )}
    </div>
  );
};

const NavLinkItem = ({ title, icon, to, active }) => {
  return (
    <div className={`sidebar-item text-center ${active && "active"}`}>
      <Link to={to}>
        <i className={icon}></i>
        <p>{title}</p>
      </Link>
    </div>
  );
};

const NavDropdownItem = ({ title, icon, listSubItems, navigate, path }) => {
  return (
    <NavDropdown
      className={`sidebar-item text-center ${(listSubItems.map((l) => l.to).includes(path)) && "active"}`}
      drop="end"
      title={
        <>
          <i className={icon}></i>
          <p>{title}</p>
        </>
      }
    >
      <NavDropdown.Header>{title}</NavDropdown.Header>
      <NavDropdown.Divider />
      {listSubItems.map((sub, i) => (
        <NavDropdown.Item key={sub.title + i} onClick={() => navigate(sub.to)}>
          {sub.title}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

export default SideBarNav;
