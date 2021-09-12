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

import blog1 from "../../../assets/images/blog/01.jpg";
import blog2 from "../../../assets/images/blog/02.jpg";
import exp1 from "../../../assets/images/job/Circleci.svg";
import exp2 from "../../../assets/images/job/Codepen.svg";
import exp3 from "../../../assets/images/job/Gitlab.svg";
import {connect} from "react-redux";
import ProfileCommon from "./PageProfileCommon";


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
                link: "/login",
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
            <ProfileCommon id={1}>
                <Col lg="8" md="7" xs="12">
                    <div className="border-bottom pb-4">
                        <h5>{user.firstname} {user.lastname}</h5>
                        <p className="text-muted mb-0">
                            Participer à Sutura c'est non seulement pour soi mais pour d'autres étudiants qui sont dans la 
                            même situation que nous-même.<br/>Nous sommes ravi de vous compter parmi nos membres.
                        </p>
                    </div>

                    <div className="border-bottom pb-4">
                        <Row>
                            <Col md="6" className="mt-4">
                                <h5>Informations personnelles :</h5>
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
                                            <p className="text-muted mb-0">{user.email}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <i>
                                            <FeatherIcon
                                                icon="book"
                                                className="fea icon-ex-md text-muted me-3"
                                            />
                                        </i>
                                        <div className="flex-1">
                                            <h6 className="text-primary mb-0">Etablissement d'études :</h6>
                                            <p className="text-muted mb-0">{user.school}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <i>
                                            <FeatherIcon
                                                icon="book-open"
                                                className="fea icon-ex-md text-muted me-3"
                                            />
                                        </i>
                                        <div className="flex-1">
                                            <h6 className="text-primary mb-0">Filière :</h6>
                                            <p className="text-muted mb-0">{user.faculty}</p>
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
                                            <h6 className="text-primary mb-0">Année d'entrée au Maroc:</h6>
                                            <p className="text-muted mb-0">{user.yearEntryMorroco}</p>
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
                                            <h6 className="text-primary mb-0">Ville de résidence :</h6>
                                            <p className="text-muted mb-0">{user.town}</p>
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
                                            <h6 className="text-primary mb-0">Téléphone :</h6>
                                            <p className="text-muted mb-0">{user.telephone}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="6" className="mt-4 pt-2 pt-sm-0">
                            <h5>Vos statistiques :</h5>
                                <div className="mt-4">
                                    <div className="d-flex align-items-center">
                                        <i>
                                            <FeatherIcon
                                                icon="plus-square"
                                                className="fea icon-ex-md text-muted me-3"
                                            />
                                        </i>
                                        <div className="flex-1">
                                            <h6 className="text-primary mb-0">Cotisation de la période courante :</h6>
                                            <Link to="#" className="text-muted">
                                                {user.amount}
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
                                            <h6 className="text-primary mb-0">Date d'expiration :</h6>
                                            <p className="text-muted mb-0">{user.expiration}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <i>
                                            <FeatherIcon
                                                icon="folder-plus"
                                                className="fea icon-ex-md text-muted me-3"
                                            />
                                        </i>
                                        <div className="flex-1">
                                            <h6 className="text-primary mb-0">Nombre de cotisations :</h6>
                                            <p className="text-muted mb-0">{user.contributionNumber}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <i>
                                            <FeatherIcon
                                                icon="file-plus"
                                                className="fea icon-ex-md text-muted me-3"
                                            />
                                        </i>
                                        <div className="flex-1">
                                            <h6 className="text-primary mb-0">Nombre de prêts :</h6>
                                            <p className="text-muted mb-0">{user.loanNumber}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <i>
                                            <FeatherIcon
                                                icon="plus-circle"
                                                className="fea icon-ex-md text-muted me-3"
                                            />
                                        </i>
                                        <div className="flex-1">
                                            <h6 className="text-primary mb-0">Nombre de remboursements :</h6>
                                            <p className="text-muted mb-0">{user.refundNumber}</p>
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
                                            <h6 className="text-primary mb-0">Prêt en attente :</h6>
                                            <p className="text-muted mb-0">{user.isLoanWaiting}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <i>
                                            <FeatherIcon
                                                icon="clock"
                                                className="fea icon-ex-md text-muted me-3"
                                            />
                                        </i>
                                        <div className="flex-1">
                                            <h6 className="text-primary mb-0">Cotisation en cours de validation :</h6>
                                            <p className="text-muted mb-0">{user.isContributionWaiting}</p>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="text-primary mb-0">remboursement en cours de validation :</h6>
                                            <p className="text-muted mb-0">{user.isRefundWaiting}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </ProfileCommon>

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
