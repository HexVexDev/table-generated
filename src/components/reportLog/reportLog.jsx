import "../../assets/css/reportLog/reportLog.css"
import minimize from "../../assets/images/minimize.svg"
import close from "../../assets/images/close.svg"
import { Row, Col } from "react-bootstrap"
import AllReports from "./allReports.jsx"
import { useEffect, useRef, useState } from "react"



export default function ReportLog(props) {
    const [search, setSearch] = useState("")
    const [height, setHeight] = useState(100)

    const containerRef = useRef(null)

    useEffect(() => {
        function updateHeight() {
            const scrollTop = containerRef.current.scrollTop
            if (scrollTop > 30) {
                setHeight(100)
            }
            const newHeight = Math.max(0, 100 - scrollTop)
            setHeight(+newHeight)
        }

       containerRef.current.addEventListener("scroll", updateHeight)

        return () => {
           containerRef.current.removeEventListener("scroll", updateHeight)
        }

    }, [])
    
    function handleSearch(e) {
        const { value } = e.target
        setSearch(value)
    }

    function closeSiteSelection() {
        props.setReportLogOpened(false)
    }

    return (
        <section ref={containerRef} style={{height: props.isOpened ? `calc(100vh - ${height}px)` : "0", 
            transition: height !== 100 ? "none" : "all 0.3s ease-in-out"}} 
            className={`containerSectionReport ${props.isOpened ? "opened" : ""}`}>
            <div className="containerMinimizeClose">
                <img src={minimize} alt="Prodensa automation" />
                <img src={close} alt="Prodensa automation" onClick={closeSiteSelection}/>
            </div>
            <div className="container">
                <Row>
                    <Col className="containerHeader" lg={{span: 11, offset: 1}}>
                        <div className="reportLogTitle">
                            <h1>Report Log</h1>
                            <p>It is a long established fact that a 
                                reader will be distracted by the readable 
                                content of a page when looking at its layout.</p>
                        </div>
                        <div className="searchContainer">
                            <input className="search" type="text" placeholder="Search" value={search} 
                                onChange={handleSearch}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 11, offset: 1}}>
                        <AllReports isOpened={props.isOpened} search={search} 
                            showReportId={props.showReportId} setShowReportId={props.setShowReportId}/>
                    </Col>
                </Row>
            </div>
        </section>
    ) 
}