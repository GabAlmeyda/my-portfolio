import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

import styles from './Navbar.module.css'

import logo from '/logo.webp'

import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

import Waves from './Waves';
import useViewport from '../../utils/useViewport';

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

    const viewport = useViewport();
    const largeScreen = viewport.width >= 1024;

    function toggleMenuVisibility() {
        if (!largeScreen) setIsMenuVisible(!isMenuVisible);
    }
    useEffect(() => {
        if (!largeScreen) document.body.classList.toggle("hidden", isMenuVisible);

        return () => document.body.classList.remove("hidden");
    }, [isMenuVisible]);

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
    }, [location.pathname]);

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
        
            <ul className={isMenuVisible && !largeScreen ? styles.visible : ''}
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