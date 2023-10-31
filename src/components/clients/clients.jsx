import { Row, Col } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

import "../../assets/css/clients/clients.css";
import EditClient from "./editClient.jsx";
import AllClients from "./allClients.jsx";
import close from "../../assets/images/close.svg";
import minimize from "../../assets/images/minimize.svg";

export default function Clients(props) {
  const [search, setSearch] = useState("");
  const [height, setHeight] = useState(100);
  const [activeSection, setActiveSection] = useState(1);
  const [idToEdit, setIdToEdit] = useState(null)

  const containerRef = useRef(null);

  useEffect(() => {
    function updateHeight() {
      const scrollTop = containerRef.current.scrollTop;
      if (scrollTop > 30) {
        setHeight(100);
      }
      const newHeight = Math.max(0, 100 - scrollTop);
      setHeight(+newHeight);
    }

    containerRef.current.addEventListener("scroll", updateHeight);

    return () => {
      containerRef.current.removeEventListener("scroll", updateHeight);
    };

  }, []);

  useEffect(() => {
    containerRef.current.scrollTop = 0
  }, [activeSection])

  function handleSearch(e) {
    const { value } = e.target;
    setSearch(value);
  }

  function closeClientsSection() {
    setActiveSection(1)
    props.setClientsOpened(false);
  }

  return (
    <section
      ref={containerRef}
      style={{
        height: props.isOpened ? `calc(100vh - ${height}px)` : "0",
        transition: height !== 100 ? "none" : "all 0.3s ease-in-out",
      }}
      className={`containerClientReport ${props.isOpened ? "opened" : ""}`}
    >
      <div className="containerMinimizeClose">
        <img src={minimize} alt="Prodensa automation" />
        <img
          src={close}
          alt="Prodensa automation"
          onClick={closeClientsSection}
        />
      </div>
      <div className="container">
        <Row>
          {activeSection === 1 ? (
            <Col className="containerHeader" lg={{ span: 11, offset: 1 }}>
              <div className="clientLogTitle">
                <h1>Clients</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="searchContainer">
                <input
                  className="search"
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={handleSearch}
                />
              </div>
            </Col>
          ) : (
            <Col lg={{ span: 11, offset: 1 }}>
              <div className="editClientsHeader">
                <h1>Client</h1>
              </div>
            </Col>
          )}
        </Row>
        <Row>
          {activeSection === 1 ? (
            <Col lg={{ span: 11, offset: 1 }}>
              <AllClients isOpened={props.isOpened} search={search} 
                setActiveSection={setActiveSection} setIdToEdit={setIdToEdit} closeClientsSection={closeClientsSection}
                openReportLog={props.openReportLog} setShowReportId={props.setShowReportId}/>
            </Col>
            ) : (
            <Col lg={{ span: 8, offset: 1 }}>
              <EditClient setActiveSection={setActiveSection} idtoEdit={idToEdit}/>
            </Col>
            )
          }
        </Row>
      </div>
    </section>
  );
}
