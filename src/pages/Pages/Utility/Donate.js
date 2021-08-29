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
        { id: 1, name: "Sutura", link: "/index" },
        { id: 2, name: "Page", link: "#" },
        { id: 3, name: "Liens utiles", link: "#" },
        { id: 4, name: "Faire un don" },
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
          <h4 className="title"> Vous voulez nous soutenir ? </h4>
          <ul className="list-unstyled mt-4">
            <li className="list-inline-item h6 date text-muted">
              <span className="text-dark">Faites un don.</span>
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
                    <h5 className="card-title">Pour l'instant, si vous voulez nous soutenir, voici les étapes à suivre: :</h5>
                      <li>Notez pour vous le RIB ci-dessous;</li>
									    <li>Rendez-vous dans votre banque pour effectuer un dépôt sur notre compte ou alors effectuez un virement depuis l'application mobile de votre banque;</li>
									    <li>Envoyez nous un mail en joignant le reçu de votre transfert.</li><br/>
                    <h5 className="card-title">IBAN ou RIB :</h5>
                    <h2>1454502111107796800014</h2>
                    <h5 className="card-title">Code Swift :</h5>
                    <h2>BCPOMAMC</h2>Banque Populaire
                    <p className="text-muted">Nous restons disponibles pour vos questions. Merci de nous faire confiance.</p>

                    
                   
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
