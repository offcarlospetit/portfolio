import React, { Component } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">{t("abouttitle")}</span>
                    <h2
                      className="colorlib-heading"
                      style={{ marginBottom: "1em" }}
                    >
                      {t("whoIam")}
                    </h2>
                    <p>
                      <strong>{t("hiIamCarlos")}. </strong> {t("p1")}
                    </p>
                    <p>{t("p2")}</p>
                    <p>{t("p3")}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="services color-1">
                    <span className="icon2">
                      <i className="icon-bulb"></i>
                    </span>
                    <h3>{t("developer")}</h3>
                  </div>
                </div>
                {/* <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="services color-2">
                    <span className="icon2">
                      <i className="icon-globe-outline"></i>
                    </span>
                    <h3>Desarrollador web</h3>
                  </div>
                </div> */}
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInTop"
                >
                  <div className="services color-3">
                    <span className="icon2">
                      <i className="icon-data"></i>
                    </span>
                    <h3>{t("software")}</h3>
                  </div>
                </div>
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInBottom"
                >
                  <div className="services color-4">
                    <span className="icon2">
                      <i className="icon-phone3"></i>
                    </span>
                    <h3>{t("mobile")}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* otra seccion */}
      <section className="colorlib-services" data-section="services">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">{t("whatIDo")}</span>
              <h2 className="colorlib-heading">{t("hereInsights")}</h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <i className="icon-bulb"></i>
                </span>
                <div className="desc">
                  <h3>{t("ideas")}</h3>
                  <p>{t("bealive")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-2">
                <span className="icon">
                  <i className="icon-data"></i>
                </span>
                <div className="desc">
                  <h3>{t("software")}</h3>
                  <p>{t("softwaredesc")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <i className="icon-phone3"></i>
                </span>
                <div className="desc">
                  <h3>{t("mobileApplications")}</h3>
                  <p>{t("mobileDesc")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-4">
                <span className="icon">
                  <i className="icon-spinner7"></i>
                </span>
                <div className="desc">
                  <h3>{t("consultancy")}</h3>
                  <p>{t("consultancyDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* fin seccion */}
      <div
        id="colorlib-counter"
        className="colorlib-counters"
        style={{ backgroundImage: "url(../images/IMG_0656.jpg)" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="colorlib-narrow-content">
          <div className="row"></div>
          <div className="row">
            <div className="col-md-3 text-center animate-box">
              <span
                className="colorlib-counter js-counter"
                data-from="0"
                data-to="5475"
                data-speed="10000"
                data-refresh-interval="100"
              ></span>
              <span className="colorlib-counter-label">{t("cupOfCoffee")}</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span
                className="colorlib-counter js-counter"
                data-from="0"
                data-to="25"
                data-speed="5000"
                data-refresh-interval="50"
              ></span>
              <span className="colorlib-counter-label">{t("projects")}</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span
                className="colorlib-counter js-counter"
                data-from="0"
                data-to="3"
                data-speed="5000"
                data-refresh-interval="50"
              ></span>
              <span className="colorlib-counter-label">{t("clients")}</span>
            </div>
          </div>
        </div>
      </div>
      {/* otra seccion */}

      <section className="colorlib-skills" data-section="skills">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">{t("mySpecialty")}</span>
              <h2 className="colorlib-heading animate-box">{t("mySkills")}</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <p>{t("skillsDesc")}</p>
              <p>{t("skillsDescFollow")}</p>
            </div>

            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3>React Native</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-6"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3>Git</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-4"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3>JavaScript</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-3"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3>Swift 4</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-3"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3>Node JS</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-3"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3>React JS</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-2"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3>Python</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-5"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                <h3>HTML5</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-3"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="100"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3>CSS3</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-4"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="100"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                <h3>Docker</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-5"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="100"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3>Symfony 2+</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-6"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="100"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                <h3>MySQL/Oracle DB o Bases de datos Relacionales</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-5"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="100"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                <h3>IBM Cloud</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-1"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="100"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                <h3>Google Cloud</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-1"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="100"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                <h3>English - Compression and reading</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-2"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="100"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                <h3>PHP</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-1"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3>Java</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-3"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* otra seccion */}

      <section className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">{t("education")}</span>
              <h2 className="colorlib-heading animate-box">{t("education")}</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="fancy-collapse-panel">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          {t("compIng")}
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseOne"
                      className="panel-collapse collapse in"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-md-12">
                            <p>
                              {t("compIngDesc")}
                              <strong>{t("compIngDesc2")}</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          {t("reactNativeCareer")}
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseTwo"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                    >
                      <div className="panel-body">
                        <p>{t("reactNativeCareerDesc")}</p>
                        <ul>
                          <li>{t("reactNativeLib1")}</li>
                          <li>{t("reactNativeLib2")}</li>
                          <li>{t("reactNativeLib3")}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          {t("careerApple")}
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseThree"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                    >
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-md-6">
                            <p>{t("careerAppleDesc")}</p>
                          </div>
                          <div className="col-md-6">
                            <p>{t("careerAppleDesc2")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          {t("others")}
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseFour"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingFour"
                    >
                      <div className="panel-body">
                        <ul>
                          <li>{t("scrum")}</li>
                          <li>{t("courseProfesionalGit")}</li>
                          <li>{t("ibm")}</li>
                          <li>{t("java")}</li>
                          <li>{t("javascript")}</li>
                          <li>{t("reactjs")}</li>
                          <li>{t("brand")}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
