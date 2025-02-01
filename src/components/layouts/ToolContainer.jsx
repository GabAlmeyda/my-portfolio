import styles from './ToolContainer.module.css'

/**
 * Renders a custom container for used languages and technologies.
 * 
 * This component display a &lt;div&gt; element with an icon and a name of the 
 * language/technology with a specified color. If the 'small_card' custom class 
 * is passed, the name of the language won't be displayed and the width of the 
 * &lt;div&gt; element will be flexible.
 * 
 * @param {string} name - The text to be displayed in the container;
 * @param {React.ReactNode} icon - The rendered icon component to be displayed in the container;
 * @param {string} color - The color of the name and the icon in the container;
 * @param {string} customClass - The custom classes of the 'ToolContainer' component.
 * If the class matches a key in the 'styles' object, it will be mapped. Otherwise, it 
 * will be applied directly. 
 * 
 * @returns {JSX.Element} A JSX element representing the custom tool container.
 * 
 * @example
 * // Example usage:
 * <ToolContainer 
 *  name="React"
 *  icon={<IoLogoReact />}
 *  color="aqua"
 *  customClass="small_card"
 * />
 */
function ToolContainer({ name, icon, color, customClass }) {

    return (
        <div className={`${styles.tool_container} ${styles[customClass]}`}>

            {(customClass === "small_card") ? (
                <span title={name} style={{color: color}}>{icon}</span>
            ) : (
                <>
                    <span style={{ color: color }}>{icon}</span>
                    <p style={{ color: color }}>{name}</p>
                </>
            )}
        </div>
    )
}

export default ToolContainer