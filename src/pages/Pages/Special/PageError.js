// React Basic and Bootstrap
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import img404 from "../../../assets/images/404.svg";

class PageError extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link to="/index" className="btn btn-icon btn-soft-primary">
            <i>
              <FeatherIcon icon="home" className="icons" />
            </i>
          </Link>
        </div>

        <section className="bg-home d-flex align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} md={12} className="text-center">
                <img src={img404} className="img-fluid" alt="" />
                <div className="text-uppercase mt-4 display-3">Oh ! non</div>
                <div className="text-capitalize text-dark mb-4 error-page">
                  Page introuvable
                </div>
                <p className="text-muted para-desc mx-auto">
                  La page demandée n'est pas Disponible.<br/>
                  Vous pouvez poursuivre votre navigation.
                </p>
              </Col>
            </Row>

            <Row>
              <Col md="12" className="text-center">
                <Link
                  to="#"
                  onClick={this.props.history.goBack}
                  className="btn btn-outline-primary mt-4"
                >
                  Retourner
                </Link>{" "}
                <Link to="/index" className="btn btn-primary mt-4 ms-2">
                  Aller à l'acceuil
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default withRouter(PageError);
