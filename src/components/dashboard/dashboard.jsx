import "../../assets/css/dashboard/dashboard.css"

import NavigationMenu from "../navigation/navigationMenu.jsx";
import ReportLog from "../reportLog/reportLog";
import Clients from "../clients/clients.jsx"
import RecentReports from "./recentReports.jsx";
import SearchClients from "./searchClients.jsx";
import PinButton from "./pinButton.jsx";
import SiteSelection from "../siteSelection/siteSelection.jsx";
import {useState} from "react";

function Dashboard() {
    const [siteSelectionOpened, setSiteSelectionOpened] = useState(false)
    const [reportLogOpened, setReportLogOpened] = useState(false)
    const [clientsOpened, setClientsOpened] = useState(false)
    const [showReportId, setShowReportId] = useState(0)

    return (
        <>
            <NavigationMenu openSiteSelection={() => setSiteSelectionOpened(true)} 
                openReportLog={() => setReportLogOpened(true)} 
                openClients={() => setClientsOpened(true)}
                setShowReportId={setShowReportId}/>

            <section className="dashboard">
                <SearchClients/>

                <div className="container animatedContainer">
                    <div className="row">
                        <div className="col-10 offset-1 col-lg-9 offset-lg-3">
                            <h5>Thursday, august 03 2023</h5>
                            <h1 className="welcome">Good morning, Teresa!</h1>
                            <h3 className="recent">Recent reports</h3>
                            <RecentReports/>
                        </div>
                    </div>
                </div>

                <PinButton/>

                <span className="privacy">Privacy</span>

                <div className="animationContainer show">
                    <div className="columnAnimation animate"></div>
                    <div className="columnAnimation animate"></div>
                    <div className="columnAnimation animate"></div>
                    <div className="columnAnimation animate"></div>
                    <h2 className="title animate">Welcome</h2>
                </div>
            </section>

            <SiteSelection isOpened={siteSelectionOpened} setSiteSelectionOpened={setSiteSelectionOpened}/>
            <ReportLog isOpened={reportLogOpened} setReportLogOpened={setReportLogOpened} showReportId={showReportId}
                setShowReportId={setShowReportId}/>
            <Clients isOpened={clientsOpened} setClientsOpened={setClientsOpened} 
                openReportLog={() => setReportLogOpened(true)} setShowReportId={setShowReportId}></Clients>
        </>
    )
}

export default Dashboard;
