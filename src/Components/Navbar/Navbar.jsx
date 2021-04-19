import React from 'react';
import Logo from '../../Assets/logo.png'
import Styles from "./Navbar.module.css"

function Navbar() {
    return (
            <header className={Styles.NavbarContainer}>
                <div className={Styles.logoContainer}>
                    <img className={Styles.logo} src={Logo}></img>
                </div>
                <nav className={Styles.CategoriasContainer}>
                    <span className={Styles.categoria}>Inicio</span>
                    <span className={Styles.categoria}>Nuestra historia</span>
                    <span className={Styles.categoria}>CCDT Kids</span>
                    <span className={Styles.categoria}>Diezmos y ofrendas</span>
                    <span className={Styles.categoria}>Radio en vivo</span>
                </nav>
            </header>
    )
}

export default Navbar