import HeadingTwo from '../UI/HeadingTwo'
import LinkButton from '../UI/LinkButton'

const HomepageAboutText = () => {
	return (
		<div className='p-2 max-w-lg lg:max-w-2xl flex flex-col'>
			<div className='mb-16'>
				<HeadingTwo text='A few words' coloredText='about me' />
				<p className='lg:text-lg'>
					I’ve been learning programming for over two years, starting my journey with frontend development and mastering
					JavaScript, TypeScript, React, and Next.js. Over time, I’ve expanded into backend technologies like Node.js,
					Express.js, and Mongoose, enabling me to create fully functional applications. I have experience building both
					frontend interfaces and backend logic, integrating them with REST APIs and managing data with MongoDB. My goal
					is to continue developing my skills as a full-stack developer and take on more complex projects.
				</p>
			</div>
			<LinkButton href='/about' openNewWindow={false}>
				More about me
			</LinkButton>
		</div>
	)
}

export default HomepageAboutText
