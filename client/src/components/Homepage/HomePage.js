import logo from "../image/type.png"
import hero from "../image/hero.svg"
import { Link } from "react-router-dom"

import "./HomePage.css"

export default function HomePage() {
    return (
        <div>
            <section>
                <div className="hero">
                    <div className="hero-1">
                        <div className="hero-container-text">
                            <h3>Bienvenue à <span style={{ color: "#3a50f8" }}>WorkAway</span>.<br /> La solution du travail de demain.</h3>
                            <p>WorkAway est une plateforme qui met à disposition des espaces de travail dans les hôtels accessibles à tous et pour tous types de besoins.</p>
                            <div className="search-container">
                                <input className="search-date" type="date"/>
                                <input className="search-bar" type="search" placeholder="Ville" />
                                <img className="logo-type" src={logo} />
                                <select className="select-type">
                                    <option>Type d'espace</option>
                                    <option>Open space</option>
                                    <option>Bureau fermé</option>
                                    <option>Salle de réunion</option>
                                </select>
                                <Link to="/search">
                                    <button className="button">Rechercher</button>
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
        </div>
    )
}
