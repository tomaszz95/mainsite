import Image from 'next/image'
import Link from 'next/link'

import LINKEDIN_ICON from '../../assets/icons/linkedinContact.png'
import FACEBOOK_ICON from '../../assets/icons/facebookContact.png'
import EMAIL_ICON from '../../assets/icons/emailContact.png'
import MOBILE_ICON from '../../assets/icons/mobileContact.png'

const FastContactSection = () => {
	const itemsClasses =
		'flex flex-col justify-center items-center cursor-pointer border-2 p-4 m-5 w-full rounded-2xl hover:border-hightlight duration-300 gap-4 min-w-[220px] max-w-[300px]'

	return (
		<div className='grid justify-items-center grid-cols-1 w-full'>
			<Link
				href='https://www.linkedin.com/in/tomasz-zuber95/'
				target='_blank'
				rel='noopener noreferrer'
				className={itemsClasses}>
				<Image src={LINKEDIN_ICON} alt='Linkedin icon' className='w-10 lg:w-11' priority />
				<span>LinkedIn</span>
			</Link>
			<Link
				href='https://www.facebook.com/tomasz.zuber.315/'
				target='_blank'
				rel='noopener noreferrer'
				className={itemsClasses}>
				<Image src={FACEBOOK_ICON} alt='Facebook icon' className='w-10 lg:w-11' priority />
				<span>Facebook</span>
			</Link>
			<a href='mailto:tzuber95@gmail.com' target='blank' rel='noopener noreferrer' className={itemsClasses}>
				<Image src={EMAIL_ICON} alt='Email icon' className='w-10 lg:w-11' priority />
				<span>tzuber95@gmail.com</span>
			</a>
			<div className={itemsClasses}>
				<Image src={MOBILE_ICON} alt='Mobile icon' className='w-10 lg:w-11' priority />
				<span>+48 571 385 580</span>
			</div>
		</div>
	)
}

export default FastContactSection
