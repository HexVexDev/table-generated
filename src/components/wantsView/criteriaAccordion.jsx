import {useEffect, useState} from 'react';
import SubcriteriaItem from "./subcriteriaItem";
import "../../assets/css/wantsView.css";
import arrow_down from "../../assets/images/expand_less_dark.svg"



const CriteriaAccordion = ({criteria_data,collapsed_all}) =>{

 const [collapsed,setCollapsed] = useState(collapsed_all);
 let city_scores = Object.keys(criteria_data.total_city_score);
 let subcriteria = Object.keys(criteria_data.subcriteria);
   

    const toggle = (value) =>{
        if(collapsed === value){
            return setCollapsed("");
        }else{
        setCollapsed(value);
        }
    }

 
    return(
    <div className="accordion-item">
        <div class="accordion-head" onClick={() =>toggle("show")}>
        <div class="big-column">{criteria_data.criteria_name}</div>
        <div class="small-column">{criteria_data.total_points}</div>
        <div class="small-column">{criteria_data.total_weight}</div>
        {city_scores.map((cityKey)=>(
            <div key={cityKey} class="small-column">{criteria_data.total_city_score[cityKey]}</div>
        ))}
        <img class={`arrow-icon ${collapsed === "show" ? "rotate":""}`} src={arrow_down}/>
        </div>
            {subcriteria.map((key)=>(
                <SubcriteriaItem key={key} subcriteria_data={criteria_data.subcriteria[key]} collapsed={collapsed} collapse_all={collapsed_all}/>
            ))}
    </div>
    );
}

export default CriteriaAccordion;