import React from "react";
import Footer from "../../components/footer/FooterAnimation";
import Portfolio from "../../components/portfolio/cursosIMG";
import useDocumentTitle from "../../components/useDocumentTitle";
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import Header from "../../components/header/Header";

const Cursos = () => {
  useDocumentTitle("David Ramirez");
  return (
    <div className="home-dark">
      <Header />
      {/* Portfolio */}
      <section id="work" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">NUESTROS CURSOS</h3>
              <p>
                labate de conocimiento con tus desempeños en nuestra Academia
                de Estudios con cursos creados para otorgarle la
                forma a tus proyectos y alcanzar tus metas.
              </p>
              <FloatingWhatsApp
                zIndex="1"
                phone='+573232805247'
              />
            </div>
          </div>
          {/* End .row */}
          <Portfolio />
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

export default Cursos;
