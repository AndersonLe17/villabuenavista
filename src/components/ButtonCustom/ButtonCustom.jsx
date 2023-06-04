import { Button } from "react-bootstrap";

function ButtonCustom({ text, className, variant, type = "button", onClick }) {
  return (
    <Button type={type} variant={variant} className={className} onClick={onClick}>
      {text}
    </Button>
  );
}

export default ButtonCustom;
