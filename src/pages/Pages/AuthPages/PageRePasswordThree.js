import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Label,
  Button, Spinner, Alert
} from "reactstrap";
import { Link } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {mailActions} from "../../../actions";

//Import Icons
import FeatherIcon from "feather-icons-react";

class PageRePasswordThree extends Component {
  constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(event,value) {
    const {dispatch} = this.props;
    console.log(value);
    dispatch(mailActions.resetpwd(value.email));
}
  render() {
    const {resetPwdLoading, alert} = this.props;
    return (
      <React.Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link to="/" className="btn btn-icon btn-primary">
            <i>
              <FeatherIcon icon="home" className="icons" />
            </i>
          </Link>
        </div>

        <section className="bg-home bg-circle-gradiant d-flex align-items-center">
          <div className="bg-overlay bg-overlay-white"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={5} md={8}>
                <Card className="shadow rounded border-0">
                  {alert.message &&
                    <Alert color={alert.type}>
                      {alert.message}
                    </Alert>}
                  <CardBody>
                    <h4 className="card-title text-center">Récupérer votre compte</h4>

                    <AvForm className="login-form mt-4" onValidSubmit={this.handleSubmit}>
                      <Row>
                        <Col lg={12}>
                          <p className="text-muted">
                          Veuillez entrer votre adresse email. Vous recevrez un lien pour créer un nouveau mot de passe via email.
                          </p>
                          <div className="mb-3">
                            <Label className="form-label" for="email">
                              Adresse mail{" "}
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
                              placeholder="Entrez votre Email"
                              required
                              errorMessage=""
                              validate={{
                                required: {
                                  value: true,
                                  errorMessage: "Veuillez entrer votre email",
                                },
                                pattern: {
                                  value:
                                    "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                                  errorMessage: "Email non valide!",
                                },
                              }}
                            />
                          </div>
                        </Col>
                        <Col lg="12">
                        <div className="d-grid">
                        {!resetPwdLoading ? <Button color="primary">
                              Envoyer
                          </Button>:  <div className="d-grid justify-content-center"><Spinner className="text-primary"> </Spinner></div>}
                          </div>
                        </Col>
                        <div className="mx-auto">
                          <p className="mb-0 mt-3">
                            <small className="text-dark me-2">
                              Mot de passe retrouvé ?
                            </small>{" "}
                            <Link
                              to="login"
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
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  const {resetPwdLoading} = state.mail;
    const {alert} = state;
  return {
    resetPwdLoading,
    alert
  };

}

const connectedPageRePasswordThree = connect(mapStateToProps)(PageRePasswordThree);
export default connectedPageRePasswordThree;
