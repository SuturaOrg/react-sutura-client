// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, CardBody, Card } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import components
import PageBreadcrumb from '../../../components/Shared/PageBreadcrumb';

class PagePrivacy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: 'Sutura', link: '/' },
        { id: 3, name: 'Liens utiles', link: '#' },
        { id: 4, name: 'A propos' },
      ],
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
    }
  };

  render() {
    return (
        <React.Fragment>
          {/* breadcrumb */}
          <PageBreadcrumb pathItems={this.state.pathItems}>
            <h4 className="title"> A propos </h4>
            <ul className="list-unstyled mt-4">
              <li className="list-inline-item h6 date text-muted">
                {' '}
                <span className="text-dark">Dernières mises à jour:</span>{' '}
                28/03/2021
              </li>
            </ul>
          </PageBreadcrumb>

          <div className="position-relative">
            <div className="shape overflow-hidden text-white">
              <svg
                  viewBox="0 0 2880 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                    fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>

          <section className="section">
            <Container>
              <Row className="justify-content-center">
                <Col lg={9}>
                  <Card className="card shadow rounded border-0">
                    <CardBody>
                      <h5 className="card-title">Contexte :</h5>
                      <p className="text-muted">
                        <p>
                          La Startup est née de différentes réflexions suite aux
                          problèmes auxquels les étudiants internationaux sont
                          confrontés. La plateforme Sutura mise en place dans ce
                          sens a pour rôle d’apporter une solution durable à ces
                          problèmes en créant un écosystème répondant aux besoins
                          des étudiants internationaux.
                        </p>
                        <p>
                          Sutura vient alors pour agir dans le présent et pour les
                          générations futures à l’aide de sa plateforme Sutura
                          (qui signifie en langue wolof discrétion ou encore la
                          dignité). Beaucoup de choses se sont déroulées dans le
                          passé mais beaucoup de choses peuvent encore changer
                          dorénavant.
                        </p>
                      </p>

                      <h5 className="card-title">SUTURA HELP :</h5>
                      <p className="text-muted">
                        Les problèmes financiers sont une monnaie courante chez
                        les étudiants en général et particulièrement chez les
                        internationaux. Boursiers ou non la plupart peine souvent
                        à joindre les deux bouts. C’est ainsi que Sutura propose
                        des disponibilités de fonds en offrant des aides
                        financiers, en faveur des étudiants internationaux. Grâce
                        à son application web et son algorithme innovants, Sutura
                        permet à ces étudiants d’effectuer leur demande en un
                        clic.
                      </p>
                      <h5 className="card-title">CAMPUS SUTURA :</h5>
                      <p className="text-muted">
                        <p>
                          Les établissements d’enseignement supérieur privés au
                          Maroc offrent un large choix d’options d’études et
                          gagnent aujourd’hui en crédibilité de par la qualité de
                          leurs formations.
                        </p>
                        <p>
                          Sachant qu’il n’existe aucune plateforme permettant de
                          se renseigner sur les établissements d’enseignement
                          supérieur privés et de se préinscrire, Sutura met à
                          disposition Sutura Campus aux étudiants désireux de se
                          former au Maroc, une plateforme d’orientation, de
                          préinscription et d’accompagnement accessible à toute le
                          monde.
                        </p>
                      </p>
                      <h5 className="card-title">SUTURA HELP :</h5>
                      <p className="text-muted">
                        <p>
                          Voyager pendant les vacances d’été est un vrai
                          casse-tête pour les étudiants alors qu’ils veulent tous
                          rejoindre leur famille ou effectuer des stages dans leur
                          pays. Les billets d’avion sont très onéreux, ce qui pose
                          alors le problème de savoir : comment les étudiants
                          internationaux peuvent-ils les acheter à un prix plus
                          accessible ?
                        </p>
                        <p>
                          C’est pour réponde à cette question que Sutura met à la
                          disposition des étudiants une plateforme doté d’un
                          algorithme leur permettant d’effectuer des réservations
                          et à un coût réduit pour la destination de leur choix,
                          auprès des compagnies partenaires.
                        </p>
                      </p>
                      <h5 className="card-title">SUTURA IMMOBILIER:</h5>
                      <p className="text-muted">
                        <p>
                          L’accès et la sécurité au logement est une question
                          fondamentale pour les étudiants internationaux. Alors il
                          est important de pouvoir les donner des logements et
                          leur garantir la sécurité de leur contrat et des moyens
                          de facilité de paiement durant les périodes au cours
                          desquelles leur forme financière est en baisse. Il faut
                          noter que durant ces moments, les étudiants sont sous
                          une pression hyper-stressante causant une situation
                          d’inquiétude impactant leur performance académique.
                        </p>
                        <p>
                          Et Sutura avec l’appui de son réseau national d’agences
                          immobilières et de bailleurs, compte faciliter non
                          seulement l’accès à un logement, la signature d’un
                          contrat mais aussi la possibilité d’échéances de
                          paiement en cas de défaillance.
                        </p>
                      </p>
                      <h5 className="card-title">SUTURA CAREER:</h5>
                      <p className="text-muted">
                        Sutura est également un vivier d’opportunités de stages et
                        de jobs étudiants en faveur des étudiants internationaux.
                      </p>
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
export default PagePrivacy;