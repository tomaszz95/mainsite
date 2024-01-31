import SocialLinks from '../UI/SocialLinks'

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className='container p-8 flex flex-col justify-center items-center gap-6 lg:gap-10 text-lg lg:text-xl'>
			<SocialLinks />
			<span className='text-center'>© Tomasz Żuber {year} | All Rights Reserved</span>
		</footer>
	)
}

export default Footer
