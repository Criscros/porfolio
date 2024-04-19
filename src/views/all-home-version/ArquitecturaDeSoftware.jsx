import Footer from "../../components/footer/FooterAnimation";
import React from "react";
import ArquitecturaSoftwareIMG from "../../components/portfolio/ArquitecturaSoftwareIMG";
import useDocumentTitle from "../../components/useDocumentTitle";
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'


const HomeSix = () => {
  useDocumentTitle("Home Video Dark || React Personal Portfolio Template");
  return (
    <div className="home-dark">


      <section id="work" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">Arquitecturas</h3>
              <p>
                Desarrolla software a niveles increibles con el Curso especializa de Arquitectura de Software.
              </p>
            </div>
          </div>
          {/* End .row */}
          <FloatingWhatsApp
            zIndex="1"
            phone='+573232805247'
      />
          <ArquitecturaSoftwareIMG />
        </div>
      </section>
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default HomeSix;
