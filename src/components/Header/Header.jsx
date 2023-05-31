import NavBar from "./NavBar";
import logo from "../../img/logo.svg";

const Header = ({banner}) => {
  return (
    <header className="vh-100">
      <NavBar img={logo} />
      {banner}
    </header>
  )
}


export default Header;