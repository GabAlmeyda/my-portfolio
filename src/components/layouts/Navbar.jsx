import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

import styles from './Navbar.module.css'

import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

import logo from '../../images/logo.webp'

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    function toggleMenuVisibility() {
        setIsMenuVisible(!isMenuVisible);
    }

    function handleInternalLink(e, sectionId) {
        e.preventDefault();

        if (location.pathname !== "/my-portfolio") {
            navigate("/my-portfolio", { state: { scrollTo: sectionId } });
        }
        else {
            const section = document.getElementById(sectionId);
            if (section) section.scrollIntoView({ behavior: "smooth" });
        }
    }
    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = document.getElementById(location.state.scrollTo);
            if (section) section.scrollIntoView({ behavior: "smooth" });
        }
    }, [location])

    useEffect(() => {
        
        if (isMenuVisible) {
            document.body.classList.add("menuVisible");
            document.documentElement.classList.add("menuVisible");
        }
        else {
            document.body.classList.remove("menuVisible");
            document.documentElement.classList.remove("menuVisible");

        }
    }, [isMenuVisible]);

    return (<>
        <nav className={styles.navbar} aria-label='Navegação principal'>
            <div className={styles.logo}>
                <Link to="/my-portfolio">
                    <img src={logo} alt="Gabriel Almeyda" />
                </Link>
            </div>

            <label onClick={toggleMenuVisibility}
                aria-label='Alternar visibilidade do menu'
                aria-expanded={isMenuVisible}
            >
                {isMenuVisible ? (
                    <AiOutlineMenuUnfold />
                ) : (
                    <AiOutlineMenuFold />
                )}
            </label>
        
            <ul className={isMenuVisible ? styles.visible : styles.hidden}
                role='Menu'
            >
                <li>
                    <a href='#about' onClick={(e) => {
                        handleInternalLink(e, "about");
                        toggleMenuVisibility();
                    }}>Sobre</a>
                </li>
                <li>
                    <a href='#tools' onClick={(e) => {
                        handleInternalLink(e, "tools");
                        toggleMenuVisibility();
                    }}>Ferramentas</a>
                </li>
                <li>
                    <Link to="/my-portfolio/projects">Projetos</Link>
                </li>
                <li>
                    <Link to="/my-portfolio/contact">Contato</Link>
                </li>
            </ul>
        </nav>
        <div className={styles.bottomSpace}></div>
    </>)
}

export default Navbar