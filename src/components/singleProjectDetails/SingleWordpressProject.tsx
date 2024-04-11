'use client'

import CenteredSection from '../layout/CenteredSection'
import Wrapper from '../layout/Wrapper'
import HeadingOne from '../UI/HeadingOne'
import HeadingTwo from '../UI/HeadingTwo'
import LinkButton from '../UI/LinkButton'

import { motion } from 'framer-motion'

import { WordpressProjectType } from '../../types/singleProjectType'
import SingleProjectImages from './SingleProjectImages'
import SectionBlock from '../UI/SectionBlock'

type ComponentType = {
	project: WordpressProjectType
	left: boolean
}

const SingleWordpressProject: React.FC<ComponentType> = ({ project, left }) => {
	const { title, shortDesc, description, live, photos } = project
	return (
		<Wrapper classes='oddSection'>
			<div className='mt-20 xl:mt-28 px-8'>
				<HeadingOne text='' coloredText={title} />
			</div>
			<CenteredSection classes='lg:flex-row pt-0 pb-4 xl:py-0'>
				<motion.div
					className={`flex flex-col items-center text-center lg:w-1/2 ${
						left ? 'lg:ml-12 xl:ml-20 lg:order-4' : 'lg:mr-12 xl:mr-20'
					} max-w-[600px]`}
					initial={{ opacity: 0.1 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8 }}>
					<HeadingTwo text='About' coloredText='project' />
					<p className='mb-4 lg:text-lg text-left'>{shortDesc}</p>
					<p className='mb-12 lg:text-lg text-left'>{description}</p>
					<LinkButton href={live} openNewWindow={true}>
						Live
					</LinkButton>
				</motion.div>
				<SingleProjectImages photos={[photos[0], photos[1]]} />
			</CenteredSection>
			<SingleProjectImages photos={[photos[2], photos[3]]} fullSize={true} />
			<SectionBlock direction='left' />
		</Wrapper>
	)
}

export default SingleWordpressProject
