import styles from './Form.module.css'

function Form({ handleSubmit, method, customClass, children }) {

	return (<form onSubmit={handleSubmit} className={`${styles.form} ${customClass}`} method={method}>
		{children}
	</form>)
}

export default Form