import React, { Component } from "react";
import { useTranslation } from "react-i18next";

const Timeline = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section className="colorlib-experience" data-section="experience">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">{t("experience")}</span>
              <h2 className="colorlib-heading animate-box">
                {t("workExperience")}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-1">
                      <i className="icon-display2"></i>
                    </div>

                    <div className="timeline-label">
                      <h2>
                        <a href="/">{t("biceTitle")} </a>
                        <span>{t("biceYear")}</span>
                      </h2>
                      <p>{t("biceDesc")}</p>
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-display2"></i>
                    </div>

                    <div className="timeline-label">
                      <h2>
                        <a href="/">{t("srTitle")} </a>
                        <span>{t("srYear")}</span>
                      </h2>
                      <p>{t("srDesc")}</p>
                    </div>
                  </div>
                </article>

                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-display2"></i>
                    </div>

                    <div className="timeline-label">
                      <h2>
                        <a href="/">{t("srTitle")} </a>
                        <span>{t("srYear")}</span>
                      </h2>
                      <p>{t("srDesc")}</p>
                    </div>
                  </div>
                </article>

                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-display2"></i>
                    </div>
                    <div className="timeline-label">
                      <h2>
                        <a href="/">{t("suraMobileDeveloper")} </a>
                        <span>{t("suraYear")}</span>
                      </h2>
                      <p>{t("suraDesc")}</p>
                      <p>{t("suraDesc2")}</p>
                    </div>
                  </div>
                </article>

                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-display2"></i>
                    </div>
                    <div className="timeline-label">
                      <h2>
                        <a href="/">{t("freelanceTitle")}</a>{" "}
                        <span>{t("freelanceYear")}</span>
                      </h2>
                      <p>{t("freelanceDesc")}</p>
                    </div>
                  </div>
                </article>

                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-display2"></i>
                    </div>
                    <div className="timeline-label">
                      <h2>
                        <a href="/">{t("phpTitle")} </a>
                        <span>{t("phpYear")}</span>
                      </h2>
                      <p>{t("phpDesc")}</p>
                      <p>{t("phpDesc2")}</p>
                    </div>
                  </div>
                </article>

                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInTop"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-display2"></i>
                    </div>
                    <div className="timeline-label">
                      <h2>
                        <a href="/">{t("betTitle")} </a>
                        <span>{t("betYear")}</span>
                      </h2>
                      <p>{t("betDesc")}</p>
                    </div>
                  </div>
                </article>

                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-display2"></i>
                    </div>
                    <div className="timeline-label">
                      <h2>
                        <a href="/">{t("internTitle")} </a>
                        <span>{t("internYear")}</span>
                      </h2>
                      <p>{t("internDesc")}</p>
                      <p>{t("internDesc2")}</p>
                    </div>
                  </div>
                </article>

                <article
                  className="timeline-entry begin animate-box"
                  data-animate-effect="fadeInBottom"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none"></div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* otra seccion */}
      <section className="colorlib-work" data-section="work">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">{t("myWork")}</span>
              <h2 className="colorlib-heading animate-box">
                {t("recentWork")}
              </h2>
            </div>
          </div>
          <div
            className="row row-bottom-padded-sm animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="col-md-12">
              <p className="work-menu">
                <span>
                  <a href="/">{t("software")}</a>
                </span>
                <span>
                  <a href="/">{t("apps")}</a>
                </span>
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(../images/splash.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="/">Lecaros APP</a>
                    </h3>
                    <span>Mobile App</span>
                    <p className="icon">
                      <span>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.lecarosapp&hl=es"
                          target={"_blank"}
                        >
                          <i className="icon-android"></i>View on Google Play
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(../images/unnamed.jpg)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="/">AFP Capital APP</a>
                    </h3>
                    <span>Mobile App</span>
                    <p className="icon">
                      <span>
                        <a href="https://itunes.apple.com/cl/app/afp-capital/id1380508222?mt=8">
                          <i className="icon-appleinc"></i> View on App Store
                        </a>
                      </span>
                      <span>
                        <a
                          href="https://play.google.com/store/apps/details?id=cl.sura.afpcapital.movil"
                          target={"_blank"}
                        >
                          <i className="icon-android"></i> View on Play Store
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInTop"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(../images/insta.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="/">
                        A simple Instagram clone made with React Native
                      </a>
                    </h3>
                    <span>Prototype</span>
                    <p className="icon">
                      <span>
                        <a
                          href="https://gitlab.com/offcarlospetit/Insta"
                          target={"_blank"}
                        >
                          <i className="icon-git"></i> View Code On GitLab
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInBottom"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(../images/tindog.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="/">
                        Tindog: a simple clone of the Tinder application, but
                        for your pet! this app was made in Swift 4 and with
                        Firebase
                      </a>
                    </h3>
                    <span>Application</span>
                    <p className="icon">
                      <span>
                        <a
                          href="https://gitlab.com/offcarlospetit/tindog"
                          target={"_blank"}
                        >
                          <i className="icon-git"></i> View Code On GitLab
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* otra seccion */}
      {/* footer */}
      <section className="colorlib-contact" data-section="contact">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Get in Touch</span>
              <h2 className="colorlib-heading">Contact</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon">
                  <i className="icon-mail"></i>
                </div>
                <div className="colorlib-text">
                  <p>
                    <a href="mailto:offcarlospetit@gmail.com" target={"_blank"}>
                      offcarlospetit@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon">
                  <i className="icon-map"></i>
                </div>
                <div className="colorlib-text">
                  <p>Santiago, Chile</p>
                </div>
              </div>
              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon">
                  <i className="icon-github"></i>
                </div>
                <div className="colorlib-text">
                  <p>
                    <a
                      href="https://gitlab.com/offcarlospetit"
                      target={"_blank"}
                    >
                      View my GitLab Page
                    </a>
                  </p>
                </div>
              </div>
              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon">
                  <i className="icon-twitter2"></i>
                </div>
                <div className="colorlib-text">
                  <p>
                    <a
                      href="https://twitter.com/offcarlospetit"
                      target={"_blank"}
                    >
                      Twitter
                    </a>
                  </p>
                </div>
              </div>
              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon">
                  <i className="icon-instagram"></i>
                </div>
                <div className="colorlib-text">
                  <p>
                    <a
                      href="https://instagram.com/offcarlospetit"
                      target={"_blank"}
                    >
                      Instagram
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer end */}
    </div>
  );
};

export default Timeline;
