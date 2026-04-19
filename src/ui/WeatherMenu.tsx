import clsx from "clsx"
import styles from "./WeatherMenu.module.css"
import { useState } from "react"

type WeatherMenuProps  = {
    setCity: (city: string) => void,
    city: string
}

export function WeatherMenu({setCity, city}: WeatherMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    const weatherMenuClass = clsx({
        [styles.weather_menu_content]: true,
        [styles.active]: isOpen
    })

    const CITIES = ["Moscow", "New-York", "London", "Tokyo", "Ryazan"];

    const handleCity = (cityItem: string) => {
        setCity(cityItem)
        setIsOpen(false)
    }

    return (
        <div className={styles["weather_menu"]}>
            <button className={styles["weather_menu_btn"]} onClick={() => {setIsOpen(!isOpen)}}>
                {`☰  ${city}`}
            </button>
            <nav className={weatherMenuClass}>
                {CITIES.map((cityItem) => {
                    const weatherMenuButtonClass = clsx({
                        [styles.active]: cityItem === city
                    })

                    return (
                        <button key={cityItem} className={weatherMenuButtonClass} onClick={() => {handleCity(cityItem)}}>{cityItem}</button>
                    )
                })}
            </nav>
        </div>
    )
}