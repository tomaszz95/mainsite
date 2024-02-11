import Image from 'next/image'

import HomepageAboutText from '../homepageText/HomepageAboutText'
import CenteredSection from '../layout/CenteredSection'

import IMAGE from '../../assets/photos/aboutme.jpg'
import Wrapper from '../layout/Wrapper'

const AboutMeSection = () => {
	return (
		<Wrapper classes='evenSection'>
			<CenteredSection classes='lg:flex-row'>
				<Image
					src={IMAGE}
					alt='Programmer with dreadlocks on his head sits in front of three monitors and writes code'
					className='rounded-full w-72 h-72 lg:w-80 lg:h-80 saturate-50 md:mx-12 xl:md:mx-20'
				/>
				<HomepageAboutText />
			</CenteredSection>
		</Wrapper>
	)
}

export default AboutMeSection
