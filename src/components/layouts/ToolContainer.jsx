import styles from './ToolContainer.module.css'

function ToolContainer({ name, icon, color, customClass }) {

    return (
        <div className={`${styles.tool_container} ${styles[customClass]}`}>
            <span style={{color: color}}>{icon}</span>
            {!customClass === "small_card" && <p style={{color: color}}>{name}</p>}
        </div>
    )
}

export default ToolContainer