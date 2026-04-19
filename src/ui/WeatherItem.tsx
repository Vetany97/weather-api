import { useWeatherItem } from "../bll/useWeatherItem";
import styles from './WeatherItem.module.css';

type WeatherItemProps = {
    city: string
}

const weatherIcons: Record<string, string> = {
    "light rain shower": "rain.svg",
    "rain": "rain.svg",
    "sunny": "sunny.svg",
    "thunderstorm": "rain-thunderstorm.svg",
    "partly cloudy": "cloudy-clear-at-times.svg",
    "overcast": "cloudy.svg",
    "cloudy": "cloudy.svg",
    "clear": "sunny.svg",
    "light rain": "rain.svg"
};

const getWeatherIcon = (condition: string | null) => {
    if(!condition) {
        return "default.svg";
    }
    return weatherIcons[condition.toLowerCase()] || "default.svg";
}

export function WeatherItem({city}: WeatherItemProps) {
    const {weatherInfo} = useWeatherItem(city);

    const imageWeather = getWeatherIcon(weatherInfo?.condition?.text);

    return (
        <>
        {!weatherIcons && (<h1>Загрузка...</h1>)}

        {weatherInfo && (<div className={styles["weather-item"]}>
            <div className={styles["weather_item_image"]}>
                <div className={styles.close}>✖︎</div>
                <img src={`/icons/${imageWeather}`} alt={weatherInfo?.condition?.text}  />
            </div>
            
            <div className={styles["weather_item_text"]}>
                <h3>{weatherInfo?.condition?.text}</h3>
                <div className={styles["temperature"]}>{Math.round(weatherInfo.temp_c)}°</div>
                <div>{city}</div>
            </div>
        </div>)}
        </>
    )
}