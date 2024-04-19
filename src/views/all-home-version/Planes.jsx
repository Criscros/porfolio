import React from "react";
import PlanesService from "../../components/service/PlanesService";
import Footer from "../../components/footer/FooterAnimation";
import useDocumentTitle from "../../components/useDocumentTitle";
import 'react-floating-whatsapp-button/dist/index.css'

const HomeFour = () => {
  useDocumentTitle("David Ramirez");
  return (
    <div className="home-dark">

      {/* Services */}
      <section id="services" className="section services-section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">Planes</h3>
              <p>
               Especialiastas en construccion de grandes plataformas administrables en la nube.
              </p>
            </div>
          </div>
          {/* End .row */}
          <PlanesService />
        </div>
      </section>
      {/* End Services */}
      
      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/*  End Footer */}
    </div>
  );
};

export default HomeFour;
