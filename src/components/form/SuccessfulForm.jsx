import styles from './SuccessfulForm.module.css'

import LinkButton from '../layouts/LinkButton'
import Container from '../layouts/Container'
import { useEffect } from 'react'

function SuccessfulForm() {

	useEffect(() => {
		document.body.classList.add("full_page");

		return () =>  document.body.classList.remove("full_page")
	}, [])

	return (<Container customClass={`center ${styles.message_container}`} >
		<h2>Muito obrigado pelo seu envio!</h2>
		<p>Fico feliz em ver que confia em mim para resolver seu problema.</p>
		<p>Estarei enviando uma resposta o mais breve possível, então fique atento!</p>

		<LinkButton to="/my-portfolio" text="Voltar para a Home" customClass="important"/>
	</Container>)
}

export default SuccessfulForm