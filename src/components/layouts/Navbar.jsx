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

        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: sectionId } });
        }
        else {
            const section = document.getElementById(sectionId);
            if (section) {

                // There is a issue with the scroll on internal links when the user is at the 'Home' page
                // on mobile displays.
                // When the user scrolls to the section, the view lands below the section.
                // The '100vh + 30px resolves the problem. The '50px' is the default offset value.
                if (!largeScreen) section.style.scrollMarginTop = 'calc((100vh + 30px) + 50px)';

                section.scrollIntoView()
            };
        }
    }
    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = document.getElementById(location.state.scrollTo);
            if (section) section.scrollIntoView();
        }
    }, [location.pathname]);

    return (<div className={styles.gridContainer}>
        <nav className={styles.navbar} aria-label='Navegação principal'>
            <div className={styles.logo} onClick={() => {if (isMenuVisible) toggleMenuVisibility()}}>
                <Link to="/">
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
                        toggleMenuVisibility();
                        handleInternalLink(e, "about");
                    }}>Sobre</a>
                </li>
                <li role='menuitem'>
                    <a href='#tools' onClick={(e) => {
                        toggleMenuVisibility();
                        handleInternalLink(e, "tools");
                    }}>Ferramentas</a>
                </li>
                <li role='menuitem'>
                    <Link to="/projects" onClick={toggleMenuVisibility}>Projetos</Link>
                </li>
                <li role='menuitem'>
                    <Link to="/contact" onClick={toggleMenuVisibility}>Contato</Link>
                </li>
            </ul>
        </nav>

        {isMenuVisible && <Waves waveFor="navbar" />}
    </div>)
}

export default Navbar