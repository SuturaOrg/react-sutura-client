import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Label,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Icons
import FeatherIcon from "feather-icons-react";

class LoanSubmitConfirmation extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link to="index" className="btn btn-icon btn-primary">
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
                  <CardBody>
                    <h4 className="card-title text-center">Votre demande de prêt a été enregistrée avec succès</h4>

                    <AvForm className="login-form mt-4">
                      <Row>
                        <Col lg={12}>
                          <p className="text-muted">
                            Après validation, notre algorithme va considérer votre demande avec les autres en attentes. <br/>La priorité d'une demande dépend de plusieurs paramètres: 
                            <ul>
                              <li>l'urgence de la demande</li>
                              <li>le montant de votre cotisation</li>
                              <li>l'échéance de paiement</li>
                              <li>votre crédibilité</li>
                              <li>les remboursements à échéance proche</li>
                            </ul>
                          </p>
                        </Col>
                        <Col lg="12">
                          <div className="d-grid">
                            <Button color="primary">
                            <Link
                              to="page-loans"
                              className="text-light fw-bold"
                            >Retour
                            </Link>
                          </Button>
                          </div>
                        </Col>
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

export default LoanSubmitConfirmation;
