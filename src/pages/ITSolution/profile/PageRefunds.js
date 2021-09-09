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
import ProfileCommon from "./PageProfileCommon";
import {entityActions} from "../../../actions";
import {connect} from "react-redux";

class PageRefunds extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        !this.props.refundsList && dispatch(entityActions.getAll("refunds"));
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
                selectedContacts: this.state.refunds,
            });
        } else {
            this.setState({
                selectedContacts: [],
            });
        }
    };

    render() {
        const {refundsList,refundsTotalElements} = this.props;
        return (
            <ProfileCommon id={4}>
                <Col lg={8} xs={12}>
                    <div className="rounded shadow p-4">
                        <div className="d-flex align-items-center justify-content-between">
                            <h5 className="mb-0">Remboursements:</h5>
                            <Link
                                to="/operations/refund"
                                className="btn btn-primary"

                            >
                                <i>
                                    <FeatherIcon icon="plus" className="fea icon-sm"/>
                                </i>{" "}
                                Rembourser
                            </Link>
                        </div>
                        <div
                            className="d-flex border-bottom align-items-center justify-content-between bg-light mt-4 p-3">
                            <div className="form-check ps-0">
                                <div className="mb-0">
                                </div>
                            </div>
                        </div>
                        {refundsList ? refundsList.length?refundsList.map((refund, key) => (
                                <div className="d-flex border-bottom p-3" key={key}>
                                    <div className="form-check ps-0">
                                        <div className="mb-0">
                                        </div>
                                    </div>
                                        <div className="d-flex ms-2">
                                            <i>
                                                <FeatherIcon icon={refund.approved ? "check" : "x-circle"}
                                                             className={refund.approved ?"avatar avatar-md-sm text-primary":"avatar avatar-md-sm text-dark"}/>
                                            </i>
                                            <div className="flex-1 ms-3">
                                                <h6 className="text-dark">{refund.amount} <b>MAD</b></h6>
                                                <p className="text-muted mb-0"><b>Date: </b>{new Date (refund.createdAt).toLocaleDateString("fr-FR",{day:"numeric",month:"long", year:"numeric"})}</p>
                                                <p className="text-muted mb-0"><b>Etat: </b>{refund.approved?"Approuvé":"En attente"}</p>
                                            </div>
                                        </div>
                                </div>
                            )): <div className="d-flex border-bottom mt-4 justify-content-center text-dark">
                                <div className="form-check ps-0">
                                    <p> Vous n'avez pas encore de remboursements</p></div>
                            </div> :
                            <div className="d-flex border-bottom justify-content-center text-primary">
                                <div className="form-check ps-0">
                                    <Spinner> </Spinner></div>
                            </div>}

                        <div className="d-flex align-items-center justify-content-between mt-4">
                            <span className="text-muted h6 mb-0"> {refundsList?refundsList.length:0} éléments sur {refundsTotalElements}</span>
                            <Link to="#" className="btn btn-primary">voir plus</Link>
                        </div>
                    </div>
                </Col>
            </ProfileCommon>
        );
    }
}

function mapStateToProps(state) {
    const {refundsList,refundsTotalElements} = state.entity;
    return {
        refundsList,
        refundsTotalElements
    };

}

const connectedPageRefunds = connect(mapStateToProps)(PageRefunds);
export default connectedPageRefunds;
