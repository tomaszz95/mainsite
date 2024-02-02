import PersonalInfoSection from '../../components/aboutMeViews/PersonalInfoSection'
import ExperienceSection from '../../components/aboutMeViews/ExperienceSection'
import AboutMeStack from '../../components/aboutMeStack/AboutMeStack'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Tomasz Żuber | About me',
	description:
		'A site that presents more information about Tomasz Zuber, what technologies he codes in, his experience and education.',
}

const AboutPage = () => {
	return (
		<>
			<PersonalInfoSection />
			<AboutMeStack />
			<ExperienceSection />
		</>
	)
}

export default AboutPage
