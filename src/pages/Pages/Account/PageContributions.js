import React, {Component} from "react";
import {Link} from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Progress,
    Card,
    CardBody,
    Modal,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    ModalHeader,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Spinner,
} from "reactstrap";

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
import {entityActions} from "../../../actions";
import {connect} from "react-redux";

class PageMessages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contributions: [
                {
                    id: 1,
                    img: client1,
                    title: "Calvin Carlo",
                    desc:
                        "This is required when, for example, the final text is not yet available. Dummy",
                },
                {
                    id: 2,
                    img: client2,
                    title: "Miriam Walya",
                    desc:
                        "This is required when, for example, the final text is not yet available. Dummy",
                },
                {
                    id: 3,
                    img: client3,
                    title: "Jenelia Parker",
                    desc:
                        "This is required when, for example, the final text is not yet available. Dummy",
                },
                {
                    id: 4,
                    img: client4,
                    title: "Jack Deo",
                    desc:
                        "This is required when, for example, the final text is not yet available. Dummy",
                },
                {
                    id: 5,
                    img: client5,
                    title: "Marya Joseph",
                    desc:
                        "This is required when, for example, the final text is not yet available. Dummy",
                },
                {
                    id: 6,
                    img: client6,
                    title: "Maninder Khan",
                    desc:
                        "This is required when, for example, the final text is not yet available. Dummy",
                },
                {
                    id: 7,
                    img: client7,
                    title: "Pitambar Das",
                    desc:
                        "This is required when, for example, the final text is not yet available. Dummy",
                },
                {
                    id: 8,
                    img: client8,
                    title: "Cristino Murfy",
                    desc:
                        "This is required when, for example, the final text is not yet available. Dummy",
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
                    className: "navbar-item account-menu px-0 mt-2",
                    title: "contributions",
                    link: "/page-contributions",
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
                    className: "navbar-item account-menu px-0 mt-2 active",
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
            modal: false,
            dropdownOpen: false,
            selectedContacts: [],
        };
        this.togglemodal.bind(this);
        this.toggleDropdown.bind(this);
        this.onChangeCheckbox.bind(this);
    }

    togglemodal = () => {
        this.setState((prevState) => ({
            modal: !prevState.modal,
        }));
    };
    toggleDropdown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    };

    componentDidMount() {
        document.body.classList = "";
        document.getElementById("top-menu").classList.add("nav-light");
        document.getElementById("buyButton").className = "btn btn-light";
        window.addEventListener("scroll", this.scrollNavigation, true);

        const {dispatch} = this.props;
        dispatch(entityActions.getAll("contributions"));
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

    onChangeCheckbox = (selected, contact) => {
        let modifiedselectedContacts = [...this.state.selectedContacts];
        if (selected) {
            modifiedselectedContacts.push(contact);
            this.setState({
                selectedContacts: modifiedselectedContacts,
            });
        } else {
            let otherContacts = modifiedselectedContacts.filter(
                (r) => r.id !== contact.id
            );
            this.setState({
                selectedContacts: otherContacts,
            });
        }
    };

    onSelectAll = (checked) => {
        if (checked) {
            this.setState({
                selectedContacts: this.state.contributions,
            });
        } else {
            this.setState({
                selectedContacts: [],
            });
        }
    };

    render() {
        const {contributionsList,contributionsTotalElements} = this.props;
        return (
            <ProfileCommon id={4}>
                <Col lg={8} xs={12}>
                    <div className="rounded shadow p-4">
                        <div className="d-flex align-items-center justify-content-between">
                            <h5 className="mb-0">Cotisations:</h5>
                            <Link
                                to="/operations/contribute"
                                className="btn btn-primary"

                            >
                                <i>
                                    <FeatherIcon icon="plus" className="fea icon-sm"/>
                                </i>{" "}
                                Cotiser
                            </Link>
                        </div>
                        <div
                            className="d-flex border-bottom align-items-center justify-content-between bg-light my-4 p-3">
                            <div className="form-check ps-0">
                                <div className="mb-0">
                                </div>
                            </div>
                        </div>
                        {contributionsList ? contributionsList.length?contributionsList.map((contribution, key) => (
                                <div className="d-flex border-bottom p-3" key={key}>
                                    <div className="form-check ps-0">
                                        <div className="mb-0">
                                        </div>
                                    </div>
                                        <div className="d-flex ms-2">
                                            <i>
                                                <FeatherIcon icon={contribution.approved ? "check" : "x-circle"}
                                                             className={contribution.approved ?"avatar avatar-md-sm text-primary":"avatar avatar-md-sm text-dark"}/>
                                            </i>
                                            <div className="flex-1 ms-3">
                                                <h6 className="text-dark">{contribution.amount} <b>DH</b></h6>
                                                <p className="text-muted mb-0">{contribution.createdAt}</p>
                                            </div>
                                        </div>
                                </div>
                            )): <div className="d-flex border-bottom mt-4 justify-content-center text-dark">
                                <div className="form-check ps-0">
                                    <p> Vous n'avez pas encore cotisé</p></div>
                            </div> :
                            <div className="d-flex border-bottom justify-content-center text-primary">
                                <div className="form-check ps-0">
                                    <Spinner> </Spinner></div>
                            </div>}

                        <div className="d-flex align-items-center justify-content-between mt-4">
                            <span className="text-muted h6 mb-0"> {contributionsList?contributionsList.length:0} éléments sur {contributionsTotalElements}</span>
                            <Link to="#" className="btn btn-primary">See more</Link>
                        </div>
                    </div>
                </Col>
            </ProfileCommon>
        );
    }
}

function mapStateToProps(state) {
    const {contributionsList,contributionsTotalElements} = state.entity;
    return {
        contributionsList,
        contributionsTotalElements
    };

}

const connectedPageMessages = connect(mapStateToProps)(PageMessages);
export default connectedPageMessages;
