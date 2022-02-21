import React from "react";
import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{ backgroundImage: "url(images/portada4.jpg)" }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc" style={{ marginTop: "330px" }}>
                        <h1>
                          {t("hi")} <br />
                          {t("imname", { name: "Carlos" })}
                        </h1>
                        <p>
                          <a
                            className="btn btn-primary btn-learn"
                            href="certificados/CarlosPetitCV.pdf"
                            download=""
                          >
                            {t("download")} <i className="icon-download4"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{ backgroundImage: "url(images/about3.jpg)" }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc" style={{ marginTop: "330px" }}>
                        <h1>
                          {t("im")}
                          <br />
                          {t("developer")}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
