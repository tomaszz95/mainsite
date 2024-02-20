'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'
import Wrapper from '../layout/Wrapper'
import CenteredSection from '../layout/CenteredSection'
import SectionBlock from '../UI/SectionBlock'
import HomepageHeroText from '../homepageText/HomepageHeroText'

import IMAGE from '../../assets/photos/programming1.jpg'

const HeroSection = () => {
	return (
		<Wrapper classes='oddSection'>
			<CenteredSection classes='lg:justify-around lg:flex-row mt-10 xl:mt-16'>
				<HomepageHeroText />
				<motion.div
					initial={{ opacity: 0.1 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					className='hidden lg:inline-block w-1/2 max-w-[450px] saturate-50 ml-12'>
					<Image
						src={IMAGE}
						alt='Programmer with dreadlocks is sitting in front of three monitors and writing code'
						priority
					/>
				</motion.div>
			</CenteredSection>
			<SectionBlock direction='left' />
		</Wrapper>
	)
}

export default HeroSection
