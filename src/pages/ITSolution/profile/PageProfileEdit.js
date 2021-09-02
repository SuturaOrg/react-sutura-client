import React, {Component} from "react";
import {Link} from "react-router-dom";
import {
    Container,
    Progress,
    Row,
    Col,
    Alert,
    Form,
    Input,
    Button,
    Label,
    CardBody,
    Card,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Icons
import FeatherIcon from "feather-icons-react";

import profile from "../../../assets/images/client/05.jpg";
import imgbg from "../../../assets/images/account/bg.png";
import ProfileCommon from "./PageProfileCommon";
import {connect} from "react-redux";
import { userActions } from "../../../actions";

class PageProfileEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathItems: [
                //id must required
                {id: 1, name: "Sutura", link: "/index"},
                {id: 2, name: "Page", link: "#"},
                {id: 3, name: "Account", link: "/page-profile"},
                {id: 4, name: "Setting"},
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
                    className: "navbar-item account-menu px-0 mt-2 active",
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
            successMsg: false,
            successMsg2: false,
            successMsg3: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.handleSubmit3 = this.handleSubmit3.bind(this);

    }

    handleSubmit(event, values) {
        event.preventDefault();
        const {dispatch} = this.props
        //dispatch (userActions.patchInfo(values));
        console.log(values);
    }

    handleSubmit2(event) {
        event.preventDefault();
        this.setState({successMsg2: true});
    }

    handleSubmit3(event) {
        event.preventDefault();
        this.setState({successMsg3: true});
    }

    componentDidMount() {
        document.body.classList = "";
        document.getElementById("top-menu").classList.add("nav-light");
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

    onChangeCheckbox = (selected, contact) => {
        let modifiedselectedContacts = [...this.state.selectedContacts];
        if (selected) {
            modifiedselectedContacts.push(contact);
        }
        this.setState({
            selectedContacts: modifiedselectedContacts,
        });
    };

    handleNewImage = (e) => {
        this.setState({image: e.target.files[0]});
    };

    handlePositionChange = (position) => {
        this.setState({position});
    };

    render() {
        const {user} = this.props;
        return (
            <ProfileCommon id={8}>
                <Col lg="8" xs="12">
                    <Card className="border-0 rounded shadow">
                        <CardBody>
                            <h5 className="text-md-start text-center">
                                Personal Detail :
                            </h5>

                            <div className="mt-3 text-md-start text-center d-sm-flex">
                                <img
                                    src={profile}
                                    className="avatar float-md-left avatar-medium rounded-circle shadow me-md-4"
                                    alt=""
                                />
                                <div className="mt-md-4 mt-3 mt-sm-0">
                                    <Link to="#" className="btn btn-primary mt-2">
                                        {" "}
                                        Change Picture{" "}
                                    </Link>{" "}
                                    <Link
                                        to="#"
                                        className="btn btn-outline-primary mt-2 ms-2"
                                    >
                                        Delete
                                    </Link>
                                </div>
                            </div>
                            <Alert
                                color="primary"
                                isOpen={this.state.successMsg}
                                toggle={() => {
                                    this.setState({successMsg: !this.state.successMsg});
                                }}
                            >
                                Data sended successfully.
                            </Alert>
                            <AvForm onSubmit={this.handleSubmit}>
                                <Row className="mt-4">
                                    <Col md="6">
                                        <div className="mb-3">
                                            <Label className="form-label">Ville</Label>
                                            <div className="form-icon position-relative">
                                                <i>
                                                    <FeatherIcon
                                                        icon="user"
                                                        className="fea icon-sm icons"
                                                    />
                                                </i>
                                            </div>
                                            <AvField
                                                name="town"
                                                id="town"
                                                type="text"
                                                className="form-control ps-5"
                                                placeholder="Ville :"
                                                value={user && user.town}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div className="mb-3">
                                            <Label className="form-label">Etablissement d'études</Label>
                                            <div className="form-icon position-relative">
                                                <i>
                                                    <FeatherIcon
                                                        icon="user-check"
                                                        className="fea icon-sm icons"
                                                    />
                                                </i>
                                            </div>
                                            <AvField
                                                name="school"
                                                id="last"
                                                type="text"
                                                className="form-control ps-5"
                                                placeholder="Etablissement :"
                                                value={user && user.school}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div className="mb-3">
                                            <Label className="form-label">Filière</Label>
                                            <div className="form-icon position-relative">
                                                <i>
                                                    <FeatherIcon
                                                        icon="mail"
                                                        className="fea icon-sm icons"
                                                    />
                                                </i>
                                            </div>
                                            <AvField
                                                name="faculty"
                                                id="faculty"
                                                type="text"
                                                className="form-control ps-5"
                                                placeholder="Filière :"
                                                value={user && user.faculty}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div className="mb-3">
                                            <Label className="form-label">Téléphone No. :</Label>
                                            <div className="form-icon position-relative">
                                                <i>
                                                    <FeatherIcon
                                                        icon="phone"
                                                        className="fea icon-sm icons"
                                                    />
                                                </i>
                                            </div>
                                            <AvField
                                                min="0"
                                                name="number"
                                                id="number"
                                                type="number"
                                                className="form-control ps-5"
                                                placeholder="Phone :"
                                                value={user && user.phone}
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="3" sm="12">
                                        <AvField
                                            type="submit"
                                            id="submit"
                                            name="send"
                                            className="btn btn-primary"
                                            value="Save Changes"
                                        />
                                    </Col>
                                </Row>
                            </AvForm>

                            <Row>
                                <Col md="6" className="mt-4 pt-2">
                                    <h5>Change password :</h5>
                                    <Alert
                                        color="primary"
                                        isOpen={this.state.successMsg3}
                                        toggle={() => {
                                            this.setState({
                                                successMsg3: !this.state.successMsg3,
                                            });
                                        }}
                                    >
                                        Data sended successfully.
                                    </Alert>
                                    <Form onSubmit={this.handleSubmit3}>
                                        <Row className="mt-4">
                                            <Col lg="12">
                                                <div className="mb-3">
                                                    <Label className="form-label">Old password :</Label>
                                                    <div className="form-icon position-relative">
                                                        <i>
                                                            <FeatherIcon
                                                                icon="lock"
                                                                className="fea icon-sm icons"
                                                            />
                                                        </i>
                                                    </div>
                                                    <Input
                                                        type="password"
                                                        className="form-control ps-5"
                                                        placeholder="Old password"
                                                        required
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg="12">
                                                <div className="mb-3">
                                                    <Label className="form-label">New password :</Label>
                                                    <div className="form-icon position-relative">
                                                        <i>
                                                            <FeatherIcon
                                                                icon="lock"
                                                                className="fea icon-sm icons"
                                                            />
                                                        </i>
                                                    </div>
                                                    <Input
                                                        type="password"
                                                        className="form-control ps-5"
                                                        placeholder="New password"
                                                        required
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg="12">
                                                <div className="mb-3">
                                                    <Label className="form-label">Re-type New password :</Label>
                                                    <div className="form-icon position-relative">
                                                        <i>
                                                            <FeatherIcon
                                                                icon="lock"
                                                                className="fea icon-sm icons"
                                                            />
                                                        </i>
                                                    </div>
                                                    <Input
                                                        type="password"
                                                        className="form-control ps-5"
                                                        placeholder="Re-type New password"
                                                        required
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg="12" className="mt-2 mb-0">
                                                <Button color="primary">Save password</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                    {/* <div className="rounded shadow mt-4">
                        <div className="p-4 border-bottom">
                            <h5 className="mb-0">Account Notifications :</h5>
                        </div>

                        <div className="p-4">
                            <div className="d-flex justify-content-between pb-4">
                                <h6 className="mb-0">When someone mentions me</h6>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="customSwitch1"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="customSwitch1"
                                    ></label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between py-4 border-top">
                                <h6 className="mb-0">When someone follows me</h6>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="customSwitch2"
                                        defaultChecked
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="customSwitch2"
                                    ></label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between py-4 border-top">
                                <h6 className="mb-0">When shares my activity</h6>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="customSwitch3"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="customSwitch3"
                                    ></label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between py-4 border-top">
                                <h6 className="mb-0">When someone messages me</h6>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="customSwitch4"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="customSwitch4"
                                    ></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded shadow mt-4">
                        <div className="p-4 border-bottom">
                            <h5 className="mb-0">Marketing Notifications :</h5>
                        </div>

                        <div className="p-4">
                            <div className="d-flex justify-content-between pb-4">
                                <h6 className="mb-0">There is a sale or promotion</h6>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="customSwitch5"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="customSwitch5"
                                    ></label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between py-4 border-top">
                                <h6 className="mb-0">Company news</h6>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="customSwitch6"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="customSwitch6"
                                    ></label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between py-4 border-top">
                                <h6 className="mb-0">Weekly jobs</h6>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="customSwitch7"
                                        defaultChecked
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="customSwitch7"
                                    ></label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between py-4 border-top">
                                <h6 className="mb-0">Unsubscribe News</h6>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="customSwitch8"
                                        defaultChecked
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="customSwitch8"
                                    ></label>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="rounded shadow mt-4">
                        <div className="p-4 border-bottom">
                            <h5 className="mb-0 text-danger">Delete Account :</h5>
                        </div>

                        <div className="p-4">
                            <h6 className="mb-0">
                                Do you want to delete the account? Please press below
                                "Delete" button
                            </h6>
                            <div className="mt-4">
                                <button className="btn btn-danger">Delete Account</button>
                            </div>
                        </div>
                    </div> */}
                    <div className="rounded shadow mt-4">
                        <div className="p-4 border-bottom">
                            <h5 className="mb-0 text-danger">Resilier votre compte :</h5>
                        </div>

                        <div className="p-4">
                            <h6 className="mb-0">
                                Pour supprimer votre compte, veuillez vous envoyer un mail avec comme objet : "Demande de résiliation de compte" et expliquer 
                                dans le corps du messaege, vos raisons.<b/>
                                Après les vérifications, nous procéderons très rapidement à la suppresion de votre compte.
                            </h6>
                            <div className="mt-4">
                                <Link to="/page-contact-three" className="btn btn-danger">Envoyer un mail</Link>
                            </div>
                        </div>
                    </div>
                </Col>

            </ProfileCommon>);
    }
}

function mapStateToProps(state) {
    const {user} = state.user;
    console.log(state);
    return {
        user
    };
}

const connectedPageProfilEdit= connect(mapStateToProps)(PageProfileEdit);
export default connectedPageProfilEdit;
