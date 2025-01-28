import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import styles from "./Projects.module.css";

import ProjectCard from "../layouts/ProjectCard";
import Container from "../layouts/Container";

/**
 * Renders the 'Projects' page component.
 * 
 * This component brings together all the projects created. Each project card 
 * contains a image of the project, description, all languages and tecnologies 
 * used in the project and a button to the oficial website.
 * 
 * @returns {JSX.Element} The JSX element representing the 'Projects' page.
 */
function Projects() {
    const location = useLocation();

    // Verifies if the state contains a reference to a specific part of the page, 
    // on the 'scrollTo' pair key/value. If 'scrollTo' is defined, the page scrolls 
    // to the project part.
    useEffect(() => {
        if (location.state?.scrollTo) {
            const project = document.getElementById(location.state?.scrollTo);
            if (project) project.scrollIntoView({ behavior: "smooth" });
        }
    }, [location.pathname]);

    // This object is composed of the project name as key and the languages used as value.
    // Each language must be written the same way they are written in the 'devLangs' array,
    // locate at 'data/devLanguages.jsx'.
    const projectLangs = {
        projectAmazon: ["Figma", "HTML5", "CSS3", "JavaScript", "React"],
        projectGoogle: ["Figma", "HTML5", "CSS3", "React"],
        projectApple: ["HTML5", "CSS3", "React"],
    };

    return (<>
        <div className={styles.top}>
            <h1>Conheça meus projetos</h1>

            <p>
                Aqui estão os projetos mais relevantes em que participei.
                Fique à vontade para visitá-los se quiser ver melhor o
                resultado!
            </p>
        </div>

        <div className={styles.projects_container}>
            <Container customClass="column margin_top">
                <ProjectCard
                    name="Projeto Amazon"
                    img="https://picsum.photos/300"
                    langs={projectLangs.projectAmazon}
                    customClass="full_card"
                    projectLink="https://www.amazon.com.br/ "
                    id="projectAmazon"
                >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Repellat doloremque voluptatem quaerat itaque
                        illum dolorem? Eum amet tenetur ad magni quis sit,
                        tempore odio ipsam atque autem quasi laudantium!
                        Natus velit quos nulla aut maiores?
                    </p>
                </ProjectCard>

                <ProjectCard
                    name="Projeto Google"
                    img="https://picsum.photos/400"
                    langs={projectLangs.projectGoogle}
                    customClass="full_card"
                    projectLink="https://google.com"
                    id="projectGoogle"
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cupiditate consectetur in alias ut sequi aut
                        quibusdam, veniam incidunt, dignissimos omnis,
                        aliquam debitis quisquam? Facere quasi consequatur
                        corporis aliquam incidunt illo vitae commodi. Cum,
                        adipisci deserunt.
                    </p>
                </ProjectCard>

                <ProjectCard
                    name="Projeto Apple"
                    img="https://picsum.photos/500"
                    langs={projectLangs.projectApple}
                    customClass="full_card"
                    projectLink="https://apple.com"
                    id="projectApple"
                >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. A suscipit facilis voluptates numquam sequi
                        qui dicta explicabo quas ipsam voluptatum sit, in
                        delectus reiciendis quae nemo possimus alias ipsum
                        dolores.
                    </p>
                </ProjectCard>
            </Container>
        </div>
    </>);
}

export default Projects;
