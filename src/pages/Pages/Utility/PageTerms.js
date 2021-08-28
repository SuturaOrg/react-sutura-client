// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Collapse,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

class PageTerms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Sutura", link: "/index" },
        { id: 2, name: "Page", link: "#" },
        { id: 3, name: "Liens utiles", link: "#" },
        { id: 4, name: "CGU" },
      ],
      col1: true,
      col2: false,
      col3: false,
      col4: false,
      col5: false,
      col6: false,
      col7: false,
      col8: false,
      col9: false,
      col10: false,
      col11: false,
      col12: false,
      col13: false,
      col14: false,
      col15: false,
      col16: false,

    };
    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.t_col4 = this.t_col4.bind(this);
    this.t_col5 = this.t_col5.bind(this);
    this.t_col6 = this.t_col6.bind(this);
    this.t_col7 = this.t_col7.bind(this);
    this.t_col8 = this.t_col8.bind(this);
    this.t_col9 = this.t_col9.bind(this);
    this.t_col10 = this.t_col10.bind(this);
    this.t_col11 = this.t_col11.bind(this);
    this.t_col12 = this.t_col12.bind(this);
    this.t_col13 = this.t_col13.bind(this);
    this.t_col14 = this.t_col14.bind(this);
    this.t_col15 = this.t_col15.bind(this);
    this.t_col16 = this.t_col16.bind(this);
  }

  t_col1() {
    this.setState({
      col1: !this.state.col1,
      col2: false,
      col3: false,
      col4: false,
      col5: false,
      col6: false,
      col7: false,
      col8: false,
      col9: false,
      col10: false,
      col11: false,
      col12: false,
      col13: false,
      col14: false,
      col15: false,
      col16: false,
    });
  }
  t_col2() {
    this.setState({
      col2: !this.state.col2,
      col1: false,
      col3: false,
      col4: false,
      col5: false,
      col6: false,
      col7: false,
      col8: false,
      col9: false,
      col10: false,
      col11: false,
      col12: false,
      col13: false,
      col14: false,
      col15: false,
      col16: false,
    });
  }
  t_col3() {
    this.setState({
      col3: !this.state.col3,
      col2: false,
      col1: false,
      col4: false,
      col5: false,
      col6: false,
      col7: false,
      col8: false,
      col9: false,
      col10: false,
      col11: false,
      col12: false,
      col13: false,
      col14: false,
      col15: false,
      col16: false,
    });
  }
  t_col4() {
    this.setState({
      col4: !this.state.col4,
      col2: false,
      col3: false,
      col1: false,
      col5: false,
      col6: false,
      col7: false,
      col8: false,
      col9: false,
      col10: false,
      col11: false,
      col12: false,
      col13: false,
      col14: false,
      col15: false,
      col16: false,
    });
  }
  t_col5() {
    this.setState({
      col5: !this.state.col5,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
      col6: false,
      col7: false,
      col8: false,
      col9: false,
      col10: false,
      col11: false,
      col12: false,
      col13: false,
      col14: false,
      col15: false,
      col16: false,
    });
  }
  t_col6() {
    this.setState({
      col6: !this.state.col6,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
      col5: false,
      col7: false,
      col8: false,
      col9: false,
      col10: false,
      col11: false,
      col12: false,
      col13: false,
      col14: false,
      col15: false,
      col16: false,
    });
  }
  t_col7() {
    this.setState({
      col7: !this.state.col7,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
      col6: false,
      col5: false,
      col8: false,
      col9: false,
      col10: false,
      col11: false,
      col12: false,
      col13: false,
      col14: false,
      col15: false,
      col16: false,
    });
  }
  t_col8() {
    this.setState({
      col8: !this.state.col8,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
      col6: false,
      col7: false,
      col5: false,
      col9: false,
      col10: false,
      col11: false,
      col12: false,
      col13: false,
      col14: false,
      col15: false,
      col16: false,
    });
  }
  t_col9() {
    this.setState({
      col9: !this.state.col9,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
      col6: false,
      col7: false,
      col8: false,
      col5: false,
      col10: false,
      col11: false,
      col12: false,
      col13: false,
      col14: false,
      col15: false,
      col16: false,
    });
  }
  t_col10() {
    this.setState({
      col10: !this.state.col5,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
      col6: false,
      col7: false,
      col8: false,
      col9: false,
      col5: false,
      col11: false,
      col12: false,
      col13: false,
      col14: false,
      col15: false,
      col16: false,
    });
  }
  t_col11() {
    this.setState({
      col11: !this.state.col11,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
      col6: false,
      col7: false,
      col8: false,
      col9: false,
      col10: false,
      col5: false,
      col12: false,
      col13: false,
      col14: false,
      col15: false,
      col16: false,
    });
  }
  t_col12() {
    this.setState({
      col12: !this.state.col12,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
      col6: false,
      col7: false,
      col8: false,
      col9: false,
      col10: false,
      col11: false,
      col5: false,
      col13: false,
      col14: false,
      col15: false,
      col16: false,
    });
  }
  t_col13() {
    this.setState({
      col13: !this.state.col13,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
      col6: false,
      col7: false,
      col8: false,
      col9: false,
      col10: false,
      col11: false,
      col12: false,
      col5: false,
      col14: false,
      col15: false,
      col16: false,
    });
  }
  t_col14() {
    this.setState({
      col14: !this.state.col14,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
      col6: false,
      col7: false,
      col8: false,
      col9: false,
      col10: false,
      col11: false,
      col12: false,
      col13: false,
      col5: false,
      col15: false,
      col16: false,
    });
  }
  t_col15() {
    this.setState({
      col15: !this.state.col15,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
      col6: false,
      col7: false,
      col8: false,
      col9: false,
      col10: false,
      col11: false,
      col12: false,
      col13: false,
      col14: false,
      col5: false,
      col16: false,
    });
  }
  t_col16() {
    this.setState({
      col16: !this.state.col16,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
      col6: false,
      col7: false,
      col8: false,
      col9: false,
      col10: false,
      col11: false,
      col12: false,
      col13: false,
      col14: false,
      col15: false,
      col5: false,
    });
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
        <PageBreadcrumb
          title="Conditions générales d'utilisation"
          pathItems={this.state.pathItems}
        />
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
                <Card className="shadow border-0 rounded">
                  <CardBody>
                    {/* <h5 className="card-title">Introduction :</h5>
                    <p className="text-muted">
                      It seems that only fragments of the original text remain
                      in the Lorem Ipsum texts used today. One may speculate
                      that over the course of time certain letters were added or
                      deleted at various positions within the text.
                    </p> */}

                    {/* <h5 className="card-title">User Agreements :</h5>
                    <p className="text-muted">
                      The most well-known dummy text is the 'Lorem Ipsum', which
                      is said to have <b className="text-danger">originated</b>{" "}
                      in the 16th century. Lorem Ipsum is{" "}
                      <b className="text-danger">composed</b> in a pseudo-Latin
                      language which more or less{" "}
                      <b className="text-danger">corresponds</b> to 'proper'
                      Latin. It contains a series of real Latin words. This
                      ancient dummy text is also{" "}
                      <b className="text-danger">incomprehensible</b>, but it
                      imitates the rhythm of most European languages in Latin
                      script. The <b className="text-danger">advantage</b> of
                      its Latin origin and the relative{" "}
                      <b className="text-danger">meaninglessness</b> of Lorum
                      Ipsum is that the text does not attract attention to
                      itself or distract the viewer's{" "}
                      <b className="text-danger">attention</b> from the layout.
                    </p>
                    <p className="text-muted">
                      There is now an <b className="text-danger">abundance</b>{" "}
                      of readable dummy texts. These are usually used when a
                      text is <b className="text-danger">required purely</b> to
                      fill a space. These alternatives to the classic Lorem
                      Ipsum texts are often amusing and tell short, funny or{" "}
                      <b className="text-danger">nonsensical</b> stories.
                    </p>
                    <p className="text-muted">
                      It seems that only{" "}
                      <b className="text-danger">fragments</b> of the original
                      text remain in the Lorem Ipsum texts used today. One may
                      speculate that over the course of time certain letters
                      were added or deleted at various positions within the
                      text.
                    </p> */}

                    <h5 className="card-title">Sommaire :</h5>
                    <p className="text-muted">
                      Les CGU sont définies par 15 articles
                      :
                    </p>
                    <ul className="list-unstyled feature-list text-muted">
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Article 1- Définitions
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Article 2 - Objet
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Article 3 - Acceptation des CGU
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Article 4 - Création d'un compte à l'espace personnel
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Article 5 - Spécifications techniques
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Article 6 - Obligations
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Article 7 - Propriété intellectuelle
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Article 8 - Informations
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Article 9 - Diffusion des documents administratifs et réutilisation des informations publiques
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Article 10 - Responsabilités
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Article 11 - Force majeure
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Article 12 - Protection des données à caractère personnel
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Article 13 - Validité des CGU
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Article 14 - Modification des CGU
                      </li>
                      <li>
                        <i>
                          <FeatherIcon
                            icon="arrow-right"
                            className="fea icon-sm me-2"
                          />
                        </i>
                        Article 15 - compétence et droit applicable
                      </li>
                    </ul>

                    <h5 className="card-title">Détails:</h5>
                    <div className="faq-content mt-4">
                      <div className="accordion" id="accordionExample">
                        <Card className="border-0 rounded mb-2">
                          <Link
                            to="#"
                            onClick={this.t_col1}
                            className={
                              this.state.col1
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingOne"
                            >
                              <h6 className="title mb-0">
                                Préambule
                                <i
                                  className={
                                    this.state.col1
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col1}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                              TOUTE UTILISATION EFFECTUEE A QUELQUE TITRE QUE CE SOIT DU SITE IMPLIQUE OBLIGATOIREMENT L’ACCEPTATION 
                              SANS RESERVE, PAR L’UTILISATEUR, DES PRESENTES CGU. LES PRESENTES CGU S’APPLIQUENT UNIQUEMENT AUX
                               UTILISATEURS QUI NAVIGUENT SUR LE SITE. DES LA CREATION D’UN ESPACE PERSONNEL ET CONNEXION SUR CELUI-CI, 
                               DES CGU SPECIFIQUES Aux utilisateurs de l’espace personnel SONT APPLICABLES ET SONT ACCESSIBLES VIA le 
                               lien ci-après.
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded mb-2">
                          <Link
                            to="#"
                            onClick={this.t_col2}
                            className={
                              this.state.col2
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingTwo"
                            >
                              <h6 className="title mb-0">
                                Article 1: Définitions
                                <i
                                  className={
                                    this.state.col2
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col2}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                              <ul>
                                <li><b>ESPACE PERSONNEL :</b> désigne la partie du site dédiée aux adhérents de Sutura, accessible uniquement après identification sur le SITE.</li>
                                <li><b>INFORMATIONS :</b> désigne l’ensemble des informations rendues accessibles aux UTILISATEURS sur le SITE comprenant les données, conseils, recommandations, et autres informations dont Sutura est propriétaire, ou est autorisé à utiliser et à divulguer. Les INFORMATIONS incluent les descriptifs détaillant chaque service proposé par  Sutura, les statuts, les conditions d’adhésion et autres.</li>
                                <li><b>SERVICES :</b> désigne l’ensemble des services proposés par Sutura aux UTILISATEURS via le SITE à l’exclusion des services proposés au sein de l’ESPACE PERSONNEL.</li>
                                <li><b>SITE :</b> désigne le site internet accessible à l'adresse …. Le SITE regroupe l’ensemble des pages web, services et fonctionnalités proposés aux UTILISATEURS.</li>
                                <li><b>UTILISATEUR :</b> désigne toute personne qui accède et navigue sur le SITE, dont les adhérents de Sutura, en vue de bénéficier des SERVICES.</li>
                                </ul></p><p>
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded mb-2">
                          <Link
                            to="#"
                            onClick={this.t_col3}
                            className={
                              this.state.col3
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingfive"
                            >
                              <h6 className="title mb-0">
                                Article 2: Objet
                                <i
                                  className={
                                    this.state.col3
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col3}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                                <h3>2.1. Objet du SITE</h3>
                                  Le SITE a pour objet de permettre aux UTILISATEURS de bénéficier des INFORMATIONS et SERVICES proposés par Sutura.<br/>
                                <h3>2.2. Objet des CGU</h3>
                                  Les présentes CGU ont pour objet de fixer les dispositions contractuelles relatives aux droits et obligations respectifs de Sutura et des UTILISATEURS.
                                  Ces CGU s’appliquent uniquement aux UTILISATEURS qui naviguent sur le SITE. Il est rappelé que des Conditions Générales d’Utilisations distinctes spécifiques s’appliquent lors de la création d’un compte et/ou lors de la connexion sur celui-ci.<br/>
                                <h3>2.3. Descriptif non exhaustif des SERVICES</h3>
                                Les UTILISATEURS peuvent accéder notamment aux services suivants :
                                <lu>
                                  <li>
                                  Création d’un compte d’utilisateur
                                  </li>
                                  <li>
                                  Adhésion en ligne aux offres de Sutura (les conditions et modalités d’adhésion sont détaillées à l’article 4 ci-dessous).</li>
                                  <li>
                                  Contacter Sutura et lui transmettre une demande via le formulaire de contact.
                                  </li>
                                  <li>
                                  S’abonner à la Newsletter Sutura ;
                                  </li>
                                </lu>
                                  Les adhérents de Sutura peuvent effectuer des demandes par voie numérique et accéder aux services en se connectant à leur compte.
                                  Textes marocains sur le numérique à consulter <br/>
                                <h3>2.4. Accessibilité du SITE aux personnes handicapées</h3>
                                  La situation de handicap étant une cause qui tient à cœur de Sutura, nous nous efforçons de déployer tous les moyens utiles afin de rendre ce site le plus accessible possible à toute personne présentant un handicap.
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded">
                          <Link
                            to="#"
                            onClick={this.t_col4}
                            className={
                              this.state.col4
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingfive"
                            >
                              <h6 className="title mb-0">
                                Article 3: Acceptation des CGU
                                <i
                                  className={
                                    this.state.col4
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col4}>
                            <CardBody>
                            L’utilisation des fonctionnalités du SITE et des SERVICES implique l’acceptation des présentes CGU. Ainsi, l’UTILISATEUR s’engage à lire attentivement les présentes CGU lors de l’accès au SITE et est invité à les télécharger, les imprimer et à en conserver une copie.<br/>
                            Il est précisé que les présentes CGU sont référencées en bas de chaque page du SITE au moyen d’un lien hypertexte et peuvent ainsi être consultées à tout moment.
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded">
                          <Link
                            to="#"
                            onClick={this.t_col5}
                            className={
                              this.state.col5
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingfive"
                            >
                              <h6 className="title mb-0">
                                Article 4 – Création d'un compte à l'espace personnel
                                <i
                                  className={
                                    this.state.col5
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col5}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                              <h3>4.1. Conditions</h3>
                                Les adhérents de Sutura ont la possibilité de créer un compte accessible sur le site www.sutura. afin d’accéder en ligne à certaines informations et documents portant sur la gestion de leur dossier et d’effectuer certaines démarches.
                                <br/>
                                Seuls les personnes ayant la qualité d’adhérent de Sutura  au d’étudiants peuvent créer un compte sur le site.
                                <br/>
                                Les conditions d’adhésion à Sutura sont détaillées au sein des statuts et règlements de Sutura.<br/><br/>
                                <h3>4.2. Procédure</h3>
                                <h4>4.2.1 Adhésion en ligne</h4>
                                L’utilisateur peut souscrire en ligne aux services de Sutura. Pour demander l’adhésion en ligne,  l’UTILISATEUR doit définir au préalable ses besoins afin que Sutura lui propose une formule adaptée. Il doit ensuite suivre les instructions à chaque étape de son adhésion en ligne. Chaque étape nécessite la validation de sa part à l’aide de l’icône "continuer". A l’issue de la procédure, l’UTILISATEUR aura la faculté d’adhérer directement à l’une des formules proposées.<br/>
                                Pour toute question rendez-vous en accueil ou contactez un conseiller téléphonique.<br/>
                                <b>Etape 1 : la demande d’adhésion à compléter</b><br/>
                                Lors de cette étape, il est demandé un certain nombre d’informations nominatives, indispensables à l’adhésion.<br/>
                                Si ces dernières sont mal remplies ou comportent des erreurs bloquantes et identifiables rendant la demande d’adhésion non valide, un message d’erreur est affiché sur la page concernée de la demande d’adhésion ou dans une fenêtre "pop-up" qui apparaît. L’UTILISATEUR peut de nouveau avancer dans les étapes de l’adhésion une fois les champs saisis correctement.<br/>
                                Si des erreurs ne sont pas identifiées (ex.: fautes d’orthographe, dans la saisie…) et ne bloquent pas l’adhésion en ligne, elles peuvent faire l’objet d’une rectification ultérieure par le centre de gestion.<br/>
                                <b>Etape 2: la confirmation de sa demande d’adhésion</b><br/>
                                L’UTILISATEUR saisit ses données bancaires.<br/>
                                Après avoir coché la case confirmant que l’UTILISATEUR a bien pris connaissance des statuts et règlements de Sutura, des montants de cotisations et la notice d’information sur la prestation d’aide aux personnes ainsi que les présentes conditions générales de services à distance, celui-ci visualise sa demande d’adhésion.<br/>
                                L’UTILISATEUR vérifie la concordance entre les éléments qu’il a indiqués et ceux que l’association a enregistrés. Il a la possibilité de rectifier ces informations en modifiant directement les données sur la page internet.<br/>
                                <b>Etape 3 : la signature électronique</b><br/>
                                Pour valider définitivement sa demande d’adhésion, l’UTILISATEUR doit signer électroniquement la note d’adhésion et le renvoyer à l’association par voie indiquée. 
                                Une fois signé, l’UTILISATEUR peut télécharger ou imprimer son dossier d’adhésion comprenant la demande d’adhésion et l’autorisation de prélèvement.<br/>
                                Il doit adresser l’autorisation de prélèvement dans un délai de dix (10) jours à son établissement bancaire afin que Sutura puisse procéder au prélèvement de la cotisation. L’envoi du formulaire d’autorisation de prélèvement est obligatoire pour valider définitivement l’adhésion.<br/>
                                Sutura atteste de la prise en compte de la demande d’adhésion en ligne en envoyant par e-mail à l’UTILISATEUR une confirmation de l’enregistrement de sa demande d’adhésion.<br/>
                                Après validation de sa demande d’adhésion, Sutura adresse le certificat d’adhésion accompagné de la carte d’adhérent tiers payant au domicile de l’UTILISATEUR devenu également utilisateur du site internet de l’association.<br/>
                                Les registres informatiques, conservés dans des conditions raisonnables de sécurité, feront la preuve des communications et demandes d’adhésion. Sutura procèdera à un archivage des formulaires d’adhésions sur un support fiable et durable, pouvant juridiquement être produit à titre de preuve.<br/>
                                L’UTILISATEUR qui souhaite adhérer par Internet accepte que les données le concernant et celles relatives à son adhésion, communiquées à cette fin à Sutura soient conservées à une durée indéterminée.
                                <h4><b>Droit de Rétractation :</b></h4>
                                Toute personne qui a adhéré à Sutura a la faculté d’y renoncer pendant un délai de 30 jours à compter du moment où elle est informée que son adhésion a pris effet. La renonciation n’entraîne pas le remboursement des cotisations  et en cas d’impayé suite à un prêt, l’adhérent doit impérativement régler les sommes dues avant l’acceptation de sa rétractation. Elle peut être faite par l’envoi d’une demande à Sutura via le site.
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded">
                          <Link
                            to="#"
                            onClick={this.t_col6}
                            className={
                              this.state.col6
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingfive"
                            >
                              <h6 className="title mb-0">
                                Article 5: Spécifications techniques
                                <i
                                  className={
                                    this.state.col6
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col6}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                              L’UTILISATEUR reconnait disposer des moyens et compétences nécessaires à l’utilisation du SITE.<br/>
                              Les équipements nécessaires à l’accès et à l’utilisation du SITE sont à la charge de l’UTILISATEUR, de même que les frais de télécommunications induits par leur utilisation.
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded">
                          <Link
                            to="#"
                            onClick={this.t_col7}
                            className={
                              this.state.col7
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingfive"
                            >
                              <h6 className="title mb-0">
                                Article 6: Obligations
                                <i
                                  className={
                                    this.state.col7
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col7}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                              <h3>6.1. Obligations des UTILISATEURS</h3>
                                Dans le cadre de l’utilisation du SITE, chaque UTILISATEUR s’engage à ne pas porter atteinte à l’ordre public et à se conformer aux lois et règlements en vigueur, à respecter les droits des tiers et les dispositions des présentes CGU.<br/>
                                Chaque UTILISATEUR a pour obligation de :
                                <ul>
                                  <li>
                                  Se comporter de façon loyale et en bon frère ou sœur à l’égard de Sutura et des tiers
                                  </li>
                                  <li>
                                  Etre honnête et sincère dans les informations fournies à  Sutura et, le cas échéant aux tiers UTILISATEURS
                                  </li>
                                  <li>
                                  Utiliser le SITE conformément à son objet tel que décrit dans les présentes CGU
                                  </li>
                                  <li>
                                  Ne pas détourner la finalité du SITE pour commettre des crimes, délits ou contraventions réprimées par le Code pénal ou toute autre loi
                                  </li>
                                  <li>
                                  Respecter la vie privée des tiers et la confidentialité des échanges
                                  </li>
                                  <li>
                                  Ne pas chercher à porter atteinte au sens des articles 323-1 et suivants du Code pénal aux systèmes de traitement automatisés de données mis en œuvre sur le SITE
                                  </li>
                                  <li>
                                  Ne pas dénigrer le SITE ou Sutura, ni tenir de propos diffamant d’aucune sorte visant  Sutura ou portant atteinte aux droits des tiers, notamment au sein de la zone de commentaires libres prévue dans le formulaire de contact ou sur les réseaux sociaux
                                  </li>
                                  <li>
                                  Ne pas modifier les INFORMATIONS mises en ligne par  Sutura
                                  </li>
                                  <li>
                                  Ne pas utiliser le SITE pour envoyer massivement des messages non sollicités (publicitaires ou autres)
                                  </li>
                                  <li>
                                  Ne pas diffuser des données ayant pour effet de diminuer, de désorganiser, de ralentir ou d’interrompre le fonctionnement normal du SITE.
                                  </li>
                                  </ul>
                                <h3>6.2. Obligations de Sutura</h3>
                                L’obligation générale de Sutura est une obligation de moyens. Il ne pèse sur  Sutura aucune obligation de résultat ou de moyens renforcée d’aucune sorte.  Sutura s’engage à mettre tous les moyens en œuvre pour assurer une continuité d’accès et d’utilisation du SITE, 7 jours sur 7 et 24 heures sur 24.<br/>
                                Sutura attire toutefois l’attention des UTILISATEURS sur le fait que les protocoles actuels de communication via Internet ne permettent pas d’assurer de manière certaine et continue la transmission des échanges électroniques (messages, documents, identité de l’émetteur ou du destinataire).
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded">
                          <Link
                            to="#"
                            onClick={this.t_col8}
                            className={
                              this.state.col8
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingfive"
                            >
                              <h6 className="title mb-0">
                                Article 7: Propriété intellectuelle
                                <i
                                  className={
                                    this.state.col8
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col8}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                              <h3>7.1. Titularité des droits de propriété intellectuelle</h3>
                                Les marques, logos, slogans, graphismes, photographies, animations, vidéos, solutions logicielles et textes contenus sur le SITE ne peuvent être reproduits, utilisés ou représentés sans autorisation expresse de Sutura sous peine de poursuites judiciaires.
                                Toute représentation ou reproduction, totale ou partielle, du SITE et de son contenu, par quel que procédé que ce soit, sans l’autorisation préalable expresse de Sutura est interdite et constituera une contrefaçon sanctionnée par les articles du Code de la Propriété intellectuelle.<br/>
                                En particulier,  Sutura interdit expressément :
                                <ul>
                                <li>
                                  L’extraction, par transfert permanent ou temporaire de la totalité ou d’une partie qualitativement ou quantitativement substantielle du contenu d’une base de données sur un autre support, par tout moyen et sous toute forme que ce soit ;
                                  </li>
                                  <li>
                                  La réutilisation, par la mise à la disposition du public de la totalité ou d’une partie qualitativement ou quantitativement substantielle du contenu de la base, quelle qu’en soit la forme.
                                  </li>
                                  <li>
                                  L’acceptation des présentes CGU vaut reconnaissance par les UTILISATEURS des droits de propriété intellectuelle et l’engagement de les respecter.
                                  </li>
                                </ul>
                                <h3>7.2. Licence d’utilisation du SITE</h3>
                                Sutura accorde une licence personnelle, non-exclusive et non cessible aux UTILISATEURS les autorisant à utiliser le SITE et les INFORMATIONS qu’il contient conformément aux présentes CGU.<br/>
                                Toute autre exploitation du SITE et de son contenu est exclue du domaine de la présente licence et ne pourra être effectuée sans l’autorisation préalable expresse de Sutura.
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded">
                          <Link
                            to="#"
                            onClick={this.t_col9}
                            className={
                              this.state.col9
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingfive"
                            >
                              <h6 className="title mb-0">
                                Article 8: Informations
                                <i
                                  className={
                                    this.state.col9
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col9}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                                Sutura met tout en œuvre pour fournir à l’UTILISATEUR des INFORMATIONS loyales, fiables, complètes et à jour. Sutura se réserve le droit de mettre à jour ou de modifier les INFORMATIONS présentées sur le SITE sans avis préalable.<br/>
                                Les INFORMATIONS présentes sur le SITE sont délivrées à titre purement indicatif et ne sauraient engager la responsabilité de  Sutura.<br/>
                                Sutura ne saurait garantir l’exactitude, l’exhaustivité, l’absence d’erreurs, concernant les INFORMATIONS fournies.<br/>
                                L’UTILISATEUR s’engage à faire un usage personnel et non commercial des INFORMATIONS. Tout autre usage des INFORMATIONS est strictement interdit.<br/><br/>
                                Il est par ailleurs précisé que le SITE peut inclure des publicités et liens vers d’autres sites Internet que  Sutura ne contrôle pas.  Sutura décline toute responsabilité quant aux contenus et informations diffusés sur ces sites tiers et quant aux contenus affichés sur le SITE en provenance de sites tiers pour lesquels elle aura le statut d’hébergeur au sens de l’article 6 de la loi pour la confiance dans l’économie numérique du 21 juin 2004.
                                En cas de contenus litigieux diffusé, l’UTILISATEUR est invité à contacter le service et par courrier en recommandé avec accusé de réception selon les formes prescrites par l’article 6 I 5) de la loi du 21 juin 2004.
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded">
                          <Link
                            to="#"
                            onClick={this.t_col10}
                            className={
                              this.state.col10
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingfive"
                            >
                              <h6 className="title mb-0">
                                Article 9 – Diffusion des documents administratifs et réutilisation des informations publiques
                                <i
                                  className={
                                    this.state.col10
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col10}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                              Les dispositions des articles 6 et 7 des présentes CGU ne s’opposent pas à la réutilisation des informations publiques diffusées en application des articles L.312-1 et suivants du Code des relations entre le Public et l’Administration modifié par la loi n°2016-1321 du 7 octobre 2016 pour une République Numérique.<br/>
                              La réutilisation des informations publiques s’effectuera conformément aux dispositions des articles L.321-1 et suivants du Code des relations entre le Public et l’Administration et de manière générale dans le respect des lois et réglementations en vigueur.<br/>
                              La liste des actes administratifs est accessible en cliquant sur le lien suivant.
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded">
                          <Link
                            to="#"
                            onClick={this.t_col11}
                            className={
                              this.state.col11
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingfive"
                            >
                              <h6 className="title mb-0">
                              Article 10 - Responsabilités
                                <i
                                  className={
                                    this.state.col11
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col11}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                              L'accès au SITE et l'utilisation de son contenu se fait sous la responsabilité de l’UTILISATEUR. Il appartient notamment à l’UTILISATEUR de se protéger contre tous virus ou tout autre élément qui risquerait de détruire ou d'endommager son ordinateur ou les données qu’il contient.<br/>
                                Par ailleurs, la responsabilité de  Sutura ne pourra en aucun cas être engagée :
                                <ul>
                                <li>
                                  en cas d’impossibilité d’accéder temporairement au SITE pour des opérations de maintenance technique ou d’actualisation des informations publiées. Les UTILISATEURS reconnaissent que la responsabilité de  SUTURA ne saurait être engagée en cas de dysfonctionnements ou d’interruptions desdits réseaux de transmission
                                  </li>
                                  <li>
                                  en cas d’attaques virales
                                  </li>
                                  <li>
                                  en cas d’utilisation anormale ou d’une exploitation illicite du SITE
                                  </li>
                                  <li>
                                  relativement au contenu des sites internet tiers vers lesquels renvoient des liens hypertextes présents sur le SITE
                                  </li>
                                  <li>
                                  en cas de non-respect des présentes CGU imputables aux UTILISATEURS
                                  </li>
                                  <li>
                                  en cas de retard ou d’inexécution de ses obligations, lorsque la cause du retard ou de l’inexécution est liée à un cas de force majeure telle qu’elle est définie à l’article 11 des présentes CGU
                                  </li>
                                  <li>
                                  en cas de cause étrangère non imputable à Sutura
                                  </li>
                                  <li>
                                  pour tous dommages indirects ou immatériels tels que perte de chance, perte de profit, perte de contrat ou préjudice d’image.
                                  </li>
                                </ul>
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded">
                          <Link
                            to="#"
                            onClick={this.t_col12}
                            className={
                              this.state.col12
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingfive"
                            >
                              <h6 className="title mb-0">
                                Article 11: Force majeure
                                <i
                                  className={
                                    this.state.col12
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col12}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                              Sutura se réserve la faculté de suspendre, retarder, modifier ou annuler l’exécution de ses obligations en cas de survenance d’évènements ou de circonstances de force majeure ou de cas fortuits ou d’évènements ou de circonstances contractuellement assimilés aux cas de force majeure ou de cas fortuits quand bien même ils ne répondraient pas à la définition juridique telle que : incendie, arrêt de travail indépendant et extérieur à la volonté de l’entreprise ou d’un quelconque de ses fournisseurs ou sous-traitants, inondation, épidémie, guerre, réquisition, grève, ouragan, tornade, tremblement de terre, révolution, vol de tout ou partie du matériel, interruption ou retard dans les transports, avarie de transport, manque de matières premières, accident d’outillages, manque de combustible ou de toute autre source d’énergie, ainsi qu’en cas de survenance de toute circonstance ou événement extérieur à la volonté de  Sutura intervenant postérieurement à la conclusion des CGU et en empêchant l’exécution dans des conditions normales.<br/>
                              Il est précisé que, dans une telle situation, l’UTILISATEUR ne peut réclamer le versement d’aucune indemnité et ne peut intenter aucun recours à l’encontre de Sutura.<br/>
                              En cas de survenance d’un des évènements susvisés, Sutura s’efforcera d’informer l’UTILISATEUR dès que possible.
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded">
                          <Link
                            to="#"
                            onClick={this.t_col13}
                            className={
                              this.state.col13
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingfive"
                            >
                              <h6 className="title mb-0">
                              Article 12: Protection des données à caractère personnel
                                <i
                                  className={
                                    this.state.col13
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col13}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                              Dans le cadre de l’exploitation du SITE,  Sutura est susceptible de collecter des données à caractère personnel.<br/>
                              Ces données sont nécessaires à la gestion du SITE, et le cas échéant à l’envoi de newsletter et autres alertes aux UTILISATEURS qui en ont fait la demande. Ces données seront traitées conformément aux finalités prévues lors de la collecte.<br/>
                              A ce titre, l’UTILISATEUR est invité à consulter la politique de confidentialité du SITE qui lui donnera plus amples informations relatives à la protection des données à caractère personnel, et aux traitements effectués via le SITE.<br/>
                              Il est rappelé que l’UTILISATEUR dont les données à caractère personnel sont traitées bénéficie des droits d’accès, de rectification et d’opposition au traitement de ses données à caractère personnel, conformément aux articles 38 et suivants de la loi n°78-17 dite « Informatique et Libertés » du 6 janvier 1978 modifiée.<br/>
                              Ces droits peuvent être exercés, conformément à la loi n°78-17 du 6 janvier 1978 modifiée par courrier papier à l’adresse  ci-dessous en justifiant de son identité et d’un motif légitime s’il est exigé par la loi.
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded">
                          <Link
                            to="#"
                            onClick={this.t_col14}
                            className={
                              this.state.col14
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingfive"
                            >
                              <h6 className="title mb-0">
                              Article 13 - Validité des CGU
                                <i
                                  className={
                                    this.state.col14
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col14}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                                Toute modification de la législation ou de la réglementation en vigueur, ou toute décision d’un tribunal compétent invalidant une ou plusieurs clauses des présentes CGU ne saurait affecter la validité des présentes CGU.<br/>
                                Une telle modification ou décision n’autorise en aucun cas les UTILISATEURS à méconnaître les présentes CGU.
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded">
                          <Link
                            to="#"
                            onClick={this.t_col15}
                            className={
                              this.state.col15
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingfive"
                            >
                              <h6 className="title mb-0">
                                Article 14 - Modification des CGU
                                <i
                                  className={
                                    this.state.col15
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col15}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                                Les présentes CGU s’appliquent à tout UTILISATEUR navigant sur le SITE. Les CGU pourront être modifiées et mises à jour par  Sutura à tout moment, notamment pour s’adapter à l’évolution législative ou réglementaire. Les CGU applicables sont celles en vigueur au moment de la navigation sur le SITE.
                              </p>
                            </CardBody>
                          </Collapse>
                        </Card>

                        <Card className="border-0 rounded">
                          <Link
                            to="#"
                            onClick={this.t_col16}
                            className={
                              this.state.col16
                                ? "faq position-relative text-primary"
                                : "faq position-relative text-dark"
                            }
                          >
                            <CardHeader
                              className="border-0 bg-light p-3"
                              id="headingfive"
                            >
                              <h6 className="title mb-0">
                                Article 15 - Compétence et droit applicable
                                <i
                                  className={
                                    this.state.col16
                                      ? "mdi mdi-chevron-up float-end"
                                      : "mdi mdi-chevron-down float-end"
                                  }
                                ></i>
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={this.state.col16}>
                            <CardBody>
                              <p className="text-muted mb-0 faq-ans">
                                Les présentes CGU ainsi que les relations entre l’utilisateur et  sutura sont régies par le droit marocain.<br/>
                                En cas de différend survenant entre les parties au sujet de l’interprétation ou de l’exécution, les parties s’efforceront de le régler à l’amiable.
                                Il est possible d’adresser une réclamation ou de recourir au médiateur selon la procédure décrite ci-après.<br/>
                                <b>Adresser une réclamation à l’Association Sutura</b><br/>
                                Le groupe Sutura a toujours placé ses adhérents au cœur de sa démarche qualité.
                                Vos avis, vos remarques ou l'expression de votre insatisfaction contribuent à l’amélioration continue de la relation que nous entretenons ensemble.<br/>
                                Si vous rencontrez une situation qui ne vous convient pas, nos interlocuteurs sont à votre disposition pour apporter une réponse à votre réclamation dans un délai de 12 jours calendaires, conformément à nos engagements de service.<br/><br/>
                                <b>Premier niveau de réclamation - le service Adhérents</b><br/>
                                Vous pouvez adresser votre réclamation :<br/>
                                <ul>
                                  <li>
                                    Par email : via le formulaire de contact disponible sur votre espace utilisateur
                                  </li>
                                  <li>
                                    Par téléphone
                                  </li>
                                  <li>
                                    Par courrier
                                  </li>
                                </ul>
                                <b>Deuxième niveau de réclamation – le service réclamation du Siège National</b>
                                <b>IMPORTANT :</b> Tout recours au service réclamation du Siège National doit avoir fait l’objet au préalable d’au moins un contact avec le Service Adhérents (premier niveau de réclamation).<br/><br/>
                                <b>En dernier Recours - Le Médiateur</b><br/>
                                Si le litige persiste malgré vos échanges avec le Service Adhérents et le Siège National, vous pouvez saisir le Médiateur dans un délai maximum d’un an à compter de votre réclamation.<br/>
                                Votre demande de médiation peut être formulée par mail à l’adresse mediation@sutura.in<br/>
                                Plus d’informations sur le dispositif de Médiation<br/>
                                Dans l’hypothèse où la médiation échouerait, le litige ayant pu donner lieu à une médiation sera confié à la juridiction compétente.
                              </p>
                              <b><i>Mars 2021</i></b>

                            </CardBody>
                          </Collapse>
                        </Card>

                      </div>
                    </div>

                    {/* <div className="mt-3">
                      <Link to="#" className="btn btn-primary mt-2 me-2">
                        Accept
                      </Link>
                      <Link to="#" className="btn btn-outline-primary mt-2">
                        Decline
                      </Link>
                    </div> */}
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
export default PageTerms;
