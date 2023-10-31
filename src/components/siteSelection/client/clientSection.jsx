import {useEffect, useState} from "react";
import "../../../assets/css/siteSelection/client.css"
import NewClient from "./newClient.jsx";
import {Col, Row} from "react-bootstrap";
import newClient from "../../../assets/images/personAdd.svg";
import existingClient from "../../../assets/images/menuBook.svg";
import ExistingClient from "./existingClient.jsx";
import {Client} from "../../../models/client.ts";

function ClientSection(props) {
    const [clients: Client[], setClients] = useState([
        {
            _id: 0,
            companyName: "Amazon",
            contactName: "Mario López",
            mail: "mlopez@amazon.com",
            phone: "6861111111",
            industry: "Industry 1",
            headquarters: "headquarters 1",
        },
        {
            _id: 1,
            companyName: "Chevrolet",
            contactName: "Mariana Perez",
            mail: "marianaperez@chevrolet.com",
            phone: "6861111111",
            industry: "Industry 1",
            headquarters: "headquarters 1"
        },
        {
            _id: 2,
            companyName: "Daewoo",
            contactName: "María González",
            mail: "mariaglez@daewoo.com",
            phone: "6861111111",
            industry: "Industry 1",
            headquarters: "headquarters 1"
        },
        {
            _id: 3,
            companyName: "Ford",
            contactName: "Omar Gómez",
            mail: "omargomez@ford.com",
            phone: "6861111111",
            industry: "Industry 1",
            headquarters: "headquarters 1"
        },
        {
            _id: 4,
            companyName: "Amazon2",
            contactName: "Mario López2",
            mail: "mlopez@amazon.com2",
            phone: "6861111111",
            industry: "Industry 1",
            headquarters: "headquarters 1"
        },
        {
            _id: 5,
            companyName: "Chevrolet2",
            contactName: "Mariana Perez2",
            mail: "marianaperez@chevrolet.com2",
            phone: "6861111111",
            industry: "Industry 1",
            headquarters: "headquarters 1"
        },
        {
            _id: 6,
            companyName: "Daewoo2",
            contactName: "María González2",
            mail: "mariaglez@daewoo.com2",
            phone: "6861111111",
            industry: "Industry 1",
            headquarters: "headquarters 1"
        },
        {
            _id: 7,
            companyName: "Ford2",
            contactName: "Omar Gómez2",
            mail: "omargomez@ford.com2",
            phone: "6861111111",
            industry: "Industry 1",
            headquarters: "headquarters 1"
        }
    ])

    useEffect(() => {
        props.setTextActionButton("Submit");
        props.setFunctionActionButton(() => submitClient);
    }, [props.client, props.activeMenu])

    const navigationSectionClick = (activeSection) => {
        if (!props.draft.siteSelectionReport.client && props.activeClientSection !== activeSection) {
            props.setActiveClientSection(activeSection);
            props.setClient(new Client());
        }
    }

    const submitClient = () => {
        props.setDraft(prevState => {
            return {
                ...prevState,
                name: props.client.contactName + "-Folio",
                siteSelectionReport: {
                    ...prevState.siteSelectionReport,
                    client: props.client,
                }
            }
        });

        props.setLoading(true);
        props.setIsDisable(true);

        setTimeout(() => {
            // setClients(prevState => [...prevState, props.client]);
            props.setClient(prevState => {
                return {...prevState, _id: "10"}
            });
            props.setActiveMenu(1);
            props.setActiveClientSection(1);
            props.setLoading(false);
            props.setIsDisable(false);
        }, 1000);
    }

    return (
        <section className="clientSection">
            <Row>
                <Col className="containerNavigation" lg={{span: 8, offset: 1}} xs={{span: 11, offset: 1}}>
                    <button className={`btnNavigation ${props.activeClientSection === 0 ? "active" : ""}`}
                            onClick={() => navigationSectionClick(0)}
                            disabled={props.draft.siteSelectionReport.client != null ? "disabled" : ""}>
                        <img src={newClient} alt="Prodensa automation"/>
                        <span>New client</span>
                    </button>
                    <button className={`btnNavigation ${props.activeClientSection === 1 ? "active" : ""}`}
                            onClick={() => navigationSectionClick(1)}>
                        <img src={existingClient} alt="Prodensa automation"/>
                        <span>Existing client</span>
                    </button>
                </Col>
            </Row>
            <Row>
                <Col lg={{span: 8, offset: 1}} xs={{span: 11, offset: 1}}>
                    <div className="containerNavigationMark">
                        <div className={`selectedMark ${props.activeClientSection === 1 ? "move" : ""}`}></div>
                    </div>
                </Col>
            </Row>
            {
                props.activeClientSection === 0 ?
                    <NewClient setDraft={props.setDraft}
                               client={props.client}
                               setClient={props.setClient}
                               setIsDisable={props.setIsDisable}
                               setActiveMenu={props.setActiveMenu}/> :
                    <ExistingClient setDraft={props.setDraft}
                                    clients={clients}
                                    client={props.client}
                                    setClient={props.setClient}
                                    setIsDisable={props.setIsDisable}
                                    setActiveMenu={props.setActiveMenu}/>
            }

        </section>
    )
}

export default ClientSection;
