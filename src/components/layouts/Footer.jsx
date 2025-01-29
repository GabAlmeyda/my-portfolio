import styles from './Footer.module.css'

import Waves from '../layouts/Waves'

/**
 * Renders a custom &lt;footer&gt; element.
 * 
 * This component renders a custom footer for the site. The footer background is based
 * at the **'Waves'** component, containing the copyright information of the site.
 * 
 * @returns {JSX.Element} A JSX element representing the custom footer.
 */
function Footer() {
    return (<footer className={styles.footer}>
        <div className={styles.waves}><Waves waveFor="footer"/></div>

        <p><small>Gabriel Almeyda &copy; 2024. Todos os direitos reservados</small></p>
    </footer>)
}

export default Footer