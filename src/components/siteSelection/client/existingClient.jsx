import {useEffect, useState} from "react";
import "../../../assets/css/siteSelection/client.css"
import {Col, Row} from "react-bootstrap";
import save from "../../../assets/images/save.svg";
import info from "../../../assets/images/info.svg";

function ExistingClient(props) {
    const [focused, setFocused] = useState(false)
    const [showClients, setShowClients] = useState(false)

    useEffect(() => {
        props.client.companyName !== "" && props.client.phone !== "" && props.client.industry !== "" && props.client.contactName !== "" && props.client.mail !== "" && props.client.headquarters !== "" ? props.setIsDisable(false) : props.setIsDisable(true);

    }, [props.client])

    return (
        <section className="existingClientSection">
            <Row>
                <Col lg={{span: 8, offset: 1}} xs={{span: 11, offset: 1}}>
                    <div className="searchContainer">
                        <input className="search" type="text" placeholder="Search client"
                               defaultValue={props.client._id !== null && props.client._id !== undefined ?
                                   `${props.client.companyName} - ${props.client.contactName}` : ""}
                               onFocus={() => setShowClients(!showClients)}
                               onBlur={() => setShowClients(!showClients)}/>
                        <div className={`searchClients ${showClients ? "show" : ""}`}>
                            <div className="clients">
                                {props.clients.map(client => (
                                    <div className="client" key={client._id} onClick={() => props.setClient(client)}>
                                        <span className="companyName">{client.companyName}</span>
                                        <span className="contactName">{client.contactName}</span>
                                        <span className="mail">{client.mail}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="viewAll">
                                <img src={save} alt="ProdensaAutomation"/>
                                <span>View all clients</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            {(props.client._id !== null && props.client._id !== undefined) &&
                <Row>
                    <Col lg={{span: 8, offset: 1}} xs={{span: 11, offset: 1}}>
                        <div className="inputContainer">
                            <span className="abas">Company name</span>
                            <input value={props.client.companyName}
                                   onChange={(e) => props.setClient({
                                       ...props.client,
                                       companyName: e.target.value
                                   })}
                                   type="text"
                                   placeholder="Company name"/>
                        </div>
                        <div className="inputContainer">
                            <span className="abas">Phone</span>
                            <input value={props.client.phone}
                                   onChange={(e) => props.setClient({...props.client, phone: e.target.value})}
                                   type="text"
                                   placeholder="Phone"/>
                        </div>
                        <div className="inputContainer">
                            <span className="abas">Industry</span>
                            <input value={props.client.industry}
                                   onChange={(e) => props.setClient({
                                       ...props.client,
                                       industry: e.target.value
                                   })}
                                   type="text" placeholder="Industry"/>
                        </div>
                        <div className="inputContainer">
                            <span className="abas">Contact name</span>
                            <input value={props.client.contactName}
                                   onChange={(e) => props.setClient({
                                       ...props.client,
                                       contactName: e.target.value
                                   })}
                                   type="text"
                                   placeholder="Contact name"/>
                        </div>
                        <div className="inputContainer">
                            <span className="abas">Mail</span>
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
                            <span className="abas">Headquarters</span>
                            <input value={props.client.headquarters}
                                   onChange={(e) => props.setClient({
                                       ...props.client,
                                       headquarters: e.target.value
                                   })}
                                   type="text"
                                   placeholder="Headquarters"/>
                        </div>
                    </Col>
                </Row>
            }
        </section>
    )
}

export default ExistingClient;
