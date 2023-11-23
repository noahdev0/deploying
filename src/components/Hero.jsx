import React from "react";
import rpa from "../images/RPA Plug-in.png";
import Image from "next/image";
import Link from "next/link";
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
                  <br />
                  <strong>Securing</strong>Tomorrow
                </h1>
                <p>
                  CSEN propose une solution innovante dans le domaine de
                  l'analyse parasismique des constructions en Béton Armé, cette
                  solution est conçue spécifiquement pour répondre aux exigences
                  rigoureuses de la règlementation parasismique en Algérie.
                  Notre solution offre une approche innovante pour évaluer et
                  gérer les risques sismiques dans le domaine du bâtiment.
                </p>
                <Link
                  href="#product"
                  className=" bg-blue-600 text-center text-yellow-50 p-3 px-4 rounded hover:bg-blue-500 ">
                  Télécharger
                </Link>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
                <Image src={rpa} alt="RPA Plug-in" className="rpa-image" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ***** Header Text End ***** --> */}
      </div>
    </>
  );
}
