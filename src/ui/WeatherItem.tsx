import clsx from "clsx";
import { useWeatherItem } from "../bll/useWeatherItem";
import styles from './WeatherItem.module.css';

type WeatherItemProps = {
    city: string,
    deleteWeatherItem: (city: string) => void,
    isActive: boolean
}

export function WeatherItem({city, deleteWeatherItem, isActive}: WeatherItemProps) {
    const weatherInfo = useWeatherItem(city, deleteWeatherItem);

    const weatherItemClass = clsx({
        [styles.weather_item]: true,
        [styles.active]: isActive
    })

    return (
        <>
        {weatherInfo ? console.log(weatherInfo) : <div>Pupa</div>}
        {weatherInfo ? (<div className={weatherItemClass}>
            <div className={styles["weather_item_image"]}>
                <div className={styles.close} onClick={() => {deleteWeatherItem(city)}}>✖︎</div>
                <img src={weatherInfo?.condition?.icon} alt={weatherInfo?.condition?.text}  draggable={false}/>
            </div>
            
            <div className={styles["weather_item_text"]}>
                <h3>{weatherInfo?.condition?.text}</h3>
                <div className={styles["temperature"]}>{Math.round(weatherInfo.temp_c)}°</div>
                <div>{city}</div>
            </div>

            <div className={styles.details_grid}>
                <div className={styles.details_item}>
                    <span>Ощущается</span>
                    <strong>{weatherInfo?.feelslike_c}°C</strong>
                </div>
                
                <div className={styles.details_item}>
                    <span>Ветер</span>
                    <strong>{weatherInfo?.wind_kph} км/ч</strong>
                </div>
                
                <div className={styles.details_item}>
                    <span>Влажность</span>
                    <strong>{weatherInfo?.humidity}%</strong>
                </div>
                
                <div className={styles.details_item}>
                    <span>Осадки</span>
                    <strong>{weatherInfo?.chance_of_rain}%</strong>
                </div>
            </div>
        </div>) : (<h1>Загрузка...</h1>)}
        </>
    )
}