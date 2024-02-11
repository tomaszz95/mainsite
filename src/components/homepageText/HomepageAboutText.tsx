import HeadingTwo from '../UI/HeadingTwo'
import LinkButton from '../UI/LinkButton'

const HomepageAboutText = () => {
	return (
		<div className='p-2 max-w-lg lg:max-w-2xl'>
			<div className='mb-16'>
				<HeadingTwo text='Few words' coloredText='about me.' />
				<p className='lg:text-lg'>
					What started as a curiosity and a desire to learn new technologies, quickly turned into my passion and
					greatest hobby. Through systematic study and practice, I have acquired the skills needed to create fascinating
					front-end projects, and there is still much to discover before me. Now, with more than two years of
					programming experience, I am ready for new challenges and further development, ready to create inspiring and
					engaging experiences.
				</p>
			</div>
			<LinkButton href='/about' openNewWindow={false}>
				More about me
			</LinkButton>
		</div>
	)
}

export default HomepageAboutText
