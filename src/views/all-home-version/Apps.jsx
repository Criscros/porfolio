import React from "react";
import AppsIMG from "../../components/portfolio/AppsIMG";
import useDocumentTitle from "../../components/useDocumentTitle";
import Footer from "../../components/footer/FooterAnimation";
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'


const HomeFive = () => {
  useDocumentTitle("Home Video Light || React Personal Portfolio Template");
  return (
    <>
    <div className="home-dark">

      <section id="work" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">Aplicaciones Desarrolladas</h3>
              <p>
              Aprende los trucos y conceptos básicos para desarrollar aplicaciones para cualquier dispositivo móviles.
              </p>
            </div>
          </div>
          {/* End .row */}
          <AppsIMG />
          <FloatingWhatsApp
            zIndex="1"
            phone='+573232805247'

      />
        </div>
      </section>
      {/* End Portfolio */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/*  End Footer */}
      </div>
    </>
  );
};

export default HomeFive;
