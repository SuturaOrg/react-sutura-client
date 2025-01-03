import React, {Component} from "react";
import {Link} from "react-router-dom";
import {
    Row,
    Col,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

import {connect} from "react-redux";
import ProfileCommon from "./PageProfileCommon";


class PageProfile extends Component {
    
    componentDidMount() {
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
                        <h5>Bienvenue!</h5>
                        <p className="text-muted mb-0">
                            Participer à <b>Sutura</b> c'est non seulement pour soi mais pour d'autres étudiants qui sont dans la 
                            même situation que vous.<br/>Nous sommes ravis de vous compter parmi nos membres.
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
                                            <p className="text-muted mb-0">{user?.email}</p>
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
                                            <p className="text-muted mb-0">{user?.school}</p>
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
                                            <p className="text-muted mb-0">{user?.faculty}</p>
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
                                            <p className="text-muted mb-0">{user?.yearEntryMorocco}</p>
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
                                            <p className="text-muted mb-0">{user?.town}</p>
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
                                            <p className="text-muted mb-0">0{user?.phone}</p>
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
                                            <h6 className="text-primary mb-0"><Link to="/page-contributions" className="text-primary mb-0">Cotisations de la période courante :</Link></h6>
                                            <p className="text-muted mb-0">{user?.currentPeriodContributions} MAD</p>
                                        </div>
                                    </div>
                                    {user?.currentPeriodContributions!==0 && <div className="d-flex align-items-center mt-3">
                                        <i>
                                            <FeatherIcon
                                                icon="gift"
                                                className="fea icon-ex-md text-muted me-3"
                                            />
                                        </i>
                                        <div className="flex-1">
                                            <h6 className="text-primary mb-0">Date d'expiration :</h6>
                                            <p className="text-muted mb-0">{this.props.expirationDate && this.props.expirationDate}</p>
                                        </div>
                                    </div>}
                                    <div className="d-flex align-items-center mt-3">
                                        <i>
                                            <FeatherIcon
                                                icon="folder-plus"
                                                className="fea icon-ex-md text-muted me-3"
                                            />
                                        </i>
                                        <div className="flex-1">
                                            <h6 className="text-primary mb-0"><Link to="/page-contributions" className="text-primary mb-0">Nombre de Cotisations :</Link></h6>
                                            <p className="text-muted mb-0">{user?.contributionsCount}</p>
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
                                            <h6 className="text-primary mb-0"><Link to="/page-loans" className="text-primary mb-0">Nombre de prêts :</Link></h6>
                                            <p className="text-muted mb-0">{user?.loansCount}</p>
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
                                            <h6 className="text-primary mb-0"><Link to="/page-refunds" className="text-primary mb-0">Nombre de remboursements :</Link></h6>
                                            <p className="text-muted mb-0">{user?.refundsCount}</p>
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
                                            <h6 className="text-primary mb-0"><Link to="/page-loans" className="text-primary mb-0">Prêt en attente :</Link></h6>
                                            <p className="text-muted mb-0">{user?.pendingLoans}</p>
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
                                            <h6 className="text-primary mb-0"><Link to="/page-contributions" className="text-primary mb-0">Cotisation en cours de validation :</Link></h6>
                                            <p className="text-muted mb-0">{user?.pendingContributions}</p>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="text-primary mb-0"><Link to="/page-refunds" className="text-primary mb-0">Remboursement en cours de validation :</Link></h6>
                                            <p className="text-muted mb-0">{user?.pendingRefunds}</p>
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
    const {user} = state.user;
    const {expirationDate}= state.stats;
    return {
        user,
        expirationDate
    };

}

const connectedPageProfile = connect(mapStateToProps)(PageProfile);
export default connectedPageProfile;
