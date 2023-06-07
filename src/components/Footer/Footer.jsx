import React from "react";
const Footer = () => {
  return (
    <footer className="text-white py-4">
      <div className="container">
        <nav className="row justify-content-center flex-wrap">
          <ItemNav tittle="Nosotros" />
          <ItemNav tittle="Ayuda" />
          <ItemNav tittle="Contactanos" />
          <ItemNav tittle="Privacidad" />
          <ItemNav tittle="Terminos" />
        </nav>
      </div>
      <div className="container">
        <hr />
        <div className="row">
          <div className="col">
            <nav className="nav-end row justify-content-between align-items-center flex-wrap">
              <ul className="col-11 col-md-2 list-unstyled d-flex flex-column align-items-left">
                <li className="text-center text-sm-start">
                  © 2023 Villa Buenavista. All rights reserved
                </li>
              </ul>
              <ul className="col-11 col-md-2 list-unstyled d-flex flex-row align-items-center">
                <li className="text-center text-sm-start">
                  <i class="fa-brands fa-youtube"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
const ItemNav = ({ tittle }) => {
  return (
    <ul className="col-6 col-md-2 list-unstyled d-flex flex-column align-items-center">
      <li className="text-center text-sm-start">{tittle}</li>
    </ul>
  );
};
export default Footer;
