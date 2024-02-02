import type { Metadata } from 'next'

import HeroSection from '../components/homepageViews/HeroSection'
import AboutMeSection from '../components/homepageViews/AboutMeSection'
import ProjectsSection from '../components/homepageViews/ProjectsSection'

export const metadata: Metadata = {
	title: 'Tomasz Żuber | Homepage',
	description: 'Home page of the portfolio of aspiring frontend developer Tomasz Żuber.',
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
