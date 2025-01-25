import styles from './Input.module.css'

/**
 * Renders a custom input element with a opcional label.
 * 
 * @param {string} [type = "text"] - The input type (e.g., 'text', 'number');  
 * @param {string} [placeholder = "Digite aqui"] - The placeholder text of the input field;
 * @param {string} value - The input initial value (controlled component);
 * @param {string} [label = ""] - The text of the input label;
 * @param {function} handleChange - Callback funtion triggered on input value change;
 * @param {string} [autoComplete = ""] - The autocomplete attribute of the input (e.g., 'email', 'tel');
 * @param {string} name - The name attribute of the input (required);
 * 
 * @returns {JSX.Element} A JSX element representing the input element.
 */
function Input({ type="text", placeholder="Digite aqui", value="", autoComplete="", label, handleChange, name }) {

	return (<div className={styles.input_container}>
		{label && <label htmlFor={name}>{label}</label>}
		
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={handleChange}
			autoComplete={autoComplete}
			name={name} id={name}
			required />
	</div>)
}

export default Input