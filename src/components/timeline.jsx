import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Experiencia</span>
                <h2 className="colorlib-heading animate-box">Experiencia laboral</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">

                      <div className="timeline-icon color-1">
                        <i className="icon-pen2"></i>
                      </div>

                      <div className="timeline-label">
                        <h2><a href="/">Desarrollador y consultor para S.R Consultores</a> <span>Mar 2019 - Presente</span></h2>
                        <p>Actualmente participando activamente en la transformacion digital en Walmart Chile, generando soluciones para nuestros clientes y colaboradores haciendo enfasis en la innovacion y la agilidad. Actualmente trabajando con tecnologias como React Native, Android Nativo, Node JS, Mongo DB, API REST, Kubernetes. </p>
                      </div>
                    </div>
                  </article>


                  <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2"></i>
                      </div>
                      <div className="timeline-label">
                        <h2><a href="/">Desarrollador de aplicaciones móviles</a> <span>Oct 2018- Feb 2019</span></h2>
                        <p>Consultor de desarrollo móvil para la empresa Sura, en este puesto trabajé como programador de aplicaciones móviles, la aplicación AFP Capital se desarrolló en el Marco Xamarin, también brindé soporte a la aplicación de reembolso colectivo Sura, aplicación desarrollada en React-Native.</p>
                        <p>Uso de los servicios REST y SOAP. Gestión de IBM Cloud, API Connect, Mobile First Platform.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2"></i>
                      </div>
                      <div className="timeline-label">
                        <h2><a href="/">Desarrollador de aplicaciones móviles Freelance</a> <span>Dec 2018- Feb 2019</span></h2>
                        <p>Development of the application Lecaros APP for the real estate company and property management Lecaros, an application designed for the management and maintenance of the properties available for lease or sale. Developed in React Native, with libraries for the use of the camera, maps, consumption of Rest APIs, among others.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2"></i>
                      </div>
                      <div className="timeline-label">
                        <h2><a href="/">Desarrollador PHP Jr y desarrollador React Native</a> <span>Nov 2017- Sep 2018</span></h2>
                        <p>Desarrollé dos aplicaciones prototipo en React Native como una propuesta para migrar de Ionic a React Native para la compañía GrupoSolux como parte de mi capacitación en esa tecnología.</p>
                        <p>Como desarrollador de PHP, participé en varios sistemas desarrollados por la compañía para los sectores público y privado. Trabajamos con instituciones como Registro Civil, ChileValora, para la firma de abogados Navarro Y Asociados, entre otros proyectos.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2"></i>
                      </div>
                      <div className="timeline-label">
                        <h2><a href="/">Desarrollador de software</a> <span>Ene 2015 - Ene 2016</span></h2>
                        <p>Apuestas La Seguridad</p>
                        <p>Durante este período, construí todo el sistema digital para la administración y el mantenimiento de los equipos de la compañía, además de crear el sistema de contabilidad de la compañía y el sistema de pago de salarios de los trabajadores.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2"></i>
                      </div>
                      <div className="timeline-label">
                        <h2><a href="/">Desarrollador de software</a> <span>Ene 2013-Dic 2014</span></h2>
                        <p>UNET</p>
                        <p>Liderar el proyecto para la creación de un sistema de coordinación deportiva llamado SIGEDU</p>
                        <p>Liderar, desarrollar una propuesta de sistema para generar un sistema de material académico para todos los miembros de la comunidad universitaria, virtualizando guías, libros, apuntes, exámenes, dando así un acceso rápido a la información.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
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
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Mi trabajo</span>
                <h2 className="colorlib-heading animate-box">Trabajo reciente</h2>
              </div>
            </div>
            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
              <div className="col-md-12">
                <p className="work-menu">
                  <span>
                    <a href="/">Software</a>
                  </span>
                  <span>
                    <a href="/">Apps</a>
                  </span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                <div className="project" style={{ backgroundImage: "url(../images/splash.png)" }}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="/">Lecaros APP</a></h3>
                      <span>Mobile App</span>
                      <p className="icon">
                        <span><a href="https://play.google.com/store/apps/details?id=com.lecarosapp&hl=es" target={"_blank"}><i className="icon-android"></i>View on Google Play</a></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                <div className="project" style={{ backgroundImage: "url(../images/unnamed.jpg)" }}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="/">AFP Capital APP</a></h3>
                      <span>Mobile App</span>
                      <p className="icon">
                        <span><a href="https://itunes.apple.com/cl/app/afp-capital/id1380508222?mt=8"><i className="icon-appleinc"></i> View on App Store</a></span>
                        <span><a href="https://play.google.com/store/apps/details?id=cl.sura.afpcapital.movil" target={"_blank"}><i className="icon-android"></i> View on Play Store</a></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
                <div className="project" style={{ backgroundImage: "url(../images/insta.png)" }}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="/">A simple Instagram clone made with React Native</a></h3>
                      <span>Prototype</span>
                      <p className="icon">
                        <span><a href="https://gitlab.com/offcarlospetit/Insta" target={"_blank"}><i className="icon-git"></i> View Code On GitLab</a></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">
                <div className="project" style={{ backgroundImage: "url(../images/tindog.png)" }}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="/">Tindog: a simple clone of the Tinder application, but for your pet! this app was made in Swift 4 and with Firebase</a></h3>
                      <span>Application</span>
                      <p className="icon">
                        <span><a href="https://gitlab.com/offcarlospetit/tindog" target={"_blank"}><i className="icon-git"></i> View Code On GitLab</a></span>
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
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Get in Touch</span>
                <h2 className="colorlib-heading">Contact</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-mail"></i>
                  </div>
                  <div className="colorlib-text">
                    <p><a href="mailto:offcarlospetit@gmail.com" target={"_blank"}>offcarlospetit@gmail.com</a></p>
                  </div>
                </div>
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-map"></i>
                  </div>
                  <div className="colorlib-text">
                    <p>Santiago, Chile</p>
                  </div>
                </div>
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-github"></i>
                  </div>
                  <div className="colorlib-text">
                    <p><a href="https://gitlab.com/offcarlospetit" target={"_blank"}>View my GitLab Page</a></p>
                  </div>
                </div>
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-twitter2"></i>
                  </div>
                  <div className="colorlib-text">
                    <p><a href="https://twitter.com/offcarlospetit" target={"_blank"}>Twitter</a></p>
                  </div>
                </div>
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-instagram"></i>
                  </div>
                  <div className="colorlib-text">
                    <p><a href="https://instagram.com/offcarlospetit" target={"_blank"}>Instagram</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* footer end */}
      </div>
    )
  }
}
