'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

import BURGER from '../../assets/icons/burger.png'
import LOGO from '../../assets/icons/logo.png'

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)

	return (
		<header className='container max-w-[1300px] p-5 lg:px-12 flex items-center justify-between absolute top-0 z-40'>
			<Link href='/'>
				<Image src={LOGO} alt='Tomasz Żuber logo' className='w-14 lg:w-16' priority />
			</Link>

			<button
				type='button'
				aria-label='Click to open navigation'
				className={`${isNavOpen ? 'hidden' : 'block'} md:hidden`}
				onClick={() => setIsNavOpen(true)}>
				<Image src={BURGER} alt='Burger icon' />
			</button>

			<MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
			<DesktopNav setIsNavOpen={setIsNavOpen} />
		</header>
	)
}

export default Header
