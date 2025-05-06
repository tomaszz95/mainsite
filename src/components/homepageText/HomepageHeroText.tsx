import HeadingOne from '../UI/HeadingOne'
import SocialLinks from '../socialIconLinks/SocialLinks'

const HomepageHeroText = () => {
	return (
		<div className='flex flex-col justify-center max-w-lg lg:max-w-1/2 mt-6'>
			<HeadingOne text='Hi, I am' coloredText='Tomek' />
			<p className='text-lg lg:text-xl'>
				I am a <span className='text-hightlight'>Frontend Developer</span> with nearly 3 years of non-commercial
				experience in React and Next.js. I enjoy building clean, responsive web apps, also growing my full-stack skills
				with Node.js, Express.js, and databases like MongoDB and SQL-based systems. I aim to create practical,
				user-friendly solutions that prioritize accessibility and SEO performance.
			</p>
			<div className='mx-auto lg:mx-0 mt-8 xl:mt-12'>
				<SocialLinks />
			</div>
		</div>
	)
}

export default HomepageHeroText
