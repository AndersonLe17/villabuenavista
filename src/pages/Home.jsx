import { Banner } from "../components/Banner";
import HomeContent from "../components/Content/HomeContent";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";



const Home = () => {
  return (
    <>
      <Header>
        <Banner />
      </Header>
      <HomeContent/>
      <Footer />
    </>
  );
};

export default Home;
