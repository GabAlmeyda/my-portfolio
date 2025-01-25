import React from 'react';
import styles from './Container.module.css'

/**
 * Renders a customizable container component.
 * 
 * @param {Object} props - The propertires passed to the component; 
 * @param {string} props.customClass - The 'Container' component custom classes,
 * each of them mapped in the 'styles' object of the 'Container' component. If a 
 * class does not exist, it won't be applied;
 * @param {React.ReactNode} props.children - The content to be rendered inside of the component.
 * 
 * @returns {JSX.Element} A JSX element representing a custom container.
 * 
 * @example
 * //Example usage:
 * <Container customClass='marginTop'>
 *  <p>This is inside of the component</p>
 * <Container />
 */
function Container(props) {

    // Map all the custom classes passed in the 'props.customClasses' to be used in the 'styles' object.
    const customClasses = props.customClass
        ? props.customClass.split(' ').map(className => styles[className] || className).join(' ')
        : '';

    return (<div className={`${styles.container} ${customClasses}`} >
        {props.children}
    </div>)
}

export default Container