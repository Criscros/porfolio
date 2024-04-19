import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const tabList = ["ENFOQUES",];
const AllPortfolioContent = [
  {
    img: "1",
    title: "FULL STACK DEVELOPER",
    alterText: "Full Stack Developer",
    portfolioLink:
      "https://www.youtube.com/watch?v=qOqG8MfFx0E",
  },
  {
    img: "2",
    title: "DAVIVIENDA",
    alterText: "Elearning App",
    portfolioLink:
      "https://www.youtube.com/watch?v=KDEdVtK6LqQ",
  },
  {
    img: "3",
    title: "SEGUROS BOLIVAR",
    alterText: "Business Mockup",
    portfolioLink:
      "https://www.youtube.com/watch?v=YLzIRi2DOVc",
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
                              <a href={val.portfolioLink} target="_blank"
                                  rel="noreferrer"
                                >
                                {val.title}
                              </a>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          {/* End .portfolio-info */}
                      
                            <img
                              src={`img/apps/${val.img}.jpg`}
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
