import { useState } from 'react';
import './App.css';
import '@fontsource-variable/manrope/wght.css';
import { WeatherMenu } from './ui/WeatherMenu';
import { WeatherItem } from './ui/WeatherItem'

function App() {
  const [city, setCity] = useState<string>("Ryazan");

  return (
    <>
      <WeatherMenu setCity={setCity} city={city}/>
      <WeatherItem city={city}/>
    </>
    
  )
}

export default App
