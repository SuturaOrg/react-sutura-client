import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input, Label } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import americanEx from "../../assets/images/payments/american-ex.png";
import discover from "../../assets/images/payments/discover.png";
import masterCard from "../../assets/images/payments/master-card.png";
import paypal from "../../assets/images/payments/paypal.png";
import visa from "../../assets/images/payments/visa.png";

//Import Images
import logolight from "../../assets/images/logo-light.png";
import logodark from "../../assets/images/logo-dark.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: "Se connecter", link: "/auth-cover-login" },
        { title: "L'équipe", link: "/about-team" },
        { title: "Tutoriel", link: "/page-services" },
        { title: "Contacts", link: "/page-contact-three" },
      ],
      grid2: [
        { title: "A propos", link: "/aboutus" },
        { title: "Faire un don", link: "/operations/donate" },
        { title: "CGU", link: "/tos" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className={this.props.isLight ? "footer bg-light" : "footer"}>
          <Container>
            <Row>
              <Col
                lg="4"
                xs="12"
                className="mb-0 mb-md-4 pb-0 pb-md-2"
                name="footercolumn"
              >
                <Link to="#" className="logo-footer">
                  <img
                    src={this.props.isLight ? logodark : logolight}
                    height="24"
                    alt=""
                  />
                </Link>
                <p className={this.props.isLight ? "mt-4 text-muted" : "mt-4"}>
                  Adhérer ou soutenir Sutura revient à contribuer à l'amélioration des conditions de vies des étudiants étrangers.
                </p>
                <ul className={this.props.isLight ? "list-unstyled social-icon social mb-0 m t-4" : "list-unstyled social-icon foot-social-icon mb-0 mt-4"}>
                  <li className="list-inline-item me-1">
                    <Link to={{pathname: "https://web.facebook.com/Sutura-100906312128627" }} target="_blank" className="rounded">
                      <FeatherIcon
                        icon="facebook"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                      <Link to={{pathname: "https://www.youtube.com/channel/UC6x42F06mu0jUP-q_esG7jA/featured" }} target="_blank" className="rounded">
                          <i>
                              <FeatherIcon
                                  icon="youtube"
                                  className="fea icon-sm fea-social"
                              />
                          </i>
                      </Link>
                  </li>
                  {/* <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="instagram"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="twitter"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="" className="rounded">
                      <FeatherIcon
                        icon="linkedin"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li> */}
                </ul>
              </Col>

              <Col
                lg="2"
                md="4"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Startup
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid1.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-muted" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right me-1"></i>{" "}
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col
                lg="3"
                md="4"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Liens utiles
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid2.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-muted" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right me-1"></i>
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            
              <Col
                lg="3"
                md="4"
                xs="12"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Newsletter
                </h5>
                <p className="mt-4">
                  Restez informé par mail.
                </p>
                <Form>
                  <Row>
                    <Col lg="12">
                      <div
                        className={
                          this.props.isLight
                            ? "foot-subscribe mb-3 foot-white"
                            : "foot-subscribe mb-3"
                        }
                      >
                        <Label
                          className={this.props.isLight ? "form-label text-muted" : "form-label"}
                        >
                          Entrez votre email{" "}
                          <span className="text-danger">*</span>
                        </Label>
                        <div className="form-icon position-relative">
                          <FeatherIcon
                            icon="mail"
                            className="fea icon-sm icons"
                          />
                        </div>
                        <Input
                          type="email"
                          name="email"
                          id="emailsubscribe"
                          className={
                            this.props.isLight
                              ? "ps-5 rounded bg-light border"
                              : "ps-5 rounded"
                          }
                          placeholder="Votre email : "
                          required
                        />
                      </div>
                    </Col>
                    <Col lg="12">
                      <div className="buy-button">
                        <Input
                          type="submit"
                          id="submitsubscribefooter"
                          name="send"
                          className="btn btn-primary"
                          value="S'inscrire"
                        />
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </footer>
        <footer className="footer footer-bar">
          <Container className="text-center">
            <Row className="align-items-center">
              <Col sm="6">
                <div className="text-sm-start">
                  <p className="mb-0">
                    © 2020-21 Sutura. Développé par{" "}
                    <i className="mdi mdi-heart text-danger"></i>{" "}
                    <a
                      href="/about-team"
                      rel="noopener noreferrer"
                      className="text-reset"
                    >
                      Sutura
                    </a>
                    .
                  </p>
                </div>
              </Col>

              {/* <Col sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled text-sm-end mb-0">
                  <li className="list-inline-item me-1">
                    <Link to="">
                      <img
                        src={americanEx}
                        className="avatar avatar-ex-sm"
                        title="American Express"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="">
                      <img
                        src={discover}
                        className="avatar avatar-ex-sm"
                        title="Discover"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="">
                      <img
                        src={masterCard}
                        className="avatar avatar-ex-sm"
                        title="Master Card"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="">
                      <img
                        src={paypal}
                        className="avatar avatar-ex-sm"
                        title="Paypal"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item me-1">
                    <Link to="">
                      <img
                        src={visa}
                        className="avatar avatar-ex-sm"
                        title="Visa"
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </Col> */}
            </Row>
          </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
