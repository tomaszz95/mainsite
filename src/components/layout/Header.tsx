'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import CLOSE from '../../assets/icons/close.png'
import BURGER from '../../assets/icons/burger.png'
import LOGO from '../../assets/icons/logo.png'

export default function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false)

	return (
		<>
			{isNavOpen && (
				<div
					className='fixed top-0 left-0 w-full h-full bg-navigation opacity-70 z-40'
					onClick={() => setIsNavOpen(false)}></div>
			)}
			<header className='container p-5 lg:px-12 flex items-center justify-between'>
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

				<div
					className={`${isNavOpen ? 'flex' : 'hidden'} flex-col fixed top-0 right-0 w-3/5 h-full z-50 bg-navigation`}>
					<button type='button' aria-label='Click to close navigation' onClick={() => setIsNavOpen(false)}>
						<Image src={CLOSE} alt='Close navigation button' className='w-6 ml-auto m-6' />
					</button>
					<nav className='flex flex-col gap-12 pt-8 p-5 text-center text-xl w-full'>
						<Link href='/' className='hover:text-hightlight duration-300 lg:p-3' onClick={() => setIsNavOpen(false)}>
							Home
						</Link>
						<Link
							href='/about'
							className='hover:text-hightlight duration-300 lg:p-3'
							onClick={() => setIsNavOpen(false)}>
							About
						</Link>
						<Link
							href='/about'
							className='hover:text-hightlight duration-300 lg:p-3'
							onClick={() => setIsNavOpen(false)}>
							Projects
						</Link>
						<Link
							href='/about'
							className='hover:text-hightlight duration-300 lg:p-3'
							onClick={() => setIsNavOpen(false)}>
							Contact
						</Link>
					</nav>
				</div>

				<nav className='hidden md:flex gap-6 lg:gap-7 xl:gap-8 text-lg lg:text-xl'>
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
		</>
	)
}
