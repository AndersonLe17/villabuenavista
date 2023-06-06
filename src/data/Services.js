import HabitacionFamiliar from "../img/HabitacionFamiliar.jpg";
import HabitacionMatrimonial from "../img/HabitacionMatrimonial.jpg";
import HabitacionSuite from "../img/HabitacionSuite.avif";
import HabitacionDoble from "../img/HabitacionDoble.jpg";
import HabitacionUno from "../img/HabitacionUno.jpg";
import HabitacionCompartida from "../img/HabitacionCompartida.jpg";

class Services {
    constructor(id, title, price, image){
        this.id = id;
        this.title = title;
        this.price = price;
        this.image = image;
    }
}

export const services = [
    new Services(1, "Habitación Familiar", 240.00, HabitacionFamiliar),
    new Services(2, "Habitación Matrimonial", 340.00, HabitacionMatrimonial),
    new Services(3, "Suite", 240.00, HabitacionSuite),
    new Services(4, "Para uno", 440.00, HabitacionUno),
    new Services(5, "Estandar Doble", 540.00, HabitacionDoble),
    new Services(6, "Compartida", 640.00, HabitacionCompartida),
];