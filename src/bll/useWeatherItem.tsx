import { useEffect, useState } from "react"
import { getWeatherCurrentCity } from "../dal/api"

type WeatherInfo = {
    condition: {text: string},
    temp_c: number
}

export function useWeatherItem(city: string | null): WeatherInfo | null{
    const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null)
    useEffect(() => {
        if(!city) return 

        getWeatherCurrentCity(city)
        .then(json => {
            const data:WeatherInfo = json.current
            setWeatherInfo(data)})
    }, [city])
    
    return weatherInfo
}