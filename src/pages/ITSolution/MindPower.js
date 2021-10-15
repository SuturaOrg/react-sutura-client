import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Card, Col, Container, Row } from "reactstrap";
//Import Icons
import FeatherIcon from "feather-icons-react";

// Import Images
import client1 from "../../assets/images/team/ambroise.png";
import client2 from "../../assets/images/team/ousmane.png";
import client3 from "../../assets/images/team/pasteur.jpg";
import client4 from "../../assets/images/team/serigne.jpeg";
import client6 from "../../assets/images/team/amary.jpg";
import client7 from "../../assets/images/team/sangare.jpg";
import client8 from "../../assets/images/team/aicha.jpeg";
import client9 from "../../assets/images/team/souleymane.jpg";
import client10 from "../../assets/images/team/sylvain.jpg";
import client11 from "../../assets/images/team/ibrahima.jpg";



export default class MindPower extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Notre équipe</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Le projet{" "}
                  <span className="text-primary fw-bold">
                    Sutura
                  </span>{" "}
                  regroupe en son sein des volontaires avec les compétences nécessaires à son bon fonctionnement.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={3} md={6} className="mt-4 pt-2">
              <Card className="team text-center border-0">
                <div className="position-relative">
                  <img
                    src={client1}
                    className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                    alt=""
                  />
                  <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                    <li className="list-inline-item ms-1">
                      <Link to={{pathname: "https://web.facebook.com/ambroise.tine.7" }} target="_blank" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="facebook"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to={{pathname: "https://www.instagram.com/ambroitisne/" }} target="_blank" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="instagram"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to={{pathname: "https://twitter.com/amb0u" }} target="_blank" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="twitter"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to={{pathname: "https://www.linkedin.com/in/ambroisetine/" }} target="_blank" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="linkedin"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="card-body py-3 px-0 content">
                  <h5 className="mb-0">
                    <Link to="#" className="name text-dark">
                      Ambroise Ngagne TINE
                    </Link>
                  </h5>
                  <small className="designation text-muted"><b>C.E.O</b><br/>Etudiant en 5<sup>ème</sup> année en informatique à l'ENSA de Marrakech</small>
                </div>
              </Card>
            </Col>

            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card team text-center border-0">
                <div className="position-relative">
                  <img
                    src={client2}
                    className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                    alt=""
                  />
                  <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="facebook"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="instagram"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="twitter"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="linkedin"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="card-body py-3 px-0 content">
                  <h5 className="mb-0">
                    <Link to="#" className="name text-dark">
                      Ousmane FAYE
                    </Link>
                  </h5>
                  <small className="designation text-muted"><b>Vice-Président chargé des Affaires Administratives et des Relations Publiques</b><br/>Doctorant en sciences politiques</small>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card team text-center border-0">
                <div className="position-relative">
                  <img
                    src={client3}
                    className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                    alt=""
                  />
                  <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                    <li className="list-inline-item ms-1">
                      <Link to={{pathname: "https://www.facebook.com/nevillelys.moussavou" }} target="_blank" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="facebook"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    {/* <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="instagram"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li> */}
                    {/* <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="twitter"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li> */}
                    <li className="list-inline-item ms-1">
                      <Link to={{pathname: "http://linkedin.com/in/lys-pasteur-moussavou-82abaa194" }} target="_blank" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="linkedin"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="card-body py-3 px-0 content">
                  <h5 className="mb-0">
                    <Link to="#" className="name text-dark">
                      Lys Pasteur MOUSSAVOU
                    </Link>
                  </h5>
                  <small className="designation text-muted"><b>Chargé de la modélisation et d'évaluation des risques</b><br/>Elève ingénieur en actuariat et finance à la FSTG-UCA Marrakech</small>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card team text-center border-0">
                <div className="position-relative">
                  <img
                    src={client4}
                    className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                    alt=""
                  />
                  <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="facebook"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="instagram"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="twitter"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="linkedin"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="card-body py-3 px-0 content">
                  <h5 className="mb-0">
                    <Link to="#" className="name text-dark">
                      Serigne GADIAGA
                    </Link>
                  </h5>
                  <small className="designation text-muted"><b>Chargé des Stratégies de Com et de la Promotion</b><br/>Etudiant en Master en Géopolitique et Relations Internationales- FSJES- UCA – Marrakech</small>
                </div>
              </div>
            </div>
          </Row>
          <Row>
          <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card team text-center border-0">
                <div className="position-relative">
                  <img
                    src={client11}
                    className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                    alt=""
                  />
                  <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                    <li className="list-inline-item ms-1">
                      <Link to={{pathname: "https://web.facebook.com/iib0011" }} target="_blank" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="facebook"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to={{pathname: "https://www.instagram.com/iib0011" }} target="_blank" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="instagram"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="linkedin"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="card-body py-3 px-0 content">
                  <h5 className="mb-0">
                    <Link to="#" className="name text-dark">
                      Ibrahima Gaye COULIBALY
                    </Link>
                  </h5>
                  <small className="designation text-muted"><b>Responsable informatique</b><br/>Etudiant en 5<sup>ème</sup> année à l'INPT de Rabat</small>

                </div>
              </div>
            </div>

            <Col lg={3} md={6} className="mt-4 pt-2">
              <Card className="team text-center border-0">
                <div className="position-relative">
                  <img
                    src={client6}
                    className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                    alt=""
                  />
                  <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="facebook"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="instagram"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="twitter"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="linkedin"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="card-body py-3 px-0 content">
                  <h5 className="mb-0">
                    <Link to="#" className="name text-dark">
                      Amary DIOP
                    </Link>
                  </h5>
                  <small className="designation text-muted"><b>Membre de l'équipe informatique</b><br/>Etudiant en 5<sup>ème</sup> année en Big Data et Cloud Computing à l'ENSET de Mouhammédia</small>
                </div>
              </Card>
            </Col>

            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card team text-center border-0">
                <div className="position-relative">
                  <img
                    src={client7}
                    className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                    alt=""
                  />
                  <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="facebook"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="instagram"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="twitter"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="linkedin"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="card-body py-3 px-0 content">
                  <h5 className="mb-0">
                    <Link to="#" className="name text-dark">
                      Mouhamadou SANGARÉ
                    </Link>
                  </h5>
                  <small className="designation text-muted"><b>Membre de l'équipe informatique</b><br/>Etudiant en 5<sup>ème</sup> année en data science à l'INSEA de Rabat</small>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card team text-center border-0">
                <div className="position-relative">
                  <img
                    src={client8}
                    className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                    alt=""
                  />
                  <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="facebook"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="instagram"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="twitter"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="linkedin"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="card-body py-3 px-0 content">
                  <h5 className="mb-0">
                    <Link to="#" className="name text-dark">
                      Aïcha Mahamane SOULEY
                    </Link>
                  </h5>
                  <small className="designation text-muted"><b>Membre de l'équipe informatique</b><br/>Etudiante en 5<sup>ème</sup> année en data science à l'INSEA de Rabat</small>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mt-4 pt-2">
              <Card className="team text-center border-0">
                <div className="position-relative">
                  <img
                    src={client9}
                    className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                    alt=""
                  />
                  <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="facebook"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="instagram"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="twitter"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to="#" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="linkedin"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="card-body py-3 px-0 content">
                  <h5 className="mb-0">
                    <Link to="#" className="name text-dark">
                      Halidou Souleymane HALADOU
                    </Link>
                  </h5>
                  <small className="designation text-muted"><b>Trésorier<br/> </b>Etudiant en Master Management Option Ingénierie Financiers SUPDECO - Marrakech</small>
                </div>
              </Card>
            </Col>

            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card team text-center border-0">
                <div className="position-relative">
                  <img
                    src={client10}
                    className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                    alt=""
                  />
                  <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                    <li className="list-inline-item ms-1">
                      <Link to={{pathname: "https://www.facebook.com/terwilly.sylvain" }} target="_blank" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="facebook"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to={{pathname: "https://www.instagram.com/gterlly/" }} target="_blank" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="instagram"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to={{pathname: "https://github.com/Terwilly" }} target="_blank" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="github"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                    <li className="list-inline-item ms-1">
                      <Link to={{pathname: "https://www.linkedin.com/in/terwilly-sylvain-455558162/" }} target="_blank" className="rounded">
                        <i>
                          <FeatherIcon
                            icon="linkedin"
                            className="fea icon-sm fea-social"
                          />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="card-body py-3 px-0 content">
                  <h5 className="mb-0">
                    <Link to="#" className="name text-dark">
                      Sylvain TERWILLY
                    </Link>
                  </h5>
                  <small className="designation text-muted"><b>Membre de l'équipe de communication</b><br/>Etudiant en informatique à la FSTG de Marrakech</small>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
