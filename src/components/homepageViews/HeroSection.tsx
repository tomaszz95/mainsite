import Image from 'next/image'

import CenteredSection from '../layout/CenteredSection'
import SectionBlock from '../UI/SectionBlock'
import HomepageHeroText from '../homepageText/HomepageHeroText'

import IMAGE from '../../assets/photos/programming1.jpg'

const HeroSection = () => {
	return (
		<div className='w-full relative flex justify-center overflow-hidden'>
			<CenteredSection classes='max-w-[1380px] flex align-center justify-around relative xl:mb-10 '>
				<HomepageHeroText />
				<Image
					src={IMAGE}
					alt='Programmer with dreadlocks on his head sits in front of three monitors and writes'
					className='hidden lg:inline-block w-1/2 ml-10 xl:ml-0 max-w-[450px] saturate-50'
				/>
			</CenteredSection>
			<SectionBlock direction='left' />
		</div>
	)
}

export default HeroSection
