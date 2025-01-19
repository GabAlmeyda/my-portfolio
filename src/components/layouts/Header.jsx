import styles from './Header.module.css'

import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

import tecCircle from '../../images/tec-circle.png'

import LinkButton from './LinkButton'
import Waves from './Waves'


function Header() {

    return (<header className={styles.header}>
        <h1>
            <p>Olá, me chamo</p>
            <span>Gabriel Almeida</span>.
        </h1>
        <p>Sou desenvolvedor full-stack e estou pronto para qualquer desafio.</p>

        <div className={styles.icons_container}>
            <a href='https://www.instagram.com/gab.almeyda/' rel='noopener noreferrer' target='_blank'>
                <AiFillInstagram />
            </a>

            <a href='https://www.linkedin.com/in/gabriel-almeyda/' rel='noopender noreferre' target='_blank'>
                <AiFillLinkedin />
            </a>
        </div>

        <div className={styles.link_button_container}>
            <span className={styles.link_button__circle}>
                <img src={tecCircle
                
                } alt="Círculo tecnológico" />
            </span>
           
            <span className={styles.link_button__btn}>
                <LinkButton to="/my-portfolio/contact" text="Contate-me" />
            </span>
        </div>

        <div className={styles.waves}><Waves type="header"/></div>

    </header>)
}

export default Header