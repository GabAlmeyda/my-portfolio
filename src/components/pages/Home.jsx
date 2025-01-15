import styles from './Home.module.css'

import { useNavigate } from 'react-router-dom'

import Header from '../layouts/Header'
import Section from '../layouts/Section'
import Container from '../layouts/Container'

import LanguageCards from '../cards/LanguageCards'
import ProjectCard from '../layouts/ProjectCard'
import LinkButton from '../layouts/LinkButton'

function Home() { 
    const navigate = useNavigate();

    function onProjectClick(e) {
        navigate("/my-portfolio/projects", { state: { id: e.currentTarget.id } });
    }

    return (<>
        <Header />

        {/* About section */}
        <Section id="about" customClass={styles.about}>
            <h2>Sobre mim</h2>

            <p>Meu nome é Gabriel Almeida de Lima, tenho 17 anos  e atuo como desenvolvedor full-stack que consegue desenvolver sites modernos e eficientes.</p>

            <p>Meu foco está na entrega rápida do produto, sem abrir mão da consistência, responsividade e segurança necessária para que o seu site seja seguro e completo.</p>

            <p>Minha experiência na criação de sites me ajudou a construir serviços com as mais novas e eficientes tecnologias do mercado, fazendo meu trabalho ser sempre o mais profissional e moderno possível.</p>
        </Section>

        {/* Tools section */}
        <Section id='tools' customClass={styles.tools}>
            <h2>Ferramentas</h2>
            <p>Para a construção eficaz dos meus sites, eu utilizo as seguintes ferramentas:</p>

            <LanguageCards />
        </Section>

        {/* Projects section */}
        <Section customClass={styles.projects} id='projects'>
            <h2>Me conheça pelos meus projetos</h2>
            <p>Aqui estão alguns projetos que eu desenvolvi. Sinta-se livre para explorar: </p>

            <Container customClass="marginTop">
                <ProjectCard name="Projeto Amazon" img="https://picsum.photos/300" handleClick={(e) => onProjectClick(e)} id="projectAmazon">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi fugit ad eaque quibusdam modi similique odit eos provident aut nemo eius corrupti animi exercitationem facilis blanditiis, nesciunt officiis odio ratione.</p>
                </ProjectCard>
    
                <ProjectCard name="Projeto Google" img="https://picsum.photos/301" handleClick={(e) => onProjectClick(e)} id="projectGoogle">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex facilis natus exercitationem molestiae cupiditate! Facere velit nostrum quas dolor distinctio iusto accusantium fuga laboriosam molestiae minima in, voluptatibus iste itaque!</p>
                </ProjectCard>
            </Container>

            <LinkButton text="Veja meus projetos" to="/my-portfolio/projects" customClass="important" />
        </Section>
 
        <Section id="contact" customClass={styles.contact}>
            <div className={styles.contact_container}>
                <h2>Precisa de algum serviço?</h2>
                <p>O seu site com segurança, eficiência e modernidade, tudo num lugar só.</p>
    
                <LinkButton to="/my-portfolio/contact" text="Contate-me" customClass="important" />
            </div>
        </Section>
        
    </>)
}

export default Home