import React from 'react'
import './Navbar.css';

export default function Navbar() {
    return (
        <div>
            <header>
                <nav>
                    <h1 className="logo"><a href="/">WorkAway</a>.</h1>
                    <ul>
                        <li>Réservations</li>
                        <li>Compte</li>
                        <li>Contact</li>
                        <li>À propos</li>
                    </ul>
                    <button className="button">Connexion</button>
                </nav>
            </header>
        </div>
    )
}