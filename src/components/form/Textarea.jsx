import styles from './Textarea.module.css'

function Textarea({ placeholder, value, label, handleChange, name }) {

	return (<div className={styles.textarea_container}>
		<label htmlFor={name}>{label}</label>

		<textarea placeholder={placeholder} onChange={handleChange} value={value} name={name} id={name} required/>
	</div>)
}

export default Textarea