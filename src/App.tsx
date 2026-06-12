import '@fontsource-variable/manrope/wght.css';
import styles from './App.module.css';
import { useState } from 'react';
import { WeatherMenu } from './ui/WeatherMenu';
import { WeatherItem } from './ui/WeatherItem';
import { useCarousel } from './bll/useCarousel';


function App() {
  const [cities, setCities] = useState<Array<string>>(["Ryazan"]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const {handleMouseDown, handleMouseUp, handleMouseMove, isDown, carouselRef} = useCarousel();

  const deleteWeatherItem = (city_name: string) => {
    const newCities = cities.filter((city) => city !== city_name)
    setCities(newCities)
  }

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {

    const scrollPosition = e.currentTarget.scrollLeft;
    const cardStep = 320;
    const index = Math.round(scrollPosition / cardStep);
    setActiveIndex(index)
  }

  
  return (
    <>
      <WeatherMenu setCities={setCities} cities={cities}/>
      <div ref={carouselRef} className={styles["carousel_container"]} style={{ scrollSnapType: isDown ? 'none' : 'x mandatory', scrollBehavior: isDown ? 'auto' : 'smooth' }} onScroll={handleScroll} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} onMouseLeave={handleMouseUp}>
          {cities.map((city, index) => {
              return <WeatherItem key={city} city={city} deleteWeatherItem={deleteWeatherItem} isActive={index === activeIndex}/>
          })}
      </div>
      
    </>
    
  )
}

  export default App
