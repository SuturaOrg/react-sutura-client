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
                    Saisissez vos informations pour procéder à l'inscription puis valider votre email.
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
                  <h5 className="text-dark">Validation</h5>
                  <p className="text-muted mb-0">
                  Après, vous pouvez voir votre cotisation au niveau de votre espace personnel.
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
                  <h5 className="text-dark">Contrat d'adhésion</h5>
                  <p className="text-muted mb-0">
                    Après avoir rempli le formulaire, vous recevrez un exemplaire par mail.
                  </p>
                </CardBody>
              </Card>
            </Col>

          </Row>
          <Row>
          <Col xs={12}>
              <h4 className="text-primary">Faire une demande de prêt</h4>
            </Col>
            <Col md={3} className="mt-4 pt-2">
              <Card className="features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-presentation-edit d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">Remplir le formulaire de demande</h5>
                  <p className="text-muted mb-0">
                      De préférence faire une demande précise et justifiée. Ainsi, son traitement par l'algorithme sera optimal.
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
                  <h5 className="text-dark">Approbation</h5>
                  <p className="text-muted mb-0">
                    Dans cette étape, les Administrateurs de Sutura vérifient que la demande respecte les régles générales de demandes.
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
                  <h5 className="text-dark">L'algorithme décide</h5>
                  <p className="text-muted mb-0">
                      L'algorithme calcule la priorité et fais le classement puis décide
                    en fonction de l'état de la caisse, des autres demandes en attente et de d'autres contraintes.
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
                  <h5 className="text-dark">Réception du montant demandé</h5>
                  <p className="text-muted mb-0">
                    L'envoi se fera de manière traçable, généralement par transfert bancaire.
                  </p>
                </CardBody>
              </Card>
            </Col>

          </Row>
          <Row>
          <Col xs={12}>
              <h4 className="text-primary">Déclarer un remboursement</h4>
            </Col>
            <Col md={3} className="mt-4 pt-2">
              <Card className="features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-presentation-edit d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">Transaction bancaire</h5>
                  <p className="text-muted mb-0">
                      Envoyer l'argent dans notre compte bancaire. Le remboursement peut se faire en entier ou en tranches 
                      mais il ne faut pas dépasser l'échéance de paiement.
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
                  <h5 className="text-dark">Approbation</h5>
                  <p className="text-muted mb-0">
                    Dans cette étape, les Administrateurs de Sutura vérifient que la déclaration respecte les régles générales.
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
                  <h5 className="text-dark">L'algorithme fait le reste</h5>
                  <p className="text-muted mb-0">
                      L'algorithme met en jour le tableau de bord de l'étudiant puis procède à son vrai travail:
                      si la caisse est favorable, l'algorithme va voir quelles demandes peuvent être satisfaites selon leur priorité.
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
                  <h5 className="text-dark">confirmation</h5>
                  <p className="text-muted mb-0">
                    L'étudiant verra que sa déclaration de remboursement a été bien prise en compte dans son espace personnel.
                    Les demandeurs dont leur demande a été validée recevront l'argent souhaité.
                  </p>
                </CardBody>
              </Card>
            </Col>

          </Row>

          <Row>
            <Col xs={12}>
              <h4 className="text-primary">Faire un don</h4>
            </Col>
            <Col md={4} className="mt-4 pt-2">
              <Card className="features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-presentation-edit d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">Procéder au virement</h5>
                  <p className="text-muted mb-0">
                    Toutes les informations dont vous aurez besoin sont dans la page "Faire un don".
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
                  <h5 className="text-dark">Faire la déclaration par mail</h5>
                  <p className="text-muted mb-0">
                    Envoyer nous un mail en joignant un justificatif de votre transfert.
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
                  <h5 className="text-dark">Accusé de Réception</h5>
                  <p className="text-muted mb-0">
                    Après vérification, un mail vous sera envoyé pour confirmation la réception de votre don.
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
