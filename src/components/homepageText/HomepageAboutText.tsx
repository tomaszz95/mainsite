import HeadingTwo from '../UI/HeadingTwo'
import LinkButton from '../UI/LinkButton'

const HomepageAboutText = () => {
	return (
		<div className='p-2 max-w-lg lg:max-w-2xl flex flex-col'>
			<div className='mb-16'>
				<HeadingTwo text='A few words' coloredText='about me' />
				<p className='lg:text-lg'>
					I’ve been programming for nearly 3 years, focusing primarily on frontend development and mastering JavaScript,
					TypeScript, React, and Next.js. I’ve also explored backend technologies like Node.js, Express.js, MongoDB with
					Mongoose, and SQL, including setting up a backend for one of my more complex projects (NeXtPC). While I’m most
					comfortable crafting frontend interfaces, my basic backend skills with REST APIs and data management using SQL
					and MongoDB are a handy addition. I’m eager to keep growing as both a frontend and backend developer, taking
					on new challenges.
				</p>
			</div>
			<LinkButton href='/aboutme' openNewWindow={false}>
				More about me
			</LinkButton>
		</div>
	)
}

export default HomepageAboutText
