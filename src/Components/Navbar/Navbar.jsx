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
                    <Link className={Styles.categoria} to='/' >Inicio</Link>
                    <Link className={Styles.categoria} to='/nuestra-historia' >Nuestra historia</Link>
                    <Link className={Styles.categoria} to='/ccdt-kids' >CCDT Kids</Link>
                    <Link className={Styles.categoria} to='/diezmos-ofrendas' >Diezmos y ofrendas</Link>
                    <Link className={Styles.categoria} to='/radio' >Radio en vivo</Link>
                </nav>
            </header>
    )
}

export default Navbar