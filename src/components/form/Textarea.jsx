import styles from './Textarea.module.css'

/**
 * Renders a textarea element with a optional label.
 * 
 * @param {string} placeholder - The textarea placeholder;
 * @param {string} value - The initial value of the textarea;
 * @param {string} [label] - An opcional label for the textarea field;
 * @param {function} handleChange - A callback function triggered when the textarea value change;
 * @param {string} name - The textarea element name attribute.
 * 
 * @returns {JSX.Element} A JSX element represent the textarea field.
 */
function Textarea({ placeholder, value, label, handleChange, name }) {

	return (<div className={styles.textarea_container}>
		{label && <label htmlFor={name}>{label}</label>}

		<textarea placeholder={placeholder} onChange={handleChange} value={value} name={name} id={name} required/>
	</div>)
}

export default Textarea