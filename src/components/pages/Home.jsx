import styles from './Home.module.css'

import Header from '../layouts/Header'
import Section from '../layouts/Section'

import LanguageCards from '../cards/LanguageCards'

function Home() { 

    return (<>
        <Header />

        <Section id="about" customClass={styles.about}>
            <h2>Sobre mim</h2>

            <p>Meu nome é Gabriel Almeida de Lima, tenho 17 anos  e sou um desenvolvedor full-stack que consegue desenvolver sites modernos e eficientes.</p>

            <p>Meu foco está na entrega rápida do produto, mas ainda conseguindo manter toda a consistência, responsividade e segurança necessária para que o seu site seja seguro e completo.</p>
        </Section>

        <Section id='tools' customClass={styles.tools}>
            <h2>Ferramentas</h2>
            <p>Para a construção eficaz dos meus sites, eu utilizo as seguintes ferramentas:</p>

            <LanguageCards />
        </Section>

        <Section customClass={styles.project} id='projects'>
            <h2>Me conheça pelos meus projetos</h2>
            <p>Aqui estão alguns projetos que eu desenvolvi. Sinta-se livre para explorar: </p>
        </Section>
        
    </>)
}

export default Home