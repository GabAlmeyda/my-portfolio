import styles from './Select.module.css'

function Select({ value = "", options, label, handleChange, name }) {
	
	return (<div className={styles.select_container}>
		<label htmlFor={name}>{label}</label>

		<select onChange={handleChange} name={name} id={name} value={value} required>
			<option value="" disabled>Selecione uma opção</option>
			{options.map((text, index) => (
				<option value={text} key={index}>{text}</option>
			))}
		</select>
	</div>)
}

export default Select