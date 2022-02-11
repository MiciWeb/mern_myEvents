import logo from "../image/type.png"
import hero from "../image/hero.svg"
import { Link } from "react-router-dom"
import "./HomePage.css"
import Search from "../Search/Search"
import { useEffect, useState } from 'react'
import Select from 'react-select';

const options = [
    { label: 'Paris' },
    { label: 'Marseille' },
    { label: 'Lyon' },
    { label: 'Strasbourg' },
    { label: 'Nice' },
    { label: 'Toulouse' },
    { label: 'Nantes' },
    { label: 'Montpellier' },
    { label: 'Bordeaux' },
    { label: 'Lille' },
    { label: 'Rennes' },
    { label: 'Reims' },
    { label: 'Toulons' },
    { label: 'Grenoble' },
    { label: 'Dijon' },
];

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
                                        <button onClick={() => props.setCity(city.label)}
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
