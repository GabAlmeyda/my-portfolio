import { useEffect, useState } from 'react';

import styles from './Footer.module.css'

import Waves from '../layouts/Waves'

/**
 * Renders a custom &lt;footer&gt; element.
 * 
 * This component renders a custom footer for the site. The footer background is based
 * at the **'Waves'** component, containing the copyright information of the site.
 * 
 * If the &lt;body&gt; element has the 'full_page' class, the footer's position is set 
 * to 'absolute', ensuring it to stay at the bottom of the site regardless the content height.
 * 
 * The component dinamycally detects changes to the body's class list using a MutationObserver
 * hook to toggle the 'isFullPage' state.
 * 
 * @returns {JSX.Element} A JSX element representing the custom footer.
 */
function Footer() {
    const [isFullPage, setIsFullPage] = useState(false);

    useEffect(() => {
        const body = document.body;

        const updateState = () => setIsFullPage(body.classList.contains("full_page"));

        updateState();

        const observer = new MutationObserver(updateState);
        observer.observe(body, { attributes: true, attributeFilter: ["class"] })
        
        return () => {
            observer.disconnect();
        }
    }, [])


    return (<footer className={`${styles.footer} ${isFullPage && styles.full_page}`}>
        <div className={styles.waves}><Waves waveFor="footer" /></div>

        <p><small>Gabriel Almeyda &copy; 2024. Todos os direitos reservados</small></p>
    </footer>)
}

export default Footer