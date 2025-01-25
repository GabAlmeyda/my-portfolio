import styles from './Form.module.css'

/**
 * Renders a customizable form element.
 * 
 * @param {function} handleSubmit - Function to handle the form submission;
 * @param {string} method - The HTTP method for the form (e.g., 'POST', 'GET');
 * @param {string} [customClass] - Opcional CSS  class to apply additional styles;
 * @param {JSX.Element | JSX.Element[]} children - The children elements to be rendered inside the form.
 * 
 * @returns {JSX.Element} A JSX element representing the form.
 */
function Form({ handleSubmit, method, customClass, children }) {

	return (<form onSubmit={handleSubmit} className={`${styles.form} ${customClass}`} method={method}>
		{children}
	</form>)
}

export default Form