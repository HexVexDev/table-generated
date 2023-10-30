
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

	let city_names = Object.keys(report.cityNames);
	let criteria = Object.keys(report.criteria);
	console.log(city_names);
	return(
		<div class="wants-wrapper"> 
			<div class="title-wrapper">
				<div class="big-column">
					<div>Criteria</div>
					<img src={open_all} width="24px" height="24px"/>
					<h5>Expand all</h5>
					<img src={close_all} width="24px" height="24px"/>
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
					<CriteriaAccordion key={key} criteria_data={report.criteria[key]} />	
				))}
				
					
			</div>	
		</div>
	)
	;
}
export default WantsView;