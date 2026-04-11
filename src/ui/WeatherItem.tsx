import { useWeatherItem } from "../bll/useWeatherItem";
import styles from './WeatherItem.module.css';

export function WeatherItem() {
    const city = "Ryazan"
    const {weatherInfo} = useWeatherItem(city);
    

    const weatherIcons: Record<string, string> = {
        "light rain shower": "rain.svg",
        "rain": "rain.svg",
        "sunny": "sunny.svg",
        "thunderstorm": "rain-thunderstorm.svg",
        "partly cloudy": "cloudy-clear-at-times.svg",
        "overcast": "cloudy.svg"
    };

    const getWeatherIcon = (condition: string) => {
        if(!condition) {
            return "default.svg";
        }
        return weatherIcons[condition.toLowerCase()] || "default.svg";
    }

    const imageWeather = getWeatherIcon(weatherInfo?.condition?.text);

   
    
    if(weatherInfo) {
        console.log(imageWeather)
    } 
    

    return (
        <>
      
        {weatherInfo && (<div className={styles["weather-item"]}>
            <img src={`/icons/${imageWeather}`} alt="погода" style={{color: "#00ff55ff", backgroundColor: "#fff"}} />
            <div className='close'>x</div>
            <h3>{weatherInfo?.condition?.text}</h3>
            <div className='temperature' style={{color: "#FFF", fontSize: "70px"}}>{Math.round(weatherInfo.temp_c)}°</div>
            <div style={{fontSize: "30px", color: "#D4FEFF", textTransform : "uppercase"}}>{city}</div>
        </div>)}
        </>
    )
}