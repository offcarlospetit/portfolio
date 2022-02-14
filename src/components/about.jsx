import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">Sobre mi</span>
                                            <h2 className="colorlib-heading" style={{ marginBottom: "1em" }}>Who Am I?</h2>
                                            <p><strong>Hola soy carlos petit</strong> Lo que hacemos es el testimonio de quienes somos. Las personas pueden estar involucradas o no, pero para mí es una cuestión de respeto por los demás. No involucrarse en el trabajo es simplemente un delito.</p>
                                            <p>Haga que cada producto sea lo mejor posible, demostrando y llevando mis capacidades al límite. Centrado en la forma y las herramientas. Lo que no incluimos es tan importante como lo que incluimos. El objetivo es claro y no es ganar dinero. El objetivo que debe perseguirse desesperadamente es hacer el mejor producto posible. Si confía en que lo ha logrado, a la gente le gustará, lo comprará y disfrutará de usarlo.</p>
                                            <p>No tengo miedo de fallar. Si no fallamos, es que no estamos tratando lo suficiente. El 80% de las cosas que desarrollo en el estudio no son lo suficientemente buenas. Si después de dar lo mejor de mí no creo que sea lo suficientemente bueno, simplemente dejo de trabajar en él y continúo el proceso de iteración hasta que obtengo un producto que es de suficiente calidad.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                                        <div className="services color-1">
                                            <span className="icon2"><i className="icon-bulb"></i></span>
                                            <h3>Desarrollador</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                        <div className="services color-2">
                                            <span className="icon2"><i className="icon-globe-outline"></i></span>
                                            <h3>Desarrollador web</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                                        <div className="services color-3">
                                            <span className="icon2"><i className="icon-data"></i></span>
                                            <h3>Software</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                                        <div className="services color-4">
                                            <span className="icon2"><i className="icon-phone3"></i></span>
                                            <h3>Mobile</h3>
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
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">¿Lo que hago?</span>
                                <h2 className="colorlib-heading">Aquí están algunos de mis conocimientos</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Ideas innovadoras</h3>
                                        <p>Creo firmemente en el cambio, es necesario actualizar ideas, innovar, arriesgarse.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-2">
                                    <span className="icon">
                                        <i className="icon-data"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Software</h3>
                                        <p>Desarrollo de calidad, ágil, enfocado en el cliente, me gusta ofrecer productos de calidad.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-phone3"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Aplicaciones móviles</h3>
                                        <p>Soluciones de calidad basadas en la movilidad con tecnologías como React Native.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-4">
                                    <span className="icon">
                                        <i className="icon-spinner7"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Consultoría</h3>
                                        <p>Ofrezco servicios de consultoría para el desarrollo de software dando a mis clientes una visión centrada en esta nueva era.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* fin seccion */}
                <div id="colorlib-counter" className="colorlib-counters" style={{ backgroundImage: "url(../images/IMG_0656.jpg)" }} data-stellar-background-ratio="0.5">
                    <div className="overlay"></div>
                    <div className="colorlib-narrow-content">
                        <div className="row">
                        </div>
                        <div className="row">
                            <div className="col-md-3 text-center animate-box">
                                <span className="colorlib-counter js-counter" data-from="0" data-to="5475" data-speed="10000" data-refresh-interval="100"></span>
                                <span className="colorlib-counter-label">Tazas de café</span>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                                <span className="colorlib-counter js-counter" data-from="0" data-to="25" data-speed="5000" data-refresh-interval="50"></span>
                                <span className="colorlib-counter-label">Proyectos</span>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                                <span className="colorlib-counter js-counter" data-from="0" data-to="3" data-speed="5000" data-refresh-interval="50"></span>
                                <span className="colorlib-counter-label">Clientes</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* otra seccion */}

                <section className="colorlib-skills" data-section="skills">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Mi especialidad</span>
                                <h2 className="colorlib-heading animate-box">Mis habilidades</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <p>La informática cambia constantemente, por lo que creo firmemente que una cualidad que todos nosotros en este maravilloso mundo debería tener es ser un estudiante eterno.</p>
                                <p>A continuación se presentan algunas de las habilidades que he adquirido y perfeccionado a lo largo de los años.</p>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="progress-wrap">
                                    <h3>PHP</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-1" role="progressbar" aria-valuenow="85"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}>
                                            <span>85%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>React Native</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-6" role="progressbar" aria-valuenow="90"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                            <span>90%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>Git</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-4" role="progressbar" aria-valuenow="85"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}>
                                            <span>85%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>JavaScript</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-3" role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                            <span>80%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>Java</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-3" role="progressbar" aria-valuenow="70"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                            <span>70%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>Swift 4</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-3" role="progressbar" aria-valuenow="75"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}>
                                            <span>75%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>Node JS</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-3" role="progressbar" aria-valuenow="60"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                            <span>60%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>React JS</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-2" role="progressbar" aria-valuenow="75"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}>
                                            <span>75%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>Angular Js</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-2" role="progressbar" aria-valuenow="0"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>
                                            <span>50%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="progress-wrap">
                                    <h3>HTML5</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-3" role="progressbar" aria-valuenow="85"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}>
                                            <span>85%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>CSS3</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-4" role="progressbar" aria-valuenow="70"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                            <span>70%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="progress-wrap">
                                    <h3>Docker</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-5" role="progressbar" aria-valuenow="70"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                            <span>70%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>Symfony 2+</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-6" role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                            <span>80%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="progress-wrap">
                                    <h3>MySQL</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-5" role="progressbar" aria-valuenow="85"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}>
                                            <span>85%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="progress-wrap">
                                    <h3>Oracle DB</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-2" role="progressbar" aria-valuenow="85"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}>
                                            <span>85%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="progress-wrap">
                                    <h3>IBM Cloud</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-1" role="progressbar" aria-valuenow="75"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}>
                                            <span>75%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="progress-wrap">
                                    <h3>Google Cloud</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-1" role="progressbar" aria-valuenow="75"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}>
                                            <span>75%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="progress-wrap">
                                    <h3>English - Compression and reading</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-2" role="progressbar" aria-valuenow="75"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}>
                                            <span>75%</span>
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
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Educación</span>
                                <h2 className="colorlib-heading animate-box">Educación</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <div className="fancy-collapse-panel">
                                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingOne">
                                                <h4 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Ingeniería Informática
									            </a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                                <div className="panel-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Estudié Ingeniería Informática en la<strong>Universidad Nacional Experimental de Tachira (UNET)</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingTwo">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Carrera de DESARROLLO DE APLICACIONES CON REACT NATIVE
									            </a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                <div className="panel-body">
                                                    <p>Desarrollo de aplicaciones nativas de iOS y Android usando Javascript. Dominating React Native, el marco desarrollado por Facebook que permite reutilizar un código, manteniendo los componentes nativos para cada plataforma. usando bibliotecas y componentes como:</p>
                                                    <ul>
                                                        <li>React Navigation</li>
                                                        <li>React Redux</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingThree">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Career of APPLE FULL STACK DEVELOPER
                                                </a>
                                                </h4>
                                            </div>
                                            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                <div className="panel-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Desarrollo de aplicaciones para iPhone o iPad. Programa en Objective-C y Swift 4. Publicación de aplicaciones en la App Store y más.</p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Technologies used:
                                                            Swift 4,
                                                            Xcode 10,
                                                            Swift PlayGrounds,
                                                            Firebase</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingFour">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Otros cursos y estudios
									            </a>
                                                </h4>
                                            </div>
                                            <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                                <div className="panel-body">
                                                    <ul>
                                                        <li>Scrum</li>
                                                        <li>IBM Cloud Basics</li>
                                                        <li>Professional course of Git and GitHub</li>
                                                        <li>Java</li>
                                                        <li>JavaScript fundamentals</li>
                                                        <li>ReactJS course</li>
                                                        <li>Personal Brand Course</li>
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
        )
    }
}
