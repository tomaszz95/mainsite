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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={roboto.className}>
				<div className='flex flex-col items-center'>
					<Header />
					<div className='bg-darkGrey w-screen'>{children}</div>
					<Footer />
				</div>
			</body>
		</html>
	)
}
