import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import oms from "../images/oms.png";
import afp from "../images/afp.jpg";
import ecoways from "../images/ecoways.png";
import insta from "../images/insta.png";
import tindog from "../images/tindog.png";
import storyBook from "../images/storybook.png";
import imc from "../images/imc.png";
import { CONST } from "../utils/const";

const Timeline = () => {
  const { t } = useTranslation();
  const [work, setWork] = useState("software");
  const returnGithubUrl = (repo) => `${CONST.GITHUB}/${repo}`;
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
                  <a onClick={() => setWork("software")}>{t("software")}</a>
                </span>
                <span>
                  <a onClick={() => setWork("apps")}>{t("apps")}</a>
                </span>
                <span>
                  <a onClick={() => setWork("personalProjects")}>
                    {t("personalProjects")}
                  </a>
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
                style={{
                  backgroundImage: `url(${oms})`,
                  backgroundSize: "contain",
                }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="https://omstock.app/">{t("oms")}</a>
                    </h3>
                    <span>{t("omsDesc")}</span>
                    <p className="icon">
                      <span>
                        <a href="https://omstock.app/" target={"_blank"}>
                          <i className="icon-chrome"></i>
                        </a>
                      </span>
                      <span>
                        <a href="https://omstock.app/" target={"_blank"}>
                          <i className="icon-firefox"></i>
                        </a>
                      </span>
                      <span>
                        <a href="https://omstock.app/" target={"_blank"}>
                          <i className="icon-safari"></i>
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
                style={{
                  backgroundImage: `url(${afp})`,
                }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="/">{t("afpCapital")}</a>
                    </h3>
                    <span>{t("mobileApp")}</span>
                    <p className="icon">
                      <span>
                        <a href="https://apps.apple.com/cl/app/mi-afp-capital/id1573411065">
                          <i className="icon-appleinc"></i>{" "}
                          {t("viewOnAppStore")}
                        </a>
                      </span>
                      <span>
                        <a
                          href="https://play.google.com/store/apps/details?id=cl.sura.afpcapital.appa.movil&hl=es_CL&gl=US"
                          target={"_blank"}
                        >
                          <i className="icon-android"></i>{" "}
                          {t("viewOnPlayStore")}
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
                style={{
                  backgroundImage: `url(${ecoways})`,
                }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="/">{t("ecoWays")}</a>
                    </h3>
                    <span>{t("mobileApp")}</span>
                    <p className="icon">
                      <span>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.walmart.ecoways&hl=en_US&gl=US"
                          target={"_blank"}
                        >
                          <i className="icon-android"></i>{" "}
                          {t("viewOnPlayStore")}
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
                style={{
                  backgroundImage: `url(${insta})`,
                }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href={returnGithubUrl("Insta")}>{t("instaClone")}</a>
                    </h3>
                    <span>{t("prototype")}</span>
                    <p className="icon">
                      <span>
                        <a href={returnGithubUrl("Insta")} target={"_blank"}>
                          <i className="icon-git"></i> {t("viewCodeOnGithub")}
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
                style={{
                  backgroundImage: `url(${tindog})`,
                }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href={returnGithubUrl("tindog")}>{t("tindog")}</a>
                    </h3>
                    <span>{t("application")}</span>
                    <p className="icon">
                      <span>
                        <a href={returnGithubUrl("tindog")} target={"_blank"}>
                          <i className="icon-git"></i> {t("viewCodeOnGithub")}
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
                style={{
                  backgroundImage: `url(${storyBook})`,
                }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href={returnGithubUrl("testStoryBook")}>
                        {t("storyBook")}
                      </a>
                    </h3>
                    <span>{t("uikit")}</span>
                    <p className="icon">
                      <span>
                        <a
                          href={returnGithubUrl("testStoryBook")}
                          target={"_blank"}
                        >
                          <i className="icon-git"></i> {t("viewCodeOnGithub")}
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
                style={{
                  backgroundImage: `url(${imc})`,
                }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a
                        href={
                          "https://apps.apple.com/us/app/imc-calculator/id1560846103?l=es"
                        }
                      >
                        {t("imc")}
                      </a>
                    </h3>
                    <span>{t("imcDesc")}</span>
                    <p className="icon">
                      <span>
                        <a href="https://apps.apple.com/us/app/imc-calculator/id1560846103?l=es">
                          <i className="icon-appleinc"></i>{" "}
                          {t("viewOnAppStore")}
                        </a>
                      </span>
                      <span>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.imccalculatorplus&hl=es&gl=US"
                          target={"_blank"}
                        >
                          <i className="icon-android"></i>{" "}
                          {t("viewOnPlayStore")}
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

      <section class="colorlib-contact" data-section="contact">
        <div class="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">{t("contactMe")}</span>
              <h2 className="colorlib-heading">{t("contact")}</h2>
            </div>
          </div>
          <div class="row">
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
                    <a href={`mailto:${CONST.EMAIL}`} target={"_blank"}>
                      {CONST.EMAIL}
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
                  <p>{CONST.CITY}</p>
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
                    <a href={CONST.GITHUB} target={"_blank"}>
                      {t("githupPage")}
                    </a>
                  </p>
                </div>
              </div>
              {/* <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon">
                  <i className="icon-twitter2"></i>
                </div>
                <div className="colorlib-text">
                  <p>
                    <a href={CONST.TWITTER} target={"_blank"}>
                      {CONST.TWITTER}
                    </a>
                  </p>
                </div>
              </div> */}
              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon">
                  <i className="icon-instagram"></i>
                </div>
                <div className="colorlib-text">
                  <p>
                    <a href={CONST.INSTAGRAM} target={"_blank"}>
                      {CONST.INSTAGRAM}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* <div class="col-md-7 col-md-push-1">
              <div class="row">
                <div
                  class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <form action="">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder={t("name")}
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder={t("email")}
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder={t("subject")}
                      />
                    </div>
                    <div class="form-group">
                      <textarea
                        name=""
                        id="message"
                        cols="30"
                        rows="7"
                        class="form-control"
                        placeholder={t("message")}
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <input
                        type="submit"
                        class="btn btn-primary btn-send-message"
                        value={t("sendMessage")}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* footer end */}
    </div>
  );
};

export default Timeline;
