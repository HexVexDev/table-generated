import {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";

function Wants(props) {
    useEffect(() => {
        props.setTextActionButton("Next");
        props.setFunctionActionButton(() => next);
    }, [props.activeMenu])

    const next = () => {
        console.log("wants");
        // props.setActiveMenu(3);
    }

    return (
        <section className="wantsSection">
            <Row>
                <Col lg={{span: 6, offset: 1}} xs={{span: 10, offset: 1}}>

                </Col>
            </Row>
        </section>
    )
}

export default Wants;
