import { motion } from 'framer-motion'
import { useState, useLayoutEffect } from 'react'

import AllIcons from '../AllIcons'

const MovingNav = ({ isOpen }) => {
	// const [sizeOfScreen, setSizeOfScreen] = useState(screenSize())

	// const screenSize = () => {
	// 	const actualScreen = window.innerWidth
	// 	return actualScreen <= 482 ? 'flex' : 'none'
	// }

	// useLayoutEffect(() => {
	// 	setSizeOfScreen(screenSize())
	// }, [window.innerWidth])

	const variants = {
		open: {
			opacity: 1,
			x: 0,
			display: 'flex',
			position: 'relative',
			top: '60px',
			width: '100%',
			justifyContent: 'center'
		},
		closed: {
			opacity: 0,
			x: '-100%',
			display: 'flex',
			position: 'relative',
			top: '60px',
			width: '100%',
			justifyContent: 'center'
		}
	}

	return (
		<motion.nav animate={isOpen ? 'open' : 'closed'} variants={variants}>
			<AllIcons />
		</motion.nav>
	)
}

export default MovingNav
