import styles from './NotFound.module.css'

import LinkButton from '../layouts/LinkButton'
import Navbar from '../layouts/Navbar'

import pageNotFound from '../../images/pageNotFound.png'

function NotFound() {

    return (<>
        <Navbar />

        <div className={styles.notFound_container}>
            <img src={pageNotFound} alt="Página não encontrada"/>
            <h1>Ops! Parece que essa página não existe!</h1>
            <h2>Erro 404 - Página não encontrada</h2>
            <p>A página que você tentou acessar foi movida, removida ou até mesmo nunca existiu.</p>

            <p>Que tal tentar acessar a <span>Home</span>? Garanto que ela existe.</p>
            <LinkButton
                to="/my-portfolio"
                text="Ir para a Home"
                customClass="orangeColor"
            />
        </div>
    </>)
}

export default NotFound