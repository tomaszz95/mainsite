import Image from 'next/image'
import Link from 'next/link'

import GITHUB from '../../assets/icons/github.png'
import LINKEDIN from '../../assets/icons/linkedin.png'
import FACEBOOK from '../../assets/icons/facebook.png'

const SocialLinks = () => {
	return (
		<div className='flex items-center gap-8'>
			<Link href='https://github.com/tomaszz95' target='_blank' rel='noopener noreferrer'>
				<Image src={GITHUB} alt='Tomasz Żuber github' className='w-10 lg:w-11 hover:scale-110 duration-300' priority />
			</Link>
			<Link href='https://www.linkedin.com/in/tomasz-zuber95/' target='_blank' rel='noopener noreferrer'>
				<Image
					src={LINKEDIN}
					alt='Tomasz Żuber linkedin'
					className='w-10 lg:w-11 hover:scale-110 duration-300'
					priority
				/>
			</Link>
			<Link href='https://www.facebook.com/tomasz.zuber.315/' target='_blank' rel='noopener noreferrer'>
				<Image
					src={FACEBOOK}
					alt='Tomasz Żuber facebook'
					className='w-10 lg:w-11 hover:scale-110 duration-300'
					priority
				/>
			</Link>
		</div>
	)
}

export default SocialLinks
