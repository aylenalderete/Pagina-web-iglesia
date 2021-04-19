import React from 'react';
import Logo from '../../Assets/logo.png'
import Styles from "./Navbar.module.css"

function Navbar() {
    return (
            <nav className={Styles.NavbarContainer}>
                <div>
                    <img src={Logo}></img>
                </div>
                <div className={Styles.CategoriasContainer}>
                    <span>Inicio</span>
                    <span>Nuestra historia</span>
                    <span>Anuncios</span>
                    <span>CCDT Kids</span>
                    <span>Diezmos y ofrendas</span>
                    <span>Radio en vivo</span>
                </div>
            </nav>
    )
}

export default Navbar