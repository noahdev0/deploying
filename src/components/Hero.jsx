import React from "react";
import rpa from "../images/RPA Plug-in.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// import "./hero.css";

export default function Hero() {
  return (
    <>
      <div className="glass effect"></div>

      <div className="welcome-area" id="rpa">
        {/* <!-- ***** Header Text Start ***** --> */}

        <div className="header-text ">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <h1>
                  With <strong>CSEN</strong> Innovating Structural Analysis,
                  
                  <strong>Securing</strong>Tomorrow
                </h1>
                <p>
                  CSEN s'engage à propulser le génie civil algérien vers de
                  nouveaux sommets en fournissant des outils technologiques de
                  pointe pour l'analyse et la conception de constructions
                  résistantes aux séismes en Algérie. Notre dévouement à
                  l'innovation et à l'excellence garantit que nos solutions
                  permettent aux ingénieurs et aux parties prenantes de créer
                  des structures résilientes conformes aux réglementations
                  parasismiques, contribuant à la sécurité et à la durabilité
                  des projets de construction en Algérie.
                </p>
                <Link
                  href="#product"
                  className=" bg-blue-600 text-center text-yellow-50 p-3 px-4 rounded hover:bg-blue-500 ">
                  Télécharger
                </Link>
              </div>
              <motion.div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
                <Image src={rpa} alt="RPA Plug-in" className="rpa-image" />
              </motion.div>
            </div>
          </div>
        </div>
        {/* <!-- ***** Header Text End ***** --> */}
      </div>
    </>
  );
}
