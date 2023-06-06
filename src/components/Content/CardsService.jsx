import React from "react";
import HabitacionFamiliar from "../../img/HabitacionFamiliar.jpg";
import HabitacionMatrimonial from "../../img/HabitacionMatrimonial.jpg";
import HabitacionSuite from "../../img/HabitacionSuite.avif";
import HabitacionDoble from "../../img/HabitacionDoble.jpg";
import HabitacionUno from "../../img/HabitacionUno.jpg";
import HabitacionCompartida from "../../img/HabitacionCompartida.jpg";
import CardServiceCustom from "../CardsCustom/CardServiceCustom";

const cards = [
  {
    id: 1,
    title: "Habitación Familiar",
    price: "S/. 240.00",
    image: HabitacionFamiliar,
  },
  {
    id: 2,
    title: "Habitación Matrimonial",
    price: "S/. 340.00",
    image: HabitacionMatrimonial,
  },
  {
    id: 3,
    title: "Suite",
    price: "S/. 440.00",
    image: HabitacionSuite,
  },

  {
    id: 4,
    title: "Para uno",
    price: "S/. 540.00",

    image: HabitacionUno,
  },

  {
    id: 5,
    title: "Estandar-Doble",
    price: "S/. 640.00",
    image: HabitacionDoble,
  },

  {
    id: 6,
    title: "Compartida",
    price: "S/. 740.00",
    image: HabitacionCompartida,
  },
];

const CardsService = () => {
  return (
    <div class="container">
      <div className="row g-4">
        {cards.map(({ title, id, price, image }) => (
          <div className="col-md-4" key={id}>
            <CardServiceCustom title={title} price={price} imageRoom={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsService;
