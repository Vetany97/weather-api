import { useEffect, useState } from "react"
import { getWeatherCurrentCity } from "../dal/api"

export function useWeatherItem(city: string | null) {
    const [weatherInfo, setWeatherInfo] = useState<string | null>(null)
    useEffect(() => {
        getWeatherCurrentCity(city)
        .then(json => {
            setWeatherInfo(json.current)})
    }, [city])
    
    return {weatherInfo}
}