import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

import styles from './Navbar.module.css'

import logo from '/logo.webp'

import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

import Waves from './Waves';

/**
 * Renders a custom &lt;navbar&gt; element.
 * 
 * The 'Navbar' component includes:
 * - A logo positioned at the left, linking to the homepage;
 * - A menu with navigation links positioned at the right;
 * - Responsive behavior, where the menu links are displayed horizontally on larger screens.
 * 
 * Features:
 * - Changes the background color dinamycally based on the page's background color;
 * - Smooth scrolling to internal links;
 * - Prevents page scrolling when the menu is open (on mobile).
 * 
 * @returns {JSX.Element} A JSX element representing the custom navbar.
 */
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
            console.log(sectionId);
            const section = document.getElementById(sectionId);
            console.log(section);
            if (section) section.scrollIntoView({ behavior: "smooth" });
        }
    }
    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = document.getElementById(location.state.scrollTo);
            if (section) section.scrollIntoView({ behavior: "smooth" });
        }
    }, [location.pathname]);

    useEffect(() => {
        if (isMenuVisible) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "visible";

        }
    }, [isMenuVisible]);

    return (<>
        <nav className={styles.navbar} aria-label='Navegação principal'>
            <div className={styles.logo} onClick={() => {if (isMenuVisible) toggleMenuVisibility()}}>
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
                <li role='menuitem'>
                    <a href='#about' onClick={(e) => {
                        handleInternalLink(e, "about");
                        toggleMenuVisibility();
                    }}>Sobre</a>
                </li>
                <li role='menuitem'>
                    <a href='#tools' onClick={(e) => {
                        handleInternalLink(e, "tools");
                        toggleMenuVisibility();
                    }}>Ferramentas</a>
                </li>
                <li role='menuitem'>
                    <Link to="/my-portfolio/projects" onClick={toggleMenuVisibility}>Projetos</Link>
                </li>
                <li role='menuitem'>
                    <Link to="/my-portfolio/contact" onClick={toggleMenuVisibility}>Contato</Link>
                </li>
            </ul>
        </nav>

        {isMenuVisible && <Waves waveFor="navbar" />}
    </>)
}

export default Navbar