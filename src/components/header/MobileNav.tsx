import Image from 'next/image'

import NavLink from './NavLink'
import { mobileNav } from '../../constans/navigationLinks'

import CLOSE from '../../assets/icons/close.png'

type ComponentType = {
	isNavOpen: boolean
	setIsNavOpen: (value: boolean) => void
}

const MobileNav: React.FC<ComponentType> = ({ isNavOpen, setIsNavOpen }) => {
	return (
		<>
			<div
				className={`${isNavOpen ? 'flex' : 'hidden'} md:hidden flex-col fixed top-0 right-0 w-3/5 h-full z-50 bg-main`}>
				<button
					type='button'
					aria-label='Click to close navigation'
					onClick={() => setIsNavOpen(false)}
					className='ml-auto z-50'>
					<Image src={CLOSE} alt='Close navigation button' className='w-6 m-6' />
				</button>

				<nav className='flex flex-col gap-12 pt-8 p-5 text-center text-xl w-full z-50'>
					{mobileNav.map(link => (
						<NavLink
							key={link.linkName}
							linkHref={link.linkHref}
							linkName={link.linkName}
							setIsNavOpen={setIsNavOpen}
						/>
					))}
				</nav>
			</div>
			{isNavOpen && (
				<div
					className='fixed top-0 left-0 w-full h-full bg-main opacity-75 z-40 md:hidden'
					onClick={() => setIsNavOpen(false)}></div>
			)}
		</>
	)
}

export default MobileNav
