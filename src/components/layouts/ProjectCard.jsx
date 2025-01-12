import styles from './ProjectCard.module.css'

function ProjectCard({ name, img, customClass, children }) {

    return (<div className={`${styles.project} ${styles[customClass]}`} >
        <img src={img} alt={name} />
        {customClass === "full_card" ? (
            <h2>{name}</h2>
        ): (
            <h3>{name}</h3>    
        )}
        <hr />

        <div className={styles.children}>
            {children}
        </div>
    </div>)
}

export default ProjectCard