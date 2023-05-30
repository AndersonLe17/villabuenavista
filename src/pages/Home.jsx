// import { Header } from '../components/Header';
// import { Footer } from '../components/Footer';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h1>Home</h1>
        <Button variant='success' onClick={() => navigate('/login')}>React Button</Button>
      </div>
    )
}

export default Home;