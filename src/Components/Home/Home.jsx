import React from 'react'
import Styles from './Home.module.css'
import ImgPrincipal from '../../Assets/Carrousel/1.jpg'
import Reuniones from './Reuniones'

function Inicio() {
    return (
        <div>
            <div>
            </div>
            <div className={Styles.imgContainer}>
                <img className={Styles.imgPrincipal} src={ImgPrincipal}></img>
                <div className={Styles.titleContainer}>
                    <h1 className={Styles.h1}>Comunidad Cristiana</h1>
                    <p className={Styles.subtitle}>Una fe, una iglesia, una familia.</p>                   
                </div>
            </div>
            <div className={Styles.serviciosContainer}>
                <spam className={Styles.servicios}>Servicios</spam>
                <div>
                    <Reuniones />
                </div>
            </div>
        </div>
    )
}

export default Inicio
