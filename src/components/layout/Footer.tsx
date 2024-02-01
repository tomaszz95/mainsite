const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className='w-full p-8 text-lg lg:text-xl text-center  border-t-2 border-t-main'>
			<span>© Tomasz Żuber {year} | All Rights Reserved</span>
		</footer>
	)
}

export default Footer
