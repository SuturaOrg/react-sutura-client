import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Progress,
    Card,
    CardBody,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import imgbg from "../../../assets/images/account/bg.png";
import profile from "../../../assets/images/client/05.jpg";
import blog1 from "../../../assets/images/blog/01.jpg";
import blog2 from "../../../assets/images/blog/02.jpg";
import exp1 from "../../../assets/images/job/Circleci.svg";
import exp2 from "../../../assets/images/job/Codepen.svg";
import exp3 from "../../../assets/images/job/Gitlab.svg";
import {connect} from "react-redux";


class PageProfileCommon extends Component {
    state = {
        blogs: [
            {
                id: 1,
                title: "Design your apps in your own way",
                image: blog1,
                likes: "33",
                blogComments: "08",
                author: "Krishta {user.lastname}",
                date: "13th August, 2019",
            },
            {
                id: 2,
                title: "How apps is changing the IT world",
                image: blog2,
                likes: "33",
                blogComments: "08",
                author: "Krishta {user.lastname}",
                date: "13th August, 2019",
            },
        ],
        experiences: [
            {
                id: 1,
                image: exp1,
                designation: "Senior Web Developer",
                duration: "3 Years",
                companyName: "CircleCi",
                location: "London, UK",
            },
            {
                id: 2,
                image: exp2,
                designation: "Web Designer",
                duration: "2 Years",
                companyName: "Codepen",
                location: "Washington D.C, USA",
            },
            {
                id: 3,
                image: exp3,
                designation: "UI Designer",
                duration: "2 Years",
                companyName: "Gitlab",
                location: "Perth, Australia",
            },
        ],
        widgets: [
            {
                id: 1,
                icon: "uil uil-dashboard",
                className: "navbar-item account-menu px-0 ",
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
                link: "/auth-cover-login",
            },
        ],
    };

