import NavLink from './NavLink'
import { motion } from 'framer-motion'

import { navigation } from '../../constans/navigationLinks'

type ComponentType = {
	setIsNavOpen: (value: boolean) => void
}

const DesktopNav: React.FC<ComponentType> = ({ setIsNavOpen }) => {
	return (
		<nav className='hidden md:flex gap-6 lg:gap-7 xl:gap-8 text-lg lg:text-xl'>
			{navigation.map((link, index) => (
				<motion.div
					key={link.linkName}
					initial={{ x: '100%', opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: index * 0.1 }}>
					<NavLink linkHref={link.linkHref} linkName={link.linkName} setIsNavOpen={setIsNavOpen} />
				</motion.div>
			))}
		</nav>
	)
}

export default DesktopNav
