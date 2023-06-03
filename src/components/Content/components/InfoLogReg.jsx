import { Link } from "react-router-dom";
import loginImage from "../../../img/loginImg.png";

const InfoLogReg = ({ title, message, to }) => {
  return (
    <>
      <div className="login-text">
        <h2 className="fw-medium">{title}</h2>
        <p>
          {message}
          {to ? (
            <>
              <br /> Puedes{" "}
              <Link className="fw-semibold" to={to}>
                registrarte acá
              </Link>
            </>
          ) : (
            ""
          )}
        </p>
      </div>
      <div className="login-img d-none d-xl-block">
        <img src={loginImage} alt="login img" />
      </div>
    </>
  );
};

export default InfoLogReg;
