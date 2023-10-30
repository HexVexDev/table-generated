import info from "../../assets/images/info.svg";

const SubcriteriaItem = ({subcriteria_data,collapsed}) =>{
console.log(subcriteria_data);
let city_scores = Object.keys(subcriteria_data.city_score);

    return(
        <div class={collapsed === "show" ? "accordion-body show":"accordion-body"}> 
        <div class="big-column">
            <img class="info-icon" src={info} width="24px" height="24px" />
            {subcriteria_data.subcriteria_name}
            <button>criteria</button>
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