    componentDidMount() {
        console.log(this.props);
        document.body.classList = "";
        document.getElementById("top-menu") && document.getElementById("top-menu").classList.add("nav-light");
        document.getElementById("buyButton") && (document.getElementById("buyButton").className = "btn btn-light");
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
            document.getElementById("buyButton") && (document.getElementById("buyButton").className = "btn btn-primary");
        } else {
            document.getElementById("topnav").classList.remove("nav-sticky");
            document.getElementById("buyButton") && (document.getElementById("buyButton").className = "btn btn-light");
        }
    };

    render() {
        const {user}=this.props;
        return (
            <React.Fragment>
                <section
                    className="bg-profile d-table w-100 bg-primary"
                    style={{ background: `url(${imgbg}) center center` }}
                >
                    <Container>
                        <Row>
                            <Col lg="12">
                                <Card
                                    className="public-profile border-0 rounded shadow"
                                    style={{ zIndex: "1" }}
                                >
                                    <CardBody>
                                        <Row className="align-items-center">
                                            <Col lg="2" md="3" className="text-md-start text-center">
                                                <img
                                                    src={profile}
                                                    className="avatar avatar-large rounded-circle shadow d-block mx-auto"
                                                    alt=""
                                                />
                                            </Col>

                                            <Col lg="10" md="9">
                                                <Row className="align-items-end">
                                                    <Col
                                                        md="7"
                                                        className="text-md-start text-center mt-4 mt-sm-0"
                                                    >
                                                        <h3 className="title mb-0">{user.firstname} {user.lastname}</h3>
                                                        <small className="text-muted h6 me-2">
                                                            {user.country}                            </small>
                                                        <ul className="list-inline mb-0 mt-3">
                                                            <li className="list-inline-item me-2">
                                                                <Link
                                                                    to="#"
                                                                    className="text-muted"
                                                                    title="Linkedin"
                                                                >
                                                                    <i>
                                                                        <FeatherIcon
                                                                            icon="instagram"
                                                                            className="fea icon-sm me-2"
                                                                        />
                                                                    </i>
                                                                    krista_joseph
                                                                </Link>
                                                            </li>
                                                            <li className="list-inline-item ms-1">
                                                                <Link
                                                                    to="#"
                                                                    className="text-muted"
                                                                    title="Skype"
                                                                >
                                                                    <i>
                                                                        <FeatherIcon
                                                                            icon="linkedin"
                                                                            className="fea icon-sm me-2"
                                                                        />
                                                                    </i>
                                                                    krista_joseph
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                    <Col md="5" className="text-md-end text-center">
                                                        <ul className="list-unstyled social-icon social mb-0 mt-4">
                                                            <li className="list-inline-item">
                                                                <Link to="#" className="rounded">
                                                                    <i className="uil uil-user-plus align-middle"></i>
                                                                </Link>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <Link to="#" className="rounded">
                                                                    <i className="uil uil-comment align-middle"></i>
                                                                </Link>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <Link to="#" className="rounded">
                                                                    <i className="uil uil-bell align-middle"></i>
                                                                </Link>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <Link
                                                                    to="/page-profile-edit"
                                                                    className="rounded"
                                                                >
                                                                    <i className="uil uil-cog align-middle"></i>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section mt-60">
                    <Container className="mt-lg-3">
                        <Row>
                            <Col lg="4" md="6" xs="12" className="d-lg-block d-none">
                                <div className="sidebar sticky-bar p-4 rounded shadow">
                                    <div className="widget">
                                        <h5 className="widget-title">Followers :</h5>
                                        <div className="row mt-4">
                                            <div className="col-6 text-center">
                                                <FeatherIcon
                                                    icon="user-plus"
                                                    className="fea icon-ex-md text-primary mb-1"
                                                />
                                                <h5 className="mb-0">2588</h5>
                                                <p className="text-muted mb-0">Followers</p>
                                            </div>

                                            <div className="col-6 text-center">
                                                <FeatherIcon icon="users"
                                                             className="fea icon-ex-md text-primary mb-1" />
                                                <h5 className="mb-0">454</h5>
                                                <p className="text-muted mb-0">Following</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget mt-4 pt-2">
                                        <h5 className="widget-title">Etat de la caisse :</h5>
                                        <div className="progress-box mt-4">
                                            <h6 className="title text-muted">Progress</h6>
                                            <Progress
                                                value={50}
                                                color="primary"
                                                barClassName="position-relative"
                                            >
                                                <div className="progress-value d-block text-muted h6">
                                                    24 / 48
                                                </div>
                                            </Progress>
                                        </div>
                                    </div>

                                    <div className="widget mt-4">
                                        <ul className="list-unstyled sidebar-nav mb-0" id="navmenu-nav">
                                            {this.state.widgets.map((widget, key) => (
                                                <li className={this.props.id==widget.id?widget.className+" active":widget.className} key={key}>
                                                    <Link to={widget.link} className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                            <span className="h4 mb-0">
                              <i className={widget.icon}></i>
                            </span>
                                                        <h6 className="mb-0 ms-2">{widget.title}</h6>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="widget mt-4 pt-2">
                                        <h5 className="widget-title">Follow me :</h5>
                                        <ul className="list-unstyled social-icon mb-0 mt-4">
                                            <li className="list-inline-item">
                                                <Link to="#" className="rounded">
                                                    <i>
                                                        <FeatherIcon
                                                            icon="facebook"
                                                            className="fea icon-sm fea-social"
                                                        />
                                                    </i>
                                                </Link>
                                            </li>{" "}
                                            <li className="list-inline-item">
                                                <Link to="#" className="rounded">
                                                    <i>
                                                        <FeatherIcon
                                                            icon="instagram"
                                                            className="fea icon-sm fea-social"
                                                        />
                                                    </i>
                                                </Link>
                                            </li>{" "}
                                            <li className="list-inline-item">
                                                <Link to="#" className="rounded">
                                                    <i>
                                                        <FeatherIcon
                                                            icon="twitter"
                                                            className="fea icon-sm fea-social"
                                                        />
                                                    </i>
                                                </Link>
                                            </li>{" "}
                                            <li className="list-inline-item">
                                                <Link to="#" className="rounded">
                                                    <i>
                                                        <FeatherIcon
                                                            icon="linkedin"
                                                            className="fea icon-sm fea-social"
                                                        />
                                                    </i>
                                                </Link>
                                            </li>{" "}
                                            <li className="list-inline-item">
                                                <Link to="#" className="rounded">
                                                    <i>
                                                        <FeatherIcon
                                                            icon="github"
                                                            className="fea icon-sm fea-social"
                                                        />
                                                    </i>
                                                </Link>
                                            </li>{" "}
                                            <li className="list-inline-item">
                                                <Link to="#" className="rounded">
                                                    <i>
                                                        <FeatherIcon
                                                            icon="youtube"
                                                            className="fea icon-sm fea-social"
                                                        />
                                                    </i>
                                                </Link>
                                            </li>{" "}
                                            <li className="list-inline-item">
                                                <Link to="#" className="rounded">
                                                    <i>
                                                        <FeatherIcon
                                                            icon="gitlab"
                                                            className="fea icon-sm fea-social"
                                                        />
                                                    </i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                                {this.props.children}
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
function mapStateToProps(state) {
    const { user } = state.authentication;
    console.log(state);
    return {
        user,
    };

}
const connectedProfileCommon = connect(mapStateToProps)(PageProfileCommon);
export default connectedProfileCommon;
