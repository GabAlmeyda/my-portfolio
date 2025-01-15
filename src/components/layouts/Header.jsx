import styles from './Header.module.css'

import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

import Navbar from './Navbar'
import LinkButton from './LinkButton'

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

        <LinkButton to="/my-portfolio/contact" text="Contate-me" customClass="important" />
    </header>)
}

export default Header