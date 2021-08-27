import React, { Component } from "react";
import SectionTitle from "../../components/Shared/SectionTitle";
import { Container, Row, Col } from "reactstrap";
// import FeatherIcon
import FeatherIcon from "feather-icons-react";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

// import image
import ab01 from "../../assets/images/course/online/ab01.jpg";
import ab02 from "../../assets/images/course/online/ab02.jpg";
import ab03 from "../../assets/images/course/online/ab03.jpg";
import { Link } from "react-router-dom";

export default class WhatWeDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      whatwedo: [
        {
          id: 1,
          icon: "uil uil-chart-line",
          heading: "Santé",
          desc: "It is a long established fact that a reader.",
        },
        {
          id: 2,
          icon: "uil uil-crosshairs",
          heading: "Alimentation",
          desc: "It is a long established fact that a reader.",
        },
        {
          id: 3,
          icon: "uil uil-airplay",
          heading: "Loyer",
          desc: "It is a long established fact that a reader.",
        },
        {
          id: 4,
          icon: "uil uil-rocket",
          heading: "Transport",
          desc: "It is a long established fact that a reader.",
        },
        {
          id: 5,
          icon: "uil uil-clock",
          heading: "Scolarité",
          desc: "It is a long established fact that a reader.",
        },
        {
          id: 6,
          icon: "uil uil-users-alt",
          heading: "Autres urgences",
          desc: "It is a long established fact that a reader.",
        },
        {
          id: 7,
          icon: "uil uil-file-alt",
          heading: "Certified Company",
          desc: "It is a long established fact that a reader.",
        },
        {
          id: 8,
          icon: "uil uil-search",
          heading: "Data Analytics",
          desc: "It is a long established fact that a reader.",
        },
      ],
    };

    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <div className="col-12 text-center">
                {/* render Section title */}
                <SectionTitle
                  title="Notre mission"
                  desc=" vous permet d'avoir de la disponibilité de cash-flow en cas de besoin ponctuel urgent."
                />
              </div>
            </Row>
            <Row>
              {this.state.whatwedo.map((items, key) => (
                <Col lg={3} md={4} className="mt-4 pt-2" key={key}>
                  <div className="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                    <span className="h1 icon2 text-primary">
                      <i className={items.icon}></i>
                    </span>
                    <div className="card-body p-0 content">
                      <h5>{items.heading}</h5>
                      <p className="para text-muted mb-0">{items.desc}</p>
                    </div>
                    <span className="big-icon text-center">
                      <i className={items.icon}></i>
                    </span>
                  </div>
                </Col>
              ))}
              <div className="col-lg-12 text-center col-md-4 mt-4 pt-2">
                <Link to="#" className="btn btn-primary">
                  Voir Plus{" "}
                  <i>
                    <FeatherIcon icon="arrow-right" className="fea icon-sm" />
                  </i>
                </Link>
              </div>
              <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                        <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                          <div className="card-body p-0">
                            <img src={ab01} className="img-fluid" alt="" />
                            <div className="overlay-work bg-dark"></div>
                            <div className="content">
                              <Link
                                to="#"
                                className="title text-white d-block fw-bold"
                              >
                                Web Development
                              </Link>
                              <small className="text-light">
                                IT & Software
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-6">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                            <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                              <div className="card-body p-0">
                                <img src={ab02} className="img-fluid" alt="" />
                                <div className="overlay-work bg-dark"></div>
                                <div className="content">
                                  <Link
                                    to="#"
                                    className="title text-white d-block fw-bold"
                                  >
                                    Michanical Engineer
                                  </Link>
                                  <small className="text-light">
                                    Engineering
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12 mt-4 pt-2">
                            <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                              <div className="card-body p-0">
                                <img src={ab03} className="img-fluid" alt="" />
                                <div className="overlay-work bg-dark"></div>
                                <div className="content">
                                  <Link
                                    to="#"
                                    className="title text-white d-block fw-bold"
                                  >
                                    Chartered Accountant
                                  </Link>
                                  <small className="text-light">C.A.</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
                    <div className="ms-lg-4">
                      <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">A propos de nous</h4>
                        <p className="text-muted para-desc">
                          La start-up{" "}
                          <span className="text-primary fw-bold">
                            Sutura
                          </span>{" "}
                            vient en réponse à la précarité des étudiants étrangers au Maroc.
                        </p>
                        <p className="text-muted para-desc mb-0">
                          En effet, les étudiants sont de temps en temps confrontés à des problèmes financiers ponctuels. 
                          Ces problèmes sont liés à la santé, à l'alimentation, au loyer, etc.
                          C'est ainsi que Sutura est venu assisté les étudiants à travers un mécanisme solidaire, culturel et participatif.
                        </p>
                      </div>

                      <ul className="list-unstyled text-muted">
                        <li className="mb-0">
                          <span className="text-primary h4 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          Transparence
                        </li>
                        <li className="mb-0">
                          <span className="text-primary h4 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          Démocratie
                        </li>
                        <li className="mb-0">
                          <span className="text-primary h4 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          Equité
                        </li>
                      </ul>

                      <div className="watch-video mt-4 pt-2">
                        <Link
                          to="https://1.envato.market/landrickreactjs"
                          target="_blank"
                          className="btn btn-primary m-1"
                        >
                          Lire davantage{" "}
                          <i>
                            <FeatherIcon
                              icon="chevron-right"
                              className="fea icon-sm"
                            />
                          </i>
                        </Link>
                        <Link
                          to="#"
                          onClick={this.openModal}
                          className="btn btn-icon btn-pills video-play-icon btn-primary m-1"
                        >
                          <i>
                            <FeatherIcon icon="video" className="icons" />
                          </i>
                        </Link>
                        <span className="fw-bold text-uppercase small align-middle ms-1">
                          Voir la vidéo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
            <ModalVideo
              channel="vimeo"
              isOpen={this.state.isOpen}
              videoId="99025203"
              onClose={() => this.setState({ isOpen: false })}
            />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
