const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className='container max-w-[1300px] p-8 text-lg lg:text-xl text-center'>
			<span>© Tomasz Żuber {year} | All Rights Reserved</span>
		</footer>
	)
}

export default Footer
