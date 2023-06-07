import { Link } from "react-router-dom";
import facebook from "../../../img/facebook.svg";
import google from "../../../img/google.svg";
import { LoginForm, RegisterForm } from "../../Form";
const FormLogReg = ({ title, type }) => {
  return (
    <div className="login-form-body">
      <div className="login-title">
        <h3 className="fw-medium family-poppins mb-4 pb-1">{title}</h3>
      </div>
      {(type === "login") ? <LoginForm /> : (type === "register") ? <RegisterForm /> : <></>}
      <div className="login-passport mt-5">
        <p className="text-center text-mutted my-4">o continúa con</p>
        <div className="d-flex justify-content-center">
          <Link className="mx-3">
            <img src={facebook} alt="facebook" />
          </Link>
          <Link className="mx-3">
            <img src={google} alt="google" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormLogReg;
