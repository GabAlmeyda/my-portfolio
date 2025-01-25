import { devLangs } from '../../data/devLanguages'

import styles from './ProjectCard.module.css'

import Container from './Container'
import ToolContainer from './ToolContainer'

/**
 * Renders a customizable card to display projects.
 * 
 * If no custom class is provided, the card will be displayed in its smaller form. The smaller
 * form has limited width and height. Its content will includes only an image, the title and a truncated
 * text when it exceeds four lines.
 * 
 * Otherwise, if the 'full_card' custom class is provided, the card will be displayed in its larger form. The 
 * larger form has a width close the full avaliabe width, and the text won't be truncated. futhermore, a container
 * containing the languages used in the project will be displayed at the bottom, based in the **'ToolContainer'** component.
 * 
 * @param {string} name - The title displayed on the card (also the 'alt' text when the image could
 * not be loaded);
 * @param {string} img - The image path;
 * @param {string} [link] - An opcional link to the project site, displayed only if the 'full_card' 
 * custom class is present.
 * @param {Array<string>} [langs] - An opcional  array of language names used;
 * @param {string} [customClass] - The custom class of the 'ProjectCard' component. If the 'full_card'
 * custom class is present, the card will be displayed containing all the information about the
 * project.
 * @param {function} [handleClick] - A function to handle the clicks on the card. This function only is 
 * necessary when the 'full_card' custom class is not present;
 * @param {string} id - The 'id' attribute of the card (a &lt;div&gt; element);
 * @param {React.ReactNode} children - The content inside of the card. If the 'full_page' custom class
 * is not present, the content will be truncated when its height exceeds four lines, except for the image
 * and the title.
 * 
 * @returns {JSX.Element} a JSX element representing a custom project card container.
 */
function ProjectCard({ name, img, link, langs, customClass, handleClick, id, children }) {

    const fullCard = customClass === "full_card";

    return (<div className={`${styles.project} ${styles[customClass]}`} onClick={!fullCard ? handleClick : null} id={id}>
        <img src={img} alt={name} />
        {fullCard ? (<h2>{name}</h2>) : (<h3>{name}</h3>)}
        
        <hr />

        <div className={styles.children}>
            {children}
        </div>

        {fullCard && (<>
            <h3>Ferramentas utilizadas</h3>

            <Container customClass="row center">
                {devLangs.map(langData => {
                    if (langs.includes(langData.name)) {
                        return <ToolContainer
                            {...langData}
                            customClass="small_card"
                            key={langData.name} />;
                    }
                    else {
                        return null;
                    }
                })}
            </Container>
            <div className={styles.btn_container}>
                <a href={link} target='_blank' rel='noopener noreferre'>
                    Conheça o projeto
                </a>
            </div>
        </>)}
    </div>)
}

export default ProjectCard