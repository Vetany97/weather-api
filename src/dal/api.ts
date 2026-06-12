export type WeatherInfo = {
    current: WeatherInfoCurrent
}

export type WeatherInfoCurrent = {
    condition: {
        text: string
        icon: string
    },
    temp_c: number,
    feelslike_c: number,
    wind_kph: number,
    humidity: number,
    chance_of_rain: number
}

export const getWeatherCurrentCity = (city: string | null) => {
    const promise: Promise<WeatherInfo> = fetch(`http://api.weatherapi.com/v1/current.json?key=fdfe84f1ff0a4d558a5231435260801&q=${city}&aqi=no`)
        .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error("Город не найден");
            }})

    return promise
}
