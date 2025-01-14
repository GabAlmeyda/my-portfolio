import styles from './SubmitButton.module.css'

function SubmitButton({ text="" }) {

	return (<div className={styles.submit_container}>
		<button type="submit" className={styles.submit}>
			{text}
		</button>
	</div>)
}

export default SubmitButton