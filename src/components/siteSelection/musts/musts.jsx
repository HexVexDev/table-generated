import {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";

function Musts(props) {
    useEffect(() => {
        props.setTextActionButton("Next");
        props.setFunctionActionButton(() => next);
    }, [props.activeMenu])

    const next = () => {
        console.log("must");
        props.setActiveMenu(3);
    }

    return (
        <section className="mustsSection">
            <Row>
                <Col lg={{span: 6, offset: 1}} xs={{span: 10, offset: 1}}>

                </Col>
            </Row>
        </section>
    )
}

export default Musts;
