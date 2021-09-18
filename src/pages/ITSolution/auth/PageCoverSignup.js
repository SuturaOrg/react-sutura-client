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
  CardBody, Alert, Spinner
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import user02 from "../../../assets/images/user/02.jpg";
import {alertActions, userActions} from "../../../actions";

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
      console.log(values);
      const { dispatch } = this.props;
      dispatch(userActions.signup(values));
    }
  }
  handleChange(e) {
    const { checked } = e.target;
    this.setState({ termsChecked: checked });
  }
  componentDidMount() {
    const {dispatch} =this.props;
    dispatch(alertActions.clear())
  }

  render() {
    const { termsChecked, } = this.state;
    const {alert,loggingIn}=this.props;
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
                <div className="cover-user-img d-flex align-items-center" >
                  <Row className="scrollable" >
                    <Col xs={12}>
                      <Card
                        className="login_page border-0"
                        style={{ zIndex: 1 }}
                      >
                        <CardBody className="p-0">
                          <h4 className="card-title text-center mt-4">S'inscrire</h4>
                          <AvForm className="login-form mt-4" onValidSubmit={this.handleSubmit}>
                            <Row>
                              <Col md="6" style={{
                                "overflow-y": "auto"
                              }}>
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
                                        errorMessage: "Veuillez entrer votre nom",
                                      },
                                    }}
                                  />
                                </div>
                              </Col>
                              <Col md={12}>
                                <div className="mb-3">
                                  <Label className="form-label">Sexe <span className="text-danger">*</span></Label>
                                  <div className="form-icon position-relative">
                                    <AvField type="select" name="female"  helpMessage="Sélectionnez une catégorie"

                                            validate={{
                                              required: {
                                                value: true,
                                                errorMessage: "Veuillez sélectionner une option",
                                              },
                                            }}>
                                      <option value="">- Sélectionnez une option-</option>
                                      <option value={false}>Homme</option>
                                      <option value={true}>Femme</option>
                                    </AvField>
                                  </div>
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
                                          "La taille de votre mot de passe doit être comprise entre 6 and 16 caractères",
                                      },
                                      maxLength: {
                                        value: 16,
                                        errorMessage:
                                            "La taille de votre mot de passe doit être comprise entre 6 and 16 caractères",
                                      },
                                    }}
                                  />
                                </div>
                              </Col>
                              <Col md={12}>
                                <div className="mb-3">
                                  <Label className="form-label">Ville de résidence{" "}<span className="text-danger">*</span></Label>
                                  <div className="form-icon position-relative">
                                    <AvField type="select" name="town" value="town" helpMessage="Sélectionnez une ville"

                                            validate={{
                                              required: {
                                                value: true,
                                                errorMessage: "Veuillez sélectionner une ville ",
                                              },
                                            }}>
                                      <option value="">- Sélectionnez votre ville -</option>
                                        <option value="Agadir">Agadir</option>
                                        <option value="Al Hoceïma">Al Hoceïma</option>
                                        <option value="Béni Mellal">Béni Mellal</option>
                                        <option value="Casablanca">Casablanca</option>
                                        <option value="El Jadida">El Jadida</option>
                                        <option value="Errachidia">Errachidia</option>
                                        <option value="Essaouira">Essaouira</option>
                                        <option value="Fès">Fès</option>
                                        <option value="Marrakech">Marrakech</option>
                                        <option value="Meknès">Meknès</option>
                                        <option value="Mouhammédia">Mouhammédia</option>
                                        <option value="Kénitra">Kénitra</option>
                                        <option value="Khouribga">Khouribga</option>
                                        <option value="Ouarzazate">Ouarzazate</option>
                                        <option value="Oujda">Oujda</option>
                                        <option value="Rabat">Rabat</option>
                                        <option value="Safi">Safi</option>
                                        <option value="Salé">Salé</option>
                                        <option value="Settat">Settat</option>
                                        <option value="Tanger">Tanger</option>
                                        <option value="Tétouan">Tétouan</option>
                                    </AvField>
                                  </div>
                                </div>
                              </Col>

                              <Col md={12}>
                                <div className="mb-3">
                                  <Label className="form-label">Pays d'origine{" "}<span className="text-danger">*</span></Label>
                                  <div className="form-icon position-relative">
                                    <AvField type="select" name="country" value="country" helpMessage="Sélectionnez un pays"

                                            validate={{
                                              required: {
                                                value: true,
                                                errorMessage: "Veuillez sélectionner une catégorie ",
                                              },
                                            }}>
                                      <option value="">- Sélectionnez votre pays -</option>
                                      <option value="Afghanistan">Afghanistan</option>
                                      <option value="Angola">Angola</option>
                                      <option value="Benin">Bénin</option>
                                      <option value="Burkina Faso">Burkina-Faso</option>
                                      <option value="Burundi">Burundi</option>
                                      <option value="Cameroon">Caméroun</option>
                                      <option value="Cabo Verde">Cap-Vert</option>
                                      <option value="Dominica">Commonwealth</option>
                                      <option value="Congo">Congo</option>
                                      <option value="Ivory Coast">Côte d'Ivoire</option>
                                      <option value="Djibouti">Djibouti</option>
                                      <option value="Egypt">Egypte</option>
                                      <option value="Eritrea">Erythrée</option>
                                      <option value="Gabon">Gabon</option>
                                      <option value="Gambia">Gambie</option>
                                      <option value="Ghana">Ghana</option>
                                      <option value="Guinea">Guinée</option>
                                      <option value="Guinea-Bissau">Guinée-Bissau</option>
                                      <option value="Equatorial Guinea">Guinée Equatoriale</option>
                                      <option value="Haiti">Haïti</option>
                                      <option value="Indonesia">Indonésie</option>
                                      <option value="Iraq">Irak</option>
                                      <option value="Jordan">Jordonie</option>
                                      <option value="Kenya">Kénya</option>
                                      <option value="Kiribati">Kiribati</option>
                                      <option value="Lao People's Democratic Republic">Laos</option>
                                      <option value="Lebanon">Liban</option>
                                      <option value="Liberia">Libéria</option>
                                      <option value="Madagascar">Madagascar</option>
                                      <option value="Malaysia">Malaisie</option>
                                      <option value="Malawi">Malawi</option>
                                      <option value="Mali">Mali</option>
                                      <option value="Mauritania">Mauritanie</option>
                                      <option value="Niger">Niger</option>
                                      <option value="Nigeria">Nigéria</option>
                                      <option value="Pakistan">Pakistan</option>
                                      <option value="Palestine">Palestine</option>
                                      <option value="Panama">Panama</option>
                                      <option value="Central African Republic">République Centrafrique</option>
                                      <option value="Democratic Republic of the Congo">République Démocratique du Congo</option>
                                      <option value="Rwanda">Rwanda</option>
                                      <option value="Saint Lucia">Saint Lucie</option>
                                      <option value="Sao Tome and Principe">Sao-Tomé et Principe</option>
                                      <option value="Senegal">Sénégal</option>
                                      <option value="Sierra Leone">Sierra Léone</option>
                                      <option value="Singapore">Singapour</option>
                                      <option value="Somalia">Somalie</option>
                                      <option value="Sudan">Soudan</option>
                                      <option value="South sudan">Soudan du Sud</option>
                                      <option value="Syrian Arab Republic">Syrie</option>
                                      <option value="United Republic of Tanzania">Tanzanie</option>
                                      <option value="Chad">Tchad</option>
                                      <option value="Thailand">Thaïlande</option>
                                      <option value="Togo">Togo</option>
                                      <option value="Tunisia">Tunisie</option>
                                      <option value="Turkey">Turquie</option>
                                      <option value="Union of the Comoros">Union des Comores</option>
                                      <option value="Viet Nam">Vietnam</option>
                                      <option value="Yemen">Yémen</option>
                                      <option value="Zambia">Zambie</option>
                                    </AvField>
                                  </div>
                                </div>
                              </Col>

                              <Col md={12}>
                                <div className="mb-3">
                                  <Label className="form-label">Année d'entrée au Maroc{" "}<span className="text-danger">*</span></Label>
                                  <div className="form-icon position-relative">
                                    <AvField type="select" name="yearEntryMorocco" value={2021} helpMessage="Sélectionnez une catégorie"

                                            validate={{
                                              required: {
                                                value: true,
                                                errorMessage: "Veuillez sélectionner une année ",
                                              },
                                            }}>
                                      <option value="">- Sélectionnez une année -</option>
                                      <option value="2022">2022</option>
                                      <option value="2021">2021</option>
                                      <option value="2020">2020</option>
                                      <option value="2019">2019</option>
                                      <option value="2018">2018</option>
                                      <option value="2017">2017</option>
                                      <option value="2016">2016</option>
                                      <option value="2015">2015</option>
                                      <option value="2014">2014</option>
                                      <option value="2013">2013</option>
                                      <option value="2012">2012</option>
                                      <option value="2011">2011</option>
                                    </AvField>
                                  </div>
                                </div>
                              </Col>
                              <Col md={12}>
                                <div className="mb-3">
                                  <Label className="form-label">
                                  Etablissement d'étude{" "}<span className="text-danger">*</span>
                                  </Label>
                                  <div className="form-icon position-relative">
                                    <i>
                                      <FeatherIcon
                                        icon="credit-card"
                                        className="fea icon-sm icons"
                                      />
                                    </i>
                                  </div>
                                  <AvField
                                      type="text"
                                      className="form-control ps-5"
                                      name="school"
                                      id="school"
                                      placeholder="Entrez votre établissement"
                                      required
                                      errorMessage=""
                                      validate={{
                                        required: {
                                          value: true,
                                          errorMessage: "Veuillez entrer votre établissement",
                                        },
                                      }}
                                  />
                                </div>
                              </Col>
                              <Col md={12}>
                                <div className="mb-3">
                                  <Label className="form-label">
                                  Filière d'étude{" "}<span className="text-danger">*</span>
                                  </Label>
                                  <div className="form-icon position-relative">
                                    <i>
                                      <FeatherIcon
                                        icon="credit-card"
                                        className="fea icon-sm icons"
                                      />
                                    </i>
                                  </div>
                                  <AvField
                                      type="text"
                                      className="form-control ps-5"
                                      name="faculty"
                                      id="faculty"
                                      placeholder="Veuillez entrer votre filière"
                                      required
                                      errorMessage=""
                                      validate={{
                                        required: {
                                          value: true,
                                          errorMessage: "Veuillez filière",
                                        },
                                      }}
                                  />
                                </div>
                              </Col>

                              <Col md={12}>
                                <div className="mb-3">
                                  <Label className="form-label">
                                  Téléphone{" "}<span className="text-danger">*</span>
                                  </Label>
                                  <div className="form-icon position-relative">
                                    <i>
                                      <FeatherIcon
                                        icon="credit-card"
                                        className="fea icon-sm icons"
                                      />
                                    </i>
                                  </div>
                                  <AvField
                                      type="number"
                                      className="form-control ps-5"
                                      name="phone"
                                      id="phone"
                                      placeholder="Entrez votre téléphone"
                                      required
                                      min="0"
                                      errorMessage=""
                                      validate={{
                                        required: {
                                          value: true,
                                          errorMessage: "Veuillez entrer votre numéro",
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
                                  {!loggingIn?<Button color="primary">
                                    S'inscrire
                                </Button>: <div className="btn justify-content-center"><Spinner
                                            className="text-primary"
                                        > </Spinner></div>}
                                </div>
                              </Col>
                              {alert && alert.message &&
                              <Col md="12">
                                <div className="mt-4 mb-3">
                                  <Alert color={alert.type}>
                                    {alert.message}
                                  </Alert>
                                </div>
                              </Col>
                              }
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
                                    onClick={()=>this.props.dispatch(alertActions.clear())}
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
