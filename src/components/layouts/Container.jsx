import React from 'react';
import styles from './Container.module.css'

/**
 * Renders a customizable container component.
 * 
 * @param {string} customClass - The 'Container' component's custom classes,
 * each of them mapped in the 'styles' object of the 'Container' component. If a 
 * class does not exist, it won't be applied;
 * @param {React.ReactNode} children - The content to be rendered inside of the component.
 * 
 * @returns {JSX.Element} A JSX element representing a custom container.
 * 
 * @example
 * //Example usage:
 * <Container customClass='marginTop'>
 *  <p>This is inside of the component</p>
 * <Container />
 */
function Container({ customClass, children }) {

    // Map all the custom classes passed in the 'customClass' to be used in the 'styles' object.
    const customClasses = customClass
        ? customClass.split(' ').map(className => styles[className] || className).join(' ')
        : '';

    return (<div className={`${styles.container} ${customClasses}`} >
        {children}
    </div>)
}

export default Container