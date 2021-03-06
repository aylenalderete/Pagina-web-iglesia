import React from 'react'
import Imagen from '../../Assets/Carrousel/1.jpg'
import ReunionJueves from '../../Assets/Reuniones/ReunionJueves.jpeg'
import ReunionDomingo from '../../Assets/Reuniones/ReunionDomingo.jpeg'
import Styles from './Reuniones.module.css'

function Reuniones() {
    return (
        <div className={Styles.cardsContainer}>
            <div className={Styles.card}>
                <img className={Styles.img} src={ReunionJueves}></img>
                <spam className={Styles.description}>Reunion general 20hs</spam>
                <button className={Styles.btn}>Ver culto online</button>
            </div>
            <div className={Styles.card}>
                <img className={Styles.img} src={Imagen}></img>
                <spam className={Styles.cardTitle}>Sabado</spam>
                <spam className={Styles.description}>Jovenes y adolescentes 20hs</spam>
                <button className={Styles.btn}>Ver culto online</button>
            </div>
            <div className={Styles.card}>
                <img className={Styles.img} src={ReunionDomingo}></img>
                <spam className={Styles.description}>Reunion general 19hs</spam>
                <button className={Styles.btn}>Ver culto online</button>
            </div>
        </div>
    )
}

export default Reuniones
