import {useEffect, useState} from "react";
import "../../../assets/css/siteSelection/client.css"
import info from "../../../assets/images/info.svg";
import {Col, Row} from "react-bootstrap";

function NewClient(props) {
    const [focused, setFocused] = useState(false)

    useEffect(() => {
        props.client.companyName !== "" && props.client.phone !== "" && props.client.industry !== "" && props.client.contactName !== "" && props.client.mail !== "" && props.client.headquarters !== "" ? props.setIsDisable(false) : props.setIsDisable(true);

    }, [props.client])


    return (
        <section className="newClientSection">
            <Row>
                <Col lg={{span: 8, offset: 1}} xs={{span: 11, offset: 1}}>
                    <div className="inputContainer">
                        <span>Company name</span>
                        <input value={props.client.companyName}
                               onChange={(e) => props.setClient({...props.client, companyName: e.target.value})}
                               type="text"
                               placeholder="Company name"/>
                    </div>
                    <div className="inputContainer">
                        <span>Phone</span>
                        <input value={props.client.phone}
                               onChange={(e) => props.setClient({...props.client, phone: e.target.value})} type="text"
                               placeholder="Phone"/>
                    </div>
                    <div className="inputContainer">
                        <span>Industry</span>
                        <input value={props.client.industry}
                               onChange={(e) => props.setClient({...props.client, industry: e.target.value})}
                               type="text" placeholder="Industry"/>
                    </div>
                    <div className="inputContainer">
                        <span>Contact name</span>
                        <input value={props.client.contactName}
                               onChange={(e) => props.setClient({...props.client, contactName: e.target.value})}
                               type="text"
                               placeholder="Contact name"/>
                    </div>
                    <div className="inputContainer">
                        <span>Mail</span>
                        <input value={props.client.mail}
                               onChange={(e) => props.setClient({...props.client, mail: e.target.value})}
                               type="email"
                               placeholder="Mail"
                               onFocus={() => setFocused(!focused)} onBlur={() => setFocused(!focused)}/>
                        <span className={`noteUser ${focused ? "show" : ""}`}>
									<img src={info} alt="ProdensaAutomation"/>
									Enter your client's email address
								</span>
                    </div>
                    <div className="inputContainer">
                        <span>Headquarters</span>
                        <input value={props.client.headquarters}
                               onChange={(e) => props.setClient({...props.client, headquarters: e.target.value})}
                               type="text"
                               placeholder="Headquarters"/>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default NewClient;
