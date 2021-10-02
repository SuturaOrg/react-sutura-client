import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Label,
  Alert, Spinner, FormGroup,
  Button
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
import {entityActions} from "../../../actions";

class ContributeRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      pathItems: [
        //id must required
        { id: 1, name: "Sutura", link: "/" },
        { id: 2, name: "Opérations", link: "#" },
        { id: 3, name: "Cotiser" },
      ],
      isOpen: false,
    };
    this.handleSubmit.bind(this);
    this.onFileChange.bind(this);
  }

  handleSubmit = async(event,values) => {
    event.preventDefault();
    const { dispatch } = this.props;
    if(!this.state.selectedFile.name.match(/.(jpg|jpeg|png|gif|pdf)$/i)){
      dispatch(alertActions.error("Le fichier doit être une image ou document pdf "))
      return;
    }
    if(this.state.selectedFile.size>7000000){
      dispatch(alertActions.error("Le fichier ne doit pas dépasser 7 Mo "))
      return;
    }
    dispatch(entityActions.create(values,"contributions", this.state.selectedFile));
  };
  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });

  };
  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
    const {dispatch} =this.props;
    dispatch(alertActions.clear())
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
    const {alert, contributionsCreateLoading}=this.props;
    return (
        <React.Fragment>
          {/* breadcrumb */}
          <PageBreadcrumb
              title="Déclarer une cotisation"
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
                                  Montant (MAD)<span className="text-danger">*</span>
                                </Label>
                                <div className="form-icon position-relative">
                                  <i>
                                    <FeatherIcon
                                        icon="dollar-sign"
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
                                    min="0"
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
                                    name="proof"
                                    id="proof"
                                    placeholder="Preuve"
                                    required
                                    errorMessage=""
                                    onChange={this.onFileChange}
                                    validate={{
                                      required: {
                                        value: true,
                                        errorMessage: "Veuillez envoyer une preuve",
                                      },
                                    }}
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm={12}>
                              <FormGroup>
                                <Button
                                    className={'btn btn-primary'}
                                >
                                  {contributionsCreateLoading?<Spinner className="text-primary"> </Spinner>:"Cotiser"} </Button> 
                              </FormGroup>

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
                    <i className="uil uil-dollar-sign d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                        Faire un virement ou un transfert bancaire
                    </h5>
                    <p className="text-muted mb-0">
                    RIB: <b>1454502111107796800014</b> <br/>Code Swift: <b>BCPOMAMC</b><br/>(Banque Populaire)
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} xs={12}>
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-edit d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                        Puis remplir le formulaire ci-dessous !
                    </h5>
                    <p className="text-muted mb-0">
                      Saisir le montant de votre cotisation et puis joindre un justificatif de votre virement bancaire.
                    </p>
                    {/* <div className="mt-2">
                      <Link to="#" className="btn btn-sm btn-soft-primary">
                        Voir nos conditions générales de soumission
                      </Link>
                    </div> */}
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
                        Vérification
                    </h5>
                    <p className="text-muted mb-0">
                      Les administrateurs vont rapidement vérifier que votre cotisation a été bien reçue dans notre compte bancaire. Puis, votre déclaration sera validée.
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
                        L'algorithme fait le reste.
                    </h5>
                    <p className="text-muted mb-0">
                      Ce dernier va considérer votre cotisation dans sa caisse puis mettre à jour vos données.
                      Ainsi, vous êtes adhérents de Sutura et vous pouvez faire des demandes en cas de besoin.<br/>
                      Enfin, en fonction de la nouvelle situation de la caisse et des demandes en attente, l'algorithme va décider d'éventuelles demandes de prêts à élire.
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
  const {contributionsCreateLoading} = state.entity;
  const {alert} = state;

  return {
    contributionsCreateLoading,
    alert

  };
}

const connectedApp = connect(mapStateToProps)(withRouter(ContributeRequest));
export default connectedApp;

