import React from "react";
import BackEndSlider from "../../components/slider/BackEndSlider";
import ComoCrearIMG from "../../components/portfolio/ComoCrearIMG";
import Footer from "../../components/footer/FooterAnimation";
import useDocumentTitle from "../../components/useDocumentTitle";
import 'react-floating-whatsapp-button/dist/index.css'
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'


const HomeFour = () => {
  useDocumentTitle("David Ramirez ");
  return (
    <div className="home-dark">
      {/* End Header Section */}
      <BackEndSlider />
      {/* End Banner Section */}

      <section id="work" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">¿COMO CREAR UN PROYECTO WEB?</h3>
            </div>
          </div>
          {/* End .row */}
          <ComoCrearIMG />
          <FloatingWhatsApp
            zIndex="1"
            phone='+573232805247'
      />
        </div>
      </section>
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
