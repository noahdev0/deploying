import React from "react";
// import "./services.css";
import logo from "../images/logo2.png";
import { products } from "../utils";
import { motion } from "framer-motion";
export default function Services() {
  return (
    <section id="services" className="section-bg min-vh-100">
      <div className="container">
        <header className="section-header my-5 center-text " id="rpa">
          {/* how to center this image using tailwind  */}
          <img
            src={logo}
            alt=""
            className="mx-auto w-full sm:w-full md:w-full lg:w-2/3 "
          />
          <br />

          <h4>Logiciel d’analyse des structures en Béton Armé</h4>
          <h4>selon les DTR Algérien</h4>
          <h4>Travail en collaboration avec CSI-ETABS</h4>

          {/* <h4>
            RPA Plug-in est un logiciel d’analyse des structures en Béton Armé
            selon les DTR Algérien qui travaille en collaboration avec CSI-ETABS
            sous forme d’un Plug-in
          </h4> */}
          <h6>
            Avec notre solution qui est basée sur la numérisation des DTR et
            l'automatisation du calcul nous pouvons à la fois augmenter la
            croissance de la productive ainsi qu’arrivé à une étude parasismique
            qui est conforme à la règlementation locale d'une manière précise,
            rapide et fiable tout en choisissant la meilleure proposition
            économique.
          </h6>
        </header>

        <div className="row justify-center gap-10 align-middle" id="product">
          {products.map((product, index) => (
            <motion.div key={index} className="col-md-9 col-lg-5 col-12  ">
              <div className="box">
                <div className="icon">
                  <motion.i
                    className={`${product.icon} text-blue-700`}></motion.i>
                </div>
                <h4 className="title">
                  <a href={product.url}>{product.title}</a>
                </h4>
                <p className="description">{product.discription}</p>
                <motion.a
                  whileHover={{ scale: 1.025 }}
                  href="#"
                  className="main-button-slider">
                  Télécharger
                </motion.a>
              </div>
            </motion.div>
          ))}

          <p className="w-100 text-center">
            Besoin plus de detail ? Telecharger{" "}
            <a href="https://drive.google.com/file/d/1fUAGST-Euq8_933g-68N5U_S2XbAKSf-/view?usp=drive_link">
              la fiche descriptive
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
