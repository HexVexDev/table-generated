import { useEffect, useRef, useState } from "react";

function PinButton() {
	
	const [pinActive, setPinActive] = useState(false)
	const [pinnedReports, setPinnedReports] = useState([
		{
			name: "StarBucks-115"
		},
		{
			name: "Demons"
		},
		{
			name: "Fernando"
		}
	])

	useEffect(() => {
		document.body.addEventListener('click', closePinnedButton);

		return function cleanup() {
			document.body.removeEventListener('click', closePinnedButton);
		}
	}, []);

	const pinButtonClick = useRef(null);

	const closePinnedButton = (e) => {
		if (pinButtonClick.current.contains(e.target)) {
			e.stopPropagation();
		} else {
			setPinActive(false)
		}
	}

	return (
		<div className="pinButtonContainer">
			<button ref={pinButtonClick} className={`pinButton ${pinActive ? "active" : ""}`} onClick={() => setPinActive(!pinActive)}></button>
			<div className={`pinnedReports ${pinActive ? "show" : ""}`}>
				{pinnedReports.map((pinnedReport, index) => (
					<button key={index} className="reportPin">
						{pinnedReport.name.charAt(0)}
						<div className="reportName">{pinnedReport.name}</div>
					</button>
				))}
			</div>
		</div>
	)
}

export default PinButton