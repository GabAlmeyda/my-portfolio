import styles from './Section.module.css'

/**
 * Renders a customizable &lt;section&gt; element, with a &lt;h2&gt; element animation.
 * 
 * @param {Object} props - The properties passed to the component;
 * @param {string} props.id - The &lt;section&gt; element's  id;
 * @param {string} props.customClass - The 'Section' custom classes. Each of them
 * mapped in the 'styles' object of the 'Section' component. If the class does 
 * not exist, it won't be applied;
 * @param {React.ReactNode} props.children - The content inside of the 'Section' component.
 *  
 * @returns {JSX.Element} A JSX element representing the custom section.
 * 
 * @example
 * // Example usage:
 * <Section id="unique_id" customClass="orange_section">
 *  <h1>This is inside of the component.</h1>
 * </Section>
 */
function Section(props) {

    return (<section id={props.id} className={`${styles.section} ${styles.headingAnimation} ${props.customClass} section`}>
        {props.children}
    </section>)
}

export default Section