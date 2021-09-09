// React Basic and Bootstrap
import React, {Component} from "react";
import {Link} from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Alert,
    Label,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardBody, Spinner,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import contactImg from "../../assets/images/contact-detail.jpg";
import {AvForm, AvField} from "availity-reactstrap-validation";
import {alertActions} from "../../actions";
import {connect} from "react-redux";
import {mailActions} from "../../actions/mail.actions";


class PageContactThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathItems: [
                //id must required
                {id: 1, name: "Sutura", link: "/"},
                {id: 4, name: "Contacts"},
            ],
            Contactvisible: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMail.bind(this);
        this.callNumber.bind(this);
    }

    handleSubmit(event, values) {
        const {dispatch} = this.props;
        dispatch(alertActions.clear());
        //this.setState({ Contactvisible: true });
        const textAreaValue = document.getElementById("messageForm").value;
        if (!textAreaValue.trim()) {
            dispatch(alertActions.error("Le message est vide"));
            return;
        }
        values.message=textAreaValue;
        dispatch(mailActions.create(values))
    }

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
        const {dispatch} =this.props;
        dispatch(alertActions.clear())

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
        } else {
            document.getElementById("topnav").classList.remove("nav-sticky");
        }
    };

    sendMail() {
        window.location.href = "mailto:contact@example.com";
    }

    callNumber() {
        window.location.href = "tel:+152534-468-854";
    }

    render() {
        const length = this.state.pathItems.length;
        const {alert, createLoading} = this.props;
        return (
            <React.Fragment>
                <section
                    className="bg-half bg-light d-table w-100"
                    style={{background: `url(${contactImg}) center center`}}
                >
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="12" className="text-center">
                                <div className="page-next-level">
                                    <h4 className="title"> Contactez nous</h4>
                                    <div className="page-next">
                                        <nav className="d-inline-block">
                                            <Breadcrumb
                                                aria-label="breadcrumb"
                                                listClassName="bg-white rounded shadow mb-0"
                                            >
                                                {this.state.pathItems.map((item, key) =>
                                                    item.id !== length ? (
                                                        <BreadcrumbItem key={key}>
                                                            <Link
                                                                to={item.link}
                                                                className="text-uppercase fw-bold text-dark me-1"
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </BreadcrumbItem>
                                                    ) : (
                                                        <BreadcrumbItem
                                                            key={key}
                                                            active
                                                            aria-current="page"
                                                        >
                                                            {item.name}
                                                        </BreadcrumbItem>
                                                    )
                                                )}
                                            </Breadcrumb>
                                        </nav>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <div className="form-icon position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg
                            viewBox="0 0 2880 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                </div>

                <section className="section">
                    <Container>
                        <Row>
                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <Card className="shadow rounded border-0">
                                    <CardBody className="py-5">
                                        <h4 className="card-title">Prendre contact avec nous !</h4>
                                        <div className="custom-form mt-3">
                                            <div id="message"></div>
                                            <Alert
                                                color="info"
                                                isOpen={this.state.Contactvisible}
                                                toggle={() => {
                                                    this.setState({
                                                        Contactvisible: !this.state.Contactvisible,
                                                    });
                                                }}
                                            >
                                                Votre message a été envoyé avec succès.
                                            </Alert>
                                            <AvForm
                                                onValidSubmit={this.handleSubmit}
                                                name="contact-form"
                                                id="contact-form"
                                            >
                                                <Row>
                                                    <Col md={6}>
                                                        <div className="mb-3">
                                                            <Label className="form-label">
                                                                Votre nom<span className="text-danger">*</span>
                                                            </Label>
                                                            <div className="form-icon position-relative">
                                                                <i>
                                                                    <FeatherIcon
                                                                        icon="user"
                                                                        className="fea icon-sm icons"
                                                                    />
                                                                </i>
                                                            </div>
                                                            <AvField
                                                                name="name"
                                                                id="name"
                                                                type="text"
                                                                className="form-control ps-5"
                                                                placeholder="Votre nom :"
                                                                required
                                                                validate={{
                                                                    required: {
                                                                        value: true,
                                                                        errorMessage: "Veuillez remplir ce champ",
                                                                    },
                                                                }}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="mb-3">
                                                            <Label className="form-label">
                                                                Votre email{" "}
                                                                <span className="text-danger">*</span>
                                                            </Label>
                                                            <div className="form-icon position-relative">
                                                                <i>
                                                                    <FeatherIcon
                                                                        icon="mail"
                                                                        className="fea icon-sm icons"
                                                                    />
                                                                </i>
                                                            </div>
                                                            <AvField
                                                                name="email"
                                                                id="email"
                                                                type="email"
                                                                className="form-control ps-5"
                                                                placeholder="Votre email :"
                                                                required
                                                                validate={{
                                                                    required: {
                                                                        value: true,
                                                                        errorMessage: "Veuillez remplir ce champ",
                                                                    },
                                                                }}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col md={12}>
                                                        <div className="mb-3">
                                                            <Label className="form-label">Objet </Label>
                                                            <div className="form-icon position-relative">
                                                                <i>
                                                                    <FeatherIcon
                                                                        icon="book"
                                                                        className="fea icon-sm icons"
                                                                    />
                                                                </i>
                                                            </div>
                                                            <AvField
                                                                name="objet"
                                                                id="subject"
                                                                type="text"
                                                                className="form-control ps-5"
                                                                placeholder="Objet"
                                                                required
                                                                validate={{
                                                                    required: {
                                                                        value: true,
                                                                        errorMessage: "Veuillez remplir ce champ",
                                                                    },
                                                                }}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col md={12}>
                                                        <div className="mb-3">
                                                            <Label className="form-label">Commentaire</Label>
                                                            <div className="form-icon position-relative">
                                                                <i>
                                                                    <FeatherIcon
                                                                        icon="message-circle"
                                                                        className="fea icon-sm icons"
                                                                    />
                                                                </i>
                                                            </div>
                                                            <textarea
                                                                name="message"
                                                                id="messageForm"
                                                                rows="4"
                                                                className="form-control ps-5"
                                                                placeholder="Votre message :"
                                                            ></textarea>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={12} className="text-center">
                                                        <div className="d-grid justify-content-center">
                                                            {!createLoading?
                                                            <AvField
                                                                type="submit"
                                                                id="submit"
                                                                name="send"
                                                                className="submitBnt btn btn-primary btn-block"
                                                                value="Envoyer"
                                                            />:<Spinner className={"text-primary"}> </Spinner>}
                                                        </div>
                                                        <div id="simple-msg"></div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={12} className="mt-4 text-center">
                                                        {alert && alert.message &&
                                                        <Alert
                                                            color={alert.type}
                                                        >
                                                            {alert.message}                      </Alert>}
                                                    </Col>
                                                </Row>
                                            </AvForm>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={8} md={6} className="ps-md-3 pe-md-3 mt-4 pt-2">
                                <Card className="map map-height-two rounded map-gray border-0">
                                    <CardBody className="p-0">
                                        <iframe
                                            title="test"
                                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCWr_f0gQ-IDpw2Mh0P06IiuYo1E8ytOt0&q=cit%C3%A9%20de%20l'innovation%20de%20marrakech"
                                            style={{border: 0}}
                                            className="rounded"
                                            allowFullScreen=""
                                        ></iframe>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row>
                            <Col md={4}>
                                <Card className="border-0 text-center features feature-clean">
                                    <div className="icons text-primary text-center mx-auto">
                                        <i className="uil uil-phone d-block rounded h3 mb-0"></i>
                                    </div>
                                    <div className="content mt-3">
                                        <h5 className="fw-bold">Téléphone</h5>
                                        <p className="text-muted">
                                            Sutura est aussi une équipe très accessible.
                                        </p>
                                        <Link
                                            to="#"
                                            onClick={this.callNumber}
                                            className="text-primary"
                                        >
                                            +212 609-863568 ou +212 684-363871
                                        </Link>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <Card className="border-0 text-center features feature-clean">
                                    <div className="icons text-primary text-center mx-auto">
                                        <i className="uil uil-envelope d-block rounded h3 mb-0"></i>
                                    </div>
                                    <div className="content mt-3">
                                        <h5 className="fw-bold">Email</h5>
                                        <p className="text-muted">
                                            Sutura est aussi une équipe très accessible. Vos mails sont pris en compte
                                            dans les meilleurs délais.
                                        </p>
                                        <Link
                                            to="#"
                                            onClick={this.sendMail}
                                            className="text-primary"
                                        >
                                            contact@sutura.in
                                        </Link>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <Card className="border-0 text-center features feature-clean">
                                    <div className="icons text-primary text-center mx-auto">
                                        <i className="uil uil-map-marker d-block rounded h3 mb-0"></i>
                                    </div>
                                    <div className="content mt-3">
                                        <h5 className="fw-bold">Adresse</h5>
                                        <p className="text-muted">
                                            Cité de l'innovation, Université
                                            <br/>
                                            B.P. 511 - 40000 - Marrakech <br/>
                                            Cadi Ayyad av. Abdelkrim Khattabi,
                                        </p>
                                        <Link to="#" className="video-play-icon text-primary lightbox">
                                            Voir sur Google map
                                        </Link>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    const {alert} = state
    const {createLoading} = state.mail

    return {
        alert,
        createLoading
    };
}

const connectedPageContactThree = connect(mapStateToProps)(PageContactThree);
export default connectedPageContactThree;

