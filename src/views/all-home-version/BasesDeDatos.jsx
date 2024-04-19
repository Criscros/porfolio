import React from "react";
import BasesDatosIMG from "../../components/portfolio/BasesDatosIMG";
import Footer from "../../components/footer/Footer";
import useDocumentTitle from "../../components/useDocumentTitle";
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'


const HomeOne = () => {
  useDocumentTitle("Home Light || React Personal Portfolio Template");
  return (
    <>
      <div className="home-dark">

        <section id="work" className="section gray-bg">
          <div className="container">
            <div className="row justify-content-center section-title text-center">
              <div className="col-lg-7">
                <h3 className="font-alt">BASES DE DATOS</h3>
                <p>
                  Cursos de Optimización de Bases de Datos en la nube
                </p>
              </div>
            </div>
            {/* End .row */}
            <BasesDatosIMG />
            <FloatingWhatsApp
              zIndex="1"
              phone='+573232805247'
            />
          </div>
        </section>
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

export default HomeOne;
