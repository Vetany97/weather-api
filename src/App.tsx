import { useState } from 'react';
import './App.css';
import '@fontsource-variable/manrope/wght.css';
import { WeatherMenu } from './ui/WeatherMenu';
import { WeatherItem } from './ui/WeatherItem'

function App() {
  const [cities, setCities] = useState<Array<string>>(["Ryazan"]);

  const deleteWeatherItem = (city_name: string) => {
    const newCities = cities.filter((city) => city !== city_name)
    setCities(newCities)
  }
  
  return (
    <>
      <WeatherMenu setCities={setCities} cities={cities}/>
      {cities.map((city) => {
        
        return <WeatherItem key={city} city={city} deleteWeatherItem={deleteWeatherItem}/>
      })}
      
    </>
    
  )
}

export default App
