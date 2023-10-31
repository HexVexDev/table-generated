import { useEffect, useState } from "react";

import "../../assets/css/clients/clients.css";
import close from "../../assets/images/close.svg";
import PageSelector from "../reportLog/pageSelector.jsx";
import listAlt from "../../assets/images/list_alt.svg";
import moreDots from "../../assets/images/moreDots.svg";
import logo from "../../assets/images/profileExample.jpg";
import arrowDown from "../../assets/images/arrowDown.svg";
import alphabet from "../../assets/jsonData/abecedario.json";

export default function AllClients(props) {
  const [allClients, setAllClients] = useState([
    {
      _id: "1",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "Mercedes Benz",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: logo,
    },
    {
      _id: "2",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "PayPal",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: null,
    },
    {
      _id: "3",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "Ikea",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: null,
    },
    {
      _id: "4",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "Google",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: null,
    },
    {
      _id: "5",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "Ford",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: logo,
    },
    {
      _id: "6",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "Nike",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: null,
    },
    {
      _id: "7",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "FedEx",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: logo,
    },
    {
      _id: "8",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "Nestle",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: null,
    },
    {
      _id: "9",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "Microsoft",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: null,
    },
    {
      _id: "10",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "Amazon",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: null,
    },
    {
      _id: "11",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "Mercedes Benz",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: null,
    },
    {
      _id: "12",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "PayPal",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: null,
    },
    {
      _id: "13",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "Ikea",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: null,
    },
    {
      _id: "14",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "Google",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: null,
    },
    {
      _id: "15",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "Ford",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: null,
    },
    {
      _id: "16",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "Nike",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: null,
    },
    {
      _id: "17",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "FedEx",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: null,
    },
    {
      _id: "18",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "Nestle",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: null,
    },
    {
      _id: "19",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "Microsoft",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: null,
    },
    {
      _id: "20",
      industry: "Automotriz",
      headquarters: "Seattle, Washington, USA",
      contactName: "Mario Lopez",
      client: "Amazon",
      phone: "+52 686 540 5789",
      mail: "mlopez@starbucks.com",
      notes: "Extra comments from client",
      logo: null,
    },
  ]);

  const [filteredClients, setFilteredClients] = useState([...allClients]);

  const [activeFilter, setActiveFilter] = useState(0);
  const [activeLetter, setActiveLetter] = useState("");

  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const [startIndex, setStartIndex] = useState(
    (currentPage - 1) * itemsPerPage
  );
  const [endIndex, setEndIndex] = useState(currentPage * itemsPerPage);

  // -------------- states ⬆, useEffect's ⬇ -------------

  useEffect(() => {
    if (!props.isOpened) {
      setActiveFilter(0);
      setItemsPerPage(3);
      setCurrentPage(1);
    }
  }, [props.isOpened]);

  useEffect(() => {
    setAllClients(
      allClients.map((client) => {
        return {
          ...client,
          showOptions: false,
          showNotes: false,
        };
      })
    );
  }, []);

  useEffect(() => {
    setStartIndex((currentPage - 1) * itemsPerPage);
    setEndIndex(currentPage * itemsPerPage);
  }, [itemsPerPage, currentPage]);

  useEffect(() => {
    const filteredByLetter = Filters(allClients, activeLetter);
    setFilteredClients(SearchBarFilter(filteredByLetter, props.search));

    if (currentPage > Math.ceil(allClients.length / itemsPerPage)) {
      setCurrentPage(currentPage - 1);
    }
  }, [allClients]);

  useEffect(() => {
    setCurrentPage(1);

    const filteredByLetter = Filters(allClients, activeLetter);
    setFilteredClients(SearchBarFilter(filteredByLetter, props.search));
  }, [props.search, activeLetter]);

  // ---------------- useEffect's ⬆, handle Functions ⬇ ------

  function handleCurrentPage(value) {
    setCurrentPage(value);
  }

  function handleActiveFilter(activeFilter) {
    setActiveFilter(activeFilter);
  }

  function handleItemsPerPage(e) {
    setItemsPerPage(+e.target.innerText);

    setCurrentPage(1);
  }

  const handleClick = (id) => {
    console.log(id)
    setFilteredClients(
      filteredClients.map((client) => {
        return {
          ...client,
          showOptions: client._id === id ? !client.showOptions : false,
        };
      })
    );
  };

  function handleCloseNote() {
    setFilteredClients(
      filteredClients.map((client) => {
        return {
          ...client,
          showNotes: false,
        };
      })
    );
  }

  function handleClickAlphabet(e) {
    setActiveLetter(e.target.innerText);
  }

  function handleShowNotes() {
    setFilteredClients(
      filteredClients.map((client) => {
        return {
          ...client,
          showOptions: false,
          showNotes: true,
        };
      })
    );
  }

  function handleShowReport(e) {
    const { id } = e.target

    setFilteredClients(
      filteredClients.map((client) => {
        return {
          ...client,
          showOptions: false,
          showNotes: false,
        };
      }))

    props.setShowReportId(id)

    props.closeClientsSection()
    props.openReportLog()
  }

  function handleReset() {
    setActiveLetter("");
  }

  function handleEdit(e) {
    const id = e.target.id;
    props.setIdToEdit(id)
    props.setActiveSection(2)
  }

  function handleDelete(e) {
    const id = e.target.id;
    const newAllClients = filteredClients.filter((client) => client._id !== id);
    setAllClients(newAllClients);
    setFilteredClients(
      filteredClients.map((client) => {
        return {
          ...client,
          showOptions: false,
          showNotes: false,
        };
      })
    );
  }

  // utils ⬇

  function SearchBarFilter(data, searchTerm) {
    if (searchTerm !== "") {
      const filteredData = data.filter((item) =>
        item.client.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return filteredData;
    }
    return data;
  }

  function Filters(data, letter) {
    if (letter) {
      const filteredClients = data.filter(
        (client) => client.client.charAt(0) === letter
      );
      return filteredClients;
    }

    return data;
  }

  return (
    <main className="clientDirectory">
      <section className="filtersContainer">
        <div className="alphabetContainer">
          {alphabet.alphabet.map((letter) => {
            return (
              <button
                className="buttonLetter"
                key={letter}
                onClick={handleClickAlphabet}
                style={{ opacity: activeLetter === letter ? "1" : "0.5" }}
              >
                {letter}
              </button>
            );
          })}
          <button
            className="buttonLetter"
            name="reset"
            onClick={handleReset}
            style={{
              visibility: alphabet.alphabet.includes(activeLetter)
                ? "visible"
                : "hidden",
            }}
          >
            Reset
          </button>
        </div>
        <div className="pagesFilterContainer">
          <div
            className={`itemsPerPageFilter ${
              activeFilter === 1 ? "active" : ""
            }`}
            onClick={() =>
              activeFilter === 1 ? handleActiveFilter(0) : handleActiveFilter(1)
            }
          >
            <img src={listAlt} alt="Prodensa automation" />
            <span>Show per page</span>
            <img src={arrowDown} alt="Prodensa automation" />
            <div
              className={`filterOptions ${activeFilter === 1 ? "show" : ""}`}
            >
              <span className="option" onClick={handleItemsPerPage}>
                2
              </span>
              <span className="option" onClick={handleItemsPerPage}>
                3
              </span>
              <span className="option" onClick={handleItemsPerPage}>
                10
              </span>
              <span className="option" onClick={handleItemsPerPage}>
                20
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="clientsCardsSection">
        {filteredClients.slice(startIndex, endIndex).map((client) => {
          return (
            <div key={client._id} className="clientCard">
              <div className="logo">
                {client.logo ? (
                  <img src={logo} alt="Prodensa automation" />
                ) : (
                  <span>{client.client.charAt(0)}</span>
                )}
              </div>
              <div className="cardOptions">
                <img
                  src={moreDots}
                  onClick={() => handleClick(client._id)}
                  alt="ProdensaAutomation"
                />
                <div
                  className={`moreOptionsClient ${client.showOptions ? "show" : ""}`}
                >
                  <span className="option" id={client._id} onClick={handleShowNotes}>
                    Show notes
                  </span>
                  <span className="option" id={client._id} onClick={handleEdit}>
                    Edit
                  </span>
                  <span className="option" id={client._id} onClick={handleShowReport}>
                    Show Reports
                  </span>
                  <span
                    className="option"
                    id={client._id}
                    onClick={handleDelete}
                  >
                    Delete
                  </span>
                </div>
              </div>
              <h3>{client.client}</h3>
              <div className="clientInfo">
                <div className="info">
                  <h4>{client.industry}</h4>
                  <span>Industry</span>
                </div>
                <div className="info">
                  <h4>{client.headquarters}</h4>
                  <span>Headquarters</span>
                </div>
                <div className="info">
                  <h4>{client.contactName}</h4>
                  <span>Contact Name</span>
                </div>
                <div className="info">
                  <h4>{client.mail}</h4>
                  <span>Mail</span>
                </div>
                <div className="info">
                  <h4>{client.phone}</h4>
                  <span>Phone</span>
                </div>
              </div>
              <div className={`noteModal ${client.showNotes ? "show" : ""}`}>
                <div className="modalInfo">
                    <img src={close} alt="Prodensa automation" onClick={handleCloseNote}/>
                    <h5>Notes</h5>
                    <p>{client.notes}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <PageSelector
        currentPage={currentPage}
        data={filteredClients}
        itemsPerPage={itemsPerPage}
        onChange={handleCurrentPage}
      ></PageSelector>
    </main>
  );
}
