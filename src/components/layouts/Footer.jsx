import { useEffect, useState } from 'react';

import styles from './Footer.module.css'

import Waves from '../layouts/Waves'

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
        <div className={styles.waves}><Waves type="footer" /></div>

        <p><small>Gabriel Almeyda &copy; 2024. Todos os direitos reservados</small></p>
    </footer>)
}

export default Footer