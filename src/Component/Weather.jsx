import React, { useState } from 'react'
import a from "../Assests/clear.png";
import a1 from "../Assests/cloud.png";
import a2 from "../Assests/drizzle.png";
import a3 from "../Assests/humidity.png";
import a4 from "../Assests/rain.png";
import a5 from "../Assests/search.png";
import a6 from "../Assests/snow.png";
import a7 from "../Assests/wind.png";

const Weather = () => {
    let api_key= "c2186d329d587500ea00bab9ce612c93";


    const [wicon, setWicon]= useState(a1);
    const search = async () => {
        const element = document.getElementsByClassName("cityinput");
        if(element[0].value===""){
            return 0;
        }
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await  response.json();
        const humidity = document.getElementsByClassName("humidity-perc");
        const wind = document.getElementsByClassName("wind-rate");
        const temprature = document.getElementsByClassName("temprature-tell");
        const location = document.getElementsByClassName("location-bta");

        humidity[0].innerHTML = data.main.humidity+"%";
        wind[0].innerHTML = Math.floor(data.wind.speed) +"Km/h";
        temprature[0].innerHTML = Math.floor(data.main.temp) +"°c";
        location[0].innerHTML =data.name;

        if (data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
            setWicon(a);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
            setWicon(a1);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        {
            setWicon(a2);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
            setWicon(a2);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            setWicon(a4);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        {
            setWicon(a4);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        {
            setWicon(a6);
        }
        else {}
            setWicon(a);
    }

  return (
    <div className='h-screen flex items-center justify-center bg-gray-300'>

    <div className=' w-[607px] h-[829px] bg-blue-400 rounded-2xl    '>
      <div className=' flex mt-[70px]  ml-[70px] '>
        <input type="text"  className=' cityinput w-[400px] text-[20px] h-[70px]  p-[30px] rounded-full '  placeholder='Enter city...'/>
        <div onClick={()=>{search()}} className='w-[70px] h-[70px] ml-[20px] p-[20px] rounded-full bg-white'>
        <img src={a5} alt="" className=' cursor-pointer  w-[30px] h-[30px]' />

        </div>
      </div>
    <div  className=' flex justify-center mt-[60px]'>
        <img src={wicon} alt="" />

    </div>
    <div className=' temprature-tell flex  text-[90px] justify-center text-white'>24°c</div>
    <div className=' location-bta flex  text-[60px] justify-center text-white'>London</div>
    <div className='flex text-white mt-[30px] gap-[100px] justify-center'>
        <div className='flex gap-[10px] font-medium'>
            <img src={a3} alt="" />
            <div className='text-[25px]'>
                <div className='humidity-perc'>64%</div>
                <div className=''>Humidity</div>
            </div>
        </div>
        <div className='flex gap-[5px] font-medium'>
            <img src={a7} alt="" />
            <div className='text-[25px]'>
                <div className='wind-rate'>18 km/h</div>
                <div>Wind Speed</div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Weather

