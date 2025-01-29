'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

import DetailsText from './DetailsText'
import DetailsInfo from './DetailsInfo'

import AboutMeImage from '../../assets/photos/profilephoto.jpg'

const AboutMeDetails = () => {
	return (
		<motion.div
			initial={{ opacity: 0.1 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
			className='w-full grid grid-col-1 place-items-center lg:grid-cols-3 lg:gap-8'>
			<Image
				src={AboutMeImage}
				alt='Programmer with dreadlocks profile photo'
				priority
				className='saturate-50 w-full max-w-[400px] lg:col-start-1 lg:col-end-2'
			/>
			<DetailsText />
			<DetailsInfo />
		</motion.div>
	)
}

export default AboutMeDetails
