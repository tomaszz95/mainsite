import Link from 'next/link'

const HomepageAboutText = () => {
	return (
		<div className='p-2 max-w-lg lg:max-w-2xl'>
			<div className='mb-12'>
				<h2 className='text-3xl xl:text-4xl my-6'>
					Few words <span className='text-hightlight'>about me..</span>
				</h2>
				<p>
					What started as a curiosity and a desire to learn new technologies, quickly turned into my passion and
					greatest hobby. Through systematic study and practice, I have acquired the skills needed to create fascinating
					front-end projects, and there is still much to discover before me. Now, with more than two years of
					programming experience, I am ready for new challenges and further development, ready to create inspiring and
					engaging experiences.
				</p>
			</div>
			<Link href='/about' className='bg-hightlight rounded-xl  hover:bg-hightlightHover duration-300 py-4 px-5'>
				More about me
			</Link>
		</div>
	)
}

export default HomepageAboutText
