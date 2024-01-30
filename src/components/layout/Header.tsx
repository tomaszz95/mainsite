import Image from 'next/image'
import Link from 'next/link'

import LOGO from '../../assets/icons/logo.png'

export default function Header() {
	return (
		<header className='container py-6 px-12 flex items-center justify-between'>
			<Link href='/'>
				<Image src={LOGO} alt='Tomasz Żuber logo' className='w-14 lg:w-16' priority />
			</Link>
			<nav className='flex gap-4 md:gap-5 lg:gap-6 xl:gap-8 text-lg lg:text-xl'>
				<Link href='/about' className='hover:text-hightlight duration-300 lg:p-3'>
					About
				</Link>
				<Link href='/about' className='hover:text-hightlight duration-300 lg:p-3'>
					Projects
				</Link>
				<Link href='/about' className='hover:text-hightlight duration-300 lg:p-3'>
					Contact
				</Link>
			</nav>
		</header>
	)
}
