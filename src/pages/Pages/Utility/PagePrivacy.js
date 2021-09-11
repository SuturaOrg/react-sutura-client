// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, CardBody, Card } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

class PagePrivacy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Sutura", link: "/" },
        { id: 3, name: "Liens utiles", link: "#" },
        { id: 4, name: "A propos" },
      ],
    };
  }
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
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <PageBreadcrumb pathItems={this.state.pathItems}>
          <h4 className="title"> A propos </h4>
          <ul className="list-unstyled mt-4">
            <li className="list-inline-item h6 date text-muted">
              {" "}
              <span className="text-dark">Dernière mises à jour:</span> 28/08/2019
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
                      L’accès aux soins au Maroc est très difficile pour les étudiants car le système de santé 
                      est très privatisé. Pour se soigner rapidement et dans de bonnes conditions il faut impérativement 
                      aller dans une clinique. Ce qui va sans dire qu’il faut débourser une somme importante. 
                      Ainsi cet état de fait rend davantage précaire la situation des étudiants étrangers.
                    </p>
                    
                    <h5 className="card-title">Problématique :</h5>
                    <p className="text-muted">
                      Chaque étudiant a une fois vécu un moment difficile. Soit c’est d’ordre financier soit sanitaire et 
                      dans la plupart du temps les deux à la fois. Ce qui pourrait aider les étudiants est la mise en 
                      place d’une bonne assurance, leur permettant de pouvoir se soigner gratuitement au moment du besoin. 
                      Certains étudiants en disposent par le biais de l’Agence Marocaine de Coopération Internationale. 
                      Ce sont les boursiers officiels venant de différents Etats.<br/>
                      Toutefois le système de l’assurance n’est vraiment pas adapté à l’étudiant. Il faut toujours payer la 
                      facture et courir derrière l’assureur pour se faire rembourser. Et c’est pour 2 à 4 mois, et dans la 
                      plupart des cas, l’étudiant ne reçoit rien en retour. Autre exemple, des étudiants ont des maux de dents, 
                      mais ne vont pas voir le dentiste car le budget nécessaire pour accéder au soin pose problème vu les charges 
                      ponctuelles qui les attendent (loyer, factures, nourriture, etc.). L’accès aux soins pose alors de sérieux problèmes. 
                      Alors dites-nous comment pouvons-nous être performants dans nos études dans un environnement où l’accès aux soins 
                      pose problème? Pour nous étudiants, il est donc urgent de penser à combler ces carences du système de santé. 
                      A notre avis, le moyen le plus efficace pour s’y prendre est de mettre en place un modèle d’aide et de solidarité 
                      performant et adapté (à intégrer dans les associations d’étudiants).<br/>
                      Actuellement, les associations d’étudiants sont incapables d’accompagner leurs membres dans ces cas d’urgence, 
                      alors qu’elles devraient. De l’autre côté, certains étudiants sont victimes de chantages ou reçoivent des avis 
                      d’expulsion de la part de leurs bailleurs ou d'autres personnes pour cause de difficulté financière suite à un 
                      retard de la bourse (pour les boursiers) ou des parents étant en difficulté pour les soutenir. <b><i>Demandons-nous 
                      combien d’étudiants ont abandonné leurs études parce qu’en un moment donné ils n’ont pas eu de soutien ? 
                      Combien d’étudiants ont des problèmes mais ne peuvent pas en parler à leur entourage ?</i></b><br/>
                      Dans cet ordre d’idée, vu le problème cerner il est important que nous puissions nous interroger sur le fait de
                      savoir : <b><i>quel modèle d’organisation informatisée et performante peut-on mettre en place aux seins des 
                      associations d’étudiants pour résoudre ces problèmes?</i></b>
                    </p>

                    {/* <h5 className="card-title">We use your information to :</h5>
                    <ul className="list-unstyled feature-list text-muted">
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Digital Marketing Solutions for Tomorrow
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Our Talented & Experienced Marketing Agency
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Create your own skin to match your brand
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Digital Marketing Solutions for Tomorrow
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Our Talented & Experienced Marketing Agency
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Create your own skin to match your brand
                      </li>
                    </ul> */}
                    <h5 className="card-title">
                      La solution :
                    </h5>
                    <p className="text-muted">
                      Une application web dénommée “<b>Sutura</b>” qui signifie en langue wolof <b><i>discrétion ou encore la dignité</i></b> , est née de ces différentes 
                      réflexions suite aux problèmes posés. Son rôle est de prendre en charge, tous les problèmes évoqués précédemment. Face à tout 
                      cela il est donc important et aussi responsable pour nous de pouvoir chercher des solutions à nos problèmes. Sutura vient 
                      alors pour agir dans le présent et pour les générations futures. Beaucoup de chose se sont déroulées dans le passé mais 
                      beaucoup de choses encore peuvent changer dorénavant. Il est capital de prendre conscience en cela et Sutura rentre dans 
                      ce schéma de penser. Et comme son nom l’indique, Sutura veut régler ces problèmes dans la discrétion et surtout dans la dignité.
                    </p>
                    {/* <Link to="#" className="btn btn-soft-primary d-print-none">
                      Print
                    </Link> */}
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
