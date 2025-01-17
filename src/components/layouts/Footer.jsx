import { useEffect, useState } from 'react';
import styles from './Footer.module.css'
import { useLocation } from 'react-router-dom';

function Footer() {
    const [isFullPage, setIsFullPage] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsFullPage(document.body.classList.contains("full_page"));
     }, [location.pathname]);


    return (<footer className={`${styles.footer} ${isFullPage && styles.full_page}`}>
        <p><small>Gabriel Almeyda &copy; 2024. Todos os direitos reservados</small></p>
    </footer>)
}

export default Footer