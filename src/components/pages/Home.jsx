import styles from './Home.module.css'

import Header from '../layouts/Header'
import ToolContainer from '../layouts/ToolContainer'
import Container from '../layouts/Container'

import { IoLogoPython, IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoFigma } from 'react-icons/io5'
import { IoIosGitBranch } from "react-icons/io";

function Home() {

    const devLangs = [
        {
            name: "Figma",
            icon: <IoLogoFigma />,
            color: "purple"
        },
        {
            name: "Python",
            icon: <IoLogoPython />,
            color: "royalblue"
        },
        {
            name: "HTML5",
            icon: <IoLogoHtml5 />,
            color: "orangered"
        },
        {
            name: "CSS3",
            icon: <IoLogoCss3 />,
            color: "blue"
        },
        {
            name: "JS",
            icon: <IoLogoJavascript />,
            color: "orange"
        },
        {
            name: "React",
            icon: <IoLogoReact />,
            color: "aqua"
        },
        {
            name: "Git",
            icon: <IoIosGitBranch />,
            color: "orangered"
        }
    ]
    
    return (<>
        <Header />

        <section id='#about' className={`${styles.section} ${styles.about}`}>
            <h2>Sobre mim</h2>

            <p>Meu nome é Gabriel Almeida de Lima, tenho 17 anos  e sou um desenvolvedor full-stack que consegue desenvolver sites modernos e eficientes.</p>

            <p>Meu foco está na entrega rápida do produto, mas ainda conseguindo manter toda a consistência, responsividade e segurança necessária para que o seu site seja seguro e completo.</p>
        </section>

        <section id='#tools' className={`${styles.section} ${styles.tools}`}>
            <h2>Ferramentas</h2>
            <p>Para a construção eficaz dos meus sites, eu utilizo as seguintes ferramentas:</p>

            <Container>
                {devLangs.map(lang => (
                    <ToolContainer key={lang.name}
                        name={lang.name}
                        icon={lang.icon}
                        color={lang.color}
                    />
                ))}
            </Container>
        </section>
        
    </>)
}

export default Home