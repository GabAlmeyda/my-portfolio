import styles from './Header.module.css'

import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

import LinkButton from './LinkButton'
import Waves from './Waves'

/**
 * Renders a custom hero header for the site.
 * 
 * The 'Header' component contains: 
 * - The title;
 * - The social media buttons;
 * - The Call-To-Action button, leading to the 'Contact' page component.
 * - A styled waves based in the 'Waves' component.
 * 
 * @returns {JSX.Element} a JSX element representing the main header of the site.
 */
function Header() {

    return (<header className={styles.header}>
        <h1>
            <span>Olá, me chamo</span>
            <span>Gabriel Almeida</span>.
        </h1>
        <p>Sou desenvolvedor full-stack e estou pronto para qualquer desafio.</p>

        <div className={styles.icons_container}>
            <a href='https://www.instagram.com/gabriel.almeyda_/' rel='noopener noreferrer' target='_blank'>
                <AiFillInstagram />
            </a>

            <a href='https://www.linkedin.com/in/gabriel-almeyda/' rel='noopender noreferre' target='_blank'>
                <AiFillLinkedin />
            </a>
        </div>

        <div className={styles.link_button}>
            <LinkButton to="/my-portfolio/contact" text="Contate-me" />
        </div>

        <div className={styles.waves}>
            <Waves waveFor="header" />
        </div>

    </header>)
}

export default Header