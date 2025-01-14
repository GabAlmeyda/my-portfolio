import styles from './Input.module.css'

function Input({ type="text", placeholder="Digite aqui", value="", label="", handleChange, autoComplete="", name }) {

	return (<div className={styles.input_container}>
		<label htmlFor={name}>{label}</label>
		
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