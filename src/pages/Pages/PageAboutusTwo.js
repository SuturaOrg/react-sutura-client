import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import CountUp from "react-countup";
import classnames from "classnames";

//Import Images
import aboutus from "../../assets/images/company/aboutus.jpg";
import about2 from "../../assets/images/company/about2.png";
import amazon from "../../assets/images/client/amazon.svg";
import google from "../../assets/images/client/google.svg";
import lenovo from "../../assets/images/client/lenovo.svg";
import paypal from "../../assets/images/client/paypal.svg";
import shopify from "../../assets/images/client/shopify.svg";
import spotify from "../../assets/images/client/spotify.svg";
import MindPower from "../ITSolution/MindPower.js";
import work1 from "../../assets/images/work/7.jpg";
import work2 from "../../assets/images/work/8.jpg";
import work3 from "../../assets/images/work/9.jpg";
import work4 from "../../assets/images/work/12.jpg";
import ExperienceTeam from "../CorporateBusiness/ExperienceTeam";

export default class PageAboutusTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      partners: [
        {
          id: 1,
          img: amazon,
        },
        {
          id: 2,
          img: google,
        },
        {
          id: 3,
          img: lenovo,
        },
        {
          id: 4,
          img: paypal,
        },
        {
          id: 5,
          img: shopify,
        },
        {
          id: 6,
          img: spotify,
        },
      ],
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    this.setState({ activeTab: tab });
  }

  componentDidMount() {
    document.body.classList = "";
    document.getElementById("top-menu").classList.add("nav-light");
    document.getElementById("buyButton").className = "btn btn-light";
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-primary";
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-light";
    }
  };
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half d-table w-100"
          style={{ background: `url(${aboutus})` }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={12} className="text-center">
                <div className="page-next-level title-heading">
                  <h1 className="text-white title-dark"> A propos de nous </h1>
                  <p className="text-white-50 para-desc mb-0 mx-auto">
                    Notre équipe composée d'étudiants très dynamiques et engagés pour des conditions d'études plus sereines, est à votre disposition.</p>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/">Sutura</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to="#">Company</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          L'équipe
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <section className="section">
          <Container>
            <Row className="align-items-center" id="counter">
              <Col md={6}>
                <img src={about2} className="img-fluid" alt="" />
              </Col>

              <Col md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="ms-lg-4">
                  <div className="d-flex mb-4">
                    <span className="text-primary h1 mb-0">
                      <span className="counter-value display-1 fw-bold">
                        <CountUp start={0} end={10} duration={12} />
                      </span>
                      +
                    </span>
                    <span className="h6 align-self-end ms-2">
                      membres<br />  de plusieurs nationalités <br/> et de domaines divers
                    </span>
                  </div>
                  <div className="section-title">
                    <h4 className="title mb-4">Qui sommes nous ?</h4>
                    <p className="text-muted">
                      Venant de divers horizons (Afrique & Haïti), nous nous sommes retrouvé seuls dans ce pays d'accueil où nous sommmes
                      confrontés aux mêmes problèmes pour mettre en place{" "}
                      <span className="text-primary fw-bold">
                        Sutura
                      </span>{" "}. Ce dernier a pu exister à la suite d'une longue période de réflexion et d'inverstigation. 
                    </p>
                    <Link to="/page-contact-three" className="btn btn-primary mt-3">
                      Contacter nous
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="mt-4">
            <Row className="justify-content-center">
              {this.state.partners.map((image, key) => (
                <Col
                  lg={2}
                  md={2}
                  xs={6}
                  className="text-center pt-4"
                  key={key}
                >
                  <img src={image.img} className="avatar avatar-ex-sm" alt="" />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <section className="section bg-light">
          {/*MindPower render */}
        <MindPower />
          <Container className="mt-100 mt-60">
            <Row className="align-items-end mb-4 pb-4">
              <Col md={8}>
                <div className="section-title text-center text-md-start">
                  <h6 className="text-primary">Notre projet est original et bien adapté</h6>
                  <h4 className="title mb-4">Quelle est la particularité de Sutura ?</h4>
                  <p className="text-muted mb-0 para-desc">
                    La startup{" "}
                    <span className="text-primary fw-bold">
                      Sutura
                    </span>{" "}
                    a la particularité d'être la résultante de beaucoup de domaines.
                  </p>
                </div>
              </Col>

              <Col md={4} className="mt-4 mt-sm-0">
                {/* <div className="text-center text-md-end">
                  <Link to="#" className="text-primary h6">
                    See More{" "}
                    <i className="uil uil-angle-right-b align-middle"></i>
                  </Link>
                </div> */}
              </Col>
            </Row>

            <Row>
              <Col md={4} className="mt-4 pt-2">
                <ul className="nav nav-pills nav-justified flex-column bg-white rounded shadow p-3 mb-0 sticky-bar">
                  <NavItem>
                    <NavLink
                      to="#"
                      className={classnames(
                        { active: this.state.activeTab === "1" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggle("1");
                      }}
                    >
                      <div className="text-center py-1">
                        <h6 className="mb-0">Social</h6>
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem className="mt-2">
                    <NavLink
                      to="#"
                      className={classnames(
                        { active: this.state.activeTab === "2" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggle("2");
                      }}
                    >
                      <div className="text-center py-1">
                        <h6 className="mb-0">Economique</h6>
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem className="mt-2">
                    <NavLink
                      to="#"
                      className={classnames(
                        { active: this.state.activeTab === "3" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggle("3");
                      }}
                    >
                      <div className="text-center py-1">
                        <h6 className="mb-0">Informatique</h6>
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem className="mt-2">
                    <NavLink
                      to="#"
                      className={classnames(
                        { active: this.state.activeTab === "4" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggle("4");
                      }}
                    >
                      <div className="text-center py-1">
                        <h6 className="mb-0">Startup</h6>
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem className="mt-2">
                    <NavLink
                      to="#"
                      className={classnames(
                        { active: this.state.activeTab === "5" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggle("5");
                      }}
                    >
                      <div className="text-center py-1">
                        <h6 className="mb-0">Associatif</h6>
                      </div>
                    </NavLink>
                  </NavItem>
                </ul>
              </Col>

              <Col md={8} xs={12} className="mt-4 pt-2">
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane
                    className="fade bg-white show p-4 rounded shadow"
                    tabId="1"
                  >
                    <img
                      src={work1}
                      className="img-fluid rounded shadow"
                      alt=""
                    />
                    <div className="mt-4">
                      <p className="text-muted">
                        Le projet Sutura est d'abord social car il a pour ambition d'assister les étudiants étrangers en cas de
                        besoin ponctuel financier d'ordre divers. Et, sur la base de la solidarité et de l'entraide.
                      </p>
                      {/* <Link to="#" className="text-primary">
                        See More{" "}
                        <i className="uil uil-angle-right-b align-middle"></i>
                      </Link> */}
                    </div>
                  </TabPane>

                  <TabPane
                    className="fade bg-white p-4 show rounded shadow"
                    tabId="2"
                  >
                    <img
                      src={work2}
                      className="img-fluid rounded shadow"
                      alt=""
                    />
                    <div className="mt-4">
                      <p className="text-muted">
                        Sutura est un service financier participatif.
                      </p>
                      {/* <Link to="#" className="text-primary">
                        See More{" "}
                        <i className="uil uil-angle-right-b align-middle"></i>
                      </Link> */}
                    </div>
                  </TabPane>

                  <TabPane
                    className="fade bg-white p-4  show rounded shadow"
                    tabId="3"
                  >
                    <img
                      src={work3}
                      className="img-fluid rounded shadow"
                      alt=""
                    />
                    <div className="mt-4">
                      <p className="text-muted">
                        Nous avons conçu cet application web qui fait plus 90% du travail de gestion. Cette dernière intègre un algorithme pour optimiser la gestion.
                      </p>
                      {/* <Link to="#" className="text-primary">
                        See More{" "}
                        <i className="uil uil-angle-right-b align-middle"></i>
                      </Link> */}
                    </div>
                  </TabPane>

                  <TabPane
                    className="fade bg-white show p-4 rounded shadow"
                    tabId="4"
                  >
                    <img
                      src={work4}
                      className="img-fluid rounded shadow"
                      alt=""
                    />
                    <div className="mt-4">
                      <p className="text-muted">
                        Le projet Sutura est aussi vraie startup. D'autres services assez intéressants seront proposés pour mieux améliorer
                        les conditions estudiantines.
                      </p>
                      {/* <Link to="#" className="text-primary">
                        See More{" "}
                        <i className="uil uil-angle-right-b align-middle"></i>
                      </Link> */}
                    </div>
                  </TabPane>

                  <TabPane
                    className="fade bg-white show p-4 rounded shadow"
                    tabId="5"
                  >
                    <img
                      src={work4}
                      className="img-fluid rounded shadow"
                      alt=""
                    />
                    <div className="mt-4">
                      <p className="text-muted">
                        Le projet Sutura se base sur le modèle économique et juridique de l'association.
                      </p>
                      {/* <Link to="#" className="text-primary">
                        See More{" "}
                        <i className="uil uil-angle-right-b align-middle"></i>
                      </Link> */}
                    </div>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </section>
        <ExperienceTeam />
      </React.Fragment>
    );
  }
}
