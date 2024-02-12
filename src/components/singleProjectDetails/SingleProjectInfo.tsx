import CenteredSection from '../layout/CenteredSection'
import SectionBlock from '../UI/SectionBlock'
import SingleProjectLinks from './SingleProjectLinks'

import { SingleProjectType } from '../../types/singleProjectType'
import Wrapper from '../layout/Wrapper'
import HeadingOne from '../UI/HeadingOne'
import HeadingTwo from '../UI/HeadingTwo'
import SingleProjectImages from './SingleProjectImages'

type ComponentType = {
	project: SingleProjectType
}

const SingleProjectInfo: React.FC<ComponentType> = ({ project }) => {
	const { title, shortDesc, description, github, live, photos } = project

	return (
		<Wrapper>
			<HeadingOne text='' coloredText={title} />
			<CenteredSection classes='lg:flex-row'>
				<div className='flex flex-col items-center text-center lg:w-1/2 lg:mr-12 xl:mr-20 max-w-[600px]'>
					<HeadingTwo text='About' coloredText='project' />
					<p className='mb-4 lg:text-lg'>{shortDesc}</p>
					<p className='mb-12 lg:text-lg'>{description}</p>
					<SingleProjectLinks github={github} live={live} />
				</div>
				<SingleProjectImages photos={[photos[0], photos[1]]} />
			</CenteredSection>
			<SectionBlock direction='left' />
		</Wrapper>
	)
}

export default SingleProjectInfo
