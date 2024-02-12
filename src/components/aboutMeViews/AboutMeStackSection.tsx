import Wrapper from '../layout/Wrapper'
import CenteredSection from '../layout/CenteredSection'
import StackList from '../UI/StackList'
import { techStack, techToLearn } from '../../constans/aboutmeStack'
import HeadingTwo from '../UI/HeadingTwo'

const AboutMeStackSection = () => {
	return (
		<Wrapper classes='evenSection'>
			<CenteredSection>
				<div>
					<HeadingTwo text='Technology' coloredText='stack' />
					<StackList stack={techStack} classes='lg:grid-cols-4 xl:grid-cols-6' />
				</div>
				<div className='mt-12'>
					<HeadingTwo text='Next to' coloredText='learn' />
					<StackList stack={techToLearn} classes='lg:grid-cols-4 xl:grid-cols-6' />
				</div>
			</CenteredSection>
		</Wrapper>
	)
}

export default AboutMeStackSection
