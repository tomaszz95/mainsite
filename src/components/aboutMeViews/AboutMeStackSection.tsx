import Wrapper from '../layout/Wrapper'
import CenteredSection from '../layout/CenteredSection'
import StackList from '../UI/StackList'
import HeadingTwo from '../UI/HeadingTwo'

import { techStack } from '../../constans/aboutmeStack'

const AboutMeStackSection = () => {
	return (
		<Wrapper classes='evenSection'>
			<CenteredSection>
				<HeadingTwo text='Technology' coloredText='stack' />
				<div className='grid grid-cols-12 gap-x-8 gap-y-12 lg:gap-x-20'>
					<div className='col-span-12 lg:col-span-6'>
						<h3 className='mb-6'>Frontend</h3>
						<StackList stack={techStack.frontend} classes='xl:grid-cols-4' />
					</div>
					<div className='col-span-12 lg:col-span-6'>
						<h3 className='mb-6'>Backend / Database</h3>
						<StackList stack={techStack.backend} classes='xl:grid-cols-4' />
					</div>
					<div className='col-span-12'>
						<h3 className='mb-6'>Other</h3>
						<StackList stack={techStack.other} classes='max-w-screen-md mx-auto' />
					</div>
				</div>
			</CenteredSection>
		</Wrapper>
	)
}

export default AboutMeStackSection
