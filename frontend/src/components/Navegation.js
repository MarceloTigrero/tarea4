import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navegation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg text-light bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light bg-dark" to="/">PST-TEORICO</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active text-light bg-dark" aria-current="page" to="/pregunta1">PREGUNTA 1</Link>
                                <Link className="nav-link text-light bg-dark" to="/pregunta2">PREGUNTA 2</Link>
                                <Link className="nav-link text-light bg-dark" to="/pregunta3">PREGUNTA 3</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
