import styles from './SubmitButton.module.css'

/**
 * Renders a submit button for the form. This button will always trigger a form 
 * submission, with the submission logic handled in the 'Form' parent component.
 * 
 * @param {string} text - The button text. 
 * 
 * @returns {JSX.Element} A JSX element representing the submit button.
 */
function SubmitButton({ text="" }) {

	return (<div className={styles.submit_container}>
		<button type="submit" className={styles.submit}>
			{text}
		</button>
	</div>)
}

export default SubmitButton