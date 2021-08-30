import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Label,
  Alert,
} from "reactstrap";
import {Link, withRouter} from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {fileService} from "../../../services";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";
import {connect} from "react-redux";
import {alertActions, userActions} from "../../../actions";
import {contributionActions} from "../../../actions";

class LoanRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      pathItems: [
        //id must required
        { id: 1, name: "Sutura", link: "/index" },
        { id: 2, name: "Opérations", link: "#" },
        { id: 3, name: "Demnander un prêt" },
      ],
      isOpen: false,
    };
    this.handleSubmit.bind(this);
    this.onFileChange.bind(this);
  }

  handleSubmit = async(event,values) => {
    event.preventDefault();
    console.log(values);
    const { dispatch } = this.props;
    if(!this.state.selectedFile.name.match(/.(jpg|jpeg|png|gif|pdf)$/i)){
      dispatch(alertActions.error("Le fichier doit être une image ou document pdf "))
      return;
    }
    if(this.state.selectedFile.size>7000000){
      dispatch(alertActions.error("Le fichier ne doit pas dépasser 7 Mo "))
      return;
    }
    const url =await this.uploadFile();
    values.proof=url;
    dispatch(contributionActions.create(values));
  };
  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });

  };
  uploadFile = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
        "file",
        this.state.selectedFile,
        this.state.selectedFile.name
    );
     return  fileService.create(formData);
  };
  componentDidMount() {
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

  render() {
      const {alert}=this.props;
      console.log(alert);
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <PageBreadcrumb
          title="Demander un prêt"
          pathItems={this.state.pathItems}
        />

        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={7} xs={12}>
                <div className="rounded p-4 shadow">
                  <Row>
                    <Col xs={12}>
                      {alert.message &&
                      <Alert
                        color={alert.type}
                      >
                        {alert.message}                      </Alert>}
                      <AvForm onValidSubmit={this.handleSubmit}>
                        <Row>
                          <Col md={12}>
                            <div className="mb-3">
                              <Label className="form-label">
                              Montant <span className="text-danger">*</span>
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
                                  type="number"
                                  className="form-control ps-5"
                                  name="amount"
                                  id="amount"
                                  placeholder="Montant"
                                  required
                                  errorMessage=""
                                  validate={{
                                    required: {
                                      value: true,
                                      errorMessage: "Veuillez entrer un montant",
                                    },
                                  }}
                              />
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="mb-3">
                              <Label className="form-label">
                              Echéance de paiement <span className="text-danger">*</span>
                              </Label>
                              <div className="form-icon position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="calendar"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <AvField
                                  type="date"
                                  className="form-control ps-5"
                                  name="deadline"
                                  id="deadline"
                                  placeholder="Montant"
                                  required
                                  errorMessage=""
                                  validate={{
                                    required: {
                                      value: true,
                                      errorMessage: "Veuillez entrer un montant",
                                    },
                                  }}
                              />
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="mb-3">
                              <Label className="form-label">
                              Type <span className="text-danger">*</span>
                              </Label>
                              <div className="form-icon position-relative">
                                <i>
                                </i>
                              </div>
                              <select required  name="reason" id="reason" validate={{
                                    required: {
                                      value: false,
                                      errorMessage: "Veuillez envoyer une preuve",
                                    },
                                  }}>
                                <option value="">- Sélectionner une catégorie -</option>
                                <option value="HEALTH">Santé</option>
                                <option value="FOOD">Complément alimentaire</option>
                                <option value="RENTAL">Loyer</option>
                                <option value="TRANSPORT">Transport</option>
                                <option value="SCHOOL_FEES">Frais de scolarité</option>
                                <option value="OTHER">AUTRES</option>
                              </select>
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="mb-3">
                              <Label className="form-label">Preuve</Label>
                              <div className="form-icon position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="book"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <AvField
                                  type="file"
                                  className="form-control ps-5"
                                  required
                                  name="proof"
                                  id="proof"
                                  placeholder="Preuve"
                                  errorMessage=""
                                  onChange={this.onFileChange}
                                  validate={{
                                    required: {
                                      value: false,
                                      errorMessage: "Veuillez envoyer une preuve",
                                    },
                                  }}
                              />
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="mb-3">
                              <Label className="form-label">
                              RIB <span className="text-danger">*</span>
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
                                  type="number"
                                  className="form-control ps-5"
                                  name="RIB"
                                  id="RIB"
                                  placeholder="Entrez votre RIB"
                                  required
                                  errorMessage=""
                                  validate={{
                                    required: {
                                      value: false,
                                      errorMessage: "Veuillez entrer un montant",
                                    },
                                  }}
                              />
                            </div>
                          </Col>

                          <Col md={12}>
                            <div className="mb-3">
                              <Label className="form-label">
                              Nom de votre banque <span className="text-danger">*</span>
                              </Label>
                              <div className="form-icon position-relative">
                                <i>
                                </i>
                              </div>
                              <select required  name="bank" id="bank" validate={{
                                    required: {
                                      value: true,
                                      errorMessage: "Veuillez envoyer une preuve",
                                    },
                                  }}>
                                <option value="">- Sélectionner une catégorie -</option>
                                <option value="Arab Bank Maroc">Arab Bank Maroc</option>
                                <option value="Attijariwafa Bank">Attijariwafa Bank</option>
                                <option value="AL Barid Bank">AL Barid Bank</option>
                                <option value="Banque Centrale Populaire">Banque Centrale Populaire</option>
                                <option value="CFG Bank">CFG Bank</option>
                                <option value="CIH Bank">CIH Bank</option>
                                <option value="Société Générale">Société Générale</option>
                                <option value="Autre banque">Autre</option>
                              </select>
                            </div>
                          </Col>

                          <Col md={12}>
                            <div className="mb-3">
                              <Label className="form-label">
                              Avez-vous des précisions à apporter ? <span className="text-danger">*</span>
                              </Label>
                              <div >
                                <i>
                                  <FeatherIcon
                                    icon="message-square"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <textarea name="comment" id="comment" placeholder="Votre commentaire pour nous aider à mieux évaluer votre déclaration" rows="2" cols="35"></textarea>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={12}>
                            <input
                              type="submit"
                              id="submit"
                              name="send"
                              className="btn btn-primary"
                              value="Demander"
                            />
                          </Col>
                        </Row>
                      </AvForm>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
          <h5 className="mb-1">
                          Comment ça marche ?
          </h5>
            <Row>
              <Col lg={6} md={6} xs={12}>
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-envelope-check d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark">
                        Soumettre une demande
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      Remplissez le formulaire ci-dessus. Mais il faut cotiser d'abord au préalable
                    </p>
                  </div>
                </div>
              </Col>
              
              <Col lg={6} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-check-square d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark">
                        Vérification
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      Les administrateurs vont rapidement vérifier que la demande respecte les conditions générales avant de la soumettre à l'algorithme.
                    </p>
                    {/* <div className="mt-2">
                      <Link to="#" className="btn btn-sm btn-soft-primary">
                        Voir les conditions générales de soumission de demande.
                      </Link>
                    </div> */}
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-filter d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark">
                        L'algorithme continue le traitement
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      L'algorithme a été conçu afin que le traitement de demande se fasse de manière objective. Il calcule la priorité de chaque nouvelle demande et fait un classement en fonction de cette dernière.
                      Puis en fonction de l'état de disponibilité de la caisse et des autres demandes en attente, l'algorithme va prendre une décision.
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-umbrella d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark">
                        Validation
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      Dès que l'algorithme élise votre demande, vous serez notifié par mail ou par téléphone afin de procéder à transport de la somme demandée.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  const {loading} = state.contribution;
  const {alert} = state;

  return {
    loading,
    alert

  };
}

const connectedApp = connect(mapStateToProps)(withRouter(LoanRequest));
export default connectedApp;

