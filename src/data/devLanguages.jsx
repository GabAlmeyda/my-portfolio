import {
    IoLogoFigma,IoLogoPython, IoLogoHtml5,
    IoLogoCss3, IoLogoJavascript, IoLogoReact
} from 'react-icons/io5'
import { IoIosGitBranch } from "react-icons/io";

// The array that contains all the languages rendered on the 'tools' 
// section of the 'Home' page. Each object must contain the name of the 
// language, the icon (as a React Icon component) and the color of the name and icon.
export const devLangs = [
        { name: "Figma", icon: <IoLogoFigma />, color: "purple" },
        { name: "Git", icon: <IoIosGitBranch />, color: "orangered" },
        { name: "Python", icon: <IoLogoPython />, color: "royalblue" },
        { name: "HTML5", icon: <IoLogoHtml5 />, color: "orangered" },
        { name: "CSS3", icon: <IoLogoCss3 />, color: "blue" },
        { name: "JavaScript", icon: <IoLogoJavascript />, color: "orange" },
        { name: "React", icon: <IoLogoReact />, color: "aqua" }
];