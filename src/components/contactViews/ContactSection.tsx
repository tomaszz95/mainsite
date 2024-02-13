import Wrapper from '../layout/Wrapper'
import HeadingOne from '../UI/HeadingOne'
import SectionBlock from '../UI/SectionBlock'
import FastContactSection from '../contactDirect/FastContactSection'
import FormContactSection from '../contactForm/FormContactSection'
import CenteredSection from '../layout/CenteredSection'
import HeadingTwo from '../UI/HeadingTwo'

const ContactSection = () => {
	return (
		<Wrapper>
			<CenteredSection classes='mt-10 xl:mt-16'>
				<HeadingOne text='Choose your way' coloredText='to contact me' />
				<FastContactSection />
				<HeadingTwo text='Or send me' coloredText='a message' />
				<FormContactSection />
				<SectionBlock direction='left' />
			</CenteredSection>
		</Wrapper>
	)
}

export default ContactSection
