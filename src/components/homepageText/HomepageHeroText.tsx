import HeadingOne from '../UI/HeadingOne'
import SocialLinks from '../socialIconLinks/SocialLinks'

const HomepageHeroText = () => {
	return (
		<div className='flex flex-col justify-center max-w-lg lg:max-w-1/2 mt-6'>
			<HeadingOne text='Hi, I am' coloredText='Tomek' />
			<p className='text-lg lg:text-xl'>
				I am an aspiring Junior <span className='text-hightlight'>Frontend</span> Developer, on a quest to blend
				artistry with technology in the digital realm.
			</p>
			<div className='flex flex-col sm:flex-row items-center justify-between mt-10 xl:mt-14 text-center'>
				<a
					href='Tomasz Zuber CV.pdf'
					download='Tomasz Zuber CV.pdf'
					className='bg-hightlight rounded-xl hover:bg-hightlightHover duration-300 py-3 px-10 lg:text-lg'>
					Download CV
				</a>
				<SocialLinks />
			</div>
		</div>
	)
}

export default HomepageHeroText
