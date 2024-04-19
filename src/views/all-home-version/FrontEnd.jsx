import React from "react";
import Footer from "../../components/footer/FooterAnimation";
import FrontEndIMG from "../../components/portfolio/FrontEndIMG";
import useDocumentTitle from "../../components/useDocumentTitle";
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import Header from "../../components/header/Header";

const HomeSix = () => {
  useDocumentTitle("Home Video Dark || React Personal Portfolio Template");
  return (
    <div className="home-dark">

      <Header />
      <section id="work" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">FRONT-END</h3>
              <p>
                Conviértete en un Programador front-end
                aprendiendo con Profesores Líderes en la Industria.
              </p>
            </div>
          </div>
          {/* End .row */}
          <FloatingWhatsApp
            zIndex="1"
            phone='+573232805247'
            
          />
          <FrontEndIMG />
        </div>
      </section>
      {/* End Portfolio */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default HomeSix;
