// React Basic and Bootstrap
import React, { Component } from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {
  Container,
  Row,
  Col,
  Input,
  Label,
  Button,
  Card,
  CardBody, Alert,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import user02 from "../../../assets/images/user/02.jpg";
import {userActions} from "../../../actions";

class PageCoverSignup extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(userActions.logout());
    this.state = {
      termsChecked:false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  handleSubmit(event, values) {
    if (this.state.termsChecked){
      const { dispatch } = this.props;
      dispatch(userActions.signup(values));
    }
  }
  handleChange(e) {
    const { checked } = e.target;
    this.setState({ termsChecked: checked });
  }

  render() {
    const { termsChecked, } = this.state;
    const {alert}=this.props;
    return (
      <React.Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link to="/" className="btn btn-icon btn-primary">
            <i>
              <FeatherIcon icon="home" className="icons" />
            </i>
          </Link>
        </div>
        <section className="cover-user bg-white">
          <Container fluid className="px-0">
            <Row className="g-0 position-relative">
              <Col lg={4} xs={{ order: 2 }} className="cover-my-30 ">
                <div className="cover-user-img d-flex align-items-center">
                  <Row>
                    <Col xs={12}>
                      {alert && alert.message &&
                      <Alert
                          color={alert.type}
                      >
                        {alert.message}                      </Alert>}
                      <Card
                        className="login_page border-0"
                        style={{ zIndex: 1 }}
                      >
                        <CardBody className="p-0">
                          <h4 className="card-title text-center">S'inscrire</h4>
                          <AvForm className="login-form mt-4" onValidSubmit={this.handleSubmit}>
                            <Row>
                              <Col md="6">
                                <div className="mb-3">
                                  <Label className="form-label" for="firstName">
                                    Prénom{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <div className="form-icon position-relative">
                                    <i>
                                      <FeatherIcon
                                        icon="user"
                                        className="fea icon-sm icons"
                                      />
                                    </i>
                                  </div>
                                  <AvField
                                    type="text"
                                    className="form-control ps-5"
                                    name="firstName"
                                    id="firstName"
                                    placeholder="Prénom"
                                    required
                                    errorMessage=""
                                    validate={{
                                      required: {
                                        value: true,
                                        errorMessage: "Please enter first name",
                                      },
                                    }}
                                  />
                                </div>
                              </Col>
                              <Col md="6">
                                <div className="mb-3">
                                  <Label className="form-label" for="lastName">
                                    Nom{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <div className="form-icon position-relative">
                                    <i>
                                      <FeatherIcon
                                        icon="user-check"
                                        className="fea icon-sm icons"
                                      />
                                    </i>
                                  </div>
                                  <AvField
                                    type="text"
                                    className="form-control ps-5"
                                    name="lastName"
                                    id="lastName"
                                    placeholder="Nom"
                                    required
                                    errorMessage=""
                                    validate={{
                                      required: {
                                        value: true,
                                        errorMessage: "Please enter first name",
                                      },
                                    }}
                                  />
                                </div>
                              </Col>
                              <Col md="12">
                                <div className="mb-3">
                                  <Label className="form-label" for="email">
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
                                  <AvField
                                    type="text"
                                    className="form-control ps-5"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Email"
                                    required
                                    errorMessage=""
                                    validate={{
                                      required: {
                                        value: true,
                                        errorMessage: "Please enter your email",
                                      },
                                      pattern: {
                                        value:
                                          "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                                        errorMessage: "E-Mail is not valid!",
                                      },
                                    }}
                                  />
                                </div>
                              </Col>

                              <Col md="12">
                                <div className="mb-3">
                                  <Label className="form-label" for="password">
                                    Mot de passe{" "}
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <div className="form-icon position-relative">
                                    <i>
                                      <FeatherIcon
                                        icon="lock"
                                        className="fea icon-sm icons"
                                      />
                                    </i>
                                  </div>
                                  <AvField
                                    type="password"
                                    className="form-control ps-5"
                                    name="password"
                                    id="password"
                                    placeholder="Enter password"
                                    required
                                    errorMessage=""
                                    validate={{
                                      required: {
                                        value: true,
                                        errorMessage: "Please enter Password",
                                      },
                                      minLength: {
                                        value: 6,
                                        errorMessage:
                                          "Your password must be between 6 and 8 characters",
                                      },
                                      maxLength: {
                                        value: 16,
                                        errorMessage:
                                          "Your password must be between 6 and 8 characters",
                                      },
                                    }}
                                  />
                                </div>
                              </Col>

                              <Col md="12">
                                <div className="mb-3">
                                  <div className="form-check">
                                    <Input
                                      type="checkbox"
                                      className="form-check-input"
                                      id="customCheck1"
                                      checked={termsChecked}
                                      onChange={this.handleChange}
                                      required
                                    />
                                    <Label
                                      className="form-check-label"
                                      for="customCheck1"
                                    >
                                      J'accepte{" "}
                                      <Link to="tos" className="text-primary" target="_blank" rel="noopener noreferrer">
                                        les conditions générales d'utilisation
                                      </Link>
                                    </Label>
                                  </div>
                                </div>
                              </Col>
                              <Col md="12">
                                <div className="d-grid">
                                  <Button color="primary">
                                    S'inscrire
                                </Button>
                                </div>
                              </Col>
                              {/* <Col lg="12" className="mt-4 text-center">
                                <h6>Or Signup With</h6>
                                <Row>
                                  <div className="col-6 mt-3">
                                    <div className="d-grid">
                                      <Link to="#" className="btn btn-light"><i className="mdi mdi-facebook text-primary"></i> Facebook</Link>
                                    </div>
                                  </div>

                                  <div className="col-6 mt-3">
                                    <div className="d-grid">
                                      <Link to="#" className="btn btn-light"><i className="mdi mdi-google text-danger"></i> Google</Link>
                                    </div>
                                  </div>
                                </Row>
                              </Col> */}
                              <div className="mx-auto">
                                <p className="mb-0 mt-3">
                                  <small className="text-dark me-2">
                                    Vous avez déjà un compte ?
                                  </small>{" "}
                                  <Link
                                    to="/login"
                                    className="text-dark fw-bold"
                                  >
                                    Se connecter
                                  </Link>
                                </p>
                              </div>
                            </Row>
                          </AvForm>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col
                lg={8}
                className="offset-lg-4 padding-less img order-1"
                style={{ backgroundImage: `url(${user02})` }}
              ></Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  const {alert}=state;
  const { loggingIn } = state.authentication;
  return {
    loggingIn,
    alert
  };
}
const connectedPageCoverSignup = connect(mapStateToProps)(PageCoverSignup);
export default connectedPageCoverSignup;
