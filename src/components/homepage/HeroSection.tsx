import Image from 'next/image'

import IMAGE from '../../assets/photos/programming1.jpg'
import CenteredSection from '../layout/CenteredSection'
import SocialLinks from '../UI/SocialLinks'

const HeroSection = () => {
	return (
		<CenteredSection classes='max-w-[1380px] flex align-center justify-around'>
			<div className='flex flex-col justify-center max-w-lg lg:max-w-1/2'>
				<h1 className='text-5xl mb-4'>
					Hi, I am <span className='text-hightlight'>Tomek</span>
				</h1>

				<p className='text-lg'>
					I am an aspiring Junior <span className='text-hightlight'>Frontend</span> Developer, on a quest to blend
					artistry with technology in the digital realm.
				</p>

				<div className='flex items-center justify-between mt-8 xl:mt-14 text-center'>
					<a
						href='/Tomasz Zuber CV.pdf'
						download='Tomasz Zuber CV.pdf'
						className='bg-hightlightSecond mr-10 py-3 px-5 rounded-lg hover:bg-hightlightSecondHover duration-300'>
						Download CV
					</a>
					<SocialLinks />
				</div>
			</div>
			<Image
				src={IMAGE}
				alt='Programmer with dreadlocks on his head sits in front of three monitors and writes'
				className='hidden lg:inline-block w-1/2 ml-10 xl:ml-0 max-w-[450px] saturate-50'
			/>
		</CenteredSection>
	)
}

export default HeroSection
