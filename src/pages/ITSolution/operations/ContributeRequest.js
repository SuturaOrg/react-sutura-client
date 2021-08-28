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


//Import Icons
import FeatherIcon from "feather-icons-react";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";
import {connect} from "react-redux";
import {userActions} from "../../../actions";
import {contributionActions} from "../../../actions";

class ContributeRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Sutura", link: "/index" },
        { id: 2, name: "Opérations", link: "#" },
        { id: 3, name: "Cotiser" },
      ],
      isOpen: false,
    };
    this.handleSubmit.bind(this);
  }

  handleSubmit = (event,values) => {
    event.preventDefault();
    console.log(values);
    const { dispatch } = this.props;
    dispatch(contributionActions.create(values));
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
          title="Cotiser"
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
                                  type="text"
                                  className="form-control ps-5"
                                  name="proof"
                                  id="proof"
                                  placeholder="Preuve"
                                  required
                                  errorMessage=""
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
                            <input
                              type="submit"
                              id="submit"
                              name="send"
                              className="btn btn-primary"
                              value="Cotiser"
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
            <Row>
              <Col lg={6} md={6} xs={12}>
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-envelope-check d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark">
                        Get in Touch !
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      This is required when, for text is not yet available.
                    </p>
                    <div className="mt-2">
                      <Link to="#" className="btn btn-sm btn-soft-primary">
                        Submit a Request
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="d-flex align-items-center features feature-clean shadow rounded p-4">
                  <div className="icons text-primary text-center">
                    <i className="uil uil-webcam d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="flex-1 content ms-4">
                    <h5 className="mb-1">
                      <Link to="#" className="text-dark">
                        Start a Meeting
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      This is required when, for text is not yet available.
                    </p>
                    <div className="mt-2">
                      <Link to="#" className="btn btn-sm btn-soft-primary">
                        Start Video Chat
                      </Link>
                    </div>
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

const connectedApp = connect(mapStateToProps)(withRouter(ContributeRequest));
export default connectedApp;

