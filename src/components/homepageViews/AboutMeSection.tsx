import Image from 'next/image'

import HomepageAboutText from '../homepageText/HomepageAboutText'
import CenteredSection from '../layout/CenteredSection'

import IMAGE from '../../assets/photos/aboutme.jpg'

const AboutMeSection = () => {
	return (
		<div className='w-full xl:py-10 evenSection'>
			<CenteredSection classes='flex flex-col items-center mx-auto max-w-[1380px] lg:flex-row'>
				<Image
					src={IMAGE}
					alt='Programmer with dreadlocks on his head sits in front of three monitors and writes'
					className='rounded-full w-72 h-72 lg:w-80 lg:h-80 saturate-50 md:mx-12 xl:md:mx-20'
				/>
				<HomepageAboutText />
			</CenteredSection>
		</div>
	)
}

export default AboutMeSection
