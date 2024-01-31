import { Roboto } from 'next/font/google'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import './globals.css'

const roboto = Roboto({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
})

type ComponentType = {
	children: React.ReactNode
}

const RootLayout: React.FC<ComponentType> = ({ children }) => {
	return (
		<html lang='en'>
			<body className={`${roboto.className} flex flex-col justify-center items-center`}>
				<div className='flex flex-col items-center w-full max-w-[1300px] overflow-hidden'>
					<Header />
					<main className='w-full flex flex-col justify-center items-center'>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}

export default RootLayout
