'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'
import HomepageAboutText from '../homepageText/HomepageAboutText'
import CenteredSection from '../layout/CenteredSection'
import Wrapper from '../layout/Wrapper'

import IMAGE from '../../assets/photos/aboutme.jpg'

const AboutMeSection = () => {
	return (
		<Wrapper classes='evenSection'>
			<CenteredSection classes='lg:flex-row'>
				<motion.div
					initial={{ opacity: 0.1 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					className='w-72 h-72 lg:w-80 lg:h-80 saturate-50 md:mx-12 xl:md:mx-20'>
					<Image
						src={IMAGE}
						alt='Programmer with dreadlocks on his head sits in front of three monitors and writes code'
						className='rounded-full'
					/>
				</motion.div>
				<HomepageAboutText />
			</CenteredSection>
		</Wrapper>
	)
}

export default AboutMeSection
