import React from "react"

/*import rain_icon  from "./Assets/rain.png"
import clear_icon  from "./Assets/clear.png"
import cloud_icon  from "./Assets/cloud.png"
import drizzle_icon  from "./Assets/drizzle.png"
import humidity_icon  from "./Assets/humidity.png"
import search_icon  from "./Assets/search.png"
import snow_icon  from "./Assets/snow.png"
import wind_icon  from "./Assets/wind.png"
*/


export default function Weather(){
    const [wicon,setWicon]=React.useState("./Assets/clear.png")
    let api_key="00d3268b20e755c5c70cb621f4242104"
   async function getWeather(){
        const element=document.getElementsByClassName("cityInput")
        if(element[0].value===""){
            console.log("0")
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

        let response=await fetch(url)
        let data=await response.json()

        const humidity=document.getElementsByClassName("humidity-percent")
        const wind=document.getElementsByClassName("wind-speed")
       const temprature=document.getElementsByClassName("weather-temp")
       const location=document.getElementsByClassName("weather-location")
       humidity[0].innerHTML=data.main.humidity+" %"
       wind[0].innerHTML=data.wind.speed+" km/h"
       temprature[0].innerHTML=data.main.temp+" °c"
       location[0].innerHTML=data.name

       if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
        setWicon(".Assets/clear.png")
       }
       else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
        setWicon("./Assets/cloud.png")
       }
       else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
        setWicon("./Assets/drizzle.png")
       }
       else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
        setWicon("./Assets/drizzle.png")
       }
       else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
        setWicon("./Assets/rain.png")
       }
       else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
        setWicon("./Assets/rain.png")
       }
       else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
        setWicon("./Assets/snow.png")
       }
       else{
        setWicon("./Assets/clear.png")
       }
       
   } 
    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput"  placeholder="Search"/>
                <div className="search-icon" onClick={getWeather}>
                    <img src="./Assets/search.png"/>
                </div>    
            </div>
            <div className="weather-image">
                <img src={wicon}/>
            </div>
            <div className="weather-temp">24*c</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src="./Assets/humidity.png" className="icon"/>
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src="./Assets/wind.png" className="icon"/>
                    <div className="data">
                        <div className="wind-speed">18km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
       </div>
    )
}
