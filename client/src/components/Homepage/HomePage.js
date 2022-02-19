import hero from "../../image/hero.svg"
import { Link } from "react-router-dom"
import "./HomePage.css"
import { useState } from 'react'
import Select from 'react-select';
import { options } from "../city-data"

export default function HomePage(props) {
    const [city, setCity] = useState("")

    return (
        <div>
            <section>
                <div className="hero">
                    <div className="hero-1">
                        <div className="hero-container-text">
                            <h3>Bienvenue à <span style={{ color: "#0FD054" }}>MyEvents.</span><br /> Le site qui répertorie les événements de demain.</h3>
                            <p>MyEvents est une plateforme qui réunit tout les événements proche de chez vous et qui vous permet de créer des sorties entre futurs ami(e)s.</p>
                            <div className="search-container">
                                <Select
                                    defaultValue={setCity}
                                    onChange={setCity}
                                    options={options}
                                    defaultValue={{ label: "Ville", value: 0 }}
                                    className="select-search"
                                />
                                <br />
                                <Link to="/search" state={{ city: city.label }}>
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
