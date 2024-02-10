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
			<body className={`${roboto.className} flex flex-col justify-center items-center overflow-x-hidden`}>
				<Header />
				<main className='w-screen flex flex-col justify-center items-center'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
