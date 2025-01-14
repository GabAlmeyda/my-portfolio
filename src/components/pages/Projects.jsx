import { devLangs } from '../../data/devLanguages'

import styles from './Projects.module.css'

import Navbar from '../layouts/Navbar'
import ProjectCard from '../layouts/ProjectCard'
import Container from '../layouts/Container'
import ToolContainer from '../layouts/ToolContainer'

function Projects() {

    // This object is composed of the project name as key and the languages used as value. Each language must be written the same way they are written in the 'devLangs' array.
    const projectsLangs = {
        amazon: ["Figma", "HTML5", "CSS3", "JavaScript", "React"],
        google: ["Figma", "HTML5", "CSS3", "React"],
        apple: ["HTML5", "CSS3", "React"]
    }

    return (<>
        <Navbar />

            <div className={styles.top}>
                <h1>Conheça meus projetos</h1>
    
                <p>Aqui estão os projetos mais relevantes em que participei. Fique à vontade para visitá-los se quiser ver melhor o resultado!</p>
            </div>

            <div className={styles.projects_container}>
                <Container customClass="marginTop">
                    <ProjectCard name="Projeto Amazon" img="https://picsum.photos/300" customClass="full_card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque voluptatem quaerat itaque illum dolorem? Eum amet tenetur ad magni quis sit, tempore odio ipsam atque autem quasi laudantium! Natus velit quos nulla aut maiores?</p>
    
                        <h3>Ferramentas utilizadas</h3>
                        
                        <Container customClass="row center">
                            {devLangs.map(langData => {
                                if (projectsLangs.amazon.includes(langData.name)) {
                                    return <ToolContainer
                                        {...langData}
                                        customClass="small_card"
                                        key={langData.name}
                                    />
                                }
                                else {
                                    return null
                                }
                            })}
                        </Container>
                    </ProjectCard>
    
                    <ProjectCard name="Projeto Google" img="https://picsum.photos/400" customClass="full_card">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consectetur in alias ut sequi aut quibusdam, veniam incidunt, dignissimos omnis, aliquam debitis quisquam? Facere quasi consequatur corporis aliquam incidunt illo vitae commodi. Cum, adipisci deserunt.</p>
    
                        <h3>Ferramentas utilizadas</h3>
                        
                        <Container customClass="row center">
                            {devLangs.map(langData => {
                                if (projectsLangs.google.includes(langData.name)) {
                                    return <ToolContainer
                                        {...langData}
                                        customClass="small_card"
                                        key={langData.name}
                                    />
                                }
                                else {
                                    return null
                                }
                            })}
                        </Container>
                    </ProjectCard>
    
                    <ProjectCard name="Projeto Apple" img="https://picsum.photos/500" customClass="full_card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit facilis voluptates numquam sequi qui dicta explicabo quas ipsam voluptatum sit, in delectus reiciendis quae nemo possimus alias ipsum dolores.</p>
    
                        <h3>Ferramentas utilizadas</h3>
                        
                        <Container customClass="center row">
                            {devLangs.map(langData => {
                                if (projectsLangs.apple.includes(langData.name)) {
                                    return <ToolContainer
                                        {...langData}
                                        customClass="small_card"
                                        key={langData.name}
                                    />
                                }
                                else {
                                    return null
                                }
                            })}
                        </Container>
                    </ProjectCard>
                </Container>
            </div>
    </>)
}

export default Projects