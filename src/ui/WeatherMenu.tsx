import clsx from "clsx"
import styles from "./WeatherMenu.module.css"
import { useState } from "react"
const CITIES = ["Moscow", "New-York", "London", "Tokyo", "Ryazan", "Paris", "Berlin"];

type WeatherMenuProps  = {
    setCities: React.Dispatch<React.SetStateAction<string[]>>,
    cities: string[]
}

export function WeatherMenu({setCities, cities}: WeatherMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState<string>('');

    const weatherMenuClass = clsx({
        [styles.weather_menu_content]: true,
        [styles.active]: isOpen
    })

    const handleCity = (cityItem: string) => {
        if(!cities.includes(cityItem)) {
            setCities(prev => [...prev, cityItem])
        }
        setIsOpen(false)
    }

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault()
        if(!inputValue) return
        handleCity(inputValue)
        setInputValue('')
    }

    return (
        <div className={styles["weather_menu"]}>
            <button className={styles["weather_menu_btn"]} onClick={() => {setIsOpen(!isOpen)}}>
                {`☰  ${cities.length > 0 ? cities[cities.length - 1] : "Выбрать город"}`}
            </button>
            <nav className={weatherMenuClass}>
                <form onSubmit={handleSearchSubmit} className={styles.search_form}>
                    <div className={styles.search_wrapper}>
                        <input  type="text"  placeholder="Введите город..."  onChange={(e) => setInputValue(e.target.value)} className={styles.search_input} value={inputValue} />
                        <button type="submit" className={styles.search_btn}>Добавить</button>
                    </div>
                </form>
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