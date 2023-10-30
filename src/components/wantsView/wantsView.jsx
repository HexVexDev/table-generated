import { useState,useEffect } from "react";
 import "../../assets/css/wantsView.css";
 import CriteriaAccordion from "./criteriaAccordion";
 import open_all from "../../assets/images/expand_all.svg";
 import close_all from "../../assets/images/collapse_all.svg";

const WantsView = () =>{
    const report = {
        criteria:{
			criteria1:{
				subcriteria:{
					subcriteria1:{
						subcriteria_name: "Total payroll cost",
						info: {},
						criteria:{},
						points:4,
						weight:20,
						city_score:{
							city1:2,
							city2:3,
							city3:2
						}
					},
					subcriteria2:{
						subcriteria_name: "example 2",
						info:{},
						criteria:{},
						points:3,
						weight:10,
						city_score:{
							city1:3,
							city2:4,
							city3:5
						}
					}
				},
				total_points:20,
				total_weight:20,
				criteria_name:"Operation costs",
				total_city_score:{
					city1: 17.7,
					city2:11.5,
					city3:12.3
				}
			}
		},
		cityNames:{
			city1: "Saltillo",
			city2: "Torreon",
			city3: "Monterrey"
		}
    }
	const [collapsed_all,setCollapsed_all] = useState(0);
	let city_names = Object.keys(report.cityNames);
	let criteria = Object.keys(report.criteria);


	const toggleAll = (action) =>{
		if (action === "show") {
			setCollapsed_all(1);
		  } else {
			setCollapsed_all(0); // Clear the collapsed state
		  }
	};


	return(
		<div class="wants-wrapper"> 
			<div class="title-wrapper">
				<div class="big-column">
					<div>Criteria</div>
					<img src={open_all} width="24px" height="24px" onClick={()=>toggleAll("show")}/>
					<h5>Expand all</h5>
					<img src={close_all} width="24px" height="24px" onClick={()=>toggleAll("")}/>
					<h5>Close all</h5>
				</div>
				<div class="small-column">
					Points
				</div>
				<div class="small-column">
					Weight
				</div>
				{city_names.map((cityKey) => (
					<div key={cityKey} class="small-column">{report.cityNames[cityKey]}</div>
      				))}
			</div>
			<div class="criteria-wrapper">
				
				{criteria.map((key)=>(
					<CriteriaAccordion key={key} criteria_data={report.criteria[key]}  collapsed_all={collapsed_all}/>	
				))}
				
					
			</div>	
		</div>
	)
	;
}
export default WantsView;