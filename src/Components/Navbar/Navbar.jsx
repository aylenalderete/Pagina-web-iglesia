import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.png'
import Styles from "./Navbar.module.css"

function Navbar() {
    return (
            <header className={Styles.NavbarContainer}>
                <div className={Styles.logoContainer}>
                    <img className={Styles.logo} src={Logo}></img>
                </div>
                <nav className={Styles.CategoriasContainer}>
                    <Link to='/' >Inicio</Link>
                    <Link to='/nuestra-historia' >Nuestra historia</Link>
                    <Link to='/ccdt-kids' >CCDT Kids</Link>
                    <Link to='/diezmos-ofrendas' >Diezmos y ofrendas</Link>
                    <Link to='/radio' >Radio en vivo</Link>
                </nav>
            </header>
    )
}

export default Navbar