import styles from './SuccessfulForm.module.css'

import LinkButton from '../layouts/LinkButton'
import Container from '../layouts/Container'
import { useEffect } from 'react'

/**
 * Renders a message to inform the user that the form submission was successfully.
 * 
 * @returns {JSX.Element} A JSX element representing the successfully message for the submission action.
 */
function SuccessfulForm() {

	useEffect(() => {
		document.body.classList.add("full_page");

		return () =>  document.body.classList.remove("full_page")
	}, [])

	return (<Container customClass={`center column ${styles.message_container}`} >
		<h2>Muito obrigado pelo seu envio!</h2>
		<p>Fico feliz em ver que confia em mim para resolver seu problema.</p>
		<p>Estarei enviando uma resposta o mais breve possível, então fique atento!</p>

		<LinkButton to="/" text="Voltar para a Home" customClass="important"/>
	</Container>)
}

export default SuccessfulForm