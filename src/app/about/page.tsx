import type { Metadata } from 'next'

import PersonalInfoSection from '../../components/aboutMeViews/PersonalInfoSection'
import ExperienceSection from '../../components/aboutMeViews/ExperienceSection'
import AboutMeStackSection from '../../components/aboutMeViews/AboutMeStackSection'

export const metadata: Metadata = {
	title: 'Tomasz Żuber | About me',
	description:
		'A site that presents more information about Tomasz Żuber, what technologies he codes in, his experience and education.',
}

const AboutPage = () => {
	return (
		<>
			<PersonalInfoSection />
			<AboutMeStackSection />
			<ExperienceSection />
		</>
	)
}

export default AboutPage
