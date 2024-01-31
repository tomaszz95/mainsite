import Image from 'next/image'
import Link from 'next/link'

import IMAGE from '../../assets/photos/programming1.jpg'
import CenteredSection from '../layout/CenteredSection'
import SocialLinks from '../UI/SocialLinks'

const HeroSection = () => {
	return (
		<CenteredSection classes='flex align-center justify-around'>
			<div className='max-w-lg lg:max-w-1/2 lg:mt-6 xl:mt-8'>
				<h1 className='text-5xl mb-4'>
					Hi, I am <span className='block mt-2 text-hightlight'>Tomasz Żuber</span>
				</h1>

				<p className='text-lg'>
					I am an aspiring Junior <span className='text-hightlight'>Frontend</span> Developer, on a quest to blend
					artistry with technology in the digital realm. With a dedication to mastering frontend languages and
					frameworks, I'm poised to tackle challenges head-on and craft immersive web experiences that captivate
					audiences.
				</p>

				<div className='flex lg:flex-col items-center justify-between mt-8 lg:mt-10 text-center'>
					<div className='lg:mb-10 xl:mb-12'>
						<Link
							href='/about'
							className='bg-hightlight p-4 px-6 rounded-lg mr-10 hover:bg-hightlightHover duration-300'>
							About me
						</Link>
						<a
							href='/Tomasz Zuber CV.pdf'
							download='Tomasz Zuber CV.pdf'
							className='bg-hightlightSecond p-4 px-6 rounded-lg md:mr-6 hover:bg-hightlightSecondHover duration-300'>
							Download CV
						</a>
					</div>
					<div className='hidden md:block'>
						<SocialLinks />
					</div>
				</div>
			</div>
			<Image
				src={IMAGE}
				alt='Programmer with dreadlocks on his head sits in front of three monitors and writes'
				className='hidden lg:inline-block w-1/2 ml-10 xl:ml-0 max-w-[500px] saturate-50'
			/>
		</CenteredSection>
	)
}

export default HeroSection
