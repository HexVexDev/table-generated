import { useEffect, useState } from "react";

import PageSelector from "./pageSelector.jsx";
import groups from "../../assets/images/groups.svg"
import listAlt from "../../assets/images/list_alt.svg"
import moreDots from "../../assets/images/moreDots.svg"
import sortDown from "../../assets/images/sortDown.svg"
import arrowDown from "../../assets/images/arrowDown.svg"
import calendar from "../../assets/images/calendar_month.svg"
import formatList from "../../assets/images/format_list_bulleted.svg"

export default function AllReports({isOpened, search, showReportId, setShowReportId}) {
	// estados para almacenar los datos brutos y filtrados
	const [allReports, setAllReports] = useState([
		{
			"_id": "1",
			"folio": "001",
			"reportName": "MercedesBenz-001",
			"client": "Mercedes Benz",
			"type": "Teaser",
			"status": 80,
			"dateModified": "15 Jul 2022",
		},
		{
			"_id": "2",
			"folio": "115",
			"reportName": "PayPal-115",
			"client": "PayPal",
			"type": "Site selection",
			"status": 100,
			"dateModified": "20 Jun 2023",
		},
		{
			"_id": "3",
			"folio": "004",
			"reportName": "Ikea-004",
			"client": "Ikea",
			"type": "Site selection",
			"status": 100,
			"dateModified": "19 Apr 2023",
		},
		{
			"_id": "4",
			"folio": "007",
			"reportName": "Google-007",
			"client": "Google",
			"type": "Feasibility",
			"status": 100,
			"dateModified": "10 Apr 2023",
		},
		{
			"_id": "5",
			"folio": "010",
			"reportName": "Ford-010",
			"client": "Ford",
			"type": "Site selection",
			"status": 40,
			"dateModified": "02 Apr 2023",
		},
		{
			"_id": "6",
			"folio": "002",
			"reportName": "Nike-002",
			"client": "Nike",
			"type": "Teaser",
			"status": 25,
			"dateModified": "15 Mar 2023",
		},
		{
			"_id": "7",
			"folio": "032",
			"reportName": "FedEx-032",
			"client": "FedEx",
			"type": "Site selection",
			"status": 100,
			"dateModified": "28 Feb 2023",
		},
		{
			"_id": "8",
			"folio": "056",
			"reportName": "Nestle-056",
			"client": "Nestle",
			"type": "Site selection",
			"status": 100,
			"dateModified": "11 Feb 2023",
		},
		{
			"_id": "9",
			"folio": "027",
			"reportName": "Microsoft-027",
			"client": "Microsoft",
			"type": "Feasibility",
			"status": 100,
			"dateModified": "31 Jan 2023",
		},
		{
			"_id": "10",
			"folio": "042",
			"reportName": "Amazon-042",
			"client": "Amazon",
			"type": "Site selection",
			"status": 90,
			"dateModified": "30 Jun 2023",
		},
		{
			"_id": "11",
			"folio": "003",
			"reportName": "MercedesBenz-003",
			"client": "Mercedes Benz",
			"type": "Site Selection",
			"status": 50,
			"dateModified": "03 Jun 2023",
		},
		{
			"_id": "12",
			"folio": "120",
			"reportName": "PayPal-120",
			"client": "PayPal",
			"type": "Site selection",
			"status": 90,
			"dateModified": "28 May 2023",
		},
		{
			"_id": "13",
			"folio": "030",
			"reportName": "Ikea-030",
			"client": "Ikea",
			"type": "Site selection",
			"status": 100,
			"dateModified": "15 Jan 2022",
		},
		{
			"_id": "14",
			"folio": "008",
			"reportName": "Google-008",
			"client": "Google",
			"type": "Feasibility",
			"status": 100,
			"dateModified": "15 Jun 2022",
		},
		{
			"_id": "15",
			"folio": "011",
			"reportName": "Ford-011",
			"client": "Ford",
			"type": "Teaser",
			"status": 85,
			"dateModified": "28 Sep 2023",
		},
		{
			"_id": "16",
			"folio": "014",
			"reportName": "Nike-014",
			"client": "Nike",
			"type": "Teaser",
			"status": 65,
			"dateModified": "07 Dec 2023",
		},
		{
			"_id": "17",
			"folio": "052",
			"reportName": "FedEx-052",
			"client": "FedEx",
			"type": "Site selection",
			"status": 100,
			"dateModified": "01 Feb 2023",
		},
		{
			"_id": "18",
			"folio": "076",
			"reportName": "Nestle-076",
			"client": "Nestle",
			"type": "Site selection",
			"status": 75,
			"dateModified": "01 Apr 2022",
		},
		{
			"_id": "19",
			"folio": "084",
			"reportName": "Microsoft-084",
			"client": "Microsoft",
			"type": "Feasibility",
			"status": 100,
			"dateModified": "15 Sep 2022",
		},
		{
			"_id": "20",
			"folio": "064",
			"reportName": "Amazon-064",
			"client": "Amazon",
			"type": "Teaser",
			"status": 85,
			"dateModified": "08 Mar 2023",
		},
	])

	const [filteredReports, setFilteredReports] = useState([...allReports])

	// estados para el control de sort de los elementos
	const [orderClient, setOrderClient] = useState("DSC")
	const [orderStatus, setOrderStatus] = useState("DSC")
	const [orderDate, setOrderDate] = useState("DSC")

	// estados para el control de filtros
	const [activeFilter, setActiveFilter] = useState(0)
	const [dataType, setDataType] = useState("")
	const [searchClient, setSearchClient] = useState("")
	const [clients, setClients] = useState({
		unique: Array.from(new Set(allReports.map(obj => obj.client))),
		filtered: []
	})
	const [filters, setFilters] = useState({
		client: [],
		Teaser: false,
		"Site selection": false,
		Feasibility: false,
		startDate: "",
		endDate: GetTodayDate()
	})

	// estados para el control de pagina y elementos visibles por pagina
    const [itemsPerPage, setItemsPerPage] = useState(3); //cambiar a 10 despues de revision al igual que las opciones
    const [currentPage, setCurrentPage] = useState(1);

    const [startIndex, setStartIndex] = useState((currentPage - 1 ) * itemsPerPage);
    const [endIndex, setEndIndex] = useState(currentPage * itemsPerPage);

	const [selectedOptions, setSelectedOptions] = useState({
		client: [],
		type: [],
		date: [filters.endDate]
	})

	// estados para boton de apply en filtros
	const [filterApplied, setFilterApplied] = useState({
		client: false,
		type: false,
		date: false,
	})
	
	const [enable, setEnable] = useState({
		client: true,
		type: true,
		date: true,
	})
	
	// -------------- states ⬆, useEffect's ⬇ -------------	
	useEffect(() => {
		if (!isOpened) {
			setActiveFilter(0)
			setDataType("")
			setSearchClient("")
			setFilters({
				client: [],
				Teaser: false,
				"Site selection": false,
				Feasibility: false,
				startDate: "",
				endDate: GetTodayDate()
			})
			setItemsPerPage(3)
			setCurrentPage(1)
			setSelectedOptions({
				client: [],
				type: [],
				date: [filters.endDate]
			})
			setFilterApplied({
				client: false,
				type: false,
				date: false,
			})
			setEnable({
				cliente: true,
				type: true,
				date: true,
			})
			setShowReportId(0)
		}
	},[isOpened])
	
	useEffect(() => {
		if(showReportId !== 0) {
			const client = allReports.find((report => report._id === showReportId))
			setSelectedOptions({
				...selectedOptions,
				client: [client.client]
			})
			setFilterApplied({
				...filterApplied,
				client: true,
			})
		}
	}, [showReportId])
	
	useEffect(() => {
		setAllReports(allReports.map((report) => {
			return {
				...report,
				showOptions: false,
			}
		}))

		sortTable("DSC", "date")
	}, [])

	// colocar indices para mostrar los reportes por pagina
    useEffect(() => {
        setStartIndex((currentPage - 1) * itemsPerPage)
        setEndIndex(currentPage * itemsPerPage)
    }, [itemsPerPage, currentPage])

	// habilitar boton de apply en los filtros
	useEffect(() => {
		switch (dataType) {
			case "client":
				if (filters.client.length !== 0) {
					setEnable({...enable, client: false})
				} else {
					setEnable({...enable, client: true})
				}
				break;
			case "type":
				if(filters.Feasibility || filters["Site selection"] || filters.Teaser) {
					setEnable({...enable, type: false})
				} else {
					setEnable({...enable, type: true})
				}
				break;
			case "date":
				setEnable({...enable, date: !(filters.startDate && filters.endDate)})
				break;
			default:
				break;
		}
	}, [filters])

	// actualizar table si cambia la cantidad de reportes
	useEffect(() => {
		const filterReports = Filters(allReports, filterApplied, selectedOptions.type, selectedOptions.date) 
		setFilteredReports(SearchBarFilter(filterReports, search))
		
		if(currentPage > (Math.ceil(allReports.length / itemsPerPage))) {
			setCurrentPage(currentPage - 1)
		}
	}, [allReports])

	// uso de filtros
	useEffect(() => {
		setCurrentPage(1)

		const filterReports = Filters(allReports, filterApplied, selectedOptions.client, selectedOptions.type, selectedOptions.date)
		setFilteredReports(SearchBarFilter(filterReports, search))
	}, [filterApplied, search])
	
	// actualizar lista de clientes en el filtro de clients
	useEffect(() => {
		setClients({
			...clients,
			filtered: ClientSearchBarFilter(clients.unique, searchClient)
		})
	}, [searchClient])

	// ---------------- useEffect's ⬆, handle Functions ⬇ ------
	
	function handleSearchClient(e) {
		const { value } = e.target
		setSearchClient(value)
	}
	
	function handleFilters(e) {
		const name = e.target.getAttribute("data-type")
		const value = e.target.value

		setDataType(name)

		switch (name) {
			case "client":
				if(filters.client.includes(value)) {
					const newArray = filters.client.filter(i => i !== value)
					setFilters({
						...filters,
						client: newArray
					})

					setSelectedOptions({
						...selectedOptions,
						[name]: newArray
					})
				} else {
					setFilters({
						...filters,
						client: [...filters.client, value]
					})

					setSelectedOptions({
						...selectedOptions,
						[name]: [...selectedOptions[name], value]
					})
				}
				break;
			case "type":
				setFilters({
					...filters,
					[value]: !(filters[value])
				}
				)

				if(selectedOptions[name].includes(value)) {
					const newArray = selectedOptions[name].filter(i => i !== value)
					setSelectedOptions({
						...selectedOptions,
						[name]: newArray
					})
				} else {
					setSelectedOptions({
						...selectedOptions,
						[name]: [...selectedOptions[name], value]
					})
				}
				break;
			case "date":
				const startEnd = e.target.name
				
				handleSetDate(startEnd, value)
				break;
			default:
				break;
		}
	}
	
	function handleCurrentPage(value) {
		setCurrentPage(value)
	}

	function handleActiveFilter(activeFilter) {
		setActiveFilter(activeFilter)
	}

	function handleItemsPerPage(e) {
		setItemsPerPage(+e.target.innerText)

		setCurrentPage(1)
	}

	function handleSetDate(startEnd, value) {
		switch (startEnd) {
			case "startDate":
				if (value > filters.endDate) {
					setFilters({
						...filters,
						[startEnd]: filters.endDate,
					})
					
					setSelectedOptions({
						...selectedOptions,
						date: [filters.endDate, filters.endDate]
					})
				} else {
					setFilters({
						...filters,
						[startEnd]: value,
					})
					setSelectedOptions({
						...selectedOptions,
						date: [value, filters.endDate]
					})
				}
				break;
				case "endDate": 
				if( filters.startDate) {
					setFilters({
						...filters,
						endDate: value < filters.startDate ? filters.startDate : value,
					})

					setSelectedOptions({
						...selectedOptions,
						date: value < filters.startDate ? [filters.startDate, filters.startDate] : [filters.startDate, value]
					})
				} else {
					setFilters({
						...filters,
						endDate: value > GetTodayDate() ? GetTodayDate() : value,
					})

					setSelectedOptions({
						...selectedOptions,
						date: value > GetTodayDate() ? [GetTodayDate()] : [value],
					})
				}
				break;
			default:
				break;
		}
	}

	const handleClick = (id) => {
		setFilteredReports(filteredReports.map(report => {
			return {
				...report,
				showOptions: report._id === id ? !report.showOptions : false
			}
		}))
	}

	function handleSubmit(e) {
		e.stopPropagation()
		const type = e.target.getAttribute("data-type")

		setFilterApplied({
			...filterApplied,
			[type]: true,
		})

		if (e.target.getAttribute("data-type") === "client") {
			setSearchClient("")
		}

		setActiveFilter(0)
	}

	function handleReset(e) {
		e.stopPropagation()

		const type = e.target.getAttribute("data-type")

		switch (type) {
			case "client":
				 setFilters({
					...filters,
					client: []
				 })

				 setSelectedOptions({
					...selectedOptions,
					client: []
				 })

				 setFilterApplied({
					...filterApplied,
					client: false
				 })

				 setSearchClient("")
				break;
			case "type":
				setFilters({
					...filters,
					"Teaser": false,
					"Site selection": false,
					"Feasibility": false
				})
		
				setSelectedOptions({
					...selectedOptions,
					type: []
				})

				setFilterApplied({
					...filterApplied,
					type: false,
				})
				break;
				case "date":
				setFilters({
					...filters,
					startDate: "",
					endDate: GetTodayDate(),
				})

				setSelectedOptions({
					...selectedOptions,
					date: [GetTodayDate()]
				})

				setFilterApplied({
					...filterApplied,
					date: false,
				})
				break;
				case "global":
					setFilters({
						client: [],
						"Teaser": false,
						"Site selection": false,
						"Feasibility": false,
						startDate: "",
						endDate: GetTodayDate(),
					})
	
					setSelectedOptions({
						client: [],
						type: [],
						date: [GetTodayDate()]
					})
	
					setFilterApplied({
						client: false,
						type: false,
						date: false,
					})
				break;
			default:
				break;
		}

		setActiveFilter(0)
	}

	function handleDuplicate(e) {
		const id = e.target.id
		const duplicate = JSON.parse(JSON.stringify(allReports))
		const reportDuplicate = duplicate.find((report) => report._id === id)

		reportDuplicate._id = JSON.stringify(allReports.length + 1)
		const newReportName = reportDuplicate.reportName + `-Copy`
		reportDuplicate.reportName = newReportName

		setAllReports((prevAllReports) => [...prevAllReports, reportDuplicate])
		setFilteredReports(filteredReports.map((report) => {
			return {
				...report,
				showOptions: false,
			}
		}))
	}
	
	function handleDelete(e) {
		const id = e.target.id
		const newAllReports = filteredReports.filter((report) => report._id !== id)
		setAllReports(newAllReports)
		setFilteredReports(filteredReports.map((report) => {
			return {
				...report,
				showOptions: false,
			}
		}))
	}

	// utils ⬇
	
	const sortTable = (order, type) => {
		switch (type) {
			case "client":
				if (order === "ASC") {
					setFilteredReports(filteredReports.sort((a, b) => {
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
					setFilteredReports(filteredReports.sort((a, b) => {
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
					setFilteredReports(filteredReports.sort((a, b) => {
						return a.status - b.status
					}))
					setOrderStatus("DSC")
				} else {
					setFilteredReports(filteredReports.sort((a, b) => {
						return b.status - a.status
					}))
					setOrderStatus("ASC")
				}
				setOrderClient("DSC")
				setOrderDate("DSC")
				break;

			case "date":
				if (order === "ASC") {
					setFilteredReports(filteredReports.sort((a, b) => {
						const da = new Date(a.dateModified)
						const db = new Date(b.dateModified)

						return da - db
					}))
					setOrderDate("DSC")
				} else {
					setFilteredReports(filteredReports.sort((a, b) => {
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

	function Filters(data, activeFilters, clientFilter, typeFilter, dateFilter) {
		// filtrado cuando los 3 filtros estan activos 
		if (activeFilters.client && activeFilters.type && activeFilters.date) {
			const filterReportsbyClient = data.filter((report) => clientFilter.some((option) => report.client.includes(option)))
			const filterReportsbyType = filterReportsbyClient.filter((report) => typeFilter.some((option) => report.type.includes(option)))
			const filteredReportsbyDate = filterReportsbyType.filter((report) => {
				const reportDate = new Date(report.dateModified)
				const startDate = new Date(dateFilter[0])
				const endDate = new Date(dateFilter[1])
	
				return reportDate >= startDate && reportDate <= endDate
			})
			
			return filteredReportsbyDate
		}
		
		// filtrado cuando filtros de client y tipo estan activos 
		if (activeFilters.client && activeFilters.type) {
			const filterReportsbyClient = data.filter((report) => clientFilter.some((option) => report.client.includes(option)))
			const filterReportsbyType = filterReportsbyClient.filter((report) => typeFilter.some((option) => report.type.includes(option)))
			
			return filterReportsbyType
		}
		
		// filtrado cuando filtros de client y fecha estan activos 
		if (activeFilters.client && activeFilters.date) {
			const filterReportsbyClient = data.filter((report) => clientFilter.some((option) => report.client.includes(option)))
			const filteredReportsbyDate = filterReportsbyClient.filter((report) => {
				const reportDate = new Date(report.dateModified)
				const startDate = new Date(dateFilter[0])
				const endDate = new Date(dateFilter[1])
	
				return reportDate >= startDate && reportDate <= endDate
			})

			return filteredReportsbyDate
		}
		
		
		// filtrado cuando filtros de tipo y fecha estan activos 
		if (activeFilters.type && activeFilters.date) {
			const filterReportsbyType = data.filter((report) => typeFilter.some((option) => report.type.includes(option)))
			const filteredReportsbyDate = filterReportsbyType.filter((report) => {
				const reportDate = new Date(report.dateModified)
				const startDate = new Date(dateFilter[0])
				const endDate = new Date(dateFilter[1])
	
				return reportDate >= startDate && reportDate <= endDate
			})
	
			return filteredReportsbyDate
		}

		// filtrado solo solo por cliente
		if (activeFilters.client) {
			const filterReportsbyClient = data.filter((report) => clientFilter.some((option) => report.client.includes(option)))
			return filterReportsbyClient
		}
		
		// filtrado solo por tipo
		if(activeFilters.type) {
			const filterReportsbyType = data.filter((report) => typeFilter.some((option) => report.type.includes(option)))
			return filterReportsbyType
		}
		
		// filtrado solo por fecha
		if (activeFilters.date) {
			const filteredReportsbyDate = data.filter((report) => {
				const reportDate = new Date(report.dateModified)
				const startDate = new Date(dateFilter[0])
				const endDate = new Date(dateFilter[1])

				return reportDate >= startDate && reportDate <= endDate
			})
			return filteredReportsbyDate
		}
			// regresa data original si ningun filtro esta activo
			return data
	}

	function SearchBarFilter(data, searchTerm) {
		if (searchTerm !== "") {
			const filteredData = data.filter(
			  (item) =>
				item.folio.toLowerCase().includes(searchTerm.toLowerCase()) ||
				item.reportName.toLowerCase().includes(searchTerm.toLowerCase()) ||
				item.client.toLowerCase().includes(searchTerm.toLowerCase())
			);
			return filteredData;
		  }
		  return data;
	}

	function ClientSearchBarFilter(data, searchTerm) {
		if (searchTerm !== "" ) {
			const filteredData = data.filter((client) => client.toLowerCase().includes(searchTerm.toLowerCase()))
			return filteredData
		}

		return data;
	}

	function GetTodayDate() {
		const today = new Date()
		return today.toISOString().split('T')[0];
	}
	//--------------------- utils --------------------

	return (
        <section className="tableSection">
            <div className="filtersContainer">
                <div className="filtersTypeContainer">
					<div className={`clientFilter ${activeFilter === 1 ? "active" : ""} ${filterApplied.client ? "apply": ""}`} 
						onClick={() => activeFilter === 1 ? handleActiveFilter(0) : handleActiveFilter(1)}>
						<img src={groups} alt="Prodensa automation"/>
						<span>Client</span>
						<img src={arrowDown} alt="Prodensa automation"/>
						<div className={`filterOptions ${activeFilter === 1 ? "show" : ""}`} onClick={(e) => e.stopPropagation()}>
						<div className="clients">
							<h5>Client</h5>
							<div className="searchContainerFilter">
								<input className="searchFilter" type="text" placeholder="Search clients" 
									value={searchClient} onChange={handleSearchClient}/>
							</div>
							{clients.filtered.map((report, index) => (
								<div key={index + 1} className="report">
									<input data-type="client" type="checkbox" id={`${report}`} value={`${report}`} checked={filters.client.includes(report)} 
									onChange={handleFilters}/>
									<label className="client" htmlFor={`${report}`}>{report}</label>
								</div>
							))}
						</div>
							<div className="btnFilter">
								<button data-type="client" onClick={handleReset} name="client">Reset</button>
								<button data-type="client" disabled={enable.client} onClick={handleSubmit} name="client">Apply</button>
							</div>
						</div>
					</div>
					<div className={`typeFilter ${activeFilter === 2 ? "active" : ""} ${filterApplied.type ? "apply" : ""}`} 
						onClick={() => activeFilter === 2 ? handleActiveFilter(0) : handleActiveFilter(2)}>
						<img src={formatList} alt="Prodensa automation"/>
						<span>Type</span>
						<img src={arrowDown} alt="Prodensa automation"/>
						<div className={`filterOptions ${activeFilter === 2 ? "show" : ""}`} onClick={(e) => e.stopPropagation()}>
							<h5>Type</h5>
							<div className="pt-1">
								<div className="optionContainer">
									<input data-type="type" type="checkbox" id="teaser" value="Teaser" checked={filters.Teaser} onChange={handleFilters}></input>
									<label className="option" htmlFor="teaser">Teaser</label>
								</div>
								<div className="optionContainer">
									<input data-type="type" type="checkbox" id="site selection" value="Site selection" checked={filters["Site selection"]} onChange={handleFilters}></input>
									<label className="option" htmlFor="site selection">Site selection</label>
								</div>
								<div className="optionContainer">
									<input data-type="type" type="checkbox" id="feasibility" value="Feasibility" checked={filters.Feasibility} onChange={handleFilters}></input>
									<label className="option" htmlFor="feasibility">Feasibility</label>
								</div>
							</div>
							<div className="btnFilter">
								<button data-type="type" onClick={handleReset} name="type">Reset</button>
								<button data-type="type" disabled={enable.type} onClick={handleSubmit} name="type">Apply</button>
							</div>
						</div>
					</div>
					<div className={`dateFilter ${activeFilter === 3 ? "active" : ""} ${filterApplied.date ? "apply" : ""}`} 
						onClick={() => activeFilter === 3 ? handleActiveFilter(0) : handleActiveFilter(3)}>
						<img src={calendar} alt="Prodensa automation"/>
						<span>Date</span>
						<img src={arrowDown} alt="Prodensa automation"/>
						<div className={`filterOptions ${activeFilter === 3 ? "show" : ""}`} onClick={(e) => e.stopPropagation()}>
							<h5 className="pb-2">Date</h5>
							<div className="optionContainer">
								<label htmlFor="startDate" className="option">From</label>
								<input data-type="date" type="date" name="startDate" id="startDate" value={filters.startDate} onChange={handleFilters}/>
								<label htmlFor="endDate" className="option">To</label>
								<input data-type="date" type="date" name="endDate" id="endDate" value={filters.endDate} onChange={handleFilters}/>
							</div>
							<div className="btnFilter pt-2">
								<button data-type="date" onClick={handleReset} name="date">Reset</button>
								<button data-type="date" disabled={enable.date} onClick={handleSubmit} name="date">Apply</button>
							</div>
						</div>
					</div>
					<button data-type="global" className={`${Object.values(filterApplied).some(value => value === true) ? "show" : ""}`} 
						onClick={handleReset} name="date">Reset</button>
                </div>
                <div className="pagesFilterContainer">
					<div className={`itemsPerPageFilter ${activeFilter === 4 ? "active" : ""}`} onClick={() => activeFilter === 4 ? handleActiveFilter(0) : handleActiveFilter(4)}>
						<img src={listAlt} alt="Prodensa automation"/>
						<span>Show per page</span>
						<img src={arrowDown} alt="Prodensa automation"/>
						<div className={`filterOptions ${activeFilter === 4 ? "show" : ""}`}>
							<span className="option" onClick={handleItemsPerPage}>2</span>
							<span className="option" onClick={handleItemsPerPage}>3</span>
							<span className="option" onClick={handleItemsPerPage}>10</span>
							<span className="option" onClick={handleItemsPerPage}>20</span>
						</div>
					</div>
                </div>
            </div>
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
                    {filteredReports.slice(startIndex, endIndex).map((report) => {
                        return (
                            <tr key={report._id}>
                                <td style={{ opacity: 0.6 }}>{report.folio}</td>
                                <td>{report.reportName}</td>
                                <td style={{ fontWeight: 700 }}>{report.client}</td>
                                <td>{report.type}</td>
                                <td className={`${report.status < 100 ? "pending" : "finish"}`}>{report.status}%</td>
                                <td className="dateAndMore">
                                    <span>{report.dateModified}</span>
                                    <img src={moreDots} onClick={() => handleClick(report._id)} alt="ProdensaAutomation" />
                                    <div className={`moreOptionsReport ${report.showOptions ? "show" : ""}`}>
                                        <span className="option">Edit</span>
                                        <span className="option" onClick={handleDuplicate} id={report._id}>Duplicate</span>
                                        <span className="option">Share</span>
                                        <span className="option" onClick={handleDelete} id={report._id}>Delete</span>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
			<PageSelector currentPage={currentPage} data={filteredReports} itemsPerPage={itemsPerPage} onChange={handleCurrentPage}></PageSelector>
        </section>
	)
}
