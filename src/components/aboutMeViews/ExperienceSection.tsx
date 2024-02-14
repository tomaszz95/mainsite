import Wrapper from '../layout/Wrapper'
import CenteredSection from '../layout/CenteredSection'
import ExperienceList from '../aboutMeExperience/ExperienceList'
import SectionBlock from '../UI/SectionBlock'
import HeadingTwo from '../UI/HeadingTwo'

const ExperienceSection = () => {
	return (
		<Wrapper classes='oddSection'>
			<SectionBlock direction='right' />
			<CenteredSection>
				<HeadingTwo text='Experience and' coloredText='education' />
				<ExperienceList />
			</CenteredSection>
			<SectionBlock direction='left' />
		</Wrapper>
	)
}

export default ExperienceSection
