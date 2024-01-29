import Image from 'next/image'
import Link from 'next/link'

import LOGO from '../../assets/icons/logo.png'

const Header = () => {
	return (
		<header className='container mx-auto p-6 w-100 flex items-center justify-between'>
			<Link href='/'>
				<Image src={LOGO} alt='Tomasz Żuber logo' className='w-16 lg:w-20' priority />
			</Link>
			<nav className='flex gap-4 text-lg lg:text-xl'>
				<Link href='/about' className='hover:text-hightlight duration-300'>
					About
				</Link>
				<Link href='/about' className='hover:text-hightlight duration-300'>
					Projects
				</Link>
				<Link href='/about' className='hover:text-hightlight duration-300'>
					Contact
				</Link>
			</nav>
		</header>
	)
}

export default Header
