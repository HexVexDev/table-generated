import { useEffect, useRef } from "react";

function MenuOptions(props) {
    const menuOptionRef = useRef();

    useEffect(() => {
        document.body.addEventListener("click", deactivateMenu)

        return function cleanUP() {
            document.body.removeEventListener("click", deactivateMenu)
        }
    }, [])

    const deactivateMenu = (e) => {
        const menuOption = document.getElementById(props.title)
        if (menuOptionRef.current.contains(e.target)) {
            menuOption.classList.toggle("active")
            menuOptionRef.current.lastChild.classList.toggle("active")
        } else {
            menuOption.classList.remove("active")
            menuOptionRef.current.lastChild.classList.remove("active")

        }
    }

    function handleOnClick(id) {
        if(id === 1) {
			props.openReportLog()
			props.setShowReportId
		}
		
		if(id === 2) {
			props.openClients()
		}
    }

    return (
        <div id={props.title} ref={menuOptionRef} className={`menuOption`} onClick={() => handleOnClick(props.id)}>
            <img className="iconOption" src={props.image} alt="ProdensaAutomation" />
            <h4 className="titleOption">{props.title}</h4>
            <p className="descriptionOption">{props.description}</p>
            <div className={`subOptions`}>
                {props.options && props.options.map((option, index) => {
                    return (
                        <span key={index} className="subOptionTitle"
                            onClick={option === "Site selection" ? props.openSiteSelection : null}>{option}</span>
                    )
                })}
            </div>
        </div>
    )
}

export default MenuOptions;
