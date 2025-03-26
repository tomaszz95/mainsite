import HeadingOne from '../UI/HeadingOne'
import SocialLinks from '../socialIconLinks/SocialLinks'

const HomepageHeroText = () => {
	return (
		<div className='flex flex-col justify-center max-w-lg lg:max-w-1/2 mt-6'>
			<HeadingOne text='Hello, I am' coloredText='Tomek' />
			<p className='text-lg lg:text-xl'>
				<span className='text-hightlight'>Frontend Developer with nearly 3 years of non-comercial experience</span>, skilled in React and
				Next.js. I’m passionate about crafting clean, responsive web apps and bring growing expertise in full-stack
				development with Node.js, Express, and databases like MongoDB and SQL. My focus is on delivering high-quality,
				user-friendly solutions.
			</p>
			<div className='flex flex-col sm:flex-row items-center justify-between mt-10 xl:mt-14 text-center'>
				<a
					href='Tomasz Zuber CV.pdf'
					download='Tomasz Zuber CV.pdf'
					aria-label='Download CV'
					className='bg-hightlight rounded-xl hover:bg-hightlightHover duration-300 py-3 mb-10 px-10 lg:text-lg sm:mb-0'>
					Download CV
				</a>
				<SocialLinks />
			</div>
		</div>
	)
}

export default HomepageHeroText
