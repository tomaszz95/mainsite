'use client'

import { motion } from 'framer-motion'

import CenteredSection from '../layout/CenteredSection'
import SectionBlock from '../UI/SectionBlock'
import SingleProjectLinks from './SingleProjectLinks'
import Wrapper from '../layout/Wrapper'
import HeadingOne from '../UI/HeadingOne'
import HeadingTwo from '../UI/HeadingTwo'
import SingleProjectImages from './SingleProjectImages'

import { SingleProjectType } from '../../types/singleProjectType'

type ComponentType = {
	project: SingleProjectType
}

const SingleProjectInfo: React.FC<ComponentType> = ({ project }) => {
	const { title, shortDesc, description, github, live, photos } = project

	return (
		<Wrapper classes='oddSection'>
			<div className='mt-14 xl:mt-28'>
				<HeadingOne text='' coloredText={title} />
			</div>
			<CenteredSection classes='lg:flex-row xl:pt-4'>
				<motion.div
					className='flex flex-col items-center text-center lg:w-1/2 lg:mr-12 xl:mr-20 max-w-[600px]'
					initial={{ opacity: 0.1 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8 }}>
					<HeadingTwo text='About' coloredText='project' />
					<p className='mb-4 lg:text-lg'>{shortDesc}</p>
					<p className='mb-12 lg:text-lg'>{description}</p>
					<SingleProjectLinks github={github} live={live} />
				</motion.div>
				<SingleProjectImages photos={[photos[0], photos[1]]} />
			</CenteredSection>
			<SectionBlock direction='left' />
		</Wrapper>
	)
}

export default SingleProjectInfo
