import styles from './Home.module.css'

import Header from '../layouts/Header'
import Section from '../layouts/Section'
import Container from '../layouts/Container'

import LanguageCards from '../cards/LanguageCards'
import ProjectCard from '../layouts/ProjectCard'
import LinkButton from '../layouts/LinkButton'

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

        <Section customClass={styles.projects} id='projects'>
            <h2>Me conheça pelos meus projetos</h2>
            <p>Aqui estão alguns projetos que eu desenvolvi. Sinta-se livre para explorar: </p>

            {/* Create a function that, when the user clicks on the card, directs the user to the project on the 'Projects' page */}      
            <Container customClass="marginTop">
                <ProjectCard name="Projeto Amazon" img="https://picsum.photos/300">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi fugit ad eaque quibusdam modi similique odit eos provident aut nemo eius corrupti animi exercitationem facilis blanditiis, nesciunt officiis odio ratione.</p>
                </ProjectCard>
    
                <ProjectCard name="Projeto Google" img="https://picsum.photos/301">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex facilis natus exercitationem molestiae cupiditate! Facere velit nostrum quas dolor distinctio iusto accusantium fuga laboriosam molestiae minima in, voluptatibus iste itaque!</p>
                </ProjectCard>
            </Container>

            <LinkButton text="Veja meus projetos" to="/projects" customClass="important" />
        </Section>
 
        <Section id="contact" customClass={styles.contact}>
            <div className={styles.contact_container}>
                <h2>Precisa de algum serviço?</h2>
                <p>Estou a postos para fazer o melhor site, no menor tempo possível</p>
    
                <LinkButton to="/contact" text="Contate-me" customClass="important" />
            </div>
        </Section>
        
    </>)
}

export default Home