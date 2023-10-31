import "../../assets/css/navigationMenu/navigationMenu.css"
import logo from "../../assets/images/logo.svg"
import profile from "../../assets/images/profileExample.jpg"
import contract from "../../assets/images/contract.svg"
import folder from "../../assets/images/folder.svg"
import person from "../../assets/images/person.svg"
import MenuOptions from "./menuOptions.jsx"

import React, { useEffect, useRef, useState } from "react"

function NavigationMenu(props) {

	const [showUserOption, setShowUserOptions] = useState(false);
	const [menuOptions, setMenuOptions] = useState([
		{
			_id: 0,
			image: contract,
			title: "New report",
			description: "It is a long established fact that a reader will be distracted",
			options: ["Teaser", "Site selection", "Feasibility"]
		},
		{
			_id: 1,
			image: folder,
			title: "Report log",
			description: "It is a long established fact that a reader will be distracted",
		},
		{
			_id: 2,
			image: person,
			title: "Clients",
			description: "It is a long established fact that a reader will be distracted",
		},
	]);

	useEffect(() => {
		document.body.addEventListener('click', closeUserOptions);

		return function cleanup() {
			document.body.removeEventListener('click', closeUserOptions);
		}
	}, []);

	const userTitleClick = useRef(null);

	const closeUserOptions = (e) => {
		if (!userTitleClick.current.contains(e.target)) {
			setShowUserOptions(false)
		}
	}

	return (
		<nav className="navigation">
			<img className="logo" src={logo} alt="ProdensaAutomation" />
			<img className="profile" src={profile} alt="ProdensaAutomation" />
			<div className="userContainer">
				<span ref={userTitleClick} className={`userTitle ${showUserOption ? "active" : ""}`} onClick={() => setShowUserOptions(!showUserOption)}>Teresa</span>
				<div className={`userOptions ${showUserOption ? "active" : ""}`}>
					<span className="userChoice">Change profile picture</span>
					<span className="userChoice">Logout</span>
				</div>
			</div>
			{menuOptions.map((menuOption, index) => (
				<MenuOptions
					key={menuOption._id}
					id={menuOption._id}
					image={menuOption.image}
					title={menuOption.title}
					description={menuOption.description}
					options={index === 0 ? menuOption.options : ""}
					openSiteSelection={props.openSiteSelection}
					openReportLog={props.openReportLog}
					setShowReportId={props.setShowReportId}
					openClients={props.openClients}
				/>
			))}
		</nav>
	)
}

export default NavigationMenu
