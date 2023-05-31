import { Button } from "react-bootstrap";

function ButtonCustom({text, className, variant}) {
  return (
    <Button variant={variant} className={className}>{text}</Button>
  );
}

export default ButtonCustom;
