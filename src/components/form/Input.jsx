import styles from './Input.module.css'

function Input({ type="text", placeholder="Digite aqui", value="", label="", handleChange, name }) {

	return (<div className={styles.input_container}>
		<label htmlFor={name}>{label}</label>
		
		<input type={type} placeholder={placeholder} value={value} name={name} id={name} onChange={handleChange} required/>
	</div>)
}

export default Input