import styles from './ToolContainer.module.css'

function ToolContainer({ name, icon, color }) {

    return (
        <div className={styles.tool_container}>
            <span style={{color: color}}>{icon}</span>
            <p style={{color: color}}>{name}</p>
        </div>
    )
}

export default ToolContainer