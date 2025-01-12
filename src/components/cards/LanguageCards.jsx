import Container from "../layouts/Container";
import ToolContainer from "../layouts/ToolContainer";

import {
    IoLogoFigma,IoLogoPython, IoLogoHtml5,
    IoLogoCss3, IoLogoJavascript, IoLogoReact
} from 'react-icons/io5'
import { IoIosGitBranch } from "react-icons/io";

function LanguageCards() {
    const devLangs = [
        { name: "Figma", icon: <IoLogoFigma />, color: "purple" },
        { name: "Git", icon: <IoIosGitBranch />, color: "orangered" },
        { name: "Python", icon: <IoLogoPython />, color: "royalblue" },
        { name: "HTML5", icon: <IoLogoHtml5 />, color: "orangered" },
        { name: "CSS3", icon: <IoLogoCss3 />, color: "blue" },
        { name: "JavaScript", icon: <IoLogoJavascript />, color: "orange" },
        { name: "React", icon: <IoLogoReact />, color: "aqua" }
    ];

    return (<Container customClass="marginTop">
        {devLangs.map(lang => (
            <ToolContainer key={lang.name} {...lang} />
        ))}
    </Container>)
}

export default LanguageCards