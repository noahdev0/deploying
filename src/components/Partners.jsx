import React from "react";
// import "./partners.css";
import anpt from "../images/Logo Partners/Logo ANPT.png";
import scte from "../images/Logo Partners/Logo SCTE.png";

/**
 * Renders a section displaying the partners of the company.
 * @returns {JSX.Element} The Partners component.
 */
export default function Partners() {
  return (
    <section className="partners">
      <div className="container h-100">
        <div className="row d-flex justify-content-between h-100 w-100">
          <div className="col-lg-12 text-center m-auto">
            <h2>Our Partners</h2>
          </div>
          <div className="row w-100">
            <div className="col-12 col-md-6 col-sm-12 text-center">
              <a href="https:/www.anpt.dz/">
                <img
                  src={anpt}
                  alt="ANPT Logo"
                  className="w-full object-contain clients1_logo"
                />
              </a>
            </div>
            <div className="col-12 col-md-6 col-sm-12 text-center">
              <a href="http://www.scte-dz.com/cms/">
                <img
                  src={scte}
                  alt="SCTE Logo"
                  className="w-full object-contain clients1_logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
