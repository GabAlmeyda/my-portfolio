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

/**
 * Renders a custom wave style for specific components in the layout.
 * 
 * @param {string} waveFor - The component where the 'Wave' component 
 * is called. Possible values are: 
 * - **header**
 * - **navbar**
 * - **footer**
 * 
 * @returns {JSX.Element} A JSX element representing a set of four styled waves.
 * 
 * @throws Will log an error message to the console if the 'waveFor' property has an invalid value.
 */
function Waves({ waveFor }) {

	// This object is composed of pairs key/value. Each key representing the
	// component where the 'Wave' component is used. Each value is a array of
	// four images, representing the four different waves.
	const objWaves = {
		header: [headerWave_1, headerWave_2, headerWave_3, headerWave_4],
		navbar: [navbarWave_1, navbarWave_2, navbarWave_3, navbarWave_4],
		footer: [footerWave_1, footerWave_2, footerWave_3, footerWave_4]
	}

	return (<>
		{objWaves[waveFor] ? (
			<div className={`${styles.waves} ${styles[waveFor]}`}>
				<img src={objWaves[waveFor][0]} />
				<img src={objWaves[waveFor][1]} />
				<img src={objWaves[waveFor][2]} />
				<img src={objWaves[waveFor][3]} />
			</div>
		) : 
			console.error(`Error in 'Waves' component: \n\n'waveFor' is ${waveFor}. \nWave list is ${objWaves[waveFor]}`)
		}

	</>)
}

export default Waves