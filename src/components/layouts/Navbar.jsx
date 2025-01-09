import { Link } from 'react-router-dom'
import { useState } from 'react';

import styles from './Navbar.module.css'

import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

import logo from '../../images/logo.webp'

function Navbar() {

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    
    function toggleMenuVisibility() {
        setIsMenuVisible(!isMenuVisible);
    }

    return (<>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={logo} alt="Gabriel Almeyda" />
                </Link>
            </div>

            <label onClick={toggleMenuVisibility}>
                {isMenuVisible ? (
                    <AiOutlineMenuUnfold />
                ) : (
                    <AiOutlineMenuFold />
                )}
            </label>
        
            <ul className={isMenuVisible ? styles.visible : styles.hidden}>
                <li>
                    <a href="#about">About me</a>
                </li>
                <li>
                    <a href="#tools">Tools</a>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </>)
}

export default Navbar