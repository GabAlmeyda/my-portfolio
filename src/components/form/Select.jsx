import styles from './Select.module.css'

/**
 * Renders a select element with a optional label.
 * 
 * @param {string | number} value - The input initial value;
 * @param {Array} options - The array containing the select's options;
 * @param {string} [label] - An optional label for the select element;
 * @param {function} handleChange - Callback funtion triggered on select value change;
 * @param {string} name - The select name attribute.
 * 
 * @returns {JSX.Element} A JSX element representing the select field
 */
function Select({ value, options, label, handleChange, name }) {
	
	return (<div className={styles.select_container}>
		{label && <label htmlFor={name}>{label}</label>}

		<select onChange={handleChange} name={name} id={name} value={value} required>
			<option value="" disabled>Selecione uma opção</option>
			{options.map((text, index) => (
				<option value={text} key={index}>{text}</option>
			))}
		</select>
	</div>)
}

export default Select