import React from 'react'
import style from './weather.module.css'


const Weather = ({country,temp,img,text}) => {
  return (
    <div className={style.containerWeather}>
    <div className={style.container}>
        <h2 className={style.countryName}>
        {country} 
    
        </h2>
        <div className={style.countryTemp}> <h2>  {temp} </h2>
        <sup>°C</sup>
        </div>
        
        <div className={style.countryInfo}>
        <div>
        <img alt='icon' className={style.icon} src={img}/>
      
        </div>   
        <div>
        <p>{text}</p>
        </div>
           
        </div>
    
    </div>
  

    
  
    
    </div>
  )
}

export default Weather