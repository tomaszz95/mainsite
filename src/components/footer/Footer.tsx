const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className='w-full text-lg lg:text-xl flex justify-center items-center evenSection h-[110px] text-center'>
			<span>© Tomasz Żuber {year} | All Rights Reserved</span>
		</footer>
	)
}

export default Footer
