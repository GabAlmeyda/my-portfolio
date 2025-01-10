import styles from './ToolContainer.module.css'

function ToolContainer({ name, icon, color }) {

    return (
        <div className={styles.tool_container}>
            <span style={{color: color}}>{icon}</span>
            <h3 style={{color: color}}>{name}</h3>
        </div>
    )
}

export default ToolContainer