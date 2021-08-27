import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

// Import images
import hero1 from '../../assets/images/hero1.png'
import bg2 from "../../assets/images/bg2.png";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-half-170 pb-0 bg-primary d-table w-100 bg-home d-flex align-items-center"
          style={{
            background: `url(${bg2})`,
            backgroundPosition: "center center",
            height: "auto",
          }}
          id="home">
          <Container>
            <Row className="align-items-center">
              <Col lg={7} md={6}>
                <div className="title-heading">
                  <h4 className="text-white-50">L'innovation numérique, sociale et économique</h4>
                  <h4 className="heading text-white mb-3 title-dark">
                    {" "}
                    La plus ambitieuse des<br /> startups d'étudiants{" "}
                  </h4>
                  <p className="para-desc text-white-50">
                    Nous proposons la meilleure solution aux problèmes que nous confrontons en tant qu'étudiants dans un pays étranger.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link onClick={this.props.onClickStart}className="btn btn-light">
                      Commencer
                    </Link>
                  </div>
                </div>
              </Col>

              <div className="col-lg-5 col-md-6 mt-5 mt-sm-0">
                <img src={hero1} className="img-fluid" alt="" />
              </div>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
