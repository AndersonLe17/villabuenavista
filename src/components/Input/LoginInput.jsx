import { Form } from "react-bootstrap";
import { useState } from "react";

const LoginInput = ({ placeholder, type }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-4">
      <Form.Control
        className="in-login"
        type={(type !== "password")? type : (show)? "text": type}
        placeholder={placeholder}
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
