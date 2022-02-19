import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';


export default function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
            <div className="container-fluid">
                <Link to="/">
                    <a className="navbar-brand">UNLASOFT</a>
                
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">QUIENES SOMOS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">SERVICIOS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">SOFTWARE</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        PRODUCTOS
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><NavLink to="/categoria/almacenamiento">ALMACENAMIENTO</NavLink></li>
                        <li><NavLink to="/categoria/computadoras">COMPUTADORAS DE ESCRITORIO</NavLink></li>
                        <li><NavLink to="/categoria/procesadores">PROCESADORES</NavLink></li>
                        <li><NavLink to="/categoria/procesadores">MOTHERBOARDS</NavLink></li>
                        <li><NavLink to="/categoria/memoriasram">MEMORIAS RAM</NavLink></li>
                        <li><NavLink to="/categoria/gabinetes">GABINETES</NavLink></li>                   
                        <li><NavLink to="/categoria/monitores">MONITORES</NavLink></li>
                        <li><NavLink to="/categoria/perifericos">PERIFERICOS</NavLink></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><NavLink to="/categoria/rigs">RIGS DE MINERIA</NavLink></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">CONTACTO</a>
                    </li>
                </ul>
                <span id='btnCart' className='btnNavBar btn m-2'>
                    <CartWidget/>
                </span> 
                <form className="d-flex">
                    <input className="form-control me-2" type="search" aria-label="Search"/>
                    <button className="btn btn-outline-success btnNavBar text-white" type="submit">Buscar</button>
                </form>
                </div>
            </div>
        </nav>
    );
};