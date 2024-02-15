'use client'
import Image from 'next/image'

import { motion } from 'framer-motion'
import DetailsText from './DetailsText'
import DetailsInfo from './DetailsInfo'

import IMAGE from '../../assets/photos/profilephoto.jpg'

const AboutMeDetails = () => {
	return (
		<motion.div
			initial={{ opacity: 0.1 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
			className='flex flex-col lg:flex-row justify-center items-center w-full'>
			<Image
				src={IMAGE}
				alt='Programmer with dreadlocks profile photo'
				priority
				className='w-full max-w-[400px] saturate-50 lg:mr-8 lg:w-1/3'
			/>
			<DetailsText />
			<DetailsInfo />
		</motion.div>
	)
}

export default AboutMeDetails
