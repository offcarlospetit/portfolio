import React, { Component } from "react";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <nav
          href="#navbar"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <i />
        </nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          {/* <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
              <h1 id="colorlib-logo"><a href="index.html">Dhruv Barochiya</a></h1>
              <span className="email"><i className="icon-mail"></i> Dhruv.barochiya34788@gmail.com</span>
            </div> */}
          <div className="text-center">
            <div
              className="author-img"
              style={{ backgroundImage: "url(images/about3.jpg)" }}
            ></div>
            <h1 id="colorlib-logo">
              <a href="index.html">Carlos Petit</a>
            </h1>
            <span className="position">{t("aboutme")}</span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li class="active">
                  <a href="/" data-nav-section="home">
                    {t("home")}
                  </a>
                </li>
                <li>
                  <a href="/" data-nav-section="about">
                    {t("about")}
                  </a>
                </li>
                <li>
                  <a href="/" data-nav-section="services">
                    {t("services")}
                  </a>
                </li>
                <li>
                  <a href="/" data-nav-section="skills">
                    {t("skills")}
                  </a>
                </li>
                <li>
                  <a href="/" data-nav-section="education">
                    {t("education")}
                  </a>
                </li>
                <li>
                  <a href="/" data-nav-section="experience">
                    {t("experience")}
                  </a>
                </li>
                <li>
                  <a href="/" data-nav-section="work">
                    {t("work")}
                  </a>
                </li>
                <li>
                  <a href="/" data-nav-section="contact">
                    {t("contact")}
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
          </nav>
          {/* <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/dhruv.barochia" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/ddbarochiya" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/ddbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/dhruv-b-545b52a9/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/Dhruv34788" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
              </ul>
            </nav> */}
          <div className="colorlib-footer">
            <p>
              <small>
                {t("made")} <i className="icon-heart" aria-hidden="true" />{" "}
                {t("and")} <i className="icon-beer" aria-hidden="true"></i>
                <br></br>
                {t("thanks")}{" "}
                <a
                  href="https://colorlib.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colorlib
                </a>{" "}
                {t("forInspiration")}
              </small>
            </p>
            <p>
              
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
