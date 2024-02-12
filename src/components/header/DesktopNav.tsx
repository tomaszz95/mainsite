import NavLink from './NavLink'

import { navigation } from '../../constans/navigationLinks'

type ComponentType = {
	setIsNavOpen: (value: boolean) => void
}

const DesktopNav: React.FC<ComponentType> = ({ setIsNavOpen }) => {
	return (
		<nav className='hidden md:flex gap-6 lg:gap-7 xl:gap-8 text-lg lg:text-xl'>
			{navigation.map(link => (
				<NavLink key={link.linkName} linkHref={link.linkHref} linkName={link.linkName} setIsNavOpen={setIsNavOpen} />
			))}
		</nav>
	)
}

export default DesktopNav
