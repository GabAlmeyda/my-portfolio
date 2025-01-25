import styles from './LinkButton.module.css'

import { Link } from 'react-router-dom'

/**
 * Renders a link button for navigation between pages using the 'Link' component.
 * 
 * @param {string} to - The pathname to navigate;
 * @param {string} text - The text displayed in the button;
 * @param {string} [customClass] - The opcional custom classes to be applied by the component,
 * each of them mapped in the 'styles' object of the component. If a class does not
 * exist in the 'styles', it won't be applied.
 *  
 * @returns {JSX.Element} A JSX element representing a button to navigate between pages.
 * 
 * @example
 * // example usage:
 * <LinkButton
 *  to='my-page/about'
 *  text='Go to about'
 *  customClass='orangeColor'
 * />
 */
function LinkButton({ to, text, customClass }) {

    return (<div className={`${styles.btn_container} ${styles[customClass]}`}>
        <button className={styles.btn}>
            <Link to={to}>
                {text}
            </Link>
        </button>
    </div>)
}

export default LinkButton