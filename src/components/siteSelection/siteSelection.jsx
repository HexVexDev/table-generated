import "../../assets/css/siteSelection/siteSelection.css"
import minimize from "../../assets/images/minimize.svg"
import close from "../../assets/images/close.svg"
import save from "../../assets/images/save.svg"
import edit from "../../assets/images/edit.svg"
import {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import ClientSection from "./client/clientSection.jsx";
import {Client} from "../../models/client.ts";
import Assumptions from "./assumptions/assumptions.jsx";
import {Draft} from "../../models/draft.ts";
import loadingGif from "../../assets/images/loading.gif";
import checkGreen from "../../assets/images/check_green.svg";
import Musts from "./musts/musts.jsx";
import Wants from "./wants/wants.jsx";
import {format} from "date-fns";

function MenuButton(props) {
    return (
        <button className={`btnNavigation ${props.active ? "active" : ""}`}
                onClick={props.setActiveMenu}
                disabled={!props.hasClient && !props.active ? "disabled" : ""}>{props.menuTitle}</button>
    );
}

function SiteSelection(props) {
    const [savingDraft, setSavingDraft] = useState(false)
    const [savedDraft, setSavedDraft] = useState(false);
    const [draftStatus, setDraftStatus] = useState("Draft not saved");
    const [loading, setLoading] = useState(false)
    const [isDisable, setIsDisable] = useState(true)
    const [activeMenu, setActiveMenu] = useState(0);
    const [draft, setDraft] = useState(new Draft());
    const [client, setClient] = useState(new Client());
    const [textActionButton, setTextActionButton] = useState("");
    const [functionActionButton, setFunctionActionButton] = useState();
    const [activeClientSection, setActiveClientSection] = useState(0)
    const [textBackButton, setTextBackButton] = useState(0)
    const wizardMenus = ["Client", "Assumptions", "Musts", "Wants"];
    const wizardMenuDescriptions = [
        "",
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    ];

    useEffect(() => {
        switch (activeMenu) {
            case 0:
            case 1:
                setTextBackButton("Cancel");
                break;
            case 2:
            case 3:
                setTextBackButton("Previous");
        }
    }, [activeMenu])

    const saveDraft = () => {
        console.log(draft);

        setSavedDraft(false);
        setSavingDraft(true);
        setIsDisable(true);

        setTimeout(() => {
            setSavedDraft(true);
            setDraftStatus("Draft saved: " + format(new Date(), "MMMM dd yyyy, h:mm a"));
            setSavingDraft(false);
            setIsDisable(false);
        }, 1000);
    }

    const closeBackButton = () => {
        switch (activeMenu) {
            case 0:
            case 1:
                closeSiteSelection();
                break;
            case 2:
            case 3:
                setActiveMenu(activeMenu - 1);
        }
    }

    const closeSiteSelection = () => {
        setActiveMenu(0);
        setActiveClientSection(0);
        setSavingDraft(false);
        setSavedDraft(false);
        setDraftStatus("Draft not saved");
        setDraft(new Draft());
        setClient(new Client());
        props.setSiteSelectionOpened(false);
    }

    return (
        <section className={`containerSection ${props.isOpened ? "opened" : ""}`}>
            <div className="containerMinimizeClose">
                <img src={minimize} alt="Prodensa automation"/>
                <img src={close} alt="Prodensa automation" onClick={closeSiteSelection}/>
            </div>
            <div className="container">
                <Row>
                    <Col lg={{span: "auto", offset: 1}} xs={{span: 12, offset: 1}}>
                        <h1>{wizardMenus[activeMenu]}</h1>
                    </Col>
                    {activeMenu !== 0 &&
                        <>
                            <Col className="ms-auto my-auto d-flex justify-content-end" lg={5}>
                                {
                                    activeMenu !== 0 &&
                                    <div className="containerDraftName">
                                        <input className="draftName"
                                               defaultValue={draft.name}
                                               type="text"
                                               placeholder="Draft name"
                                               onChange={(e) =>
                                                   setDraft(prevState => {
                                                       return {...prevState, name: e.target.value}
                                                   })}/>
                                        <img src={edit} alt="Prodensa automation"/>
                                    </div>
                                }
                                <button className="secondaryButton" type="submit" onClick={() => saveDraft()}>
                                    <img src={save} alt="Prodensa automation"/>
                                    <span>Save draft</span>
                                </button>
                                <div className="savingDraftContainer my-auto ms-2">
                                    {savedDraft &&
                                        <img className="loading show"
                                             src={checkGreen}
                                             alt="ProdensaAutomation"/>
                                        || !savedDraft &&
                                        <img className={`loading ${savingDraft ? "show" : ""}`}
                                             src={loadingGif}
                                             alt="ProdensaAutomation"/>
                                    }
                                </div>

                            </Col>
                        </>
                    }
                </Row>
                {activeMenu !== 0 &&
                    <Row className="wizardStatusContainer">
                        <Col lg={{span: 5, offset: 1}}>
                            <span className="sectionDescription">{wizardMenuDescriptions[activeMenu]}</span>
                        </Col>
                        <Col className="ms-auto pe-0" lg={"auto"}>
                            <span className="wizardStatus">{draftStatus}</span>
                        </Col>
                    </Row>
                }
                {
                    activeMenu === 0 &&
                    <ClientSection draft={draft} setDraft={setDraft} client={client} setClient={setClient}
                                   setLoading={setLoading} setIsDisable={setIsDisable}
                                   setTextActionButton={setTextActionButton}
                                   setFunctionActionButton={setFunctionActionButton}
                                   activeMenu={activeMenu} setActiveMenu={setActiveMenu}
                                   activeClientSection={activeClientSection}
                                   setActiveClientSection={setActiveClientSection}/>
                    || activeMenu === 1 &&
                    <Assumptions draft={draft} setDraft={setDraft} activeMenu={activeMenu} setActiveMenu={setActiveMenu}
                                 setTextActionButton={setTextActionButton}
                                 setFunctionActionButton={setFunctionActionButton}/>
                    || activeMenu === 2 &&
                    <Musts draft={draft} setDraft={setDraft} activeMenu={activeMenu} setActiveMenu={setActiveMenu}
                           setTextActionButton={setTextActionButton}
                           setFunctionActionButton={setFunctionActionButton}/>
                    || activeMenu === 3 &&
                    <Wants draft={draft} setDraft={setDraft} activeMenu={activeMenu} setActiveMenu={setActiveMenu}
                           setTextActionButton={setTextActionButton}
                           setFunctionActionButton={setFunctionActionButton}/>
                }
                <div className="containerActions">
                    <img className={`loading ${loading ? "show" : ""}`} src={loadingGif} alt="ProdensaAutomation"/>
                    <button className="cancelButton" onClick={closeBackButton}>{textBackButton}< /button>
                    <button className="secondaryButton" onClick={functionActionButton} disabled={isDisable}>
                        <span>{textActionButton}</span>
                    </button>
                </div>
            </div>
            <div className="containerWizardNavigation bg-white">
                {
                    wizardMenus.map((menu, index) => (
                        <MenuButton key={index} active={activeMenu === index} menuTitle={menu}
                                    hasClient={draft.siteSelectionReport.client !== null && draft.siteSelectionReport.client !== undefined}
                                    setActiveMenu={() => setActiveMenu(index)}/>
                    ))
                }
            </div>
        </section>
    )
}

export default SiteSelection;
