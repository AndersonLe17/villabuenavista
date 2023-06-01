import { Banner } from '../components/Banner';
import { Header } from '../components/Header';

const Home = () => {
  return (
    <>
      <Header banner={<Banner/>}/>
    </>
  );
};

export default Home;