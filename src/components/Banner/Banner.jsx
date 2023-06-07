import { Carousel, Image } from "react-bootstrap";
import Portada1 from "../../img/Portada1.jpg";
import Portada2 from "../../img/Portada2.jpg";
import Portada3 from "../../img/Portada3.jpg";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <CarouselItems
            img={Portada1}
            tittle={"DISFRUTA"}
            subTittle={"Hospedaje Villa Buenavista"}
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItems
            img={Portada2}
            tittle={"VIAJA"}
            subTittle={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            }
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItems
            img={Portada3}
            tittle={"RESERVA"}
            subTittle={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            }
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

const CarouselItems = ({ img, tittle, subTittle }) => {
  return (
    <>
      <div className="image-container">
        <Image className="d-block w-100" src={img} />
        <div className="image-overlay" />
      </div>
      <Carousel.Caption>
        <h3>{tittle}</h3>
        <p>{subTittle}</p>
      </Carousel.Caption>
    </>
  );
};

export default Banner;
