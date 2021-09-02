import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Progress, Card, CardBody } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import imgbg from "../../../assets/images/account/bg.png";
import profile from "../../../assets/images/client/05.jpg";
import work1 from "../../../assets/images/work/1.jpg";
import work2 from "../../../assets/images/work/2.jpg";
import work3 from "../../../assets/images/work/3.jpg";
import work4 from "../../../assets/images/work/4.jpg";
import work5 from "../../../assets/images/work/5.jpg";
import work6 from "../../../assets/images/work/6.jpg";
import work7 from "../../../assets/images/work/7.jpg";
import work8 from "../../../assets/images/work/8.jpg";
import work9 from "../../../assets/images/work/9.jpg";
import work10 from "../../../assets/images/work/10.jpg";
import work11 from "../../../assets/images/work/10.jpg";
import work12 from "../../../assets/images/work/10.jpg";
import ProfileCommon from "./PageProfileCommon";

class PageWorks extends Component {
  state = {
    members: [
      {
        id: 1,
        img: work1,
        title: "Iphone mockup",
        subtitle: "Branding",
      },
      {
        id: 2,
        img: work2,
        title: "Mockup Collection",
        subtitle: "Mockup",
      },
      {
        id: 3,
        img: work3,
        title: "Abstract images",
        subtitle: "Abstract",
      },
      {
        id: 4,
        img: work4,
        title: "Yellow bg with Books",
        subtitle: "Books",
      },
      {
        id: 5,
        img: work5,
        title: "Company V-card",
        subtitle: "V-card",
      },
      {
        id: 6,
        img: work6,
        title: "Mockup box with paints",
        subtitle: "Photography",
      },
      {
        id: 7,
        img: work7,
        title: "Coffee cup",
        subtitle: "Cups",
      },
      {
        id: 8,
        img: work8,
        title: "Pen and article",
        subtitle: "Article",
      },
      {
        id: 9,
        img: work9,
        title: "White mockup box",
        subtitle: "Color",
      },
      {
        id: 10,
        img: work10,
        title: "Logo Vectors",
        subtitle: "Logos",
      },
      {
        id: 11,
        img: work11,
        title: "Black and white T-shirt",
        subtitle: "Clothes",
      },
      {
        id: 12,
        img: work12,
        title: "Yellow bg with cellphone",
        subtitle: "Cellphone",
      },
    ],
    widgets: [
      {
          id: 1,
          icon: "uil uil-dashboard",
          className: "navbar-item account-menu px-0 active",
          title: "Profile",
          link: "/page-profile",
      },
      {
          id: 2,
          icon: "uil uil-users-alt",
          className: "navbar-item account-menu px-0 mt-2",
          title: "contributions",
          link: "/page-contributions",
      },
      {
          id: 3,
          icon: "uil uil-file",
          className: "navbar-item account-menu px-0 mt-2",
          title: "Prêts",
          link: "/page-loans",
      },
      {
          id: 4,
          icon: "uil uil-envelope-star",
          className: "navbar-item account-menu px-0 mt-2",
          title: "Remboursements",
          link: "/page-refunds",
      },
      {
          id: 5,
          icon: "uil uil-setting",
          className: "navbar-item account-menu px-0 mt-2",
          title: "Settings",
          link: "/page-profile-edit",
      },
      {
          id: 6,
          icon: "uil uil-dashboard",
          className: "navbar-item account-menu px-0 mt-2",
          title: "Logout",
          link: "/auth-cover-login",
      },
      // {
      //     id: 7,
      //     icon: "uil uil-transaction",
      //     className: "navbar-item account-menu px-0 mt-2",
      //     title: "Payments",
      //     link: "/page-payments",
      // },
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
        <ProfileCommon id={3}>
          <Col lg={8} xs={12}>
            <div className="rounded shadow p-4">
              <h5 className="mb-0">Works & Projects:</h5>

              <Row className="projects-wrapper">
                {this.state.members.map((projects, key) => (
                    <Col md={6} key={key} className="col-12 mt-4 pt-2">
                      <Card className="border-0 work-container work-classic">
                        <CardBody className="p-0">
                          <Link to="/page-portfolio-detail">
                            <img
                                src={projects.img}
                                className="img-fluid rounded work-image"
                                alt=""
                            />
                          </Link>
                          <div className="content pt-3">
                            <h5 className="mb-0">
                              <Link
                                  to="/page-portfolio-detail"
                                  className="text-dark title"
                              >
                                {projects.title}
                              </Link>
                            </h5>
                            <h6 className="text-muted tag mb-0">
                              {projects.subtitle}
                            </h6>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                ))}
              </Row>
            </div>
          </Col>
        </ProfileCommon>
    );
  }
}

export default PageWorks;
