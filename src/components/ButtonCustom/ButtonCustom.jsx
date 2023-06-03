import { Button } from "react-bootstrap";

function ButtonCustom({text, className, variant, onClick}) {
  return (
    <Button variant={variant} className={className} onClick={onClick}>{text}</Button>
  );
}

export default ButtonCustom;
