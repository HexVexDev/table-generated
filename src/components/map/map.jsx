import "../../assets/css/map/map.css"
import markerDark from "../../assets/images/markerDarkMode.svg"
import markerLight from "../../assets/images/markerLightMode.svg"
import markerLightActive from "../../assets/images/markerLightActive.svg"
import manWalking from "../../assets/images/man-walking.svg"
import arrow from "../../assets/images/arrow_forward.svg"
import close from "../../assets/images/white-close.svg"

import { createRoot } from "react-dom/client"
import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import popupImg from "../../assets/images/popup-img.png"

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoid2Vic2hhdSIsImEiOiJjampmd2E2dzk1M21lM3FtbWRibzZ1dzdyIn0.Uy8XcDO3YrXX6OY5fFY5JA'

export default function Map() {

  const [isLoading, setIsLoading] = useState(false)
  const [openMarker, setOpenMarker] = useState(null);
  // const [isOpen, setIsOpen] = useState(false)
  const [cities, setCities] = useState([
    {
      id: 1,
      name: "Saltillo Metroplex Area",
      state: "Coahuila de Zaragoza",
      img: popupImg,
      population: "1,031,779",
      ecoPopu: "692,628",
      manuCompany: "268",
      machCompany: "137",
      distPort: "1,015",
      distBorder: "301",
      lngLat: [-100.31847, 25.67507],
    },
    {
      id: 2,
      name: "Saltillo Metroplex Area",
      state: "Coahuila de Zaragoza",
      img: popupImg,
      population: "1,031,779",
      ecoPopu: "692,628",
      manuCompany: "268",
      machCompany: "137",
      distPort: "1,015",
      distBorder: "301",
      lngLat: [114.17049, 22.32468]
    },
    {
      id: 3,
      name: "Saltillo Metroplex Area",
      state: "Coahuila de Zaragoza",
      img: popupImg,
      population: "1,031,779",
      ecoPopu: "692,628",
      manuCompany: "268",
      machCompany: "137",
      distPort: "1,015",
      distBorder: "301",
      lngLat: [-100.9953, 25.42321]
    },
    {
      id: 4,
      name: "Saltillo Metroplex Area",
      state: "Coahuila de Zaragoza",
      img: popupImg,
      population: "1,031,779",
      ecoPopu: "692,628",
      manuCompany: "268",
      machCompany: "137",
      distPort: "1,015",
      distBorder: "301",
      lngLat: [-103.40898, 25.54389]
    },
  ])
  
  const mapDiv = useRef(null)
  
  function CustomPopup(props) {
    function closePopup() {
      const popupContainer = document.querySelector('.popup')
      popupContainer.classList.remove("open")
    }
    
    return (
      <section className="custom-popup">
        <div className="close-popup">
          <img src={close} onClick={closePopup}/>
        </div>
        <img className="img" src={props.city.img}/>
        <div className="header">
          <h4>{props.city.name}</h4>
          <p>{props.city.state}</p>
        </div>
        <div className="infoContainer">
          <div className="info">
            <h4>{props.city.population}</h4>
            <p>Population</p>
          </div>
          <div className="info">
            <h4>{props.city.ecoPopu}</h4>
            <p>Economically Active population</p>
          </div>
          <div className="info">
            <h4>{props.city.manuCompany}</h4>
            <p>Manufacturing companies</p>
          </div>
          <div className="info">
            <h4>{props.city.machCompany}</h4>
            <p>Machining companies</p>
          </div>
          <div className="info">
            <h4>{props.city.distPort}</h4>
            <p>Distance from port</p>
            <a href="#">View route</a>
          </div>
          <div className="info">
            <h4>{props.city.distBorder}</h4>
            <p>Distance from border</p>
            <a href="#">View route</a>
          </div>
        </div>
        <div className="btnContainer">
          <button className="button primary">
            <span>Street view</span>
            <img src={manWalking} alt="Prodensa Automation" />
          </button>
          <button className="button secondary">
            <span>Compare with cities</span>
            <img src={arrow} alt="Prodensa Automation" />
          </button>
        </div>
      </section>
    )
  }
  
  useLayoutEffect(() => {
    const initialMarkerOffset = [0, -20]

    if(!isLoading) {
      const map = new mapboxgl.Map({
        container: mapDiv.current,
        style: 'mapbox://styles/webshau/clka2yg1r004g01rm2a9va4h4',
        center: [-101.57425, 25.54739],
        zoom: 7,
      })

      cities.map((city) => {
        
        const container = document.createElement("div")
        container.classList.add("marker-popup")
        
        const markerElement = document.createElement("img")
        markerElement.src = markerLight
        markerElement.classList.add("marker")
        markerElement.style.width = "33px"
        markerElement.style.height = "42px"
        
        container.appendChild(markerElement)
        
        
        const popupContainer = document.createElement("div")
        popupContainer.classList.add("popup")
        const customPopupContent = (<CustomPopup city={city}/>)

        const root = createRoot(popupContainer);
        root.render(customPopupContent);

        container.appendChild(popupContainer)
        
        // const customPopup = new mapboxgl.Popup({offset: initialPopupOffset, anchor: "left", focusAfterOpen: false}).setDOMContent(popupContainer)        

        const marker = new mapboxgl.Marker({ element: container, anchor: "bottom", offset: initialMarkerOffset})
        .setLngLat(city.lngLat)
        .addTo(map)

        marker.getElement().addEventListener("click", () => {
          popupContainer.classList.add("open");
            markerElement.src = markerLightActive 
            markerElement.style.width = "80px"
            markerElement.style.height = "100px"
        })
        
        // customPopup.on('open', () => {
        // });
        
        // customPopup.on('close', () => {
        //   markerElement.src = markerLight 
        //   markerElement.style.width = "33px"
        //   markerElement.style.height = "42px"
        // });
      })
    }
  }, [isLoading])

  return <div ref={mapDiv} style={{width: "100%", height: "100vh"}}></div>;
}
