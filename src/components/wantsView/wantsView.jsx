import { useState } from "react";
import "../../assets/css/wantsView/wantsView.css";
import open_all from "../../assets/images/expand_all.svg";
import close_all from "../../assets/images/collapse_all.svg";
import info from "../../assets/images/info-blue.svg";
import arrowforward from "../../assets/images/arrow_forward.svg";
import { Accordion, Container } from "react-bootstrap";

const WantsView = () => {

    const toggleTooltip = (event) => {
        const tooltip = event.target.nextElementSibling; // Get the next sibling element
        tooltip.classList.toggle('show'); // Toggle the 'show' class on the next sibling
      };
    const report = {
        criteria: {
            criteria1: {
                subcriteria: {
                    subcriteria1: {
                        subcriteria_name: "Total payroll cost",
                        info: {},
                        criteria: {},
                        points: 4,
                        weight: 20,
                        city_score: {
                            city1: 2,
                            city2: 3,
                            city3: 2
                        }
                    },
                    subcriteria2: {
                        subcriteria_name: "example 2",
                        info: {},
                        criteria: {},
                        points: 3,
                        weight: 10,
                        city_score: {
                            city1: 3,
                            city2: 4,
                            city3: 5
                        }
                    }
                },
                total_points: 20,
                total_weight: 20,
                criteria_name: "Operation costs",
                total_city_score: {
                    city1: 17.7,
                    city2: 11.5,
                    city3: 12.3
                }
            }
        },
        cityNames: {
            city1: "Saltillo",
            city2: "Torreon",
            city3: "Monterrey"
        }
    }

    return (
        <section className="wants-view">
            <Container>
                <div className="header-section">
                    <div className="criterion-wrapper">
                        <span>Criterion</span>
                        <button>Open all</button>
                        <button>Close all</button>
                    </div>
                    <button className="btn-header">Points</button>
                    <button className="btn-header">Weight</button>
                    {Object.keys(report.cityNames).map((cityKey)=>(
                        <button className="btn-header" key={cityKey}>{report.cityNames[cityKey]}</button>
                    ))}
                </div>
                <Accordion defaultActiveKey="0">
                    {Object.keys(report.criteria).map((key,index)=>(
                        <Accordion.Item eventKey="0" index={index}> 
                        <Accordion.Header>
                            <h5 className="button-title">{report.criteria[key].criteria_name}</h5>
                            <h5 className="points-weight">{report.criteria[key].total_points}</h5>
                            <h5 className="points-weight">{report.criteria[key].total_weight}%</h5>
                            {Object.keys(report.criteria[key].total_city_score).map((totalCityKey)=>(
                                <h5 className="city-score-highlight">{report.criteria[key].total_city_score[totalCityKey]}</h5>
                            ))}
                        </Accordion.Header>
                        {Object.keys(report.criteria[key].subcriteria).map((subKey,index)=>(
                            <Accordion.Body index={index}>
                            <div className="subcriteria-row">
                                <div className="criteria-description">
                                    <button onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}></button>
                                    <div className="info-tooltip">
                                            <h5>Information</h5>
                                            <div><button></button><h5 className="tooltip-title">Definition</h5><div className="text-column">lorem </div></div>
                                            <div><button></button><h5 className="tooltip-title">Metric</h5><div className="text-column">ipsum</div></div>
                                            <div><button></button><h5 className="tooltip-title">Source</h5><div className="text-column">dolor</div></div>
                                    </div>
                                    <h5 className="button-title">{report.criteria[key].subcriteria[subKey].subcriteria_name}</h5>
                                    <button className="criteria-button" onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>Criteria</button>
                                    <div className="criteria-tooltip">
                                        <h5>Criteria</h5>
                                        <li className="criteria-tooltip-row">
                                            <h5>+11%</h5>
                                            <h5>0</h5>
                                        </li>
                                        <li className="criteria-tooltip-row">
                                            <h5>+6-10%</h5>
                                            <h5>1</h5>
                                        </li>
                                        <li className="criteria-tooltip-row">
                                            <h5>+2-5%</h5>
                                            <h5>2</h5>
                                        </li>
                                        <li className="criteria-tooltip-row">
                                            <h5>Lowest value</h5>
                                            <h5>3</h5>
                                        </li>
                                    </div>
                                </div>
                                <h5 className="criteria-row-data">{report.criteria[key].subcriteria[subKey].points}</h5>
                                <h5 className="criteria-row-data">{report.criteria[key].subcriteria[subKey].weight}%</h5>
                                {Object.keys(report.criteria[key].subcriteria[subKey].city_score).map((cityKey)=>(
                                    <h5 className="criteria-row-data" key={cityKey}>{report.criteria[key].subcriteria[subKey].city_score[cityKey]}</h5>
                                ))}
                                <div className="details-button">
                                    Details
                                </div>
                            </div>
                        </Accordion.Body>
                        ))}
                        
                    </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </section>
    )

}
export default WantsView;