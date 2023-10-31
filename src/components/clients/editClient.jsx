import "../../assets/css/clients/clients.css";
import info from "../../assets/images/info.svg";
import {useState, useEffect} from "react"
import {Client} from "../../models/client.ts";

export default function EditClient({setActiveSection, idtoEdit}) {
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
      logo: null,
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
      logo: null,
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
      logo: null,
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
  const [focused, setFocused] = useState(false)
  const [isDisable, setIsDisable] = useState(true)
  const [client, setClient] = useState(new Client())

  useEffect(() => {
    setClient(allClients.find((client) => client._id === idtoEdit))
  }, [idtoEdit])

  useEffect(() => {
    client.client && client.industry && client.phone && 
    client.mail && client.contactName && client.headquarters && client.notes ? setIsDisable(false) : setIsDisable(true)
  }, [client])
  
  function handleCancel() {
    setActiveSection(1)
  }

  function handleChange(e) {
    const { name } = e.target
    const { value } = e.target

    setClient({
      ...client,
      [name]: value
    })
  }

  return (
    <section className="editClientSection">
        <div className="inputContainer">
          <span>Company name</span>
          <input value={client.client} type="text" onChange={handleChange}
            name="client" placeholder="Company name"/>
        </div>
        <div className="inputContainer">
            <span>Phone</span>
            <input value={client.phone} type="text" onChange={handleChange}
              name="phone" placeholder="Phone"/>
        </div>
        <div className="inputContainer">
            <span>Industry</span>
            <input value={client.industry} type="text" onChange={handleChange} name="industry" placeholder="Industry"/>
        </div>
        <div className="inputContainer">
            <span>Contact name</span>
            <input value={client.contactName} type="text" onChange={handleChange}
              name="contactName" placeholder="Contact name"/>
        </div>
        <div className="inputContainer">
          <span>Mail</span>
          <input value={client.mail}
            type="text" onChange={handleChange}
            name="mail" placeholder="Mail"
            onFocus={() => setFocused(!focused)} onBlur={() => setFocused(!focused)}/>
          <span className={`noteUser ${focused ? "show" : ""}`}>
            <img src={info} alt="ProdensaAutomation"/>
            Enter your client's email address
          </span>
        </div>
        <div className="inputContainer">
            <span>Headquarters</span>
            <input value={client.headquarters} type="text" onChange={handleChange}
              name="headquarters" placeholder="Headquarters"/>
        </div>
        <div className="inputContainer">
            <span>Notes</span>
            <textarea rows={5} type="textField" value={client.notes} onChange={handleChange}
              name="notes" placeholder="Add comments..."/>
        </div>
        <div className="containerActions">
          <button className="cancelButton" onClick={handleCancel}>Cancel
          </button>
          <button className="secondaryButton" disabled={isDisable}>
              <span>Save Changes</span>
          </button>
        </div>
    </section>
)
}
