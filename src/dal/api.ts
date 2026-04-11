export const getWeatherCurrentCity = (city: string | null) => {
    const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=fdfe84f1ff0a4d558a5231435260801&q=${city}&aqi=no`)
        .then(response => response.json())

    return promise
}