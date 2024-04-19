import React from "react";

const Skills = () => {
  return (
    <>
      <div className="row">
        <div
          className="col-lg-4 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="sm-title">
            <h4 className="font-alt">Education</h4>
          </div>

          <ul className="aducation-box theme-bg">
            <li>
              <span className="dark-bg">2014</span>
              <h6>Técnico programación de Software</h6>
              <p>SENA</p>
            </li>
            <li>
              <span className="dark-bg">2018</span>
              <h6>Tecnólogo Formulación de proyectos</h6>
              <p>SENA</p>
            </li>
          </ul>

          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div
          className="col-lg-4 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="sm-title">
            <h4 className="font-alt">Experience</h4>
          </div>
          <ul className="aducation-box dark-bg">
            <li>
              <span className="theme-bg">2020-2022</span>
              <h6>INSOFTAR S.A.S.</h6>
              <p>Full Stack Engineer</p>

            </li>

            <li>
              <span className="theme-bg">2019-2020</span>
              <h6>NIVELICS</h6>
              <p>Software Architect Jr</p>
            </li>

            <li>
              <span className="theme-bg">2015-2019</span>
              <h6>CREAMOS SAS</h6>
              <p>Lead Team Full Stack Developer</p>
            </li>
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div
          className="col-lg-4 ml-auto my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="sm-title">
            <h4 className="font-alt">My Skills</h4>
          </div>
          <div className="gray-bg skill-box">


            <div className="skill-lt">
              <h6>JAVASCRIPT</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 92 + "%" }}
                >
                  <span>92%</span>
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>PHP</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 82 + "%" }}
                >
                  <span>82%</span>
                </div>
              </div>
            </div>
          
            <div className="skill-lt">
              <h6>NODE.JS</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 70 + "%" }}
                >
                  <span>70%</span>
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Vue</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 60 + "%" }}
                >
                  <span>60%</span>
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Angular</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 55 + "%" }}
                >
                  <span>55%</span>
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>LINUX</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 30 + "%" }}
                >
                  <span>40%</span>
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>AWS</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 40 + "%" }}
                >
                  <span>40%</span>
                </div>
              </div>
            </div>


            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>PYTHON</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 40 + "%" }}
                >
                  <span>40%</span>
                </div>
              </div>
            </div>

            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>React</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 30 + "%" }}
                >
                  <span>30%</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default Skills;
