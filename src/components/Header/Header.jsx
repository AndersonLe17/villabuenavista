import NavBar from "./NavBar";
import logo from "../../img/logo16-9.png";

const Header = ({children}) => {
  return (
    <header className="vh-100">
      <NavBar img={logo} />
      {children}
    </header>
  )
}


export default Header;