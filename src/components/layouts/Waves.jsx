import styles from './Waves.module.css'

import headerWave_1 from '../../images/waves/header-wave(1).svg'
import headerWave_2 from '../../images/waves/header-wave(2).svg'
import headerWave_3 from '../../images/waves/header-wave(3).svg'
import headerWave_4 from '../../images/waves/header-wave(4).svg'

import navbarWave_1 from '../../images/waves/navbar-wave(1).svg'
import navbarWave_2 from '../../images/waves/navbar-wave(2).svg'
import navbarWave_3 from '../../images/waves/navbar-wave(3).svg'
import navbarWave_4 from '../../images/waves/navbar-wave(4).svg'

import footerWave_1 from '../../images/waves/footer-wave(1).svg'
import footerWave_2 from '../../images/waves/footer-wave(2).svg'
import footerWave_3 from '../../images/waves/footer-wave(3).svg'
import footerWave_4 from '../../images/waves/footer-wave(4).svg'

function Waves({ type }) {

	const objWaves = {
		header: [headerWave_1, headerWave_2, headerWave_3, headerWave_4],
		navbar: [navbarWave_1, navbarWave_2, navbarWave_3, navbarWave_4],
		footer: [footerWave_1, footerWave_2, footerWave_3, footerWave_4]
	}

	return (<>
		{objWaves[type] ? (
			<div className={`${styles.waves} ${styles[type]}`}>
				<img src={objWaves[type][0]} />
				<img src={objWaves[type][1]} />
				<img src={objWaves[type][2]} />
				<img src={objWaves[type][3]} />
			</div>
		) : 
			console.error(`Error in 'Waves' component: \n\nWave type is ${type}. \nWave list is ${objWaves[type]}`)
		}

	</>)
}

export default Waves