'use client'

import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

import LINKEDIN_ICON from '../../assets/icons/linkedinContact.png'
import FACEBOOK_ICON from '../../assets/icons/facebookContact.png'
import EMAIL_ICON from '../../assets/icons/emailContact.png'

const FastContactSection = () => {
	const itemsClasses =
		'flex flex-col justify-center items-center cursor-pointer border-2 p-4 m-5 w-full rounded-2xl hover:border-hightlight duration-300 gap-4 min-w-[220px] max-w-[300px] xl:text-lg'

	return (
		<motion.div
			className='grid justify-items-center grid-cols-1 md:grid-cols-4 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1 w-full max-w-[800px] mb-8 xl:gap-x-8'
			initial={{ opacity: 0, scale: 0.7 }}
			animate={{
				opacity: 1,
				scale: 1,
				transition: {
					duration: 0.6,
				},
			}}>
			<Link
				href='https://www.linkedin.com/in/tomasz-zuber95/'
				target='_blank'
				rel='noopener noreferrer'
				className={`${itemsClasses} md:col-start-1 md:col-end-3 md:row-span-1 xl:col-start-1 xl:col-end-2`}>
				<Image src={LINKEDIN_ICON} alt='Linkedin icon' className='w-10 lg:w-11' priority />
				<span>in/tomasz-zuber95</span>
			</Link>
			<Link
				href='https://www.facebook.com/tomasz.zuber.315/'
				target='_blank'
				rel='noopener noreferrer'
				className={`${itemsClasses} md:col-start-3 md:col-end-5 md:row-span-1 xl:col-start-2 xl:col-end-3`}>
				<Image src={FACEBOOK_ICON} alt='Facebook icon' className='w-10 lg:w-11' priority />
				<span>tomasz.zuber.315</span>
			</Link>
			<a
				href='mailto:tzuber95@gmail.com'
				target='blank'
				rel='noopener noreferrer'
				className={`${itemsClasses} md:col-start-2 md:col-end-4 md:row-span-2 xl:col-start-3 xl:col-end-4`}>
				<Image src={EMAIL_ICON} alt='Email icon' className='w-10 lg:w-11' priority />
				<span>tzuber95@gmail.com</span>
			</a>
		</motion.div>
	)
}

export default FastContactSection
