import { useEffect, useRef, useState } from "react";
import moreDots from "../../assets/images/moreDots.svg"
import sortDown from "../../assets/images/sortDown.svg"

function RecentReports() {
	const [recentReports, setRecentReports] = useState([
		{
			"_id": "1",
			"folio": "001",
			"reportName": "Amazon-001",
			"client": "Amazon",
			"type": "Teaser",
			"status": 45,
			"dateModified": "03 Apr 2023",
		},
		{
			"_id": "2",
			"folio": "115",
			"reportName": "Starbucks-115",
			"client": "Starbucks",
			"type": "Site selection",
			"status": 100,
			"dateModified": "20 May 2023",
		},
		{
			"_id": "3",
			"folio": "004",
			"reportName": "FedEx-004",
			"client": "FedEx",
			"type": "Site selection",
			"status": 100,
			"dateModified": "31 Jan 2022",
		},
		{
			"_id": "4",
			"folio": "007",
			"reportName": "Ford-007",
			"client": "Ford",
			"type": "Feasibility",
			"status": 100,
			"dateModified": "15 Jul 2022",
		},
		{
			"_id": "5",
			"folio": "010",
			"reportName": "Microsoft-010",
			"client": "Microsoft",
			"type": "Teaser",
			"status": 85,
			"dateModified": "30 Jun 2023",
		},
	])

	const [orderClient, setOrderClient] = useState("DSC")
	const [orderStatus, setOrderStatus] = useState("DSC")
	const [orderDate, setOrderDate] = useState("DSC")

	const showOptionsRef = useRef(null)

	useEffect(() => {
		sortTable("DSC", "date")

		document.body.addEventListener("click", closeRowOptions)

		return function cleanUp() {
			document.body.removeEventListener("click", closeRowOptions)
		}
	}, [])

	const closeRowOptions = (e) => {
		const allShowOptions = Array.prototype.slice.call(document.getElementsByClassName("moreOptions"))
		if (showOptionsRef.current.contains(e.target)) {
			for (const element of allShowOptions) {
				if (!showOptionsRef.current.nextElementSibling.contains(element)) {
					element.classList.remove("show")
				}
			}
			allShowOptions.find(element => showOptionsRef.current.nextElementSibling.contains(element)).classList.toggle("show")
		} else {
			for (const element of allShowOptions) {
				element.classList.remove("show")
			}
		}
	}

	const sortTable = (order, type) => {
		switch (type) {
			case "client":
				if (order === "ASC") {
					setRecentReports(recentReports.sort((a, b) => {
						const fa = a.client.toLocaleLowerCase();
						const fb = b.client.toLocaleLowerCase();

						if (fa < fb) {
							return -1
						}
						if (fa > fb) {
							return 1
						}

						return 0
					}))
					setOrderClient("DSC")
				} else {
					setRecentReports(recentReports.sort((a, b) => {
						const fa = a.client.toLocaleLowerCase();
						const fb = b.client.toLocaleLowerCase();

						if (fa > fb) {
							return -1
						}
						if (fa < fb) {
							return 1
						}

						return 0
					}))
					setOrderClient("ASC")
				}
				setOrderStatus("DSC")
				setOrderDate("DSC")
				break;

			case "status":
				if (order === "ASC") {
					setRecentReports(recentReports.sort((a, b) => {
						return a.status - b.status
					}))
					setOrderStatus("DSC")
				} else {
					setRecentReports(recentReports.sort((a, b) => {
						return b.status - a.status
					}))
					setOrderStatus("ASC")
				}
				setOrderClient("DSC")
				setOrderDate("DSC")
				break;

			case "date":
				if (order === "ASC") {
					setRecentReports(recentReports.sort((a, b) => {
						const da = new Date(a.dateModified)
						const db = new Date(b.dateModified)

						return da - db
					}))
					setOrderDate("DSC")
				} else {
					setRecentReports(recentReports.sort((a, b) => {
						const da = new Date(a.dateModified)
						const db = new Date(b.dateModified)

						return db - da
					}))
					setOrderDate("ASC")
				}
				setOrderClient("DSC")
				setOrderStatus("DSC")
				break;

			default:
				break;
		}
	}

	return (
		<table className="tableReport">
			<thead>
				<tr>
					<th>Folio</th>
					<th>Report name</th>
					<th>
						Client
						<img className={`sort ${orderClient === "DSC" ? "DSC" : ""}`} src={sortDown} alt="ProdensaAutomation" onClick={() => sortTable(orderClient, "client")} />
					</th>
					<th>Type</th>
					<th>
						Status
						<img className={`sort ${orderStatus === "DSC" ? "DSC" : ""}`} src={sortDown} alt="ProdensaAutomation" onClick={() => sortTable(orderStatus, "status")} />
					</th>
					<th>
						Date modified
						<img className={`sort ${orderDate === "DSC" ? "DSC" : ""}`} src={sortDown} alt="ProdensaAutomation" onClick={() => sortTable(orderDate, "date")} />
					</th>
				</tr>
			</thead>
			<tbody>
				{recentReports.map((report) => {
					return (
						<tr key={report._id}>
							<td style={{ opacity: 0.6 }}>{report.folio}</td>
							<td>{report.reportName}</td>
							<td style={{ fontWeight: 700 }}>{report.client}</td>
							<td>{report.type}</td>
							<td className={`${report.status < 100 ? "pending" : "finish"}`}>{report.status}%</td>
							<td className="dateAndMore">
								<span>{report.dateModified}</span>
								<img ref={showOptionsRef} src={moreDots} onClick={(e) => showOptionsRef.current = e.target} alt="ProdensaAutomation" />
								<div className={`moreOptions`}>
									<span className="option">Edit</span>
									<span className="option">Duplicate</span>
									<span className="option">Share</span>
									<span className="option">Delete</span>
								</div>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default RecentReports