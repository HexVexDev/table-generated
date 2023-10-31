import save from "../../assets/images/save.svg"
import { useState } from "react"

function SearchClients() {
	const [clients, setClients] = useState([
		{
			_id: 0,
			company: "Amazon",
			name: "Mario López",
			email: "mlopez@amazon.com"
		},
		{
			_id: 1,
			company: "Chevrolet",
			name: "Mariana Perez",
			email: "marianaperez@chevrolet.com"
		},
		{
			_id: 2,
			company: "Daewoo",
			name: "María González",
			email: "mariaglez@daewoo.com"
		},
		{
			_id: 3,
			company: "Ford",
			name: "Omar Gómez",
			email: "omargomez@ford.com"
		},
		{
			_id: 4,
			company: "Amazon2",
			name: "Mario López2",
			email: "mlopez@amazon.com2"
		},
		{
			_id: 5,
			company: "Chevrolet2",
			name: "Mariana Perez2",
			email: "marianaperez@chevrolet.com2"
		},
		{
			_id: 6,
			company: "Daewoo2",
			name: "María González2",
			email: "mariaglez@daewoo.com2"
		},
		{
			_id: 7,
			company: "Ford2",
			name: "Omar Gómez2",
			email: "omargomez@ford.com2"
		}
	])

	const [showClients, setShowClients] = useState(false)

	return (
		<div className="searchContainer">
			<input className="search" type="text" placeholder="Search client" onFocus={() => setShowClients(!showClients)} onBlur={() => setShowClients(!showClients)} />
			<div className={`searchClients ${showClients ? "show" : ""}`}>
				<div className="clients">
					{clients.map(client => (
						<div key={client._id} className="client">
							<span className="company">{client.company}</span>
							<span className="name">{client.name}</span>
							<span className="email">{client.email}</span>
						</div>
					))}
				</div>
				<div className="viewAll">
					<img src={save} alt="ProdensaAutomation" />
					<span>View all clients</span>
				</div>
			</div>
		</div>
	)
}

export default SearchClients