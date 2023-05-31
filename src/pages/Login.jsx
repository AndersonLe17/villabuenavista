import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
        <h1>Login</h1>
        <Button variant='success' onClick={() => navigate("/")}>React Button</Button>
    </div>
  )
}

export default Login;