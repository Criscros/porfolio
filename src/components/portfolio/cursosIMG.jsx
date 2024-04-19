import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const tabList = ["ENFOQUES",];
const AllPortfolioContent = [
  {
    img: "1",
    title: "BACK-END",
    alterText: "Motion Graphy",
    portfolioLink:
      "/back-end",
  },
  {
    img: "2",
    title: "FRONT-END",
    alterText: "Elearning App",
    portfolioLink:
      "/front-end",
  },
  {
    img: "3",
    title: "BASES DE DATOS",
    alterText: "Business Mockup",
    portfolioLink:
      "/bases-de-datos",
  },
  {
    img: "4",
    title: "APPS",
    alterText: "E-Cosmetics",
    portfolioLink:
      "/apps",
  },
  {
    img: "5",
    title: "ARQUITECTURA DE SOFTWARE",
    alterText: "Bottle Illustration",
    portfolioLink:
      "/arquitectura-de-software",
  },
  {
    img: "6",
    title: "¿COMO CREAR UN PROYECTO WEB?",
    alterText: "Web Application",
    portfolioLink:
      "/como-crear-proyecto-web",
  },
];

const Portfolio = () => {
  return (
    <SimpleReactLightbox>
      <div className="positon-relative">
        <div className="portfolio-filter-01">
          <Tabs>
            <TabList className="filter d-flex justify-content-center">
              {tabList.map((val, i) => (
                <Tab key={i}>{val}</Tab>
              ))}
            </TabList>
            {/* End tablist */}

            <SRLWrapper>
            <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  {AllPortfolioContent.map((val, i) => (
                    <div
                      className="col-sm-6 col-lg-4 grid-item product"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-box-01">
                        <div className="portfolio-img">
                          <div className="portfolio-info">
                            <h5>
                              <a href={val.portfolioLink}>
                                {val.title}
                              </a>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          {/* End .portfolio-info */}
                      
                            <img
                              src={`img/cursos/${val.img}.jpg`}
                              alt={val.alterText}
                            />
                        
                          {/* End gallery link */}
                          <a
                            href={val.portfolioLink}
                            className="portfolio-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ti-link"></span>
                          </a>
                          {/* End .portfolio-icon */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* End list wrapper */}
              </TabPanel>
            </SRLWrapper>
            {/* End tabpanel */}
          </Tabs>
        </div>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;
