import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Progress, Card, CardBody } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import imgbg from "../../../assets/images/account/bg.png";
import profile from "../../../assets/images/client/05.jpg";
import client1 from "../../../assets/images/client/01.jpg";
import client2 from "../../../assets/images/client/02.jpg";
import client3 from "../../../assets/images/client/03.jpg";
import client4 from "../../../assets/images/client/04.jpg";
import client5 from "../../../assets/images/client/05.jpg";
import client6 from "../../../assets/images/client/06.jpg";
import client7 from "../../../assets/images/client/07.jpg";
import client8 from "../../../assets/images/client/08.jpg";
import ProfileCommon from "./PageProfileCommon";

class PageMembers extends Component {
  state = {
    members: [
      {
        id: 1,
        img: client1,
      },
      {
        id: 2,
        img: client2,
      },
      {
        id: 3,
        img: client3,
      },
      {
        id: 4,
        img: client4,
      },
      {
        id: 5,
        img: client5,
      },
      {
        id: 6,
        img: client6,
      },
      {
        id: 7,
        img: client7,
      },
      {
        id: 8,
        img: client8,
      },
    ],
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
        className: "navbar-item account-menu px-0 mt-2 active",
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
        link: "/page-contributions",
      },
      {
        id: 5,
        icon: "uil uil-transaction",
        className: "navbar-item account-menu px-0 mt-2",
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
        <ProfileCommon id={2}>
        <Col lg={8} xs={12}>
          <div className="rounded shadow p-4">
            <h5>Members:</h5>

            <Row>
              {this.state.members.map((images, key) => (
                  <Col lg={6} md={4} key={key} className="mt-4 pt-2">
                    <div className="text-center">
                      <img
                          src={images.img}
                          className="avatar avatar-medium shadow-lg rounded-pill"
                          alt=""
                      />
                      <div className="content mt-3">
                        <Link to="#" className="h5 text-dark">
                          Calvin Carlo
                        </Link>
                        <ul className="list-unstyled social-icon social mb-0 mt-2">
                          <li className="list-inline-item ms-1">
                            <Link to="#" className="rounded">
                              <i>
                                <FeatherIcon
                                    icon="facebook"
                                    className="fea icon-sm fea-social"
                                />
                              </i>
                            </Link>
                          </li>
                          <li className="list-inline-item ms-1">
                            <Link to="#" className="rounded">
                              <i>
                                <FeatherIcon
                                    icon="instagram"
                                    className="fea icon-sm fea-social"
                                />
                              </i>
                            </Link>
                          </li>
                          <li className="list-inline-item ms-1">
                            <Link to="#" className="rounded">
                              <i>
                                <FeatherIcon
                                    icon="twitter"
                                    className="fea icon-sm fea-social"
                                />
                              </i>
                            </Link>
                          </li>
                          <li className="list-inline-item ms-1">
                            <Link to="#" className="rounded">
                              <i>
                                <FeatherIcon
                                    icon="linkedin"
                                    className="fea icon-sm fea-social"
                                />
                              </i>
                            </Link>
                          </li>
                        </ul>
                        <Link to="#" className="btn btn-primary">
                          <i className="uil uil-envelope"></i>{" "}
                          Send Message
                        </Link>
                      </div>
                    </div>
                  </Col>
              ))}
            </Row>
          </div>
        </Col>
        </ProfileCommon>
    );
  }
}

export default PageMembers;
