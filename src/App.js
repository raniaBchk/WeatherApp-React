import './App.css';
import Search from './components/Search/Search';
import Weather from './components/Weather/Weather';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {Routes, Route, BrowserRouter} from 'react-router-dom'


function App() {
  const[temp,setTemp]=useState(0)
  const[country,setCountry]=useState('')
  const[img,setImg]=useState('')
  const[text,setText]=useState('')
  const [showWeather, setShowWeather] = useState(false); 

    const getTemp = async (r) => {
      try {
        const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=645b41af71424389992191006232008&q=${r}&aqi=yes`);
        
      
        setTemp(res.data.current.temp_c);
        setCountry(res.data.location.name);
        setImg(res.data.current.condition.icon)
        setText(res.data.current.condition.text)
        setShowWeather(true);
        console.log(res.data.location.name);
        console.log(res.data.current.temp_c);
        console.log(res.data.current.condition.icon);
        console.log(res.data.current.condition.text);
      } catch (error) {
      
        console.error("Erreur de requête:", error);
      }
    };
  
    
    
    
    
    
    


   


  //   useEffect (()=>{
  //  //   getTemp()
  //     console.log("http://api.weatherapi.com/v1/current.json?key=645b41af71424389992191006232008&q=${r}&aqi=yes`)    ")
  //    },[]);
  //

  return (
    <div className="App">
      <header className='App-header'>
      <Search getTemp={getTemp} />
      { showWeather && <Weather temp={temp} img={img} text={text} country={country} />} {/* Afficher le composant Weather conditionnellement */}
    </header>
    </div>
  );
}

export default App;
