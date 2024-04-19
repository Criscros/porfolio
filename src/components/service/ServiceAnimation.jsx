import React from "react";

const ServiceContent = [
  {
    icon: "ti-cloud",
    title: "Arquitectura de Software",
    descriptions: `Orquestacion y Despliege de arquitectura de Software`,
    animationDealy: "",
  },
  {
    icon: "ti-agenda",
    title: "Software Development",
    descriptions: `Experience using the mostly frameworks front-end, back-end.`,
    animationDealy: "100",
  },
  {
    icon: "ti-layout",
    title: "Apis REST",
    descriptions: `Building Api REst using node.js, php, java, python .`,
    animationDealy: "200",
  },
  {
    icon: "ti-brush-alt",
    title: "Cloud",
    descriptions: `Experience using the most important services on AWS.`,
    animationDealy: "300",
  },
  {
    icon: "icon-database",
    title: "DATA BASES",
    descriptions: `Experience using relacional databases and no relationalas like MongoDB and Redis.`,
    animationDealy: "400",
  },
  {
    icon: "ti-world",
    title: "CI/CD",
    descriptions: `Experience using Codepipeline and Github Actions.`,
    animationDealy: "500",
  },
];

export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-dealay={val.animationDealy}
          >
            <div className="feature-box-01">
              <div>
                <div className="icon">
                  <i className={val.icon}></i>
                </div>
                <div className="feature-content">
                  <h5>{val.title}</h5>
                  <p>{val.descriptions}</p>
                </div>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
        {/* End .col */}
      </div>
    </>
  );
}
