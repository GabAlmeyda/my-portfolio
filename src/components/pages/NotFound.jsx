import styles from './NotFound.module.css'

import LinkButton from '../layouts/LinkButton'

import pageNotFound from '../../images/pageNotFound.png'

/**
 * Renders the 'Not found' page component.
 * 
 * This component is displayed when a user navigates to a URL that does not match any existing page.
 * 
 * @returns {JSX.Element} A JSX element displayed for 404 erros.
 */
function NotFound() {

    return (<>
        <main className={styles.notFound_container}>
            <img src={pageNotFound} alt="Página não encontrada"/>
            <h1>Ops! Parece que essa página não existe!</h1>
            <h2>Erro 404 - Página não encontrada</h2>
            <p>A página que você tentou acessar foi movida, removida ou até mesmo nunca existiu.</p>

            <p>Que tal tentar acessar a <span>Home</span>? Garanto que ela existe.</p>
            <div className={styles.linkButton}>
                <LinkButton
                    to="/"
                    text="Ir para a Home"
                    customClass="orange_color"
                />
            </div>
        </main>
    </>)
}

export default NotFound