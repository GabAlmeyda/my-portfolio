import { devLangs } from '../../data/devLanguages'

import styles from './ProjectCard.module.css'

import Container from './Container'
import ToolContainer from './ToolContainer'

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