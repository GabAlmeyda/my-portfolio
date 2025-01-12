import styles from './Container.module.css'

function Container(props) {

    const customClasses = props.customClass
        ? props.customClass.split(' ').map(className => styles[className] || className).join(' ')
        : '';

    return (<div className={`${styles.container} ${customClasses}`} >
        {props.children}
    </div>)
}

export default Container