import React from "react";


export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {/* <!-- email phone --> */}

            <ul className="social">
              <li className="my-1">
                <a href="https://www.facebook.com/profile.php?id=61550225428516">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="my-1">
                <a href="https://www.facebook.com/profile.php?id=61550225428516">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="my-1">
                <a href="https://www.linkedin.com/company/csen-dz">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li className="my-1">
                <a href="https://github.com/CSEN-Dz">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li className="my-1">
                <a href="https://www.youtube.com/channel/UCVMN5tTizPkj2UN4Csj2MzQ">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li className="my-1">
                <a href="https://drive.google.com/drive/folders/1XsIR2CTtBUoyjLmn1IhGgFM1Tc5bKcj_?usp=drive_link">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center my-3">
            <ul>
              <li>
                <a className="text-white text-center" href="#">
                  <i className="fa fa-phone"></i> +213 771 69 21 63
                </a>
              </li>
              <li>
                <a className="text-white" href="mailto:contact@csen-dz.com">
                  <i className="fa fa-envelope">contact@csen-dz.com</i>
                </a>
              </li>
            </ul>
          </div>
          <div className="row text-center w-100">
            <div className="col-lg-12 ">
              <p className="copyright text-center">
                {" "}
                &copy; Copyright {new Date().getFullYear()} All right reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
