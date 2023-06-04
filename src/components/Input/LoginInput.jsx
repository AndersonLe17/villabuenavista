import { Form } from "react-bootstrap";
import { useState } from "react";

const LoginInput = ({ placeholder, type, onChange }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-4">
      <Form.Control
        className="in-login"
        type={type !== "password" ? type : show ? "text" : type}
        placeholder={placeholder}
        onChange={onChange}
      />
      {type === "password" ? (
        <i
          className={"fa-solid fa-eye" + (show ? "" : "-slash")}
          onClick={() => setShow(!show)}
        ></i>
      ) : (
        ""
      )}
    </div>
  );
};

export default LoginInput;
