import Wrapper from '../layout/Wrapper'
import CenteredSection from '../layout/CenteredSection'
import StackList from '../UI/StackList'
import HeadingTwo from '../UI/HeadingTwo'

import { techStack, techToLearn } from '../../constans/aboutmeStack'

const AboutMeStackSection = () => {
	return (
		<Wrapper classes='evenSection'>
			<CenteredSection>
				<div>
					<HeadingTwo text='Technology' coloredText='stack' />
					<StackList stack={techStack} classes='lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-0' />
				</div>
				<div className='mt-12 flex-col'>
					<HeadingTwo text='Next to' coloredText='learn' />
					<StackList stack={techToLearn} classes='lg:grid-cols-4 gap-x-20' />
				</div>
			</CenteredSection>
		</Wrapper>
	)
}

export default AboutMeStackSection
