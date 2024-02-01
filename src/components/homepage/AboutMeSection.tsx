import Image from 'next/image'
import Link from 'next/link'

import IMAGE from '../../assets/photos/aboutme.jpg'
import CenteredSection from '../layout/CenteredSection'

const AboutMeSection = () => {
	return (
		<div className='w-full xl:py-10 evenSection'>
			<CenteredSection classes='flex flex-col items-center mx-auto max-w-[1380px] lg:flex-row'>
				<Image
					src={IMAGE}
					alt='Programmer with dreadlocks on his head sits in front of three monitors and writes'
					className='rounded-full w-72 h-72 lg:w-80 lg:h-80 saturate-50 md:mx-12 xl:md:mx-20'
				/>
				<div className='p-2 max-w-lg lg:max-w-2xl'>
					<div className='mb-12'>
						<h2 className='text-4xl my-6'>
							Few words <span className='text-hightlight'>about me..</span>
						</h2>
						<p>
							My adventure with programming began more than two years ago. What started as a curiosity and a desire to
							learn new technologies, quickly turned into my passion and greatest hobby. Through systematic study and
							practice, I have acquired the skills needed to create fascinating front-end projects, and there is still
							much to discover before me. Now, with more than two years of programming experience, I am ready for new
							challenges and further development, ready to create inspiring and engaging experiences.
						</p>
					</div>
					<Link href='/about' className='bg-hightlight rounded-xl  hover:bg-hightlightHover duration-300 py-4 px-5'>
						More about me
					</Link>
				</div>
			</CenteredSection>
		</div>
	)
}

export default AboutMeSection
