import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ user }) {
    const logout = () => {
        window.open("http://localhost:4000/auth/logout", "_self");
    };

    return (
        <div>
            <header>
                <nav>
                    <h1 className="logo"><Link to="/">MyEvents.</Link></h1>
                    <ul>
                        <li>Événements</li>
                        <Link to="/profil"><li>Compte</li></Link>
                        <li>Contact</li>
                        <li>À propos</li>
                    </ul>
                    {user ? (
                        <div>
                            <Link to="/profil">
                              
                            </Link>
                            <Link to="/logout"><button className="button" onClick={logout}>Déconnexion</button></Link>
                        </div>
                    ) : (
                            <Link to="/login"><button className="button">Connexion</button></Link>
                        )}
                </nav>
            </header >
        </div >
    )
}