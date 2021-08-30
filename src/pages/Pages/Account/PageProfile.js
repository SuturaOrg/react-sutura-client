import React, {Component} from "react";
import {Link} from "react-router-dom";
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
import PageCommon from "./PageProfileCommon";


class PageProfile extends Component {
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
                className: "navbar-item account-menu px-0 active",
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
        const {user} = this.props;
        return (
            <PageCommon>
                <Col lg="8" md="7" xs="12">
                    <div className="border-bottom pb-4">
                        <h5>{user.firstname} {user.lastname}</h5>
                        <p className="text-muted mb-0">
                            I have started my career as a trainee and prove my self and
                            achieve all the milestone with good guidance and reach up to
                            the project manager. In this journey, I understand all the
                            procedure which make me a good developer, team leader, and a
                            project manager.
                        </p>
                    </div>

                    <div className="border-bottom pb-4">
                        <Row>
                            <Col md="6" className="mt-4">
                                <h5>Personal Details :</h5>
                                <div className="mt-4">
                                    <div className="d-flex align-items-center">
                                        <i>
                                            <FeatherIcon
                                                icon="mail"
                                                className="fea icon-ex-md text-muted me-3"
                                            />
                                        </i>
                                        <div className="flex-1">
                                            <h6 className="text-primary mb-0">Email :</h6>
                                            <Link to="#" className="text-muted">
                                                {user.email}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <i>
                                            <FeatherIcon
                                                icon="bookmark"
                                                className="fea icon-ex-md text-muted me-3"
                                            />
                                        </i>
                                        <div className="flex-1">
                                            <h6 className="text-primary mb-0">Skills :</h6>
                                            <Link to="#" className="text-muted">
                                                html
                                            </Link>
                                            ,{" "}
                                            <Link to="#" className="text-muted">
                                                css
                                            </Link>
                                            ,{" "}
                                            <Link to="#" className="text-muted">
                                                js
                                            </Link>
                                            ,{" "}
                                            <Link to="#" className="text-muted">
                                                mysql
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <i>
                                            <FeatherIcon
                                                icon="italic"
                                                className="fea icon-ex-md text-muted me-3"
                                            />
                                        </i>
                                        <div className="flex-1">
                                            <h6 className="text-primary mb-0">Language :</h6>
                                            <Link to="#" className="text-muted">
                                                English
                                            </Link>
                                            ,{" "}
                                            <Link to="#" className="text-muted">
                                                Japanese
                                            </Link>
                                            ,{" "}
                                            <Link to="#" className="text-muted">
                                                Chinese
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <i>
                                            <FeatherIcon
                                                icon="globe"
                                                className="fea icon-ex-md text-muted me-3"
                                            />
                                        </i>
                                        <div className="flex-1">
                                            <h6 className="text-primary mb-0">Website :</h6>
                                            <Link to="#" className="text-muted">
                                                www.kristajoseph.com
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <i>
                                            <FeatherIcon
                                                icon="gift"
                                                className="fea icon-ex-md text-muted me-3"
                                            />
                                        </i>
                                        <div className="flex-1">
                                            <h6 className="text-primary mb-0">Birthday :</h6>
                                            <p className="text-muted mb-0">2nd March, 1996</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <i>
                                            <FeatherIcon
                                                icon="map-pin"
                                                className="fea icon-ex-md text-muted me-3"
                                            />
                                        </i>
                                        <div className="flex-1">
                                            <h6 className="text-primary mb-0">Location :</h6>
                                            <Link to="#" className="text-muted">
                                                Beijing, China
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <i>
                                            <FeatherIcon
                                                icon="phone"
                                                className="fea icon-ex-md text-muted me-3"
                                            />
                                        </i>
                                        <div className="flex-1">
                                            <h6 className="text-primary mb-0">Cell No :</h6>
                                            <Link to="#" className="text-muted">
                                                (+12) 1254-56-4896
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="6" className="mt-4 pt-2 pt-sm-0">
                                <h5>Experience :</h5>

                                {this.state.experiences.map((experience, key) => (
                                    <div
                                        key={key}
                                        className="d-flex key-feature align-items-center p-3 rounded shadow mt-4"
                                    >
                                        <img
                                            src={experience.image}
                                            className="avatar avatar-ex-sm"
                                            alt=""
                                        />
                                        <div className="flex-1 content ms-3">
                                            <h4 className="title mb-0">
                                                {experience.designation}
                                            </h4>
                                            <p className="text-muted mb-0">
                                                {experience.duration} Experience
                                            </p>
                                            <p className="text-muted mb-0">
                                                <Link to="#" className="text-primary">
                                                    {experience.companyName}
                                                </Link>{" "}
                                                @{experience.location}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </Col>
                        </Row>
                    </div>

                    <h5 className="mt-4 mb-0">Posts & News :</h5>
                    <Row>
                        {this.state.blogs.map((blog, key) => (
                            <Col lg="6" key={key} className="mt-4 pt-2">
                                <Card className="blog rounded border-0 shadow">
                                    <div className="position-relative">
                                        <img
                                            src={blog.image}
                                            className="card-img-top rounded-top"
                                            alt=""
                                        />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <CardBody className="content">
                                        <h5>
                                            <Link to="#" className="card-title title text-dark">
                                                {blog.title}
                                            </Link>
                                        </h5>
                                        <div className="post-meta d-flex justify-content-between mt-3">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item me-2 mb-0">
                                                    <Link to="#" className="text-muted like">
                                                        <i className="uil uil-heart me-1"></i>
                                                        {blog.likes}
                                                    </Link>
                                                </li>
                                                {" "}
                                                <li className="list-inline-item">
                                                    <Link to="#" className="text-muted comments">
                                                        <i className="uil uil-comment me-1"></i>
                                                        {blog.blogComments}
                                                    </Link>
                                                </li>
                                            </ul>
                                            <Link
                                                to="#"
                                                className="text-muted readmore"
                                            >
                                                Read More{" "}
                                                <i className="uil uil-angle-right-b align-middle"></i>
                                            </Link>
                                        </div>
                                    </CardBody>
                                    <div className="author">
                                        <small className="text-light user d-block">
                                            <i className="uil uil-user"></i> {blog.author}
                                        </small>
                                        <small className="text-light date">
                                            <i className="uil uil-calendar-alt"></i>{" "}
                                            {blog.date}
                                        </small>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                        <Col xs="12" className="mt-4 pt-2">
                            <Link to="/page-blog" className="btn btn-primary">
                                See More <i className="uil uil-angle-right-b align-middle"></i>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </PageCommon>

        );
    }
}

function mapStateToProps(state) {
    const {user} = state.authentication;
    console.log(state);
    return {
        user,
    };

}

const connectedPageProfile = connect(mapStateToProps)(PageProfile);
export default connectedPageProfile;
