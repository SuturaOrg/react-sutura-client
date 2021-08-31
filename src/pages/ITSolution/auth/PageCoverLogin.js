// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Label,
  Input,
  Button,
  Card,
  CardBody, Alert,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import user01 from "../../../assets/images/user/01.jpg";
import {connect} from "react-redux";
import {userActions} from "../../../actions";

class PageCoverLogin extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(userActions.logout());
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event, data) {
      console.log(data);
      data.rememberMe=this.state.rememberMe;
      const { dispatch } = this.props;
      dispatch(userActions.login(data));

  }
  handleChange(e) {
    const { checked } = e.target;
    this.setState({ rememberMe: checked });
  }
  render() {
    const { rememberMe } = this.state;
    const {alert}=this.props;
    return (
      <React.Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link to="/" className="btn btn-icon btn-soft-primary">
            <i>
              <FeatherIcon icon="home" className="icons" />
            </i>
          </Link>
        </div>

        <section className="cover-user bg-white">
          <Container fluid className="px-0">
            <Row className="g-0 position-relative">
              <Col lg={4} xs={{ order: 2 }} className="cover-my-30">
                <div className="cover-user-img d-flex align-items-center">
                  <Row>
                    <Col xs={12}>
                      {alert && alert.message &&
                      <Alert
                          color={alert.type}
                      >
                        {alert.message}                      </Alert>}
                      <Card
                        className="login-page border-0"
                        style={{ zIndex: "1" }}
                      >
                        <CardBody className="p-0">
                          <h4 className="card-title text-center">Se connecter</h4>
                          <AvForm className="llogin-form mt-4" onValidSubmit={this.handleSubmit}>
                            <Row>
                              <Col lg={12}>
                                <div className="mb-3">
                                  <Label className="form-label" htmlFor="email">
                                    Votre email{" "}
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
                                    name="email"
                                    id="email"
                                    placeholder="Entrer votre email"
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

                              <Col lg={12}>
                                <div className="mb-3">
                                  <Label className="form-label" htmlFor="password">
                                    Mot de passe
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
                                    placeholder="Entrer votre mot de passe"
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

                              <Col lg="12">
                                <div className="d-flex justify-content-between">
                                  <div className="mb-3">
                                    <div className="form-check">
                                      <Input
                                          onChange={this.handleChange}
                                          type="checkbox"
                                        className="form-check-input"
                                        checked={rememberMe}
                                        id="customCheck1"
                                      />
                                      <Label
                                        className="form-check-label"
                                        htmlFor="customCheck1"
                                      >
                                        Se souvenir de moi
                                      </Label>
                                    </div>
                                  </div>
                                  <p className="forgot-pass mb-0">
                                    <Link
                                      to="auth-re-password-three"
                                      className="text-dark fw-bold"
                                    >
                                      Mot de passe oublié?
                                    </Link>
                                  </p>
                                </div>
                              </Col>

                              <Col lg={12} className="mb-0">
                                <div className="d-grid">
                                  <Button color="primary">
                                    Se connecter
                                </Button>
                                </div>
                              </Col>

                              {/* <Col lg={12} className="mt-4 text-center">
                                <h6>Or Login With</h6>
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

                              <Col className="text-center">
                                <p className="mb-0 mt-3">
                                  <small className="text-dark me-2">
                                    Vous n'avez pas de compte ?
                                  </small>{" "}
                                  <Link
                                    to="auth-cover-signup"
                                    className="text-dark fw-bold"
                                  >
                                    Inscrivez-vous
                                  </Link>
                                </p>
                              </Col>
                            </Row>
                          </AvForm>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col
                lg={{ size: 8, offset: 4 }}
                xs={{ order: 1 }}
                className="padding-less img "
                style={{ backgroundImage: `url(${user01})` }}
              ></Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  const {alert}=state
  const { loggingIn } = state.authentication;
  return {
    loggingIn,
    alert
  };
}
const connectedPageCoverLogin = connect(mapStateToProps)(PageCoverLogin);
export default connectedPageCoverLogin;
