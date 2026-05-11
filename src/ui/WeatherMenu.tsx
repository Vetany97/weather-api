import clsx from "clsx"
import styles from "./WeatherMenu.module.css"
import { useState } from "react"

type WeatherMenuProps  = {
    setCities: React.Dispatch<React.SetStateAction<string[]>>,
    cities: string[]
}

export function WeatherMenu({setCities, cities}: WeatherMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    const weatherMenuClass = clsx({
        [styles.weather_menu_content]: true,
        [styles.active]: isOpen
    })

    const CITIES = ["Moscow", "New-York", "London", "Tokyo", "Ryazan"];

    const handleCity = (cityItem: string) => {
        
        if(!cities.includes(cityItem)) {
            setCities(prev => [...prev, cityItem])
            setIsOpen(false)
        }
    }

    return (
        <div className={styles["weather_menu"]}>
            <button className={styles["weather_menu_btn"]} onClick={() => {setIsOpen(!isOpen)}}>
                {`☰  ${cities[cities.length - 1]}`}
            </button>
            <nav className={weatherMenuClass}>
                {CITIES.map((cityItem) => {
                    const weatherMenuButtonClass = clsx({
                        [styles.active]: cities.includes(cityItem)
                    })

                    return (
                        <button key={cityItem} className={weatherMenuButtonClass} onClick={() => {handleCity(cityItem)}}>{cityItem}</button>
                    )
                })}
            </nav>
        </div>
    )
}