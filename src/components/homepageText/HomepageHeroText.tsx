import SocialLinks from '../UI/SocialLinks'

const HomepageHeroText = () => {
	return (
		<div className='flex flex-col justify-center max-w-lg lg:max-w-1/2 mt-6'>
			<h1 className='text-5xl mb-10'>
				Hi, I am <span className='text-hightlight'>Tomek</span>
			</h1>

			<p className='text-lg'>
				I am an aspiring Junior <span className='text-hightlight'>Frontend</span> Developer, on a quest to blend
				artistry with technology in the digital realm.
			</p>

			<div className='flex flex-col sm:flex-row items-center justify-between mt-10 xl:mt-14 text-center'>
				<a
					href='/Tomasz Zuber CV.pdf'
					download='Tomasz Zuber CV.pdf'
					className='bg-hightlight py-3 px-5 mb-9 sm:mb-0 rounded-xl hover:bg-hightlightHover duration-300'>
					Download CV
				</a>
				<SocialLinks />
			</div>
		</div>
	)
}

export default HomepageHeroText
