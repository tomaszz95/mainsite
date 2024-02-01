import type { Metadata } from 'next'

import HeroSection from '../components/homepage/HeroSection'
import AboutMeSection from '@/components/homepage/AboutMeSection'
import ProjectsSection from '../components/homepage/ProjectsSection'

export const metadata: Metadata = {
	title: 'Tomasz Żuber | Homepage',
	description: 'Home page of the portfolio of aspiring frontend developer Tomasz Zuber.',
}

const Homepage = () => {
	return (
		<>
			<HeroSection />
			<AboutMeSection />
			<ProjectsSection />
		</>
	)
}

export default Homepage
