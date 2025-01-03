// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Input,
  Label,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody, Spinner
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import contactImg from "../../../assets/images/contact-detail.jpg";

import {connect} from "react-redux";
import {entityActions} from "../../../actions";
class PageContactThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Sutura", link: "/" },
        { id: 2, name: "Contact", link: "#" },
        { id: 3, name: "Tous les contacts" },
      ],
      Contactvisible: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendMail.bind(this);
    this.callNumber.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ Contactvisible: true });
  }

  componentDidMount() {
    document.body.classList = "";
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
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  sendMail = async(values) => {
    const { dispatch } = this.props;
    dispatch(entityActions.sendMail(values,"emails"));
  }

  callNumber() {
    window.location.href = "tel:+152534-468-854";
  }

  render() {
    const {alert,emailsCreateLoading}=this.props;
    const length = this.state.pathItems.length;
    return (
      <React.Fragment>
        <section
          className="bg-half bg-light d-table w-100"
          style={{ background: `url(${contactImg}) center center` }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg="12" className="text-center">
                <div className="page-next-level">
                  <h4 className="title"> Contactez nous</h4>
                  <div className="page-next">
                    <nav className="d-inline-block">
                      <Breadcrumb
                        aria-label="breadcrumb"
                        listClassName="bg-white rounded shadow mb-0"
                      >
                        {this.state.pathItems.map((item, key) =>
                          item.id !== length ? (
                            <BreadcrumbItem key={key}>
                              <Link
                                to={item.link}
                                className="text-uppercase fw-bold text-dark me-1"
                              >
                                {item.name}
                              </Link>
                            </BreadcrumbItem>
                          ) : (
                            <BreadcrumbItem
                              key={key}
                              active
                              aria-current="page">
                              {item.name}
                            </BreadcrumbItem>
                          )
                        )}
                      </Breadcrumb>
                    </nav>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <div className="form-icon position-relative">
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
            <Row>
              <Col lg={4} md={6} className="mt-4 pt-2">
                <Card className="shadow rounded border-0">
                  <CardBody className="py-5">
                    <h4 className="card-title">Prendre contact avec nous !</h4>
                    <div className="custom-form mt-3">
                      <div id="message"></div>
                      {/* <Alert
                        color="info"
                        isOpen={this.state.Contactvisible}
                        toggle={() => {
                          this.setState({
                            Contactvisible: !this.state.Contactvisible,
                          });
                        }}
                      >
                        Votre message a été envoyé avec succès.
                      </Alert> */}
                      {alert.message &&
                      <Alert
                        color={alert.type}
                      >
                        {alert.message}
                        </Alert>}
                      <Form
                        method="post"
                        onSubmit={this.sendMail}
                        name="contact-form"
                        id="contact-form"
                      >
                        <Row>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label className="form-label">
                                Votre nom<span className="text-danger">*</span>
                              </Label>
                              <div className="form-icon position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="user"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                name="name"
                                id="name"
                                type="text"
                                className="form-control ps-5"
                                placeholder="Votre nom :"
                                required
                              />
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label className="form-label">
                                Votre email{" "}
                                <span className="text-danger">*</span>
                              </Label>
                              <div className="form-icon position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="mail"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                name="email"
                                id="email"
                                type="email"
                                className="form-control ps-5"
                                placeholder="Votre email :"
                                required
                              />
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="mb-3">
                              <Label className="form-label">Objet </Label>
                              <div className="form-icon position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="book"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                name="Objet"
                                id="subject"
                                type="text"
                                className="form-control ps-5"
                                placeholder="Objet"
                                required
                              />
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="mb-3">
                              <Label className="form-label">Commentaire</Label>
                              <div className="form-icon position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="message-circle"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <textarea
                                name="message"
                                id="message"
                                rows="4"
                                className="form-control ps-5"
                                placeholder="Votre message :"
                              ></textarea>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={12} className="text-center">
                          <div className="d-grid">
                          {!emailsCreateLoading?<input
                                type="submit"
                                id="submit"
                                name="send"
                                className="submitBnt btn btn-primary btn-block"
                                value="Envoyer"
                              />:<Spinner className="text-primary"> </Spinner>}
                            </div>
                            <div id="simple-msg"></div>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={8} md={6} className="ps-md-3 pe-md-3 mt-4 pt-2">
                <Card className="map map-height-two rounded map-gray border-0">
                  <CardBody className="p-0">
                    <iframe
                      title="test"
                      src="//www.google.com/maps/embed?data=!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                      style={{ border: 0 }}
                      className="rounded"
                      allowFullScreen=""
                    ></iframe>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row>
              <Col md={4}>
                <Card className="border-0 text-center features feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-phone d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-3">
                    <h5 className="fw-bold">Téléphone</h5>
                    <p className="text-muted">
                      Sutura est aussi une équipe très accessible.
                    </p>
                    <Link
                      to="#"
                      onClick={this.callNumber}
                      className="text-primary"
                    >
                      +212 609-863568 ou +212 684-363871
                    </Link>
                  </div>
                </Card>
              </Col>

              <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <Card className="border-0 text-center features feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-envelope d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-3">
                    <h5 className="fw-bold">Email</h5>
                    <p className="text-muted">
                      Sutura est aussi une équipe très accessible. Vos mails sont pris en compte dans les meilleurs délais.
                    </p>
                    <Link
                      to="#"
                      onClick={this.sendMail}
                      className="text-primary"
                    >
                      contact@sutura.africa
                    </Link>
                  </div>
                </Card>
              </Col>

              <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <Card className="border-0 text-center features feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-map-marker d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-3">
                    <h5 className="fw-bold">Adresse</h5>
                    <p className="text-muted">
                      Cité de l'innovation, Université
                      <br />
                      B.P. 511 - 40000 - Marrakech <br />
                      Cadi Ayyad av. Abdelkrim Khattabi,
                    </p>
                    <Link to="#" className="video-play-icon text-primary lightbox">
                      Voir sur Google map
                    </Link>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  const {emailsCreateLoading} = state.entity;
  const {alert} = state;

  return {
    emailsCreateLoading,
    alert

  };
}

const connectedPageContactThree = connect(mapStateToProps)(PageContactThree);
export default connectedPageContactThree;
