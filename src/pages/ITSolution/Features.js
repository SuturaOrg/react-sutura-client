import React, {Component} from "react";

import Asset190 from "../../assets/images/illustrator/Asset190.svg";
import Asset189 from "../../assets/images/illustrator/Asset189.svg";
import Asset192 from "../../assets/images/illustrator/Asset192.svg";
import Asset187 from "../../assets/images/illustrator/Asset187.svg";
import {Col, Container, Row, Spinner} from "reactstrap";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {statsActions} from "../../actions/stats.actions";

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: [
                {
                    id: 1,
                    img: Asset190,
                    count: "97",
                    percentage: "+",
                    stateMapping:"studentsCount",
                    heading: "Adhérents",
                },
                {
                    id: 2,
                    img: Asset189,
                    count: "15",
                    percentage: "+",
                    stateMapping:"nationalities",
                    heading: "Nationalités présentes",
                },
                {
                    id: 3,
                    img: Asset192,
                    count: "2",
                    percentage: "+",
                    stateMapping:"accordedLoans",
                    heading: "Prêts accordés",
                },
                {
                    id: 4,
                    img: Asset187,
                    count: "98",
                    percentage: "+",
                    stateMapping:"approvedRefunds",
                    heading: "Remboursements",
                },
            ],
        };
    }

    componentDidMount() {
        console.log("Features", this.props);
        const {dispatch}=this.props;
        !this.props.studentsCount && dispatch(statsActions.get());
    }

    render() {
        const {fundState} = this.props;
        return (
            <React.Fragment>
                <section className="section pt-0">
                    <Container>
                        <div
                            className="p-4 rounded shadow bg-primary position-relative"
                            style={{zIndex: "1"}}
                        >
                            <Row>
                                <Col md={6} xs={12}>
                                <div className="progress-box">
                                        <h6 className="title text-light title-dark">
                                            Disponibilité de la caisse
                                        </h6>
                                        <div
                                            className="mt-4 progress title-bg-dark"
                                            style={{height: "10px", padding: "3px"}} 
                                            value={fundState}
                                        >
                                            <div
                                                className="progress-bar position-relative bg-black"
                                                style={{width: `${fundState}%`}}
                                            >
                                                <div className="progress-value d-block text-light title-dark h6">
                                                    {fundState}%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={6} xs={12}>
                                    <div className="progress-box mt-4 mt-sm-0">
                                        <h6 className="title text-light title-dark">
                                            Opérations par rapport à la période précèdente
                                        </h6>
                                        <div
                                            className=" mt-4 progress title-bg-dark"
                                            style={{height: "10px", padding: "3px"}}
                                        >
                                            <div
                                                className="progress-bar position-relative bg-black"
                                                style={{width: "100%"}}
                                            >
                                                <div className="progress-value d-block text-light title-dark h6">
                                                    100%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <Row
                            className="mt-4 pt-2 position-relative"
                            id="counter"
                            style={{zIndex: "1"}}
                        >
                            {this.state.progress.map((progress, key) => (
                                <Col md={3} xs={6} className="mt-4 pt-2" key={key}>
                                    <div className="counter-box text-center">
                                        <img
                                            src={progress.img}
                                            className="avatar avatar-small"
                                            alt=""
                                        />
                                        <h2 className="mb-0 mt-4">
                                            { !this.props.statsLoading?<span className="counter-value" data-count="97">
                        {this.props[progress.stateMapping]}
                      </span>:<Spinner> </Spinner>}
                                            {progress.percentage}
                                        </h2>
                                        <h6 className="counter-head text-muted">
                                            {progress.heading}
                                        </h6>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <div className="feature-posts-placeholder bg-light"></div>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    const {statsLoading, fundState, studentsCount, nationalities, accordedLoans, approvedRefunds} = state.stats;
    return {
        statsLoading, studentsCount, nationalities, accordedLoans, approvedRefunds, fundState
    };
}

const connectedApp = connect(mapStateToProps)(withRouter(Features));
export default connectedApp;
