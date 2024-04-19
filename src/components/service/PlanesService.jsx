import React from "react";

const ServiceContent = [
  {
    icon: "ti-user",
    title: "$750.000",
    subtitle: "1 PERSONA",
    descriptions: `descriptions`,
    persona1: "Mas informacion",
    animationDealy: "",
  },
  {
    icon: "ti-ruler-pencil",
    title: "$500.000",
    subtitle: "2 PERSONAS",
    descriptions: ` descriptions.`,
    persona2: "Mas informacion",
    animationDealy: "100",
  },
  {
    icon: "ti-bar-chart",
    title: "$1'500.000",
    subtitle: "EMPRESAS",
    descriptions: `descriptions`,
    persona3: "Mas informacion",
    animationDealy: "200",
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
              <h5>{val.subtitle}</h5>
              <div>
                <div className="icon">
                  <i className={val.icon}></i>
                </div>
                <div className="feature-content">
                  <h5>{val.title}</h5>
                  <p>{val.descriptions}</p>
                </div>
              </div>
              <div className="btn-bar">
                <a className="px-btn px-btn-theme" rel="noreferrer"  target="_blank" href="https://wa.me/573232805247?text=Hola, Estoy interesado para el plan de una persona" >
                  <p>
                    {val.persona1}
                  </p>
                </a>
              </div>
              <div className="btn-bar">
                <a className="px-btn px-btn-theme" rel="noreferrer" target="_blank" href="https://wa.me/573232805247?text=Hola, Estoy interesado para el plan de dos personas" >
                  <p>
                    {val.persona2}
                  </p>
                </a>
              </div>
              <div className="btn-bar">
                <a className="px-btn px-btn-theme" rel="noreferrer" target="_blank" href="https://wa.me/573232805247?text=Hola, Estoy interesado para el plan empresarial" >
                  <p>
                    {val.persona3}
                  </p>
                </a>
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
