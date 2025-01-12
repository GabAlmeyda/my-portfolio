import styles from './LinkButton.module.css'

import { Link } from 'react-router-dom'

function LinkButton({ to, text, customClass }) {

    return (<div className={`${styles.btn_container} ${styles[customClass]}`}>
        <button className={styles.btn}>
            <Link to={to}>
                {text}
            </Link>
        </button>
    </div>)
}

export default LinkButton