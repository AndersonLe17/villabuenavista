import { Banner } from "../components/Banner";
import HomeContent from "../components/Content/HomeContent";
import { Header } from "../components/Header";



const Home = () => {
  return (
    <>
      <Header>
        <Banner />
      </Header>
      <HomeContent/>
    </>
  );
};

export default Home;
