import Image from 'next/image'
import Link from 'next/link'

import LINKEDIN_ICON from '../../assets/icons/linkedinContact.png'
import FACEBOOK_ICON from '../../assets/icons/facebookContact.png'
import EMAIL_ICON from '../../assets/icons/emailContact.png'
import MOBILE_ICON from '../../assets/icons/mobileContact.png'

const FastContactSection = () => {
	return (
		<div>
			<Link href='https://www.linkedin.com/in/tomasz-zuber95/' target='_blank' rel='noopener noreferrer'>
				<Image src={LINKEDIN_ICON} alt='Linkedin icon' className='w-10 lg:w-11 hover:scale-110 duration-300' priority />
				<span>LinkedIn</span>
			</Link>
			<Link href='https://www.facebook.com/tomasz.zuber.315/' target='_blank' rel='noopener noreferrer'>
				<Image src={FACEBOOK_ICON} alt='Facebook icon' className='w-10 lg:w-11 hover:scale-110 duration-300' priority />
				<span>Facebook</span>
			</Link>
			<a href='mailto:tzuber95@gmail.com' target='blank' rel='noopener noreferrer'>
				<Image src={EMAIL_ICON} alt='Email icon' className='w-10 lg:w-11 hover:scale-110 duration-300' priority />
				<span>Email: tzuber95@gmail.com</span>
			</a>
			<div>
				<Image src={MOBILE_ICON} alt='Mobile icon' className='w-10 lg:w-11 hover:scale-110 duration-300' priority />
				<span>Mobile: +48 571 385 580</span>
			</div>
		</div>
	)
}

export default FastContactSection
