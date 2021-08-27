import React, { Component } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

export default class WorkProcess extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title text-center mb-4 pb-2">
                <h6 className="text-primary">Processus de travail</h6>
                <h4 className="title mb-4">Comment ça fonctionne ?</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Rassurez vous que{" "}
                  <span className="text-primary fw-bold">
                    Sutura
                  </span>{" "}
                  a mis en œuvre un système optimal pour s'assurer d'une gestion efficiente de la caisse.
                  Ce qui permet de maximiser le nombre de demandes satisfaites, d'évaluer les demandes les plus urgentes et de veiller
                  à la rapidité.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <h4 className="text-primary">Inscription & adhésion</h4>
            </Col>
            <Col md={3} className="mt-4 pt-2">
              <Card className="features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-presentation-edit d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">Remplir le formulaire</h5>
                  <p className="text-muted mb-0">
                    Saisissez vos informations pour procéder à l'inscription.
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col md={3} className="mt-md-5 pt-md-2 mt-4 pt-2">
              <Card className="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-airplay d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">Cotiser</h5>
                  <p className="text-muted mb-0">
                    Vous pouvez cotiser par virement ou transfert d'argent. 
                    Puis faire la déclaration en joignant un justificatif.
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col md={3} className="mt-md-5 pt-md-4 mt-4 pt-2">
              <Card className="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-airplay d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">Cotiser</h5>
                  <p className="text-muted mb-0">
                    Vous pouvez cotiser par virement ou transfert d'argent. 
                    Puis faire la déclaration en joignant un justificatif.
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col md={3} className="mt-md-5 pt-md-5 mt-4 pt-2">
              <Card className="features feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-image-check d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">Validation de la cotisation</h5>
                  <p className="text-muted mb-0">
                    Après, vous pouvez voir votre cotisation au niveau de votre espace personnel.
                  </p>
                </CardBody>
              </Card>
            </Col>

          </Row>
          <Row>
            <Col xs={12}>
              <h4 className="text-primary">Faire une demande de prêt</h4>
            </Col>
            <Col md={4} className="mt-4 pt-2">
              <Card className="features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-presentation-edit d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">Remplir le formulaire de demande</h5>
                  <p className="text-muted mb-0">
                    De préférence faire une demande est précise et justifiée. Ainsi, son traitement par l'algorithme sera optimal.
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col md={4} className="mt-md-5 pt-md-3 mt-4 pt-2">
              <Card className="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-airplay d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">L'algorithme décide</h5>
                  <p className="text-muted mb-0">
                    Après validation de la demande, l'algorithme calcule la priorité et fais le classement. En fonction de l'état
                    de la caisse, des autres demandes en attentes et de d'autres
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col md={4} className="mt-md-5 pt-md-5 mt-4 pt-2">
              <Card className="features feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-image-check d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">Validation de la cotisation</h5>
                  <p className="text-muted mb-0">
                    Après, vous pouvez voir votre cotisation au niveau de votre espace personnel.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h4 className="text-primary">Faire un remboursement</h4>
            </Col>
            <Col md={4} className="mt-4 pt-2">
              <Card className="features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-presentation-edit d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">Remplir le formulaire</h5>
                  <p className="text-muted mb-0">
                    Saisissez vos informations pour procéder à l'inscription.
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col md={4} className="mt-md-5 pt-md-3 mt-4 pt-2">
              <Card className="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-airplay d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">Cotiser</h5>
                  <p className="text-muted mb-0">
                    Vous pouvez cotiser par virement ou transfert d'argent. 
                    Puis faire la déclaration en joignant un justificatif.
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col md={4} className="mt-md-5 pt-md-5 mt-4 pt-2">
              <Card className="features feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-image-check d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">Validation de la cotisation</h5>
                  <p className="text-muted mb-0">
                    Après, vous pouvez voir votre cotisation au niveau de votre espace personnel.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
