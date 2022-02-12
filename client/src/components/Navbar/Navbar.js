import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <div>
            <header>
                <nav>
                    <h1 className="logo"><Link to="/">WorkAway.</Link></h1>
                    <ul>
                        <li>Réservations</li>
                        <li>Compte</li>
                        <li>Contact</li>
                        <li>À propos</li>
                    </ul>
                    <Link to="/login"><button className="button">Connexion</button></Link>
                </nav>
            </header>
        </div >
    )
}