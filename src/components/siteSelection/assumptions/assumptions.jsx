import {Col, Dropdown, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import "../../../assets/css/siteSelection/assumption.css";
import headcountRoles from "../../../assets/jsonData/headcountRoles.json";
import deleteIcon from "../../../assets/images/delete.svg";
import addCircle from "../../../assets/images/add_circle.svg";
import {HeadcountOptions} from "../../../models/assumption.ts";

const MenuShowing = {
    BUILDING: "Building",
    LAND: "Land",
    UTILITIES: "Utilities",
    LOGISTICS: "Logistics",
    HEADCOUNT: "Headcount",
    ENVIROMENTAL: "Enviromental",
}

function Assumptions(props) {
    const [menuShowing, setMenuShowing] = useState(MenuShowing.BUILDING)

    useEffect(() => {
        const assumptionNavigationContainer = document.getElementById("assumptionNavigationContainer");

        window.scrollTo(0, 0);
        window.addEventListener("scroll", () => {
            if (window.scrollY <= 400)
                assumptionNavigationContainer.style.top = `${400 - window.scrollY}px`;
            else
                assumptionNavigationContainer.style.top = "0";

            if (window.scrollY >= 0 && window.scrollY <= 900)
                setMenuShowing(MenuShowing.BUILDING);
            else if (window.scrollY > 900 && window.scrollY <= 1400)
                setMenuShowing(MenuShowing.LAND);
            else if (window.scrollY > 1400 && window.scrollY <= 2000)
                setMenuShowing(MenuShowing.UTILITIES);
            else if (window.scrollY > 2000 && window.scrollY <= 3000)
                setMenuShowing(MenuShowing.LOGISTICS);
            else if (window.scrollY > 3000 && window.scrollY <= 3500)
                setMenuShowing(MenuShowing.HEADCOUNT);
            else
                setMenuShowing(MenuShowing.ENVIROMENTAL);
        });
    }, [])

    useEffect(() => {
        props.setTextActionButton("Next");
        props.setFunctionActionButton(() => next);
    }, [props.activeMenu])

    const handleBuildingCheckboxChange = (index, checked, value) => {
        props.setDraft(prevState => {
            const requirements = [...prevState.siteSelectionReport.assumption.building.requirements];

            if (checked !== null)
                requirements[index].checked = checked;

            if (value !== null)
                requirements[index].value = value;

            return {
                ...prevState,
                siteSelectionReport: {
                    ...prevState.siteSelectionReport,
                    assumption: {
                        ...prevState.siteSelectionReport.assumption,
                        building: {
                            ...prevState.siteSelectionReport.assumption.building,
                            requirements: requirements,
                        }
                    },
                }
            }
        });
    }

    const handleEnvironmentalCheckboxChange = (index, checked, value) => {
        props.setDraft(prevState => {
            const environmentalImpacts = [...prevState.siteSelectionReport.assumption.environmentalImpacts];

            if (checked !== null)
                environmentalImpacts[index].checked = checked;

            if (value !== null)
                environmentalImpacts[index].value = value;

            return {
                ...prevState,
                siteSelectionReport: {
                    ...prevState.siteSelectionReport,
                    assumption: {
                        ...prevState.siteSelectionReport.assumption,
                        environmentalImpacts: environmentalImpacts,
                    },
                }
            }
        });
    }

    const next = () => {
        console.log("assumptions");
        props.setActiveMenu(2);
    }

    return (
        <section className="assumptionsSection">
            <Row>
                <Col lg={{span: 6, offset: 1}} xs={{span: 10, offset: 1}}>
                    <div className="assumptionTitle" id="buildingSection">Building</div>
                    <div className="inputContainer">
                        <span className="inputTitle">Building</span>
                        <input type="text" placeholder="Building"
                               value={props.draft.siteSelectionReport.assumption.building.buildingName}
                               onChange={(e) => props.setDraft(prevState => {
                                   return {
                                       ...prevState,
                                       siteSelectionReport: {
                                           ...prevState.siteSelectionReport,
                                           assumption: {
                                               ...prevState.siteSelectionReport.assumption,
                                               building: {
                                                   ...prevState.siteSelectionReport.assumption.building,
                                                   buildingName: e.target.value,
                                               }
                                           },
                                       }
                                   }
                               })}/>
                    </div>
                    <div className="inputContainer">
                        <div className="assumptionRadioSizeTypeContainer">
                            <span>Size</span>
                            <button
                                className={`secondaryButton ${props.draft.siteSelectionReport.assumption.building.sizeType !== "sqft" ? "radioDisabled" : ""}`}
                                type="submit"
                                onClick={() => props.setDraft(prevState => {
                                    return {
                                        ...prevState,
                                        siteSelectionReport: {
                                            ...prevState.siteSelectionReport,
                                            assumption: {
                                                ...prevState.siteSelectionReport.assumption,
                                                building: {
                                                    ...prevState.siteSelectionReport.assumption.building,
                                                    sizeType: "sqft",
                                                }
                                            },
                                        }
                                    }
                                })}>
                                <span>sqft</span>
                            </button>
                            <button
                                className={`secondaryButton ${props.draft.siteSelectionReport.assumption.building.sizeType !== "m2" ? "radioDisabled" : ""}`}
                                type="submit"
                                onClick={() => props.setDraft(prevState => {
                                    return {
                                        ...prevState,
                                        siteSelectionReport: {
                                            ...prevState.siteSelectionReport,
                                            assumption: {
                                                ...prevState.siteSelectionReport.assumption,
                                                building: {
                                                    ...prevState.siteSelectionReport.assumption.building,
                                                    sizeType: "m2",
                                                }
                                            },
                                        }
                                    }
                                })}>
                                <span>m²</span>
                            </button>
                        </div>
                        <input type="text" placeholder="Size"
                               value={props.draft.siteSelectionReport.assumption.building.sizeValue}
                               onChange={(e) => props.setDraft(prevState => {
                                   return {
                                       ...prevState,
                                       siteSelectionReport: {
                                           ...prevState.siteSelectionReport,
                                           assumption: {
                                               ...prevState.siteSelectionReport.assumption,
                                               building: {
                                                   ...prevState.siteSelectionReport.assumption.building,
                                                   sizeValue: e.target.value,
                                               }
                                           },
                                       }
                                   }
                               })}/>
                    </div>
                    <div className="inputContainer">
                        <span className="inputTitle">Requirements/Comments</span>
                        <div className="assumptionRequirementsCommentsContainer">
                            <div className="assumptionCheckboxContainer">
                                <input id="ac" type="checkbox" value="A/C"
                                       onChange={(e) =>
                                           handleBuildingCheckboxChange(0, e.target.checked, e.target.value)}/>
                                <label htmlFor="ac">A/C</label>
                            </div>
                            <div className="assumptionCheckboxContainer">
                                <input id="crane" type="checkbox" value="crane"
                                       onChange={(e) =>
                                           handleBuildingCheckboxChange(1, e.target.checked, e.target.value)}/>
                                <label htmlFor="crane">Crane</label>
                            </div>
                            <div className="assumptionCheckboxContainer">
                                <input id="wasteWater" type="checkbox" value="wasteWater"
                                       onChange={(e) =>
                                           handleBuildingCheckboxChange(2, e.target.checked, e.target.value)}/>
                                <label htmlFor="wasteWater">Waste water</label>
                            </div>
                            <div className="assumptionCheckboxContainer">
                                <input id="warehouseSpace" type="checkbox" value="warehouseSpace"
                                       onChange={(e) =>
                                           handleBuildingCheckboxChange(3, e.target.checked, e.target.value)}/>
                                <label htmlFor="warehouseSpace">Warehouse space</label>
                            </div>
                            <div className="assumptionCheckboxContainer">
                                <input id="otherComments" type="checkbox"
                                       onChange={(e) =>
                                           handleBuildingCheckboxChange(4, e.target.checked, null)}/>
                                <label htmlFor="otherComments">Other</label>
                                <input
                                    className={props.draft.siteSelectionReport.assumption.building.requirements[4].checked ? "active" : ""}
                                    type="text" placeholder="Other"
                                    onChange={(e) =>
                                        handleBuildingCheckboxChange(4, null, e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="assumptionTitle" id="landSection">Land</div>
                    <div className="inputContainer">
                        <span className="inputTitle">Requirements/Comments</span>
                        <Dropdown>
                            <Dropdown.Toggle>
                                {
                                    props.draft.siteSelectionReport.assumption.land.typeLand ?
                                        props.draft.siteSelectionReport.assumption.land.typeLand :
                                        "Lease/Purchase"
                                }
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => props.setDraft(prevState => {
                                    return {
                                        ...prevState,
                                        siteSelectionReport: {
                                            ...prevState.siteSelectionReport,
                                            assumption: {
                                                ...prevState.siteSelectionReport.assumption,
                                                land: {
                                                    ...prevState.siteSelectionReport.assumption.land,
                                                    typeLand: "Lease",
                                                }
                                            },
                                        }
                                    }
                                })}>
                                    Lease
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => props.setDraft(prevState => {
                                    return {
                                        ...prevState,
                                        siteSelectionReport: {
                                            ...prevState.siteSelectionReport,
                                            assumption: {
                                                ...prevState.siteSelectionReport.assumption,
                                                land: {
                                                    ...prevState.siteSelectionReport.assumption.land,
                                                    typeLand: "Purchase",
                                                }
                                            },
                                        }
                                    }
                                })}>Purchase</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="inputContainer">
                        <div className="assumptionRadioSizeTypeContainer">
                            <span>Size</span>
                            <button
                                className={`secondaryButton ${props.draft.siteSelectionReport.assumption.land.sizeType !== "sqft" ? "radioDisabled" : ""}`}
                                type="submit"
                                onClick={() => props.setDraft(prevState => {
                                    return {
                                        ...prevState,
                                        siteSelectionReport: {
                                            ...prevState.siteSelectionReport,
                                            assumption: {
                                                ...prevState.siteSelectionReport.assumption,
                                                land: {
                                                    ...prevState.siteSelectionReport.assumption.land,
                                                    sizeType: "sqft",
                                                }
                                            },
                                        }
                                    }
                                })}>
                                <span>sqft</span>
                            </button>
                            <button
                                className={`secondaryButton ${props.draft.siteSelectionReport.assumption.land.sizeType !== "m2" ? "radioDisabled" : ""}`}
                                type="submit"
                                onClick={() => props.setDraft(prevState => {
                                    return {
                                        ...prevState,
                                        siteSelectionReport: {
                                            ...prevState.siteSelectionReport,
                                            assumption: {
                                                ...prevState.siteSelectionReport.assumption,
                                                land: {
                                                    ...prevState.siteSelectionReport.assumption.land,
                                                    sizeType: "m2",
                                                }
                                            },
                                        }
                                    }
                                })}>
                                <span>m²</span>
                            </button>
                        </div>
                        <input type="text" placeholder="Size"
                               value={props.draft.siteSelectionReport.assumption.land.sizeValue}
                               onChange={(e) => props.setDraft(prevState => {
                                   return {
                                       ...prevState,
                                       siteSelectionReport: {
                                           ...prevState.siteSelectionReport,
                                           assumption: {
                                               ...prevState.siteSelectionReport.assumption,
                                               land: {
                                                   ...prevState.siteSelectionReport.assumption.land,
                                                   sizeValue: e.target.value,
                                               }
                                           },
                                       }
                                   }
                               })}/>
                    </div>
                    <div className="inputContainer">
                        <span className="inputTitle">Requirements/Comments</span>
                        <input type="text" placeholder="Requirements/Comments"
                               value={props.draft.siteSelectionReport.assumption.land.comment}
                               onChange={(e) => props.setDraft(prevState => {
                                   return {
                                       ...prevState,
                                       siteSelectionReport: {
                                           ...prevState.siteSelectionReport,
                                           assumption: {
                                               ...prevState.siteSelectionReport.assumption,
                                               land: {
                                                   ...prevState.siteSelectionReport.assumption.land,
                                                   comment: e.target.value,
                                               }
                                           },
                                       }
                                   }
                               })}/>
                    </div>
                    <div className="assumptionTitle" id="utilitiesSection">Utilities</div>
                    <div className="inputContainer">
                        <span className="inputTitle">Electricity installed</span>
                        <input type="text" placeholder="Electricity installed"
                               value={props.draft.siteSelectionReport.assumption.utilities.electricityInstalled}
                               onChange={(e) => props.setDraft(prevState => {
                                   return {
                                       ...prevState,
                                       siteSelectionReport: {
                                           ...prevState.siteSelectionReport,
                                           assumption: {
                                               ...prevState.siteSelectionReport.assumption,
                                               utilities: {
                                                   ...prevState.siteSelectionReport.assumption.utilities,
                                                   electricityInstalled: e.target.value,
                                               }
                                           },
                                       }
                                   }
                               })}/>
                    </div>
                    <div className="inputContainer">
                        <span className="inputTitle">Electricity consumed</span>
                        <input type="text" placeholder="Electricity consumed"
                               value={props.draft.siteSelectionReport.assumption.utilities.electricityConsumed}
                               onChange={(e) => props.setDraft(prevState => {
                                   return {
                                       ...prevState,
                                       siteSelectionReport: {
                                           ...prevState.siteSelectionReport,
                                           assumption: {
                                               ...prevState.siteSelectionReport.assumption,
                                               utilities: {
                                                   ...prevState.siteSelectionReport.assumption.utilities,
                                                   electricityConsumed: e.target.value,
                                               }
                                           },
                                       }
                                   }
                               })}/>
                    </div>
                    <div className="inputContainer">
                        <span className="inputTitle">Gas</span>
                        <input type="text" placeholder="Gas"
                               value={props.draft.siteSelectionReport.assumption.utilities.gas}
                               onChange={(e) => props.setDraft(prevState => {
                                   return {
                                       ...prevState,
                                       siteSelectionReport: {
                                           ...prevState.siteSelectionReport,
                                           assumption: {
                                               ...prevState.siteSelectionReport.assumption,
                                               utilities: {
                                                   ...prevState.siteSelectionReport.assumption.utilities,
                                                   gas: e.target.value,
                                               }
                                           },
                                       }
                                   }
                               })}/>
                    </div>
                    <div className="inputContainer">
                        <span className="inputTitle">Water</span>
                        <input type="text" placeholder="Water"
                               value={props.draft.siteSelectionReport.assumption.utilities.water}
                               onChange={(e) => props.setDraft(prevState => {
                                   return {
                                       ...prevState,
                                       siteSelectionReport: {
                                           ...prevState.siteSelectionReport,
                                           assumption: {
                                               ...prevState.siteSelectionReport.assumption,
                                               utilities: {
                                                   ...prevState.siteSelectionReport.assumption.utilities,
                                                   water: e.target.value,
                                               }
                                           },
                                       }
                                   }
                               })}/>
                    </div>
                    <div className="assumptionTitle" id="logisticsSection">Logistics</div>
                    <div className="inputContainer">
                        <span className="inputTitle">Trucks per month</span>
                        <input type="text" placeholder="Trucks per month"
                               value={props.draft.siteSelectionReport.assumption.logistics.trucksPerMonth}
                               onChange={(e) => props.setDraft(prevState => {
                                   return {
                                       ...prevState,
                                       siteSelectionReport: {
                                           ...prevState.siteSelectionReport,
                                           assumption: {
                                               ...prevState.siteSelectionReport.assumption,
                                               logistics: {
                                                   ...prevState.siteSelectionReport.assumption.logistics,
                                                   trucksPerMonth: e.target.value,
                                               }
                                           },
                                       }
                                   }
                               })}/>
                    </div>
                    <div className="inputContainer">
                        <span className="inputTitle">Other logistics considerations</span>
                        <input type="text" placeholder="Other logistics considerations"
                               value={props.draft.siteSelectionReport.assumption.logistics.otherLogisticConsiderations}
                               onChange={(e) => props.setDraft(prevState => {
                                   return {
                                       ...prevState,
                                       siteSelectionReport: {
                                           ...prevState.siteSelectionReport,
                                           assumption: {
                                               ...prevState.siteSelectionReport.assumption,
                                               logistics: {
                                                   ...prevState.siteSelectionReport.assumption.logistics,
                                                   otherLogisticConsiderations: e.target.value,
                                               }
                                           },
                                       }
                                   }
                               })}/>
                    </div>
                    <div className="inputContainer">
                        <span className="inputTitle">Handling equipement</span>
                        <input type="text" placeholder="Handling equipement"
                               value={props.draft.siteSelectionReport.assumption.logistics.handlingEquipment}
                               onChange={(e) => props.setDraft(prevState => {
                                   return {
                                       ...prevState,
                                       siteSelectionReport: {
                                           ...prevState.siteSelectionReport,
                                           assumption: {
                                               ...prevState.siteSelectionReport.assumption,
                                               logistics: {
                                                   ...prevState.siteSelectionReport.assumption.logistics,
                                                   handlingEquipment: e.target.value,
                                               }
                                           },
                                       }
                                   }
                               })}/>
                    </div>
                    <div className="assumptionSubtitle">Logistics inbound</div>
                    <div className="inputContainer">
                        <span className="inputTitle">Origin sea port</span>
                        <input type="text" placeholder="Origin sea port"
                               value={props.draft.siteSelectionReport.assumption.logistics.logisticsInbound.originSeaPort}
                               onChange={(e) => props.setDraft(prevState => {
                                   return {
                                       ...prevState,
                                       siteSelectionReport: {
                                           ...prevState.siteSelectionReport,
                                           assumption: {
                                               ...prevState.siteSelectionReport.assumption,
                                               logistics: {
                                                   ...prevState.siteSelectionReport.assumption.logistics,
                                                   logisticsInbound: {
                                                       ...prevState.siteSelectionReport.assumption.logistics.logisticsInbound,
                                                       originSeaPort: e.target.value,
                                                   }
                                               }
                                           },
                                       }
                                   }
                               })}/>
                    </div>
                    <div className="inputContainer">
                        <span className="inputTitle">Destination sea port</span>
                        <input type="text" placeholder="Destination sea port"
                               value={props.draft.siteSelectionReport.assumption.logistics.logisticsInbound.destinationSeaPort}
                               onChange={(e) => props.setDraft(prevState => {
                                   return {
                                       ...prevState,
                                       siteSelectionReport: {
                                           ...prevState.siteSelectionReport,
                                           assumption: {
                                               ...prevState.siteSelectionReport.assumption,
                                               logistics: {
                                                   ...prevState.siteSelectionReport.assumption.logistics,
                                                   logisticsInbound: {
                                                       ...prevState.siteSelectionReport.assumption.logistics.logisticsInbound,
                                                       destinationSeaPort: e.target.value,
                                                   }
                                               }
                                           },
                                       }
                                   }
                               })}/>
                    </div>
                    <div className="inputContainer">
                        <span className="inputTitle">Containers per month</span>
                        <input type="text" placeholder="Containers per month"
                               value={props.draft.siteSelectionReport.assumption.logistics.logisticsInbound.containersPerMonth}
                               onChange={(e) => props.setDraft(prevState => {
                                   return {
                                       ...prevState,
                                       siteSelectionReport: {
                                           ...prevState.siteSelectionReport,
                                           assumption: {
                                               ...prevState.siteSelectionReport.assumption,
                                               logistics: {
                                                   ...prevState.siteSelectionReport.assumption.logistics,
                                                   logisticsInbound: {
                                                       ...prevState.siteSelectionReport.assumption.logistics.logisticsInbound,
                                                       containersPerMonth: e.target.value,
                                                   }
                                               }
                                           },
                                       }
                                   }
                               })}/>
                    </div>
                    <div className="assumptionSubtitle">Logistics outbound</div>
                    <div className="inputContainer">
                        <span className="inputTitle">Border city</span>
                        <input type="text" placeholder="Border city"
                               value={props.draft.siteSelectionReport.assumption.logistics.logisticsOutbound.borderCity}
                               onChange={(e) => props.setDraft(prevState => {
                                   return {
                                       ...prevState,
                                       siteSelectionReport: {
                                           ...prevState.siteSelectionReport,
                                           assumption: {
                                               ...prevState.siteSelectionReport.assumption,
                                               logistics: {
                                                   ...prevState.siteSelectionReport.assumption.logistics,
                                                   logisticsOutbound: {
                                                       ...prevState.siteSelectionReport.assumption.logistics.logisticsOutbound,
                                                       borderCity: e.target.value,
                                                   }
                                               }
                                           },
                                       }
                                   }
                               })}/>
                    </div>
                    <div className="inputContainer">
                        <span className="inputTitle">Final destination</span>
                        <input type="text" placeholder="Final destination"
                               value={props.draft.siteSelectionReport.assumption.logistics.logisticsOutbound.finalDestination}
                               onChange={(e) => props.setDraft(prevState => {
                                   return {
                                       ...prevState,
                                       siteSelectionReport: {
                                           ...prevState.siteSelectionReport,
                                           assumption: {
                                               ...prevState.siteSelectionReport.assumption,
                                               logistics: {
                                                   ...prevState.siteSelectionReport.assumption.logistics,
                                                   logisticsOutbound: {
                                                       ...prevState.siteSelectionReport.assumption.logistics.logisticsOutbound,
                                                       finalDestination: e.target.value,
                                                   }
                                               }
                                           },
                                       }
                                   }
                               })}/>
                    </div>
                    <div className="assumptionTitle" id="headcountSection">Headcount</div>
                    <div className="assumptionSubtitle2">Direct</div>
                    <div className="headcountOptionsContainer">
                        <div className="quantity">
                            <span className="inputTitle">Qty</span>
                        </div>
                        <span className="inputTitle">Role</span>
                    </div>
                    {
                        props.draft.siteSelectionReport.assumption.headcount.directs
                            .map((direct, index) => (
                                <div className="headcountOptionsContainer" key={"direct_" + index}>
                                    <div className="inputContainer quantity">
                                        <input type="text" placeholder="Qty"
                                               value={direct.quantity}
                                               onChange={(e) => props.setDraft(prevState => {
                                                   const directs = prevState.siteSelectionReport.assumption.headcount.directs.slice(0);
                                                   directs[index].quantity = e.target.value;

                                                   return {
                                                       ...prevState,
                                                       siteSelectionReport: {
                                                           ...prevState.siteSelectionReport,
                                                           assumption: {
                                                               ...prevState.siteSelectionReport.assumption,
                                                               headcount: {
                                                                   ...prevState.siteSelectionReport.assumption.headcount,
                                                                   directs: directs,
                                                               }
                                                           },
                                                       }
                                                   }
                                               })}/>
                                    </div>
                                    <div className="inputContainer">
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                {
                                                    direct.role ? direct.role : "Role"
                                                }
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {
                                                    headcountRoles.direct.map((role, indexRoles) => (
                                                        <Dropdown.Item key={"directRole_" + indexRoles}
                                                                       onClick={() => props.setDraft(prevState => {
                                                                           const directs = prevState.siteSelectionReport.assumption.headcount.directs.slice(0);
                                                                           directs[index].role = role;

                                                                           return {
                                                                               ...prevState,
                                                                               siteSelectionReport: {
                                                                                   ...prevState.siteSelectionReport,
                                                                                   assumption: {
                                                                                       ...prevState.siteSelectionReport.assumption,
                                                                                       headcount: {
                                                                                           ...prevState.siteSelectionReport.assumption.headcount,
                                                                                           directs: directs,
                                                                                       }
                                                                                   },
                                                                               }
                                                                           }
                                                                       })}>
                                                            {role}
                                                        </Dropdown.Item>
                                                    ))
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    {
                                        props.draft.siteSelectionReport.assumption.headcount.directs.length > 1 &&
                                        <img className="deleteRol" src={deleteIcon} alt="Prodensa automation"
                                             onClick={() => props.setDraft(prevState => {
                                                 const directs = prevState.siteSelectionReport.assumption.headcount.directs;
                                                 directs.splice(index, 1);

                                                 return {
                                                     ...prevState,
                                                     siteSelectionReport: {
                                                         ...prevState.siteSelectionReport,
                                                         assumption: {
                                                             ...prevState.siteSelectionReport.assumption,
                                                             headcount: {
                                                                 ...prevState.siteSelectionReport.assumption.headcount,
                                                                 directs: directs,
                                                             }
                                                         },
                                                     }
                                                 }
                                             })}/>
                                    }
                                </div>
                            ))
                    }
                    <button className="secondaryButton addRole" type="submit"
                            onClick={() => props.setDraft(prevState => {
                                const directs = prevState.siteSelectionReport.assumption.headcount.directs.slice(0);
                                directs.push(new HeadcountOptions());

                                return {
                                    ...prevState,
                                    siteSelectionReport: {
                                        ...prevState.siteSelectionReport,
                                        assumption: {
                                            ...prevState.siteSelectionReport.assumption,
                                            headcount: {
                                                ...prevState.siteSelectionReport.assumption.headcount,
                                                directs: directs,
                                            }
                                        },
                                    }
                                }
                            })}>
                        <img src={addCircle} alt="Prodensa automation"/>
                    </button>
                    <div className="assumptionSubtitle2">Indirect</div>
                    <div className="headcountOptionsContainer">
                        <div className="quantity">
                            <span className="inputTitle">Qty</span>
                        </div>
                        <span className="inputTitle">Role</span>
                    </div>
                    {
                        props.draft.siteSelectionReport.assumption.headcount.indirects
                            .map((indirect, index) => (
                                <div className="headcountOptionsContainer" key={"indirect_" + index}>
                                    <div className="inputContainer quantity">
                                        <input type="text" placeholder="Qty"
                                               value={indirect.quantity}
                                               onChange={(e) => props.setDraft(prevState => {
                                                   const indirects = prevState.siteSelectionReport.assumption.headcount.indirects.slice(0);
                                                   indirects[index].quantity = e.target.value;

                                                   return {
                                                       ...prevState,
                                                       siteSelectionReport: {
                                                           ...prevState.siteSelectionReport,
                                                           assumption: {
                                                               ...prevState.siteSelectionReport.assumption,
                                                               headcount: {
                                                                   ...prevState.siteSelectionReport.assumption.headcount,
                                                                   indirects: indirects,
                                                               }
                                                           },
                                                       }
                                                   }
                                               })}/>
                                    </div>
                                    <div className="inputContainer">
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                {
                                                    indirect.role ? indirect.role : "Role"
                                                }
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {
                                                    headcountRoles.indirects.map((role, indexRoles) => (
                                                        <Dropdown.Item key={"indirectRole_" + indexRoles}
                                                                       onClick={() => props.setDraft(prevState => {
                                                                           const indirects = prevState.siteSelectionReport.assumption.headcount.indirects.slice(0);
                                                                           indirects[index].role = role;

                                                                           return {
                                                                               ...prevState,
                                                                               siteSelectionReport: {
                                                                                   ...prevState.siteSelectionReport,
                                                                                   assumption: {
                                                                                       ...prevState.siteSelectionReport.assumption,
                                                                                       headcount: {
                                                                                           ...prevState.siteSelectionReport.assumption.headcount,
                                                                                           indirects: indirects,
                                                                                       }
                                                                                   },
                                                                               }
                                                                           }
                                                                       })}>
                                                            {role}
                                                        </Dropdown.Item>
                                                    ))
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    {
                                        props.draft.siteSelectionReport.assumption.headcount.indirects.length > 1 &&
                                        <img className="deleteRol" src={deleteIcon} alt="Prodensa automation"
                                             onClick={() => props.setDraft(prevState => {
                                                 const indirects = prevState.siteSelectionReport.assumption.headcount.indirects;
                                                 indirects.splice(index, 1);

                                                 return {
                                                     ...prevState,
                                                     siteSelectionReport: {
                                                         ...prevState.siteSelectionReport,
                                                         assumption: {
                                                             ...prevState.siteSelectionReport.assumption,
                                                             headcount: {
                                                                 ...prevState.siteSelectionReport.assumption.headcount,
                                                                 indirects: indirects,
                                                             }
                                                         },
                                                     }
                                                 }
                                             })}/>
                                    }
                                </div>
                            ))
                    }
                    <button className="secondaryButton addRole" type="submit"
                            onClick={() => props.setDraft(prevState => {
                                const indirects = prevState.siteSelectionReport.assumption.headcount.indirects.slice(0);
                                indirects.push(new HeadcountOptions());

                                return {
                                    ...prevState,
                                    siteSelectionReport: {
                                        ...prevState.siteSelectionReport,
                                        assumption: {
                                            ...prevState.siteSelectionReport.assumption,
                                            headcount: {
                                                ...prevState.siteSelectionReport.assumption.headcount,
                                                indirects: indirects,
                                            }
                                        },
                                    }
                                }
                            })}>
                        <img src={addCircle} alt="Prodensa automation"/>
                    </button>
                    <div className="assumptionSubtitle2">Corporate</div>
                    <div className="headcountOptionsContainer">
                        <div className="quantity">
                            <span className="inputTitle">Qty</span>
                        </div>
                        <span className="inputTitle">Role</span>
                    </div>
                    {
                        props.draft.siteSelectionReport.assumption.headcount.corporates
                            .map((corporate, index) => (
                                <div className="headcountOptionsContainer" key={"corporate_" + index}>
                                    <div className="inputContainer quantity">
                                        <input type="text" placeholder="Qty"
                                               value={corporate.quantity}
                                               onChange={(e) => props.setDraft(prevState => {
                                                   const corporates = prevState.siteSelectionReport.assumption.headcount.corporates.slice(0);
                                                   corporates[index].quantity = e.target.value;

                                                   return {
                                                       ...prevState,
                                                       siteSelectionReport: {
                                                           ...prevState.siteSelectionReport,
                                                           assumption: {
                                                               ...prevState.siteSelectionReport.assumption,
                                                               headcount: {
                                                                   ...prevState.siteSelectionReport.assumption.headcount,
                                                                   corporates: corporates,
                                                               }
                                                           },
                                                       }
                                                   }
                                               })}/>
                                    </div>
                                    <div className="inputContainer">
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                {
                                                    corporate.role ? corporate.role : "Role"
                                                }
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {
                                                    headcountRoles.corporates.map((role, indexRoles) => (
                                                        <Dropdown.Item key={"corporateRole_" + indexRoles}
                                                                       onClick={() => props.setDraft(prevState => {
                                                                           const corporates = prevState.siteSelectionReport.assumption.headcount.corporates.slice(0);
                                                                           corporates[index].role = role;

                                                                           return {
                                                                               ...prevState,
                                                                               siteSelectionReport: {
                                                                                   ...prevState.siteSelectionReport,
                                                                                   assumption: {
                                                                                       ...prevState.siteSelectionReport.assumption,
                                                                                       headcount: {
                                                                                           ...prevState.siteSelectionReport.assumption.headcount,
                                                                                           corporates: corporates,
                                                                                       }
                                                                                   },
                                                                               }
                                                                           }
                                                                       })}>
                                                            {role}
                                                        </Dropdown.Item>
                                                    ))
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    {
                                        props.draft.siteSelectionReport.assumption.headcount.corporates.length > 1 &&
                                        <img className="deleteRol" src={deleteIcon} alt="Prodensa automation"
                                             onClick={() => props.setDraft(prevState => {
                                                 const corporates = prevState.siteSelectionReport.assumption.headcount.corporates;
                                                 corporates.splice(index, 1);

                                                 return {
                                                     ...prevState,
                                                     siteSelectionReport: {
                                                         ...prevState.siteSelectionReport,
                                                         assumption: {
                                                             ...prevState.siteSelectionReport.assumption,
                                                             headcount: {
                                                                 ...prevState.siteSelectionReport.assumption.headcount,
                                                                 corporates: corporates,
                                                             }
                                                         },
                                                     }
                                                 }
                                             })}/>
                                    }
                                </div>
                            ))
                    }
                    <button className="secondaryButton addRole" type="submit"
                            onClick={() => props.setDraft(prevState => {
                                const corporates = prevState.siteSelectionReport.assumption.headcount.corporates.slice(0);
                                corporates.push(new HeadcountOptions());

                                return {
                                    ...prevState,
                                    siteSelectionReport: {
                                        ...prevState.siteSelectionReport,
                                        assumption: {
                                            ...prevState.siteSelectionReport.assumption,
                                            headcount: {
                                                ...prevState.siteSelectionReport.assumption.headcount,
                                                corporates: corporates,
                                            }
                                        },
                                    }
                                }
                            })}>
                        <img src={addCircle} alt="Prodensa automation"/>
                    </button>
                    <div className="inputContainer">
                        <span className="inputTitle">Exchange rate</span>
                        <input type="text" placeholder="Exchange rate"
                               value={props.draft.siteSelectionReport.assumption.headcount.exchangeRate}
                               onChange={(e) => props.setDraft(prevState => {
                                   return {
                                       ...prevState,
                                       siteSelectionReport: {
                                           ...prevState.siteSelectionReport,
                                           assumption: {
                                               ...prevState.siteSelectionReport.assumption,
                                               headcount: {
                                                   ...prevState.siteSelectionReport.assumption.headcount,
                                                   exchangeRate: e.target.value,
                                               }
                                           },
                                       }
                                   }
                               })}/>
                    </div>
                    <div className="inputContainer">
                        <span className="inputTitle">Additional comments</span>
                        <input type="text" placeholder="Additional comments"
                               value={props.draft.siteSelectionReport.assumption.headcount.additionalComments}
                               onChange={(e) => props.setDraft(prevState => {
                                   return {
                                       ...prevState,
                                       siteSelectionReport: {
                                           ...prevState.siteSelectionReport,
                                           assumption: {
                                               ...prevState.siteSelectionReport.assumption,
                                               headcount: {
                                                   ...prevState.siteSelectionReport.assumption.headcount,
                                                   additionalComments: e.target.value,
                                               }
                                           },
                                       }
                                   }
                               })}/>
                    </div>
                    <div className="assumptionTitle" id="environmentalSection">Environmental impact and special
                        certifications
                    </div>
                    <div className="inputContainer">
                        <div className="assumptionRequirementsCommentsContainer">
                            <div className="assumptionCheckboxContainer">
                                <input id="iso9001" type="checkbox" value="ISO-9001"
                                       onChange={(e) =>
                                           handleEnvironmentalCheckboxChange(0, e.target.checked, e.target.value)}/>
                                <label htmlFor="iso9001">ISO-9001</label>
                            </div>
                            <div className="assumptionCheckboxContainer">
                                <input id="iso140012015" type="checkbox" value="ISO 14001-2015"
                                       onChange={(e) =>
                                           handleEnvironmentalCheckboxChange(1, e.target.checked, e.target.value)}/>
                                <label htmlFor="iso140012015">ISO 14001-2015</label>
                            </div>
                            <div className="assumptionCheckboxContainer">
                                <input id="iatf" type="checkbox" value="IATF"
                                       onChange={(e) =>
                                           handleEnvironmentalCheckboxChange(2, e.target.checked, e.target.value)}/>
                                <label htmlFor="iatf">IATF</label>
                            </div>
                            <div className="assumptionCheckboxContainer">
                                <input id="ctpatoea" type="checkbox" value="CTPAT-OEA"
                                       onChange={(e) =>
                                           handleEnvironmentalCheckboxChange(3, e.target.checked, e.target.value)}/>
                                <label htmlFor="ctpatoea">CTPAT-OEA</label>
                            </div>
                            <div className="assumptionCheckboxContainer">
                                <input id="otherEnviromental" type="checkbox"
                                       onChange={(e) =>
                                           handleEnvironmentalCheckboxChange(4, e.target.checked, null)}/>
                                <label htmlFor="otherEnviromental">Other</label>
                                <input
                                    className={props.draft.siteSelectionReport.assumption.environmentalImpacts[4].checked ? "active" : ""}
                                    type="text" placeholder="Other"
                                    onChange={(e) =>
                                        handleEnvironmentalCheckboxChange(4, null, e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={{span: 4, offset: 1}} xs={{span: 11, offset: 1}}>
                    <div id="assumptionNavigationContainer"
                         className="assumptionNavigationContainer">
                        <div className={`menuContainer ${menuShowing === MenuShowing.BUILDING ? "active" : ""}`}>
                            <div className="dot"></div>
                            <a className="menuTitle" href="#buildingSection">Building</a>
                        </div>
                        <div className="miniDot"></div>
                        <div className="miniDot"></div>
                        <div className={`menuContainer ${menuShowing === MenuShowing.LAND ? "active" : ""}`}>
                            <div className="dot"></div>
                            <a className="menuTitle" href="#landSection">Land</a>
                        </div>
                        <div className="miniDot"></div>
                        <div className="miniDot"></div>
                        <div className={`menuContainer ${menuShowing === MenuShowing.UTILITIES ? "active" : ""}`}>
                            <div className="dot"></div>
                            <a className="menuTitle" href="#utilitiesSection">Utilities</a>
                        </div>
                        <div className="miniDot"></div>
                        <div className="miniDot"></div>
                        <div className={`menuContainer ${menuShowing === MenuShowing.LOGISTICS ? "active" : ""}`}>
                            <div className="dot"></div>
                            <a className="menuTitle" href="#logisticsSection">Logistics</a>
                        </div>
                        <div className="miniDot"></div>
                        <div className="miniDot"></div>
                        <div className={`menuContainer ${menuShowing === MenuShowing.HEADCOUNT ? "active" : ""}`}>
                            <div className="dot"></div>
                            <a className="menuTitle" href="#headcountSection">Headcount</a>
                        </div>
                        <div className="miniDot"></div>
                        <div className="miniDot"></div>
                        <div
                            className={`menuContainer ${menuShowing === MenuShowing.ENVIROMENTAL ? "active" : ""}`}>
                            <div className="dot"></div>
                            <a className="menuTitle" href="#environmentalSection">
                                Environmental impact and special certifications
                            </a>
                        </div>
                    </div>

                </Col>
            </Row>
        </section>
    )
}

export default Assumptions;
