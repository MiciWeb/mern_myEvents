import hero from "../../image/hero.svg"
import { Link } from "react-router-dom"
import "./HomePage.css"
import { useState } from 'react'
import Select from 'react-select';
import { options } from "../city-data"

export default function HomePage(props) {
    const [city, setCity] = useState("")
    const [startDate, setStartDate] = useState("")

    return (
        <div>
            <section>
                <div className="hero">
                    <div className="hero-1">
                        <div className="hero-container-text">
                            <h3>Bienvenue à <span style={{ color: "#3a50f8" }}>WorkAway</span>.<br /> La solution du travail de demain.</h3>
                            <p>WorkAway est une plateforme qui met à disposition des espaces de travail dans les hôtels accessibles à tous et pour tous types de besoins.</p>
                            <div className="search-container">
                                <Select
                                    defaultValue={setCity}
                                    onChange={setCity}
                                    options={options}
                                    defaultValue={{ label: "Ville", value: 0 }}
                                />
                                <br />
                                <Link to="/search" state={{ city: city.label, startDate: startDate, }}>
                                    <button
                                        className="button"
                                    >
                                        Rechercher
                                        </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hero-2">
                        <div className="hero-image-container">
                            <img src={hero} className="hero-image" />
                        </div>
                    </div>
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
            </section>
        </div >
    )
}
