import Wrapper from '../layout/Wrapper'
import AboutMeDetails from '../aboutMeDetails/AboutMeDetails'
import CenteredSection from '../layout/CenteredSection'
import SectionBlock from '../UI/SectionBlock'
import HeadingOne from '../UI/HeadingOne'

const PersonalInfoSection = () => {
	return (
		<Wrapper>
			<CenteredSection>
				<HeadingOne text='About' coloredText='Myself' />
				<AboutMeDetails />
			</CenteredSection>
			<SectionBlock direction='left' />
		</Wrapper>
	)
}

export default PersonalInfoSection
