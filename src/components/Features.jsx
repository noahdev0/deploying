import React from "react";
import Logo1 from "../images/Logo1.png";
import Image from "next/image";
// import "./features.css";
import { features } from "../utils/index.js";
export default function Features() {
  return (
    <section className="features my-5">
      <div className="container">
        <div className="row min-vh-100 gap">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <div className="feature">
                <Image src={Logo1} width={65} height={68} />
                <h3>{feature.title}</h3>
                {/* <!-- make it bigger *************************** h3 *************-** --> */}
                <p>{feature.text}</p>
              </div>
            </div>
          ))}

          <div className="col-12  col-md-6 col-lg-6">
            <a
              href="https://drive.google.com/file/d/1fUAGST-Euq8_933g-68N5U_S2XbAKSf-/view?usp=drive_link"
              className="btn main-button w-100">
              <i className="fa fa-download mx-3"></i>Formulaire d'inscription
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <a
              href="https://drive.google.com/file/d/1b2w1ibKmW7l270_gYL-sT60LioWmbLDU/view?usp=sharing"
              className="btn main-button w-100">
              <i className="fa fa-download mx-3"></i>RPA Plug-in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
