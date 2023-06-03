import { Link } from "react-router-dom";

const HeaderLogin = () => {

  return (
    <header className="mx-3 mx-sm-4 mx-lg-5 vh-10 d-flex align-items-center">
        <Link to={"/"} className="header-link fw-semibold">
            <i className="fa-solid fa-chevron-left"></i> Volver
        </Link>
    </header>
  )
}

export default HeaderLogin;