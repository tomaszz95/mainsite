import Link from 'next/link'
import CenteredSection from '../layout/CenteredSection'

export default function HeroSection() {
	return (
		<CenteredSection>
			<h1 className='text-5xl mb-4'>
				Hi, I am <span className='block mt-2 text-hightlight'>Tomasz Żuber</span>
			</h1>

			<p className='text-lg max-w-lg'>
				I am an aspiring Junior <span className='text-hightlight'>Frontend</span> Developer, on a quest to blend
				artistry with technology in the digital realm. With a dedication to mastering frontend languages and frameworks,
				I'm poised to tackle challenges head-on and craft immersive web experiences that captivate audiences.
			</p>

			<div className='flex items-center justify-between mt-8 max-w-lg'>
				<Link href='/about' className='bg-hightlight p-4 px-6 rounded-lg mr-10'>
					About me
				</Link>
				<a
					href='/Tomasz Zuber CV.pdf'
					download='Tomasz Zuber CV.pdf'
					className='bg-hightlightSecond p-4 px-6 rounded-lg'>
					Download CV
				</a>
			</div>
		</CenteredSection>
	)
}
