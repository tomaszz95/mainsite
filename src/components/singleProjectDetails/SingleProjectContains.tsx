import Wrapper from '../layout/Wrapper'
import CenteredSection from '../layout/CenteredSection'
import SectionBlock from '../UI/SectionBlock'
import HeadingTwo from '../UI/HeadingTwo'
import SingleProjectImages from './SingleProjectImages'

import { SingleProjectPhotoType } from '../../types/singleProjectType'

type ComponentType = {
	contents: string[]
	photos: SingleProjectPhotoType[]
}

const SingleProjectContains: React.FC<ComponentType> = ({ contents, photos }) => {
	return (
		<Wrapper classes='oddSection'>
			<SectionBlock direction='right' />
			<CenteredSection classes='lg:flex-row'>
				<SingleProjectImages photos={photos} />
				<div className='flex flex-col items-center text-center lg:w-1/2 lg:ml-12 xl:ml-20 max-w-[600px]'>
					<HeadingTwo text='Project' coloredText='contains' />
					<ol>
						{contents.map(item => (
							<li key={item} className='lg:text-lg mb-2'>
								- {item}
							</li>
						))}
					</ol>
				</div>
			</CenteredSection>
			<SectionBlock direction='left' />
		</Wrapper>
	)
}

export default SingleProjectContains
