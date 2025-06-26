import SocialLinks from '../socialIconLinks/SocialLinks'
import HomepageHeroTextInfo from './HomepageHeroTextInfo'

const HomepageHeroText = () => {
	return (
		<div className='flex flex-col justify-center max-w-lg lg:max-w-1/2 mt-12'>
			<div className='flex flex-col gap-7'>
				<HomepageHeroTextInfo />

				<p className='text-zinc-200 md:text-xl relative z-10 pointer-events-none'>
					<span className='text-hightlight'>Hi, I'm Tomek</span>, a developer based in Poland with a passion for code.
				</p>
			</div>

			<div className='mx-auto lg:mx-0 mt-8 xl:mt-12'>
				<SocialLinks />
			</div>
		</div>
	)
}

export default HomepageHeroText
