import Header from '../components/layout/Header'
import { Roboto } from 'next/font/google'

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
				<Header />
				{children}
			</body>
		</html>
	)
}
