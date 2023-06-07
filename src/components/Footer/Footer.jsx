import React from "react";
const Footer = () => {
  return (
    <footer className="text-white py-4">
      <div className="container">
        <nav className="row justify-content-center flex-wrap">
          <ul className="col-6 col-md-2 list-unstyled d-flex flex-column align-items-center">
            <li className="text-center text-sm-start">Nosotros</li>
          </ul>
          <ul className="col-6 col-md-2 list-unstyled d-flex flex-column align-items-center">
            <li className="text-center text-sm-start">Ayuda</li>
          </ul>
          <ul className="col-6 col-md-2 list-unstyled d-flex flex-column align-items-center">
            <li className="text-center text-sm-start">Contactanos</li>
          </ul>
          <ul className="col-6 col-md-2 list-unstyled d-flex flex-column align-items-center">
            <li className="text-center text-sm-start">Privacidad</li>
          </ul>
          <ul className="col-6 col-md-2 list-unstyled d-flex flex-column align-items-center">
            <li className="text-center text-sm-start">Terminos</li>
          </ul>
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
export default Footer;
