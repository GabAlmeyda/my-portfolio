import styles from './Section.module.css'

function Section(props) {

    return (<section id={props.id} className={`${styles.section} ${props.customClass}`}>
        {props.children}
    </section>)
}

export default Section