import { useEffect, useState } from "react"
import { getWeatherCurrentCity, type WeatherInfoCurrent } from "../dal/api"



export function useWeatherItem(city: string | null, deleteWeatherItem: (city: string) => void): WeatherInfoCurrent | null{
    const [weatherInfo, setWeatherInfo] = useState<WeatherInfoCurrent | null>(null)
    useEffect(() => {
        if(!city) return 

        getWeatherCurrentCity(city)
        .then(json => {
            const data:WeatherInfoCurrent = json.current
            setWeatherInfo(data)})
        .catch((error) => {
            alert(`Ошибка: ${error.message}. Такой город не существует!`);

            deleteWeatherItem(city)
        })
    }, [city])
    
    return weatherInfo
}