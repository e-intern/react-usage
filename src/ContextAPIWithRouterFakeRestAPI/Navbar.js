import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">React App </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Anasayfa</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/users" className="nav-link">Kullanıcılar</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/add-user" className="nav-link">Yeni Kullanıcı</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home (TAG A)</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/users">Kullanıcılar (TAG A)</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
}
