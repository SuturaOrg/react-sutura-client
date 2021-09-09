import React, {Component} from "react";
import {Link} from "react-router-dom";
import {
    Col,
    Button, Spinner, Alert
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

import ProfileCommon from "./PageProfileCommon";
import {entityActions} from "../../../actions";
import {connect} from "react-redux";

class PageMessages extends Component {
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
        !this.props.loansList && dispatch(entityActions.getAll("loans"));
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
                selectedContacts: this.state.loans,
            });
        } else {
            this.setState({
                selectedContacts: [],
            });
        }
    };

    handleDeleteClick(id) {
        const { dispatch } = this.props;
        dispatch(entityActions.deleteById("loans",id));
  
    }

    render() {
        const {loansList,loansTotalElements, loansDeleteLoading} = this.props;
        return (
            <ProfileCommon id={3}>
                <Col lg={8} xs={12}>
                    <div className="rounded shadow p-4">
                        <div className="d-flex align-items-center justify-content-between">
                            <h5 className="mb-0">Demandes de prêts:</h5>
                            <Link
                                to="/operations/askloan"
                                className="btn btn-primary"

                            >
                                <i>
                                    <FeatherIcon icon="plus" className="fea icon-sm"/>
                                </i>{" "}
                                Demander un prêt
                            </Link>
                        </div>
                        <div
                            className="d-flex border-bottom align-items-center justify-content-between bg-light mt-4 p-3">
                            <div className="form-check ps-0">
                                <div className="mb-0">
                                {alert.message &&
                                    <Alert
                                        color={alert.type}>
                                        {alert.message}
                                    </Alert>}
                                </div>
                            </div>
                        </div>
                        {loansList ? loansList.length?loansList.map((loan, key) => (
                                <div className="d-flex border-bottom p-3" key={key}>
                                    <div className="form-check ps-0">
                                        <div className="mb-0">
                                        </div>
                                    </div>
                                        <div className="d-flex ms-2">
                                            <i>
                                                <FeatherIcon icon={loan.approved ? "check" : "x-circle"}
                                                             className={loan.approved ?"avatar avatar-md-sm text-primary":"avatar avatar-md-sm text-dark"}/>
                                            </i>
                                            <div className="flex-1 ms-3">
                                                <h6 className="text-dark">{loan.amount} <b>MAD</b></h6>
                                                <p className="text-muted mb-0"><b>Date:</b> {new Date (loan.createdAt).toLocaleDateString("fr-FR",{day:"numeric",month:"long", year:"numeric"})}<br/>
                                                <b>Catégorie:</b> {loan.reason}<br/>
                                                <b>Remboursé:</b> {loan.statusRefund?"Remboursé":"Non remboursé"}<br/>
                                                <b>Montant remboursement:</b> {loan.amountRefund}<br/>
                                                <b>Echéance de paiement:</b> {loan.deadline}<br/>
                                                {loan.status==="FINISHED"&&<Link to={{pathname: `${loan.receipt}` }} target="_blank" className="btn btn-primary mt-2">Voir le reçu</Link>}<br/>
                                                </p>
                                            </div>
                                            <div className="mt-4">
                                            {!loansDeleteLoading?loan.status!=="FINISHED" && loan.statusRefund===false && <Button className="btn btn-danger" onClick={()=>{
                                                if(window.confirm("Voulez-vous vraimment supprimer ?")){
                                                    this.handleDeleteClick(loan.id);
                                                }
                                            }
                                            }>Annuler</Button>:<Spinner className="text-primary danger"> </Spinner>}
                                            </div><br/>
                                        </div>
                                </div>
                            )): <div className="d-flex border-bottom mt-4 justify-content-center text-dark">
                                <div className="form-check ps-0">
                                    <p> Vous n'avez pas encore de prêts</p></div>
                            </div> :
                            <div className="d-flex border-bottom justify-content-center text-primary">
                                <div className="form-check ps-0">
                                    <Spinner> </Spinner></div>
                            </div>}

                        <div className="d-flex align-items-center justify-content-between mt-4">
                            <span className="text-muted h6 mb-0"> {loansList?loansList.length:0} éléments sur {loansTotalElements}</span>
                            <Link to="#" className="btn btn-primary">Voir plus</Link>
                        </div>
                    </div>
                </Col>
            </ProfileCommon>
        );
    }
}

function mapStateToProps(state) {
    const {loansList,loansTotalElements,loansDeleteLoading} = state.entity;
    const {alert}  = state;
    return {
        loansList,
        loansTotalElements,
        alert,
        loansDeleteLoading
    };

}

const connectedPageMessages = connect(mapStateToProps)(PageMessages);
export default connectedPageMessages;
