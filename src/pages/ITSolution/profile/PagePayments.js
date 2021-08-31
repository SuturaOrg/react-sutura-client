import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Progress,
  Card,
  CardBody,
  Form,
  FormGroup,
  InputGroup,
  Input,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import imgbg from "../../../assets/images/account/bg.png";
import profile from "../../../assets/images/client/05.jpg";
import master from "../../../assets/images/payments/payment/master.png";
import visaa from "../../../assets/images/payments/payment/visaa.png";
import rupay from "../../../assets/images/payments/payment/rupay.png";
import paypals from "../../../assets/images/payments/payment/paypals.png";
import ProfileCommon from "./PageProfileCommon";

class PagePayments extends Component {
  state = {
    widgets: [
      {
        id: 1,
        icon: "uil uil-dashboard",
        className: "navbar-item account-menu px-0",
        title: "Profile",
        link: "/page-profile",
      },
      {
        id: 2,
        icon: "uil uil-users-alt",
        className: "navbar-item account-menu px-0 mt-2",
        title: "Members",
        link: "/page-members",
      },
      {
        id: 3,
        icon: "uil uil-file",
        className: "navbar-item account-menu px-0 mt-2",
        title: "Portfolio",
        link: "/page-works",
      },
      {
        id: 4,
        icon: "uil uil-envelope-star",
        className: "navbar-item account-menu px-0 mt-2",
        title: "Messages",
        link: "/page-messages",
      },
      {
        id: 5,
        icon: "uil uil-transaction",
        className: "navbar-item account-menu px-0 mt-2 active",
        title: "Payments",
        link: "/page-payments",
      },
      {
        id: 6,
        icon: "uil uil-setting",
        className: "navbar-item account-menu px-0 mt-2",
        title: "Settings",
        link: "/page-profile-edit",
      },
      {
        id: 7,
        icon: "uil uil-dashboard",
        className: "navbar-item account-menu px-0 mt-2",
        title: "Logout",
        link: "/auth-login-three",
      },
    ],
  };

  componentDidMount() {
    document.body.classList = "";
    document.getElementById("top-menu").classList.add("nav-light");
    document.getElementById("buyButton").className = "btn btn-light";
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
      document.getElementById("buyButton").className = "btn btn-primary";
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-light";
    }
  };

  render() {
    return (
      <ProfileCommon id={7}>
        <Col lg="8" xs={12}>
          <div className="rounded shadow p-4">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="mb-0">Payment Methods:</h5>
              <Link
                  to="#"
                  data-toggle="modal"
                  data-target="#addnewcard"
                  className="btn btn-primary"
              >
                <FeatherIcon icon="plus" className="fea icon-sm" />
                Add
              </Link>
            </div>

            <Row>
              <Col md={6} className="mt-4 pt-2">
                <Link to="#">
                  <Card className="rounded shadow bg-light border-0">
                    <CardBody>
                      <img
                          src={master}
                          height="60"
                          className="text-end"
                          alt=""
                      />
                      <div className="mt-4">
                        <h5 className="text-dark">•••• •••• •••• 4559</h5>
                        <div className="d-flex justify-content-between">
                          <p className="h6 text-muted mb-0">
                            Cristino Murfy
                          </p>
                          <h6 className="mb-0 text-dark">
                            Exp: <span className="text-muted">10/22</span>
                          </h6>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              </Col>

              <Col md={6} className="mt-4 pt-2">
                <Link to="#">
                  <Card className="rounded shadow bg-dark border-0">
                    <CardBody>
                      <img
                          src={visaa}
                          height="60"
                          className="text-end"
                          alt=""
                      />
                      <div className="mt-4">
                        <h5 className="text-light">
                          •••• •••• •••• 9856
                        </h5>
                        <div className="d-flex justify-content-between">
                          <p className="h6 text-muted mb-0">
                            Calvin Carlo
                          </p>
                          <h6 className="mb-0 text-muted">
                            Exp: <span className="text-muted">01/24</span>
                          </h6>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              </Col>

              <Col md={6} className="mt-4 pt-2">
                <Link to="#">
                  <Card className="rounded shadow bg-info border-0">
                    <CardBody>
                      <img
                          src={rupay}
                          height="60"
                          className="text-end"
                          alt=""
                      />
                      <div className="mt-4">
                        <h5 className="text-white">
                          •••• •••• •••• 5465
                        </h5>
                        <div className="d-flex justify-content-between">
                          <p className="h6 text-light mb-0">
                            Miriam Jockky
                          </p>
                          <h6 className="mb-0 text-light">
                            Exp: <span className="text-light">03/23</span>
                          </h6>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              </Col>

              <Col md={6} className="mt-4 pt-2">
                <Card className="rounded shadow bg-light border-0">
                  <CardBody>
                    <img
                        src={paypals}
                        height="60"
                        className="text-end"
                        alt=""
                    />
                    <div className="mt-4">
                      <Form>
                        <FormGroup className="mt-4 pt-3 mb-0">
                          <InputGroup>
                            <Input
                                name="email"
                                id="email"
                                type="email"
                                className="form-control"
                                placeholder="Paypal Email :"
                                required=""
                            />
                            <div className="input-group-append">
                              <button
                                  className="btn btn-primary submitBnt"
                                  type="submit"
                                  id="paypalmail"
                              >
                                Send
                              </button>
                            </div>
                          </InputGroup>
                        </FormGroup>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </ProfileCommon>
    );
  }
}

export default PagePayments;
