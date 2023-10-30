import { useState } from "react";
import info from "../../assets/images/info.svg";
import {Tooltip} from "react-tooltip";

const SubcriteriaItem = ({subcriteria_data,collapsed,collapsed_all}) =>{
const [isVisible,setIsVisible] =useState(false);

let city_scores = Object.keys(subcriteria_data.city_score);


    return(
        <div class={collapsed === "show" ? "accordion-body show":"accordion-body"}> 
        <div class="big-column">
            <img src={info} width="24px" height="24px" onMouseEnter={()=>setIsVisible(true)} onMouseLeave={()=>setIsVisible(false)}/>
            <div class={isVisible === true ? "info-tooltip show":"info-tooltip"}>Sample tooltip</div>
            <div>
            {subcriteria_data.subcriteria_name}
            </div>
            <div>
            <button class="criteria-button">criteria</button>
            </div>
            </div>
        <div class="small-column">{subcriteria_data.points}</div>
        <div class="small-column">{subcriteria_data.weight}</div>
        {city_scores.map((cityKey)=>(
            <div key={cityKey} class="small-column">{subcriteria_data.city_score[cityKey]}</div>
        ))}
        <span><button>details</button></span>
        </div>
        );
}

export default SubcriteriaItem;