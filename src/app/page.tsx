import AboutMeSection from '@/components/homepage/AboutMeSection'
import type { Metadata } from 'next'

import HeroSection from '../components/homepage/HeroSection'

export const metadata: Metadata = {
	title: 'Tomasz Żuber | Homepage',
	description: 'Home page of the portfolio of aspiring frontend developer Tomasz Zuber.',
}

const Homepage = () => {
	return (
		<>
			<HeroSection />
			<AboutMeSection />
		</>
	)
}

export default Homepage
