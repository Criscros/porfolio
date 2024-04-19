import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderFourAnimation";
import About from "../../components/about/AboutDarkAnimation";
import Service from "../../components/service/ServiceAnimation";
import Skills from "../../components/skills/SkillsAnimation";
import InicioIMG from "../../components/portfolio/InicioIMG";
import Footer from "../../components/footer/FooterAnimation";
import useDocumentTitle from "../../components/useDocumentTitle";
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'

const HomeFour = () => {
  useDocumentTitle("David Ramirez ");
  return (
    <div className="home-dark">
      <Header />
      {/* End Header Section */}
      <Slider />
      {/* End Banner Section */}

      {/* About Me */}
      <section id="about" className="section about-section after-left-section">
        <div className="container">
          <About />
        </div>
      </section>
      {/* End About Me */}
      
      {/*  Skills */}
      <section className="section skill-section">
        <div className="container">
          <Skills />
        </div>
      </section>
      {/* End Skills */}
      
      <FloatingWhatsApp
            zIndex="1"
            phone='+573232805247'
            popupMessage="Talk to me"
            accountName="DAVID"
      />
      <section id="work" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">Profesional Experience</h3>
              <p>
                SOME COMPANIES WHAT TRUS ON ME AS Aws DEVELOPER.
              </p>
            </div>
          </div>
          {/* End .row */}
          <InicioIMG />
        </div>
      </section>
      {/* End Portfolio */}

      {/* Services */}
      <section id="services" className="section services-section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt"> Knowledges</h3>
              <p>
              Some Skills
              </p>
            </div>
          </div>
          {/* End .row */}
          <Service />
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
