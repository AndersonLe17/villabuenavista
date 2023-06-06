import { Banner } from "../components/Banner";
import { CardsService } from "../components/Content";
import { Header } from "../components/Header";



const Home = () => {
  return (
    <>
      <Header>
        <Banner />
      </Header>
      <CardsService/>

    </>
  );
};

export default Home;
